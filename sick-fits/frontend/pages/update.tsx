import UpdateItem from '../components/UpdateItem';

interface PageProps {
  query: {
    [x: string]: string | undefined;
  };
}

const Update: React.SFC<PageProps> = props => (
  <div>
    <UpdateItem id={props.query.id} />
  </div>
);

export default Update;
