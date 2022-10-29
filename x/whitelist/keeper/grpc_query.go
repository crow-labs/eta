package keeper

import (
	"github.com/crow-labs/eta/x/whitelist/types"
)

var _ types.QueryServer = Keeper{}
