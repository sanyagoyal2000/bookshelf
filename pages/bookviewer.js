import Footer from "../components/Footer";
import {useState,useEffect, useRef} from "react";
import {useRouter} from "next/dist/client/router";

function BookViewer() {
    const [embedURL]=useState("https://books.google.co.in/books?id=LbnwCQAAQBAJ&newbks=0&lpg=PP1&dq=harry%20potter&pg=PR3&output=embed");     
   const router = useRouter();
   const ISBN_num = router.query;

   // Initialize loaded state as false
     
       return (   
           <>   
            <iframe src={embedURL} className=" md: ml-10 sm:w-[600px] sm:h-[400px] md:w-[1000px] md:h-[500px]"/>
          <Footer/>
          </> );
}

export default BookViewer
