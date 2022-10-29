package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/eta/x/whitelist/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListWhitelist() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-whitelist",
		Short: "list all whitelist",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllWhitelistRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.WhitelistAll(context.Background(), params)
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

func CmdShowWhitelist() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-whitelist [whitelist-id]",
		Short: "shows a whitelist",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argWhitelistId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			params := &types.QueryGetWhitelistRequest{
				WhitelistId: argWhitelistId,
			}

			res, err := queryClient.Whitelist(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
