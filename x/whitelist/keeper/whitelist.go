package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/eta/x/whitelist/types"
)

// SetWhitelist set a specific whitelist in the store from its index
func (k Keeper) SetWhitelist(ctx sdk.Context, whitelist types.Whitelist) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistKeyPrefix))
	b := k.cdc.MustMarshal(&whitelist)
	store.Set(types.WhitelistKey(
		whitelist.WhitelistId,
	), b)
}

// GetWhitelist returns a whitelist from its index
func (k Keeper) GetWhitelist(
	ctx sdk.Context,
	whitelistId uint64,

) (val types.Whitelist, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistKeyPrefix))

	b := store.Get(types.WhitelistKey(
		whitelistId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveWhitelist removes a whitelist from the store
func (k Keeper) RemoveWhitelist(
	ctx sdk.Context,
	whitelistId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistKeyPrefix))
	store.Delete(types.WhitelistKey(
		whitelistId,
	))
}

// GetAllWhitelist returns all whitelist
func (k Keeper) GetAllWhitelist(ctx sdk.Context) (list []types.Whitelist) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Whitelist
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
