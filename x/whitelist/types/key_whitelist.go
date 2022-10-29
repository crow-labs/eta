package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// WhitelistKeyPrefix is the prefix to retrieve all Whitelist
	WhitelistKeyPrefix = "Whitelist/value/"
)

// WhitelistKey returns the store key to retrieve a Whitelist from the index fields
func WhitelistKey(
	whitelistId uint64,
) []byte {
	var key []byte

	whitelistIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(whitelistIdBytes, whitelistId)
	key = append(key, whitelistIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
