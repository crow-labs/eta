package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/crow-labs/eta/x/booth/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PunishmentVoteAll(c context.Context, req *types.QueryAllPunishmentVoteRequest) (*types.QueryAllPunishmentVoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var punishmentVotes []types.PunishmentVote
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	punishmentVoteStore := prefix.NewStore(store, types.KeyPrefix(types.PunishmentVoteKeyPrefix))

	pageRes, err := query.Paginate(punishmentVoteStore, req.Pagination, func(key []byte, value []byte) error {
		var punishmentVote types.PunishmentVote
		if err := k.cdc.Unmarshal(value, &punishmentVote); err != nil {
			return err
		}

		punishmentVotes = append(punishmentVotes, punishmentVote)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPunishmentVoteResponse{PunishmentVote: punishmentVotes, Pagination: pageRes}, nil
}

func (k Keeper) PunishmentVote(c context.Context, req *types.QueryGetPunishmentVoteRequest) (*types.QueryGetPunishmentVoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetPunishmentVote(
		ctx,
		req.VoteId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetPunishmentVoteResponse{PunishmentVote: val}, nil
}
