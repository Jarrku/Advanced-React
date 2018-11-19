import Reset from '../components/Reset/Reset';

interface Props {
  query: {
    [x: string]: string | undefined;
    resetToken: string;
  };
}

const ResetPage: React.FunctionComponent<Props> = props => (
  <div>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPage;
