package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		ItemList:    []Item{},
		ListingList: []Listing{},
		OrderList:   []Order{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in item
	itemIndexMap := make(map[string]struct{})

	for _, elem := range gs.ItemList {
		index := string(ItemKey(elem.ItemId))
		if _, ok := itemIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for item")
		}
		itemIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in listing
	listingIndexMap := make(map[string]struct{})

	for _, elem := range gs.ListingList {
		index := string(ListingKey(elem.ListingId))
		if _, ok := listingIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for listing")
		}
		listingIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in order
	orderIndexMap := make(map[string]struct{})

	for _, elem := range gs.OrderList {
		index := string(OrderKey(elem.OrderId))
		if _, ok := orderIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for order")
		}
		orderIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
