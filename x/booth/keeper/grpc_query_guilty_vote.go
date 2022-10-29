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

func (k Keeper) GuiltyVoteAll(c context.Context, req *types.QueryAllGuiltyVoteRequest) (*types.QueryAllGuiltyVoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var guiltyVotes []types.GuiltyVote
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	guiltyVoteStore := prefix.NewStore(store, types.KeyPrefix(types.GuiltyVoteKeyPrefix))

	pageRes, err := query.Paginate(guiltyVoteStore, req.Pagination, func(key []byte, value []byte) error {
		var guiltyVote types.GuiltyVote
		if err := k.cdc.Unmarshal(value, &guiltyVote); err != nil {
			return err
		}

		guiltyVotes = append(guiltyVotes, guiltyVote)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllGuiltyVoteResponse{GuiltyVote: guiltyVotes, Pagination: pageRes}, nil
}

func (k Keeper) GuiltyVote(c context.Context, req *types.QueryGetGuiltyVoteRequest) (*types.QueryGetGuiltyVoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetGuiltyVote(
		ctx,
		req.VoteId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetGuiltyVoteResponse{GuiltyVote: val}, nil
}
