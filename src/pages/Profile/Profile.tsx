import ListGroup from "react-bootstrap/ListGroup";
import { useSearchParams } from "react-router-dom";
import { parents as mockParents } from '../../mockData/parents';

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const parents = mockParents.find(x => x.id === Number(id));
  return (
    <div>
      <h1>Profile</h1>
      <h2>Kids</h2>
      {parents?.kids.map(x => (
        <ListGroup key={x.id}>
          <ListGroup.Item>Name: {x.name}</ListGroup.Item>
          <ListGroup.Item>Birthday: {x.birthday}</ListGroup.Item>
        </ListGroup>
      ))}


    </div>
  );
};

export default Profile;
