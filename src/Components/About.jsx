import { useState } from "react"
import { Navigate,useSearchParams} from "react-router-dom"
const About = () => {
  const [user, setUser] = useState('Someone')
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name')
  if (!user) {
    return <Navigate to='/' replace={true} />
  }
  console.log('re-rendered')
  return (
    <div>
      <h1>About us</h1>
      {name && <p>Hi, {name}!</p>}
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis corrupti quasi cumque incidunt est corporis tempora delectus quos nisi, tenetur magnam expedita natus quae, porro ipsum et cupiditate totam nobis!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat possimus eligendi accusamus nihil harum veritatis, exe  rcitationem ab quaerat autem numquam cupiditate minima culpa ratione beatae sapiente ipsum similique a.
      </p>
      <button onClick={()=>setUser(null)}>Log Out</button>
    </div>
  )
}

export default About