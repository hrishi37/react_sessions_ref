import { Link, useLocation } from "react-router";

export const About = () => {
  const location = useLocation();
  
  const email = location.state?.email;;
  
  return (
    <div>
      <h1>About {email}</h1>
      <p>
        Goto <Link to="/" className="text-blue-500">Home</Link>
      </p>
    </div>
  )
}