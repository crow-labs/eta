package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PunishmentVoteKeyPrefix is the prefix to retrieve all PunishmentVote
	PunishmentVoteKeyPrefix = "PunishmentVote/value/"
)

// PunishmentVoteKey returns the store key to retrieve a PunishmentVote from the index fields
func PunishmentVoteKey(
	voteId uint64,
) []byte {
	var key []byte

	voteIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(voteIdBytes, voteId)
	key = append(key, voteIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
