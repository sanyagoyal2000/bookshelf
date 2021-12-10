import { UncontrolledCarousel, Row, Col } from "reactstrap";
import Image from "next/image";



function Header() {
    const items = [
        {
          src:"https://raw.githubusercontent.com/sanyagoyal2000/bookshelf/main/components/img/c11.jpeg",
          altText: "Slide 1",
          caption: "",
          header: "",
          key: "1",
        },
        {
          src: "https://raw.githubusercontent.com/sanyagoyal2000/bookshelf/main/components/img/c6.jpeg",
          altText: "Slide 2",
          caption: "",
          header: "",
          key: "2",
        },
        {
            src: "https://raw.githubusercontent.com/sanyagoyal2000/bookshelf/main/components/img/c10.jpeg",
            altText: "Slide 3",
            caption: "",
            header: "",
            key: "3",
          },
          {
            src: "https://raw.githubusercontent.com/sanyagoyal2000/bookshelf/main/components/img/c9.jpeg",
            altText: "Slide 4",
            caption: "",
            header: "",
            key: "4",
          },
         
      ];
    return (
        <div >
            
         <Row>
         <div>
        <Image  src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/59a379a9cc89f2108bfaa6d5871a881b1dcc6a04/final%20(150%20x%2060%20px)%20(50%20x%2040%20px).svg" layout="fill" objectFit="contain" objectPosition="left"/>
        </div>
    <Col md="5" className="mx-auto w-full h-1/5 mt-0">
        
      <UncontrolledCarousel items={items}  />
    </Col>
  </Row>   
        </div>
    )
}

export default Header
