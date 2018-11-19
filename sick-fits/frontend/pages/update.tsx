import UpdateItem from '../components/UpdateItem/UpdateItem';

interface PageProps {
  query: {
    [x: string]: string | undefined;
    id: string;
  };
}

const Update: React.FunctionComponent<PageProps> = props => (
  <div>
    <UpdateItem id={props.query.id} />
  </div>
);

export default Update;
