import Head from 'next/head'

import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <Head>
        <title>Pustak</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>

        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Recursive&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading?
        <Loader/>
       :(<>
      <div >
        <Header/>
      </div>
      </>
      )}
      
    </div>
  )
}