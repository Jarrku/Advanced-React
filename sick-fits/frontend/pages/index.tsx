import Items from '../components/Items';

interface Props {
  query: {
    [x: string]: string | undefined;
  };
}

const Home: React.FC<Props> = props => (
  <div>
    <Items page={parseFloat(props.query.page || '1')} />
  </div>
);

export default Home;
