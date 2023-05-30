// import Image from 'next/image'
// import styles from './page.module.css'

// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import Link from "next/link";
// import Layout from "../../components/Layout";
import "../styles/home.css";
import Head from "next/head";
// import Head from "next/head";
// import { NextSeo } from "next-seo";

// const homedata = {
//   title: 'Next | Home',
//   description: 'This is an example page',
// };



function Home() {
  return (
    <>
    <Head><title>Next | Home </title></Head>
    <div>
      {/* <Head> */}
      {/* <> 
      <NextSeo title={homedata.title} description={homedata.description} />
      </> */}
    
        {/* <meta name="keyword" content="home" /> */}
      {/* </Head> */}
      <div class="center">
        <img
          src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp"
          className="next-img"
          alt="Next.js Logo"
        />
        
      </div>
      <p className="home-text">Intoduction</p>
    

      <div className='note'>
      <div class="note-secondary">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit.And the Next is use in Pre-Rendering <br></br>
  Cum doloremque officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus <br></br>
  delectus placeat illo rem id nisi consequatur esse, sint perspiciatis soluta porro?
</div>

    </div>
    <Link href="/nested">
        {" "}
        <div class="d-flex justify-content-center">
  <a class="btn btn-light" href="/users">Go To Users</a>
</div>


      </Link>
    </div>
    </>
  );
}

export default Home;

{
  /* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */
}
