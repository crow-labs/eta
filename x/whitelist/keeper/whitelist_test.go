package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/eta/testutil/keeper"
	"github.com/crow-labs/eta/testutil/nullify"
	"github.com/crow-labs/eta/x/whitelist/keeper"
	"github.com/crow-labs/eta/x/whitelist/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNWhitelist(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Whitelist {
	items := make([]types.Whitelist, n)
	for i := range items {
		items[i].WhitelistId = uint64(i)

		keeper.SetWhitelist(ctx, items[i])
	}
	return items
}

func TestWhitelistGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNWhitelist(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetWhitelist(ctx,
			item.WhitelistId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestWhitelistRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNWhitelist(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveWhitelist(ctx,
			item.WhitelistId,
		)
		_, found := keeper.GetWhitelist(ctx,
			item.WhitelistId,
		)
		require.False(t, found)
	}
}

func TestWhitelistGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNWhitelist(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllWhitelist(ctx)),
	)
}
