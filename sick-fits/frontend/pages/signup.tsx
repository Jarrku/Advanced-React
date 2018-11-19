import Signup from '../components/Signup/Signup';
import styled from '../components/styled-components';
import Signin from '../components/Signin/Signin';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignupPage: React.SFC = props => (
  <Columns>
    <Signup />
    <Signin />
  </Columns>
);

export default SignupPage;
