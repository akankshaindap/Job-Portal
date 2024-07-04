import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import ErrorPage from './Components/ErrorPage'
import Help from './Layouts/Help'
import Contact, { contactAction } from './Components/Contact'
import FAQ from './Components/Faq'
import NotFound from './Components/NotFound'
import Careers, { careerLoader } from './Components/Careers'
import CareerDetails, { careerDetailsLoader } from './Components/CareerDetails'
import CareerLayout from './Layouts/CareerLayout'
import CareerError from './Components/CareerError'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements( 
      <Route path='/' element={<Navbar />}  
      errorElement={<ErrorPage/>}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='help' element={<Help />} >
          <Route path='faq' element={<FAQ />} />
          <Route path='contact' element={<Contact />} action={contactAction } />
          <Route path='*' element={ <NotFound />} />
          
        </Route>
        <Route path='careers' element={<CareerLayout />} errorElement={<CareerError/> }>
        <Route index element={<Careers />} loader={careerLoader} />
          <Route path=':id' element={<CareerDetails /> } loader={careerDetailsLoader}/>
          </Route>
      </Route>
    
  )
)
  return (
    <>
   
      <RouterProvider router={router}/>
     
    </>
  )
}

export default App
