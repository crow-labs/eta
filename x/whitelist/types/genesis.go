package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		MemberList:    []Member{},
		WhitelistList: []Whitelist{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in member
	memberIndexMap := make(map[string]struct{})

	for _, elem := range gs.MemberList {
		index := string(MemberKey(elem.Addresss))
		if _, ok := memberIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for member")
		}
		memberIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in whitelist
	whitelistIndexMap := make(map[string]struct{})

	for _, elem := range gs.WhitelistList {
		index := string(WhitelistKey(elem.WhitelistId))
		if _, ok := whitelistIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for whitelist")
		}
		whitelistIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
