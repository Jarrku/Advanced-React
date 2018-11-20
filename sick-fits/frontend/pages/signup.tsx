import Signup from '../components/Signup/Signup';
import styled from '../components/styled-components';
import Signin from '../components/Signin/Signin';
import RequestReset from '../components/RequestReset/RequestReset';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignupPage: React.FC = props => (
  <Columns>
    <Signup />
    <Signin />
    <RequestReset />
  </Columns>
);

export default SignupPage;
