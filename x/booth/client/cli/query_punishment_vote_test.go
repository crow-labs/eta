package cli_test

import (
	"fmt"
	"strconv"
	"testing"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/require"
	tmcli "github.com/tendermint/tendermint/libs/cli"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/crow-labs/eta/testutil/network"
	"github.com/crow-labs/eta/testutil/nullify"
	"github.com/crow-labs/eta/x/booth/client/cli"
	"github.com/crow-labs/eta/x/booth/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func networkWithPunishmentVoteObjects(t *testing.T, n int) (*network.Network, []types.PunishmentVote) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	require.NoError(t, cfg.Codec.UnmarshalJSON(cfg.GenesisState[types.ModuleName], &state))

	for i := 0; i < n; i++ {
		punishmentVote := types.PunishmentVote{
			VoteId: uint64(i),
		}
		nullify.Fill(&punishmentVote)
		state.PunishmentVoteList = append(state.PunishmentVoteList, punishmentVote)
	}
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), state.PunishmentVoteList
}

func TestShowPunishmentVote(t *testing.T) {
	net, objs := networkWithPunishmentVoteObjects(t, 2)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	for _, tc := range []struct {
		desc     string
		idVoteId uint64

		args []string
		err  error
		obj  types.PunishmentVote
	}{
		{
			desc:     "found",
			idVoteId: objs[0].VoteId,

			args: common,
			obj:  objs[0],
		},
		{
			desc:     "not found",
			idVoteId: 100000,

			args: common,
			err:  status.Error(codes.NotFound, "not found"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				strconv.Itoa(int(tc.idVoteId)),
			}
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowPunishmentVote(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetPunishmentVoteResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.PunishmentVote)
				require.Equal(t,
					nullify.Fill(&tc.obj),
					nullify.Fill(&resp.PunishmentVote),
				)
			}
		})
	}
}

func TestListPunishmentVote(t *testing.T) {
	net, objs := networkWithPunishmentVoteObjects(t, 5)

	ctx := net.Validators[0].ClientCtx
	request := func(next []byte, offset, limit uint64, total bool) []string {
		args := []string{
			fmt.Sprintf("--%s=json", tmcli.OutputFlag),
		}
		if next == nil {
			args = append(args, fmt.Sprintf("--%s=%d", flags.FlagOffset, offset))
		} else {
			args = append(args, fmt.Sprintf("--%s=%s", flags.FlagPageKey, next))
		}
		args = append(args, fmt.Sprintf("--%s=%d", flags.FlagLimit, limit))
		if total {
			args = append(args, fmt.Sprintf("--%s", flags.FlagCountTotal))
		}
		return args
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(objs); i += step {
			args := request(nil, uint64(i), uint64(step), false)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListPunishmentVote(), args)
			require.NoError(t, err)
			var resp types.QueryAllPunishmentVoteResponse
			require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
			require.LessOrEqual(t, len(resp.PunishmentVote), step)
			require.Subset(t,
				nullify.Fill(objs),
				nullify.Fill(resp.PunishmentVote),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(objs); i += step {
			args := request(next, 0, uint64(step), false)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListPunishmentVote(), args)
			require.NoError(t, err)
			var resp types.QueryAllPunishmentVoteResponse
			require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
			require.LessOrEqual(t, len(resp.PunishmentVote), step)
			require.Subset(t,
				nullify.Fill(objs),
				nullify.Fill(resp.PunishmentVote),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		args := request(nil, 0, uint64(len(objs)), true)
		out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListPunishmentVote(), args)
		require.NoError(t, err)
		var resp types.QueryAllPunishmentVoteResponse
		require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
		require.NoError(t, err)
		require.Equal(t, len(objs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(objs),
			nullify.Fill(resp.PunishmentVote),
		)
	})
}
