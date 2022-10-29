package keeper

import (
	"github.com/crow-labs/eta/x/escrow/types"
)

var _ types.QueryServer = Keeper{}
