package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/eta/x/booth/types"
)

// SetGuiltyVote set a specific guiltyVote in the store from its index
func (k Keeper) SetGuiltyVote(ctx sdk.Context, guiltyVote types.GuiltyVote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuiltyVoteKeyPrefix))
	b := k.cdc.MustMarshal(&guiltyVote)
	store.Set(types.GuiltyVoteKey(
		guiltyVote.VoteId,
	), b)
}

// GetGuiltyVote returns a guiltyVote from its index
func (k Keeper) GetGuiltyVote(
	ctx sdk.Context,
	voteId uint64,

) (val types.GuiltyVote, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuiltyVoteKeyPrefix))

	b := store.Get(types.GuiltyVoteKey(
		voteId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveGuiltyVote removes a guiltyVote from the store
func (k Keeper) RemoveGuiltyVote(
	ctx sdk.Context,
	voteId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuiltyVoteKeyPrefix))
	store.Delete(types.GuiltyVoteKey(
		voteId,
	))
}

// GetAllGuiltyVote returns all guiltyVote
func (k Keeper) GetAllGuiltyVote(ctx sdk.Context) (list []types.GuiltyVote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuiltyVoteKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.GuiltyVote
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
