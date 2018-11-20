import CreateItem from '../components/CreateItem/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn/PleaseSignIn';

const Sell: React.FC = props => (
  <div>
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </div>
);

export default Sell;
