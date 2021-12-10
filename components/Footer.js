
   
import Button from "@material-tailwind/react/Button";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


function Footer() {
    return (
      

<footer className="flex flex-col h-50 w-full static bottom-0 bg-gray-100 pt-20 pb-2">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl font-fira-sans text-blueGray-700">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 font-fira-sans text-blueGray-600">
          You can contact us through any of these platforms.
        </h5>
        <div className=" flex flex-row mt-6 mr-2 py -4 lg:mb-0 mb-6 space-x-2" >
          
       
            <a href="https://www.facebook.com/sanya.goyal.560/">
            <Button
            color="gray"
            
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:shadow hover:gray-800"
            >
                <FacebookIcon size="3xl" color="blue-500"/>
            </Button></a>
            <a href="https://twitter.com/SanyaGoyal2000">
            <Button
            color="blue"
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:gray-400"
            >
                <TwitterIcon size="3xl" color="gray"/>
            </Button></a>
            <a href="https://www.linkedin.com/in/sanya-g-046ab811b/">
            <Button
            color="blue"
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:gray-400 "
            >
                <LinkedInIcon size="3xl" color="blue"/>
            </Button></a>
            <a href="https://github.com/sanyagoyal2000">
            <Button
            color="blue"
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none hover:gray-400"
            >
                <GitHubIcon size="3xl" color="gray"/>
            </Button></a>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-pink-500 text-sm font-bold mb-2">Contents</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm cursor-pointer "  >Book1</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm cursor-pointer"  >Book2</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm cursor-pointer" >Book3</a>
              </li>
              
              
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-pink-500 text-sm font-bold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              
              
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-700 w-full"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-gray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2021 </span>
          <a href="https://www.creative-tim.com?ref=njs-profile" className="text-gray-500 hover:text-gray-800">PustakOnline</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}

export default Footer
