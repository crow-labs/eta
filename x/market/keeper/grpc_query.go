package keeper

import (
	"github.com/crow-labs/eta/x/market/types"
)

var _ types.QueryServer = Keeper{}
