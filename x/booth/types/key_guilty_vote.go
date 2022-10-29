package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// GuiltyVoteKeyPrefix is the prefix to retrieve all GuiltyVote
	GuiltyVoteKeyPrefix = "GuiltyVote/value/"
)

// GuiltyVoteKey returns the store key to retrieve a GuiltyVote from the index fields
func GuiltyVoteKey(
	voteId uint64,
) []byte {
	var key []byte

	voteIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(voteIdBytes, voteId)
	key = append(key, voteIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
