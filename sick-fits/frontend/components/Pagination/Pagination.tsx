import React, { Component } from 'react';
import PaginationStyles from '../styles/PaginationStyles';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { PaginationAmount } from './__generated__/PaginationAmount';
import { perPage } from '../../config';
import Head from 'next/head';
import Link from 'next/link';

const PAGINATION_QUERY = gql`
  query PaginationAmount {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

class PaginationQuery extends Query<PaginationAmount> {}

interface Props {
  page: number;
}

export default class Pagination extends Component<Props> {
  render() {
    return (
      <PaginationQuery query={PAGINATION_QUERY}>
        {({ data, loading }) => {
          if (loading) return null;

          const total = (data && data.itemsConnection.aggregate.count) || 1;
          const pages = Math.ceil(total / perPage);
          const { page } = this.props;

          return (
            <PaginationStyles>
              <Head>
                <title>
                  Sick Fits! - Page {page} of {pages}
                </title>
              </Head>
              <Link
                prefetch
                href={{
                  pathname: 'items',
                  query: { page: page - 1 }
                }}
              >
                <a className="prev" aria-disabled={page <= 1}>
                  Prev
                </a>
              </Link>
              <p>
                Page {page} of {pages}
              </p>
              <p>{total} Items Total</p>
              <Link
                prefetch
                href={{
                  pathname: 'items',
                  query: { page: page + 1 }
                }}
              >
                <a className="prev" aria-disabled={page >= pages}>
                  Next
                </a>
              </Link>
            </PaginationStyles>
          );
        }}
      </PaginationQuery>
    );
  }
}
