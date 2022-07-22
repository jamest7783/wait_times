import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">     Home      </Link>
        <Link to="/rides">      Rides       </Link>
        <Link to="/rides/rideDetails">       Rides Details     </Link>
        
      </nav>
    </header>
  )
}
export default Header