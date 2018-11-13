import * as React from 'react';
import { MutationFn } from 'react-apollo';

import {
  UpdateItemMutation,
  UPDATE_ITEM_MUTATION
} from './UpdateItem.mutation';

import { SingleItemQuery, SINGLE_ITEM_QUERY } from './SingleItem.query';

import Form from './styles/Form';
import Error from './ErrorMessage';

import {
  UpdateItemVariables,
  UpdateItem as UpdateItemResult
} from './__generated__/types';

interface Props {
  id?: string;
}

interface State {
  [x: string]: any;
  title?: string;
  description?: string;
  price?: number;
}

class UpdateItem extends React.Component<Props, State> {
  state = {
    title: undefined,
    description: undefined,
    price: undefined
  };

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = event.currentTarget;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  onSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    updateItem: MutationFn<UpdateItemResult, UpdateItemVariables>
  ) => {
    event.preventDefault();

    if (!this.props.id) return;

    const response = await updateItem({
      variables: {
        data: {
          id: this.props.id,
          ...this.state
        }
      }
    });
  };

  render() {
    return (
      <SingleItemQuery
        query={SINGLE_ITEM_QUERY}
        variables={{ id: this.props.id! }}
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;

          if (!data || !data.item)
            return <p>No Item found for ID {this.props.id}</p>;

          return (
            <UpdateItemMutation mutation={UPDATE_ITEM_MUTATION}>
              {(updateItem, { loading, error }) => (
                <Form onSubmit={e => this.onSubmit(e, updateItem)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        defaultValue={data.item!.title}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="price">
                      Price
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        required
                        defaultValue={`${data.item!.price}`}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="description">
                      Description
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Enter A Description"
                        required
                        defaultValue={data.item!.description}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button>Sav{loading ? 'ing' : 'e'} Changes</button>
                  </fieldset>
                </Form>
              )}
            </UpdateItemMutation>
          );
        }}
      </SingleItemQuery>
    );
  }
}

export default UpdateItem;
