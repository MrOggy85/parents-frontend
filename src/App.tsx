import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Chat from './pages/Chat/Chat';
import SearchList from './pages/SearchList';
import { FiSearch, FiHome, FiMessageSquare, FiUser, FiBell, FiUserPlus } from 'react-icons/fi';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'lightpink',
      }}>
        <FiBell size={30} />
        <h2>Parents</h2>
        <FiUser size={30} />
      </header>
      <hr style={{ margin: 0 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search-list" element={<SearchList />} />
        <Route path="chat" element={<Chat />} />
      </Routes>


      <footer style={{
        position: 'fixed',
        width: '100%',
        bottom: 0,
      }}>
        <hr style={{ margin: 0 }} />
        <Navbar bg="light" expand="lg" style={{ padding: 0 }}>
          <Container>
            <Nav className="me-auto" style={{ 'flexDirection': 'row', flex: 1, justifyContent: 'center' }}>
              <Link className={`nav-link ${styles.link}`} to="/">
                <FiHome size={30} />
                Home
              </Link>
              <Link className={`nav-link ${styles.link}`} to="/search-list">
                <FiSearch size={30} />
                Search
              </Link>
              <Link className={`nav-link ${styles.link}`} to="/profile"><FiUserPlus size={30} />Add</Link>
              <Link className={`nav-link ${styles.link}`} to="/chat">
                <FiMessageSquare size={30} />
                Chat
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </footer>
    </div >
  );
}

export default App;
