package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/eta/testutil/keeper"
	"github.com/crow-labs/eta/testutil/nullify"
	"github.com/crow-labs/eta/x/booth/keeper"
	"github.com/crow-labs/eta/x/booth/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNGuiltyVote(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.GuiltyVote {
	items := make([]types.GuiltyVote, n)
	for i := range items {
		items[i].VoteId = uint64(i)

		keeper.SetGuiltyVote(ctx, items[i])
	}
	return items
}

func TestGuiltyVoteGet(t *testing.T) {
	keeper, ctx := keepertest.BoothKeeper(t)
	items := createNGuiltyVote(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetGuiltyVote(ctx,
			item.VoteId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestGuiltyVoteRemove(t *testing.T) {
	keeper, ctx := keepertest.BoothKeeper(t)
	items := createNGuiltyVote(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveGuiltyVote(ctx,
			item.VoteId,
		)
		_, found := keeper.GetGuiltyVote(ctx,
			item.VoteId,
		)
		require.False(t, found)
	}
}

func TestGuiltyVoteGetAll(t *testing.T) {
	keeper, ctx := keepertest.BoothKeeper(t)
	items := createNGuiltyVote(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllGuiltyVote(ctx)),
	)
}
