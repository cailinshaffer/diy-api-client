import {Link} from 'react-router-dom';

export default function Navbar ()   {
  return (
  <nav>
      <ul>
        <li>
          <Link to="/">Blogs Home</Link>

        </li>
        <li>
          <Link to="/new-bounty">New Blog</Link>
        </li>
      </ul>
  </nav>
  );
}