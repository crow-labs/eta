package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		GuiltyVoteList:     []GuiltyVote{},
		PunishmentVoteList: []PunishmentVote{},
		PollList:           []Poll{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in guiltyVote
	guiltyVoteIndexMap := make(map[string]struct{})

	for _, elem := range gs.GuiltyVoteList {
		index := string(GuiltyVoteKey(elem.VoteId))
		if _, ok := guiltyVoteIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for guiltyVote")
		}
		guiltyVoteIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in punishmentVote
	punishmentVoteIndexMap := make(map[string]struct{})

	for _, elem := range gs.PunishmentVoteList {
		index := string(PunishmentVoteKey(elem.VoteId))
		if _, ok := punishmentVoteIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for punishmentVote")
		}
		punishmentVoteIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in poll
	pollIndexMap := make(map[string]struct{})

	for _, elem := range gs.PollList {
		index := string(PollKey(elem.PollId))
		if _, ok := pollIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for poll")
		}
		pollIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
