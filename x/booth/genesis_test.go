package booth_test

import (
	"testing"

	keepertest "github.com/crow-labs/eta/testutil/keeper"
	"github.com/crow-labs/eta/testutil/nullify"
	"github.com/crow-labs/eta/x/booth"
	"github.com/crow-labs/eta/x/booth/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		GuiltyVoteList: []types.GuiltyVote{
			{
				VoteId: 0,
			},
			{
				VoteId: 1,
			},
		},
		PunishmentVoteList: []types.PunishmentVote{
			{
				VoteId: 0,
			},
			{
				VoteId: 1,
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BoothKeeper(t)
	booth.InitGenesis(ctx, *k, genesisState)
	got := booth.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.GuiltyVoteList, got.GuiltyVoteList)
	require.ElementsMatch(t, genesisState.PunishmentVoteList, got.PunishmentVoteList)
	// this line is used by starport scaffolding # genesis/test/assert
}
