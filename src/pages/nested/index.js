import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Link from 'next/link';

export const getStaticProps = async () =>{

const response = await fetch ('https://jsonplaceholder.typicode.com/users')

const json = await response.json()

return {

  props:{users:json}
}

}


const Nested = ({users}) => {

  console.log(users);
  return (
    <div>

<ul className="list-group">
      

      <ListGroup>
        {users &&
          users.map((user) => (
           <Link href={`nested/${user.id}`}>
            <ListGroup.Item key={user.id} className="mb-2">
              {user.name}
            </ListGroup.Item>
            </Link> 
          ))}
      </ListGroup>
    </ul>
 
    
      
    </div>
  )
}

export default Nested;



