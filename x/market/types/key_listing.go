package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ListingKeyPrefix is the prefix to retrieve all Listing
	ListingKeyPrefix = "Listing/value/"
)

// ListingKey returns the store key to retrieve a Listing from the index fields
func ListingKey(
	listingId uint64,
) []byte {
	var key []byte

	listingIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(listingIdBytes, listingId)
	key = append(key, listingIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
