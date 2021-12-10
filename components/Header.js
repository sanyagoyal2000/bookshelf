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
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            
         <Row>
        
    <Col md="5" className="mx-auto relative w-full h-[400px] mt-0">
        
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>   
        </div>
    )
}

export default Header
