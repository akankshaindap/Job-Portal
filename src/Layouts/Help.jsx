import { NavLink,Outlet } from "react-router-dom"
const Help = () => {
  return (
       <div>
            <header>
            <h1>Help</h1>
            <nav>
                 <NavLink to='faq'>FAQ</NavLink>
                 <NavLink to='contact'>Contact</NavLink>
                 </nav>
                 </header>
            <Outlet/>
    </div>
  )
}

export default Help
