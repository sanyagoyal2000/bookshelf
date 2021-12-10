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
          src: "https://raw.githubusercontent.com/sanyagoyal2000/bookshelf/main/components/img/c6.jpeg",
          altText: "Slide 2",
          caption: "",
          header: "",
          key: "2",
        },
        {
            src: "https://raw.githubusercontent.com/sanyagoyal2000/bookshelf/main/components/img/c6.jpeg",
            altText: "Slide 3",
            caption: "",
            header: "",
            key: "3",
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
