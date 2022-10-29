package market_test

import (
	"testing"

	keepertest "github.com/crow-labs/eta/testutil/keeper"
	"github.com/crow-labs/eta/testutil/nullify"
	"github.com/crow-labs/eta/x/market"
	"github.com/crow-labs/eta/x/market/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MarketKeeper(t)
	market.InitGenesis(ctx, *k, genesisState)
	got := market.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
