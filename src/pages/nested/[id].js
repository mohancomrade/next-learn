import React from 'react';

export const getStaticPaths =async () =>{

    const response =await fetch ('https://jsonplaceholder.typicode.com/users')

    const json =await response.json()

    const paths = json.map((user) =>{

        return {
            params :{id:user.id.toString()},
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {

    const {id} = context.params 

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    const json =await response.json()

   return {

    props:{user:json}
   }
}

const Detail = ({user}) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <h3>{user.username}</h3>
      <h3>{user.email}</h3>
    </div>
  )
}

export default Detail;
