import { Link, useNavigate } from "react-router"
import { useState } from "react"

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('form submitted', email, password)
    // navigate to about with react
    navigate('/about');
    // navigate('/about', {state: {email, password}});
  }
  return (<>
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
    </form>
     <p>
        Goto <Link to={`/contact/${email}`} className="text-blue-500"> Contact </Link>
      </p>
  </>)
}

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Goto <Link to="/about" className="text-blue-500">About</Link>
        {/* Goto <Link to="/about" state={{email: "test@test.com"}} className="text-blue-500">About</Link> */}
      </p>
      <LoginForm />
      <>
        <h3>Projects</h3>
        <Link to="/projects?skill=react&language=javascript" className="text-blue-500">React</Link>
      </>
    </div>
  )
}