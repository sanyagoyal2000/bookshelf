import { UncontrolledCarousel, Row, Col } from "reactstrap";



function Header() {
    const items = [
        {
          src:"https://raw.githubusercontent.com/sanyagoyal2000/bookshelf/main/components/img/c6.jpeg",
          altText: "Slide 1",
          caption: "",
          header: "",
          key: "1",
        },
        {
          src: "https://raw.githubusercontent.com/sanyagoyal2000/bookshelf/main/components/img/c4.jpeg",
          altText: "Slide 2",
          caption: "",
          header: "",
          key: "2",
        },
        
         
      ];
    return (
        <div >
         <Row>
    <Col md="8" className="mx-auto w-full h-1/3 mt-0">
      <UncontrolledCarousel items={items}  />
    </Col>
  </Row>   
        </div>
    )
}

export default Header
