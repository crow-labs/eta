package market

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/eta/x/market/keeper"
	"github.com/crow-labs/eta/x/market/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the item
	for _, elem := range genState.ItemList {
		k.SetItem(ctx, elem)
	}
	// Set all the listing
	for _, elem := range genState.ListingList {
		k.SetListing(ctx, elem)
	}
	// Set all the order
	for _, elem := range genState.OrderList {
		k.SetOrder(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ItemList = k.GetAllItem(ctx)
	genesis.ListingList = k.GetAllListing(ctx)
	genesis.OrderList = k.GetAllOrder(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
