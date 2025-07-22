import { AboutComponent } from "../components/AboutComponent";

export const About = () => {

  const handleDescriptionClick = () => {
    alert("Description Clicked")
  }
  return (
    <div>
     <AboutComponent description={"HELLO WORLD"} handleDescriptionClick={handleDescriptionClick}/>
    </div>
  )
}