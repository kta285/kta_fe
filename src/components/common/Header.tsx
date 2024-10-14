import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
