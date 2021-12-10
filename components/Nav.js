import Image from "next/image";
import logo from "./img/LOGO.svg";


function Nav() {
    return (
        
            <header > 
           <div className="relative flex items-center h-10 cursor-pointer my-auto">
               <Image  src={logo} layout="fill" objectFit="contain" objectPosition="left"/>
           </div>
           
        </header>
        
      
    )
}


export default Nav
