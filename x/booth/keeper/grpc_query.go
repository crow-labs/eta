package keeper

import (
	"github.com/crow-labs/eta/x/booth/types"
)

var _ types.QueryServer = Keeper{}
