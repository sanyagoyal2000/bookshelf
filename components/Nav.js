import Image from "next/image";
import React, {useState,useEffect } from 'react';
import {useRouter} from "next/dist/client/router";


function Nav() {
    const [handleShow, setHandleShow] = useState(false);
    const router=useRouter();
    useEffect(() => {
        const listener = () => {
           if (window.scrollY > 80) {
             setHandleShow(true); 
             } else 
             setHandleShow(false); 
           }; 
           window.addEventListener("scroll", listener);
           
           return () => { 
             window.removeEventListener("scroll", listener); 
           }; 
         }, []);
         const home=()=>{
           router.push('/');
         };
    return (
        
            <header className={`fixed top-0 z-20 grid w-screen grid-cols-1  transition duration-100 ease-out p-5 {[router.pathname !== "/" ? "handleShow" : null]} md:grid-cols-3  z-50 grid grid-flow-row grid-cols-2 p-5 md:px-10 sm:grid-cols-3 `} > 
           <div onClick={home} className="relative flex items-center h-20 cursor-pointer my-auto">              
            <Image  src="https://raw.githubusercontent.com/sanyagoyal2000/bookshelf/604897ef3fffc5433a6281913a2f002488cc2183/components/img/LOGO.svg" layout="fill" objectFit="contain" objectPosition="left"/>
           </div>
           
        </header>
        
      
    )
}


export default Nav
