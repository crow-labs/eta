package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/eta/x/booth/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListPunishmentVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-punishment-vote",
		Short: "list all punishmentVote",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPunishmentVoteRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.PunishmentVoteAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowPunishmentVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-punishment-vote [vote-id]",
		Short: "shows a punishmentVote",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argVoteId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			params := &types.QueryGetPunishmentVoteRequest{
				VoteId: argVoteId,
			}

			res, err := queryClient.PunishmentVote(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
