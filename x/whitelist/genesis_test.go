package whitelist_test

import (
	"testing"

	keepertest "github.com/crow-labs/eta/testutil/keeper"
	"github.com/crow-labs/eta/testutil/nullify"
	"github.com/crow-labs/eta/x/whitelist"
	"github.com/crow-labs/eta/x/whitelist/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		MemberList: []types.Member{
			{
				Addresss: "0",
			},
			{
				Addresss: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WhitelistKeeper(t)
	whitelist.InitGenesis(ctx, *k, genesisState)
	got := whitelist.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.MemberList, got.MemberList)
	// this line is used by starport scaffolding # genesis/test/assert
}
