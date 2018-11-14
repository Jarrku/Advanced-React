import SingleItem from '../components/SingleItem/SingleItem';

interface Props {
  query: {
    [x: string]: string | undefined;
    id: string;
  };
}

const Item: React.SFC<Props> = props => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;
