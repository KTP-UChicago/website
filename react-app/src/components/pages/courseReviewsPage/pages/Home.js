import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
      <h2>Welcome :)</h2>
      <Link to="/courses" className="App-link">View Courses</Link>
    </div>
  );
  
  export default HomePage;