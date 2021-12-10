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
        
    <Col md="5" className="mx-auto w-full h-1/5 mt-0">
        
      <UncontrolledCarousel items={items}  />
    </Col>
  </Row>   
        </div>
    )
}

export default Header
