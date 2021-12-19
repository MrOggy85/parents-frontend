import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { parents as mockParents } from '../../mockData/parents';

const SearchList = () => {
  return (
    <div>
      <h1>Results</h1>
      <ListGroup>
        {mockParents.map(x => (
          <ListGroup.Item key={x.id}>
            <Link className="nav-link" to={`/profile?id=${x.id}`}>{`${x.kids[0].name}'s Parents`}</Link>

          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SearchList;
