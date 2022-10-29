package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/eta/x/booth/types"
)

// SetPunishmentVote set a specific punishmentVote in the store from its index
func (k Keeper) SetPunishmentVote(ctx sdk.Context, punishmentVote types.PunishmentVote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PunishmentVoteKeyPrefix))
	b := k.cdc.MustMarshal(&punishmentVote)
	store.Set(types.PunishmentVoteKey(
		punishmentVote.VoteId,
	), b)
}

// GetPunishmentVote returns a punishmentVote from its index
func (k Keeper) GetPunishmentVote(
	ctx sdk.Context,
	voteId uint64,

) (val types.PunishmentVote, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PunishmentVoteKeyPrefix))

	b := store.Get(types.PunishmentVoteKey(
		voteId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePunishmentVote removes a punishmentVote from the store
func (k Keeper) RemovePunishmentVote(
	ctx sdk.Context,
	voteId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PunishmentVoteKeyPrefix))
	store.Delete(types.PunishmentVoteKey(
		voteId,
	))
}

// GetAllPunishmentVote returns all punishmentVote
func (k Keeper) GetAllPunishmentVote(ctx sdk.Context) (list []types.PunishmentVote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PunishmentVoteKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.PunishmentVote
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
