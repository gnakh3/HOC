import Loader from "../Loader/Loader";

interface Props {
  loading: boolean;
}

const Users: React.FC<Props> = ({ loading }) => {
  if (loading) return <Loader />;
  return <div className="font-semibold">Users Loaded</div>;
};

export default Users;
