// import { useEffect, useState } from 'react'

// export default function CommunitiesPage() {
//   const [communities, setCommunities] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:5000/api/communities')
//       .then(response => response.json())
//       .then(data => setCommunities(data))
//   }, [])

//   return (
//     <ul>
//       {communities.map(community => (
//         <li key={community.id}>
//           <h2>{community.name}</h2>
//           <p>{community.description}</p>
//         </li>
//       ))}
//     </ul>
//   )
// }
