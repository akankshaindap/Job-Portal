import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from './Breadcrumbs'
const Navbar = () => {
  return (
    <div>
      <header>
      
     
        <nav >
        <h2>Job Portal</h2>
      
          <NavLink className='link'to='/'  active='true'>Home </NavLink>
          <NavLink className='link' to='about'>About</NavLink>
          <NavLink className='link' to='help'>Help</NavLink>
          <NavLink className='link' to='careers'>Careers</NavLink>


       
        </nav>
        <Breadcrumbs/>
        </header>
      <main>
        <Outlet/>
        </main>
    </div>
  )
}

export default Navbar
