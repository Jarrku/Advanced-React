import * as React from 'react';
import Router from 'next/router';

import {
  CreateItemMutation,
  CREATE_ITEM_MUTATION
} from './CreateItem.mutation';

import Form from './styles/Form';
import Error from './ErrorMessage';

interface State {
  [x: string]: any;
  title: string;
  description: string;
  image: string;
  largeImage: string;
  price: number;
}

class CreateItem extends React.Component<{}, State> {
  state = {
    title: 'Cool Shoes',
    description: 'I love those dogs',
    image: 'dog.jpg',
    largeImage: 'large-dog.jpg',
    price: 2000
  };

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = event.currentTarget;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <CreateItemMutation
        mutation={CREATE_ITEM_MUTATION}
        variables={{ data: this.state }}
      >
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createItem();
              if (res && res.data) {
                Router.push({
                  pathname: '/item',
                  query: { id: res.data.createItem.id }
                });
              }
            }}
          >
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
                  value={this.state.title}
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
                  value={this.state.price}
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
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <button>Submit</button>
            </fieldset>
          </Form>
        )}
      </CreateItemMutation>
    );
  }
}

export default CreateItem;
