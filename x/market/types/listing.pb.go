// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: eta/market/listing.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Listing struct {
	ListingId     uint64     `protobuf:"varint,1,opt,name=listingId,proto3" json:"listingId,omitempty"`
	WhitelistId   uint64     `protobuf:"varint,2,opt,name=whitelistId,proto3" json:"whitelistId,omitempty"`
	SellerId      uint64     `protobuf:"varint,3,opt,name=sellerId,proto3" json:"sellerId,omitempty"`
	ItemId        uint64     `protobuf:"varint,4,opt,name=itemId,proto3" json:"itemId,omitempty"`
	ReqPrice      types.Coin `protobuf:"bytes,5,opt,name=reqPrice,proto3" json:"reqPrice"`
	ReqCollateral types.Coin `protobuf:"bytes,6,opt,name=reqCollateral,proto3" json:"reqCollateral"`
	Offers        []uint64   `protobuf:"varint,7,rep,packed,name=offers,proto3" json:"offers,omitempty"`
	CrowId        uint64     `protobuf:"varint,8,opt,name=crowId,proto3" json:"crowId,omitempty"`
}

func (m *Listing) Reset()         { *m = Listing{} }
func (m *Listing) String() string { return proto.CompactTextString(m) }
func (*Listing) ProtoMessage()    {}
func (*Listing) Descriptor() ([]byte, []int) {
	return fileDescriptor_80ab11dde743c13f, []int{0}
}
func (m *Listing) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Listing) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Listing.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Listing) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Listing.Merge(m, src)
}
func (m *Listing) XXX_Size() int {
	return m.Size()
}
func (m *Listing) XXX_DiscardUnknown() {
	xxx_messageInfo_Listing.DiscardUnknown(m)
}

var xxx_messageInfo_Listing proto.InternalMessageInfo

func (m *Listing) GetListingId() uint64 {
	if m != nil {
		return m.ListingId
	}
	return 0
}

func (m *Listing) GetWhitelistId() uint64 {
	if m != nil {
		return m.WhitelistId
	}
	return 0
}

func (m *Listing) GetSellerId() uint64 {
	if m != nil {
		return m.SellerId
	}
	return 0
}

func (m *Listing) GetItemId() uint64 {
	if m != nil {
		return m.ItemId
	}
	return 0
}

func (m *Listing) GetReqPrice() types.Coin {
	if m != nil {
		return m.ReqPrice
	}
	return types.Coin{}
}

func (m *Listing) GetReqCollateral() types.Coin {
	if m != nil {
		return m.ReqCollateral
	}
	return types.Coin{}
}

func (m *Listing) GetOffers() []uint64 {
	if m != nil {
		return m.Offers
	}
	return nil
}

func (m *Listing) GetCrowId() uint64 {
	if m != nil {
		return m.CrowId
	}
	return 0
}

func init() {
	proto.RegisterType((*Listing)(nil), "crowlabs.eta.market.Listing")
}

func init() { proto.RegisterFile("eta/market/listing.proto", fileDescriptor_80ab11dde743c13f) }

var fileDescriptor_80ab11dde743c13f = []byte{
	// 333 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x91, 0xc1, 0x4e, 0x2a, 0x31,
	0x14, 0x86, 0x67, 0x80, 0x0b, 0xdc, 0x92, 0xbb, 0x99, 0x6b, 0x4c, 0x25, 0xa6, 0x4e, 0xdc, 0xc8,
	0xc6, 0x36, 0xe8, 0xd2, 0x95, 0x10, 0x17, 0x93, 0xb8, 0x30, 0x2c, 0xdd, 0x75, 0x66, 0x0e, 0x43,
	0x63, 0x87, 0x42, 0x5b, 0x45, 0xdf, 0xc2, 0x57, 0xf1, 0x2d, 0x58, 0xb2, 0x74, 0x65, 0x0c, 0xbc,
	0x88, 0xe9, 0x14, 0x51, 0x77, 0xee, 0xfa, 0xff, 0xff, 0x39, 0xa7, 0x5f, 0xce, 0x41, 0x18, 0x2c,
	0x67, 0x25, 0xd7, 0x77, 0x60, 0x99, 0x14, 0xc6, 0x8a, 0x69, 0x41, 0x67, 0x5a, 0x59, 0x15, 0xfd,
	0xcf, 0xb4, 0x5a, 0x48, 0x9e, 0x1a, 0x0a, 0x96, 0x53, 0x5f, 0xd2, 0xdd, 0x2b, 0x54, 0xa1, 0xaa,
	0x9c, 0xb9, 0x97, 0x2f, 0xed, 0x92, 0x4c, 0x99, 0x52, 0x19, 0x96, 0x72, 0x03, 0xec, 0xa1, 0x9f,
	0x82, 0xe5, 0x7d, 0x96, 0x29, 0x31, 0xf5, 0xf9, 0xf1, 0x4b, 0x0d, 0xb5, 0xae, 0xfd, 0xf0, 0xe8,
	0x10, 0xfd, 0xdd, 0xfe, 0x93, 0xe4, 0x38, 0x8c, 0xc3, 0x5e, 0x63, 0xf4, 0x65, 0x44, 0x31, 0xea,
	0x2c, 0x26, 0xc2, 0x82, 0x73, 0x92, 0x1c, 0xd7, 0xaa, 0xfc, 0xbb, 0x15, 0x75, 0x51, 0xdb, 0x80,
	0x94, 0xa0, 0x93, 0x1c, 0xd7, 0xab, 0x78, 0xa7, 0xa3, 0x7d, 0xd4, 0x14, 0x16, 0xca, 0x24, 0xc7,
	0x8d, 0x2a, 0xd9, 0xaa, 0xe8, 0x02, 0xb5, 0x35, 0xcc, 0x6f, 0xb4, 0xc8, 0x00, 0xff, 0x89, 0xc3,
	0x5e, 0xe7, 0xec, 0x80, 0x7a, 0x64, 0xea, 0x90, 0xe9, 0x16, 0x99, 0x0e, 0x95, 0x98, 0x0e, 0x1a,
	0xcb, 0xb7, 0xa3, 0x60, 0xb4, 0x6b, 0x88, 0xae, 0xd0, 0x3f, 0x0d, 0xf3, 0xa1, 0x92, 0x92, 0x5b,
	0xd0, 0x5c, 0xe2, 0xe6, 0xef, 0x26, 0xfc, 0xec, 0x72, 0x6c, 0x6a, 0x3c, 0x06, 0x6d, 0x70, 0x2b,
	0xae, 0x3b, 0x36, 0xaf, 0x9c, 0xef, 0x16, 0x9d, 0xe4, 0xb8, 0xed, 0x99, 0xbd, 0x1a, 0x5c, 0x2e,
	0xd7, 0x24, 0x5c, 0xad, 0x49, 0xf8, 0xbe, 0x26, 0xe1, 0xf3, 0x86, 0x04, 0xab, 0x0d, 0x09, 0x5e,
	0x37, 0x24, 0xb8, 0x3d, 0x29, 0x84, 0x9d, 0xdc, 0xa7, 0x34, 0x53, 0x25, 0x73, 0xc5, 0xa7, 0xee,
	0x48, 0xcc, 0xdd, 0xf1, 0xf1, 0xf3, 0x92, 0xf6, 0x69, 0x06, 0x26, 0x6d, 0x56, 0xdb, 0x3f, 0xff,
	0x08, 0x00, 0x00, 0xff, 0xff, 0xef, 0x6b, 0x8d, 0x9c, 0xe4, 0x01, 0x00, 0x00,
}

func (m *Listing) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Listing) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Listing) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CrowId != 0 {
		i = encodeVarintListing(dAtA, i, uint64(m.CrowId))
		i--
		dAtA[i] = 0x40
	}
	if len(m.Offers) > 0 {
		dAtA2 := make([]byte, len(m.Offers)*10)
		var j1 int
		for _, num := range m.Offers {
			for num >= 1<<7 {
				dAtA2[j1] = uint8(uint64(num)&0x7f | 0x80)
				num >>= 7
				j1++
			}
			dAtA2[j1] = uint8(num)
			j1++
		}
		i -= j1
		copy(dAtA[i:], dAtA2[:j1])
		i = encodeVarintListing(dAtA, i, uint64(j1))
		i--
		dAtA[i] = 0x3a
	}
	{
		size, err := m.ReqCollateral.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintListing(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x32
	{
		size, err := m.ReqPrice.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintListing(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x2a
	if m.ItemId != 0 {
		i = encodeVarintListing(dAtA, i, uint64(m.ItemId))
		i--
		dAtA[i] = 0x20
	}
	if m.SellerId != 0 {
		i = encodeVarintListing(dAtA, i, uint64(m.SellerId))
		i--
		dAtA[i] = 0x18
	}
	if m.WhitelistId != 0 {
		i = encodeVarintListing(dAtA, i, uint64(m.WhitelistId))
		i--
		dAtA[i] = 0x10
	}
	if m.ListingId != 0 {
		i = encodeVarintListing(dAtA, i, uint64(m.ListingId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintListing(dAtA []byte, offset int, v uint64) int {
	offset -= sovListing(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Listing) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ListingId != 0 {
		n += 1 + sovListing(uint64(m.ListingId))
	}
	if m.WhitelistId != 0 {
		n += 1 + sovListing(uint64(m.WhitelistId))
	}
	if m.SellerId != 0 {
		n += 1 + sovListing(uint64(m.SellerId))
	}
	if m.ItemId != 0 {
		n += 1 + sovListing(uint64(m.ItemId))
	}
	l = m.ReqPrice.Size()
	n += 1 + l + sovListing(uint64(l))
	l = m.ReqCollateral.Size()
	n += 1 + l + sovListing(uint64(l))
	if len(m.Offers) > 0 {
		l = 0
		for _, e := range m.Offers {
			l += sovListing(uint64(e))
		}
		n += 1 + sovListing(uint64(l)) + l
	}
	if m.CrowId != 0 {
		n += 1 + sovListing(uint64(m.CrowId))
	}
	return n
}

func sovListing(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozListing(x uint64) (n int) {
	return sovListing(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Listing) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowListing
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Listing: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Listing: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ListingId", wireType)
			}
			m.ListingId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ListingId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field WhitelistId", wireType)
			}
			m.WhitelistId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.WhitelistId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field SellerId", wireType)
			}
			m.SellerId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.SellerId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ItemId", wireType)
			}
			m.ItemId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ItemId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReqPrice", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.ReqPrice.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReqCollateral", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.ReqCollateral.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType == 0 {
				var v uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowListing
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					v |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				m.Offers = append(m.Offers, v)
			} else if wireType == 2 {
				var packedLen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowListing
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					packedLen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if packedLen < 0 {
					return ErrInvalidLengthListing
				}
				postIndex := iNdEx + packedLen
				if postIndex < 0 {
					return ErrInvalidLengthListing
				}
				if postIndex > l {
					return io.ErrUnexpectedEOF
				}
				var elementCount int
				var count int
				for _, integer := range dAtA[iNdEx:postIndex] {
					if integer < 128 {
						count++
					}
				}
				elementCount = count
				if elementCount != 0 && len(m.Offers) == 0 {
					m.Offers = make([]uint64, 0, elementCount)
				}
				for iNdEx < postIndex {
					var v uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowListing
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						v |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					m.Offers = append(m.Offers, v)
				}
			} else {
				return fmt.Errorf("proto: wrong wireType = %d for field Offers", wireType)
			}
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CrowId", wireType)
			}
			m.CrowId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CrowId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipListing(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthListing
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipListing(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowListing
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowListing
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowListing
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthListing
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupListing
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthListing
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthListing        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowListing          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupListing = fmt.Errorf("proto: unexpected end of group")
)
