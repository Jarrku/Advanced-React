/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PaginationAmount
// ====================================================

export interface PaginationAmount_itemsConnection_aggregate {
  __typename: "AggregateItem";
  count: number;
}

export interface PaginationAmount_itemsConnection {
  __typename: "ItemConnection";
  aggregate: PaginationAmount_itemsConnection_aggregate;
}

export interface PaginationAmount {
  itemsConnection: PaginationAmount_itemsConnection;
}
