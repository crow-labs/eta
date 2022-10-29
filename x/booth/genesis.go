package booth

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/eta/x/booth/keeper"
	"github.com/crow-labs/eta/x/booth/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the guiltyVote
	for _, elem := range genState.GuiltyVoteList {
		k.SetGuiltyVote(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.GuiltyVoteList = k.GetAllGuiltyVote(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
