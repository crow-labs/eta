package escrow

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/eta/x/escrow/keeper"
	"github.com/crow-labs/eta/x/escrow/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the crow
	for _, elem := range genState.CrowList {
		k.SetCrow(ctx, elem)
	}
	// Set all the dispute
	for _, elem := range genState.DisputeList {
		k.SetDispute(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.CrowList = k.GetAllCrow(ctx)
	genesis.DisputeList = k.GetAllDispute(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
