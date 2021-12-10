import Image from "next/image";
import React, {useState,useEffect } from 'react';


function Nav() {
    const [handleShow, setHandleShow] = useState(false);
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
        
            <header className={`fixed top-0 z-40 grid w-screen grid-cols-1  transition duration-100 ease-out p-5  {[router.pathname !== "/" ? "handleShow" : null]} md:grid-cols-3  z-50 grid grid-flow-row grid-cols-2 p-5 md:px-10 sm:grid-cols-3 `} > 
           <div onClick={home} className="relative flex items-center h-20 cursor-pointer my-auto">              
            <Image  src="https://raw.githubusercontent.com/sanyagoyal2000/bookshelf/dbdd381e3b1ca95bc481e0b4f9342b66e0108d36/components/img/LOGO.svg" layout="fill" objectFit="contain" objectPosition="left"/>
           </div>
           
        </header>
        
      
    )
}


export default Nav
