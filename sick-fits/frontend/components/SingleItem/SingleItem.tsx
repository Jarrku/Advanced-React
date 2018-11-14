import React, { Component } from 'react';
import {
  SingleItemDetailQuery,
  SINGLE_ITEM_DETAIL_QUERY
} from './SingleItemDetail.query';

import Error from '../ErrorMessage';
import styled from '../styled-components';
import Head from 'next/head';

interface Props {
  id: string;
}

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

export default class SingleItem extends Component<Props> {
  render() {
    return (
      <SingleItemDetailQuery
        query={SINGLE_ITEM_DETAIL_QUERY}
        variables={{ id: this.props.id }}
      >
        {({ data, loading, error }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;

          if (!data || !data.item)
            return <p>No Item Found for {this.props.id}</p>;

          const { item } = data;
          return (
            <SingleItemStyles>
              <Head>
                <title>Sick Fits | {item.title}</title>
              </Head>
              {item.largeImage && (
                <img src={item.largeImage} alt={item.title} />
              )}
              <div className="details">
                <h2>Viewing {item.title}</h2>
                <p>{item.description}</p>
              </div>
            </SingleItemStyles>
          );
        }}
      </SingleItemDetailQuery>
    );
  }
}
