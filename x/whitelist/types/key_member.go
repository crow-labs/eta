package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MemberKeyPrefix is the prefix to retrieve all Member
	MemberKeyPrefix = "Member/value/"
)

// MemberKey returns the store key to retrieve a Member from the index fields
func MemberKey(
	addresss string,
) []byte {
	var key []byte

	addresssBytes := []byte(addresss)
	key = append(key, addresssBytes...)
	key = append(key, []byte("/")...)

	return key
}
