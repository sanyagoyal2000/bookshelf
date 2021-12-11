import Footer from "../components/Footer";
import {useState,useEffect, useRef} from "react";
import {useRouter} from "next/dist/client/router";

function BookViewer() {
    const [embedURL]=useState("https://read.bookcreator.com/aWAhdfUWXPQR1UPW7fJOHnfObsb2/_or2hLPmR3WlS34sPH_WKQ");     
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
