import { useParams } from "react-router";

export const Contact = () => {
  const {email} = useParams();

  return (<>
    <h1>Contact page</h1>
    <p>
      Contact email is {email}
    </p>
  </>);
}