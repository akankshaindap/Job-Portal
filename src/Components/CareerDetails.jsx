import { useLoaderData, useParams } from "react-router-dom"
const CareerDetails = () => {
     const { id } = useParams();
     const career= useLoaderData()
  return (
    <div className="career-details">
            <h2>Career details for {career.title}</h2>
            <p>Starting Salary {career.salary}</p>
            <p>Location : {career.location}</p>
            <div className="details">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae dicta tempore culpa maiores quibusdam ipsam mollitia vero accusamus deleniti.
                 
            </div>
    </div>
  )
}

export default CareerDetails
export const careerDetailsLoader = async ({params}) => {
     const { id } = params;
     const res = await fetch('http://localhost:3000/careers/' +id);
     if (!res.ok) {
         throw Error('No Details Found For This Job')
     }
     return res.json()
}