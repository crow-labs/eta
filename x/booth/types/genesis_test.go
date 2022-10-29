package types_test

import (
	"testing"

	"github.com/crow-labs/eta/x/booth/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

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
				PollList: []types.Poll{
					{
						PollId: 0,
					},
					{
						PollId: 1,
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated guiltyVote",
			genState: &types.GenesisState{
				GuiltyVoteList: []types.GuiltyVote{
					{
						VoteId: 0,
					},
					{
						VoteId: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated punishmentVote",
			genState: &types.GenesisState{
				PunishmentVoteList: []types.PunishmentVote{
					{
						VoteId: 0,
					},
					{
						VoteId: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated poll",
			genState: &types.GenesisState{
				PollList: []types.Poll{
					{
						PollId: 0,
					},
					{
						PollId: 0,
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
