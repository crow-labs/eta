package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// OrderKeyPrefix is the prefix to retrieve all Order
	OrderKeyPrefix = "Order/value/"
)

// OrderKey returns the store key to retrieve a Order from the index fields
func OrderKey(
	orderId uint64,
) []byte {
	var key []byte

	orderIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(orderIdBytes, orderId)
	key = append(key, orderIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
