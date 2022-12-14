// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: eta/escrow/buyer_evidence.proto

package types

import (
	fmt "fmt"
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

type BuyerEvidence struct {
	Title         string   `protobuf:"bytes,1,opt,name=title,proto3" json:"title,omitempty"`
	Description   string   `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	ExternalLinks []string `protobuf:"bytes,3,rep,name=externalLinks,proto3" json:"externalLinks,omitempty"`
}

func (m *BuyerEvidence) Reset()         { *m = BuyerEvidence{} }
func (m *BuyerEvidence) String() string { return proto.CompactTextString(m) }
func (*BuyerEvidence) ProtoMessage()    {}
func (*BuyerEvidence) Descriptor() ([]byte, []int) {
	return fileDescriptor_8daf0d117bd92621, []int{0}
}
func (m *BuyerEvidence) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *BuyerEvidence) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_BuyerEvidence.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *BuyerEvidence) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BuyerEvidence.Merge(m, src)
}
func (m *BuyerEvidence) XXX_Size() int {
	return m.Size()
}
func (m *BuyerEvidence) XXX_DiscardUnknown() {
	xxx_messageInfo_BuyerEvidence.DiscardUnknown(m)
}

var xxx_messageInfo_BuyerEvidence proto.InternalMessageInfo

func (m *BuyerEvidence) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *BuyerEvidence) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *BuyerEvidence) GetExternalLinks() []string {
	if m != nil {
		return m.ExternalLinks
	}
	return nil
}

func init() {
	proto.RegisterType((*BuyerEvidence)(nil), "crowlabs.eta.escrow.BuyerEvidence")
}

func init() { proto.RegisterFile("eta/escrow/buyer_evidence.proto", fileDescriptor_8daf0d117bd92621) }

var fileDescriptor_8daf0d117bd92621 = []byte{
	// 207 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4f, 0x2d, 0x49, 0xd4,
	0x4f, 0x2d, 0x4e, 0x2e, 0xca, 0x2f, 0xd7, 0x4f, 0x2a, 0xad, 0x4c, 0x2d, 0x8a, 0x4f, 0x2d, 0xcb,
	0x4c, 0x49, 0xcd, 0x4b, 0x4e, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x06, 0x49, 0xe5,
	0x24, 0x26, 0x15, 0xeb, 0xa5, 0x96, 0x24, 0xea, 0x41, 0x54, 0x2a, 0xe5, 0x72, 0xf1, 0x3a, 0x81,
	0x14, 0xbb, 0x42, 0xd5, 0x0a, 0x89, 0x70, 0xb1, 0x96, 0x64, 0x96, 0xe4, 0xa4, 0x4a, 0x30, 0x2a,
	0x30, 0x6a, 0x70, 0x06, 0x41, 0x38, 0x42, 0x0a, 0x5c, 0xdc, 0x29, 0x20, 0x1d, 0x99, 0x05, 0x25,
	0x99, 0xf9, 0x79, 0x12, 0x4c, 0x60, 0x39, 0x64, 0x21, 0x21, 0x15, 0x2e, 0xde, 0xd4, 0x8a, 0x92,
	0xd4, 0xa2, 0xbc, 0xc4, 0x1c, 0x9f, 0xcc, 0xbc, 0xec, 0x62, 0x09, 0x66, 0x05, 0x66, 0x0d, 0xce,
	0x20, 0x54, 0x41, 0x27, 0xc7, 0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0, 0x48,
	0x8e, 0x71, 0xc2, 0x63, 0x39, 0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88, 0x52,
	0x4f, 0xcf, 0x2c, 0xc9, 0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5, 0x07, 0xb9, 0x4c, 0x17, 0xe4,
	0x52, 0x7d, 0x90, 0x9f, 0x2a, 0x60, 0xbe, 0x2a, 0xa9, 0x2c, 0x48, 0x2d, 0x4e, 0x62, 0x03, 0xfb,
	0xc6, 0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0x7a, 0xd5, 0x4e, 0xd8, 0xf0, 0x00, 0x00, 0x00,
}

func (m *BuyerEvidence) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *BuyerEvidence) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *BuyerEvidence) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ExternalLinks) > 0 {
		for iNdEx := len(m.ExternalLinks) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.ExternalLinks[iNdEx])
			copy(dAtA[i:], m.ExternalLinks[iNdEx])
			i = encodeVarintBuyerEvidence(dAtA, i, uint64(len(m.ExternalLinks[iNdEx])))
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.Description) > 0 {
		i -= len(m.Description)
		copy(dAtA[i:], m.Description)
		i = encodeVarintBuyerEvidence(dAtA, i, uint64(len(m.Description)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Title) > 0 {
		i -= len(m.Title)
		copy(dAtA[i:], m.Title)
		i = encodeVarintBuyerEvidence(dAtA, i, uint64(len(m.Title)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintBuyerEvidence(dAtA []byte, offset int, v uint64) int {
	offset -= sovBuyerEvidence(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *BuyerEvidence) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Title)
	if l > 0 {
		n += 1 + l + sovBuyerEvidence(uint64(l))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovBuyerEvidence(uint64(l))
	}
	if len(m.ExternalLinks) > 0 {
		for _, s := range m.ExternalLinks {
			l = len(s)
			n += 1 + l + sovBuyerEvidence(uint64(l))
		}
	}
	return n
}

func sovBuyerEvidence(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozBuyerEvidence(x uint64) (n int) {
	return sovBuyerEvidence(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *BuyerEvidence) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBuyerEvidence
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
			return fmt.Errorf("proto: BuyerEvidence: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: BuyerEvidence: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Title", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBuyerEvidence
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBuyerEvidence
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBuyerEvidence
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Title = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBuyerEvidence
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBuyerEvidence
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBuyerEvidence
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ExternalLinks", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBuyerEvidence
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBuyerEvidence
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBuyerEvidence
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ExternalLinks = append(m.ExternalLinks, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipBuyerEvidence(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthBuyerEvidence
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
func skipBuyerEvidence(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowBuyerEvidence
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
					return 0, ErrIntOverflowBuyerEvidence
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
					return 0, ErrIntOverflowBuyerEvidence
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
				return 0, ErrInvalidLengthBuyerEvidence
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupBuyerEvidence
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthBuyerEvidence
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthBuyerEvidence        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowBuyerEvidence          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupBuyerEvidence = fmt.Errorf("proto: unexpected end of group")
)
