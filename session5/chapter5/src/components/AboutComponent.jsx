import { Link } from "react-router";

export const AboutComponent = ({
  description,
  handleDescriptionClick
}) => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Goto <Link to="/" className="text-blue-500">Home</Link>
      </p>
      <p className="hover:cursor-pointer" onClick={handleDescriptionClick}>{description}</p>
    </div>
  )
}