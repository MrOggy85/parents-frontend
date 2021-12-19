import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import SearchList from './pages/SearchList';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
            <Link className="nav-link" to="/search-list">Search Result</Link>
          </Nav>
        </Container>
      </Navbar>

      <hr style={{ margin: 0 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search-list" element={<SearchList />} />
      </Routes>
    </div>
  );
}

export default App;
