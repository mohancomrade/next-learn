// import { Button } from 'bootstrap';
import React, { useEffect } from 'react';
import Link from 'next/link';
import "../styles/404.css";
import { useRouter } from 'next/router';

const PageNotFound = () => {

    const router = useRouter()

    useEffect(() => {

        const id = setTimeout (() =>{
           
            router.push('/')

        },3000)

        return () => clearTimeout(id);

    },[])
  return (
    <div>
      <h2 className='pnf-text'>Whoops! Page Not Found</h2>
      <Link  legacyBehavior href='/'><a className='pnf'> Click And Go To Home</a></Link>
    </div>
  )
}

export default PageNotFound;
