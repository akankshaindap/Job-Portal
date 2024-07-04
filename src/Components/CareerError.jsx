import { useRouteError,Link } from "react-router-dom"
const CareerError = () => {
     const error=useRouteError()
  return (
    <div>
            <h1>Opps!!! Error</h1>
            <p>{error.message}</p>
            <Link to='/'>Go Back to Home Page</Link>
    </div>
  )
}
     
export default CareerError
