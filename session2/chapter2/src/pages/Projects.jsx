import { useSearchParams } from "react-router";

export const Projects = () => {

  const [searchParams] = useSearchParams();
  const skill = searchParams.get("skill");
  const language = searchParams.get("language");

  return (
    <>
      <h1>Projects</h1>
      <p>Skill: {skill}</p>
      <p>Language: {language}</p>

    </>
  );
}