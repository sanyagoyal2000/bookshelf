import { UncontrolledCarousel, Row, Col } from "reactstrap";
import c1 from "./img/c1.jpeg";
import c2 from "./img/c2.jpeg";
import c3 from "./img/c3.jpeg";



function Header() {
    const items = [
        {
          src:{c1},
          altText: "Slide 1",
          caption: "",
          header: "",
          key: "1",
        },
        {
          src: c2,
          altText: "Slide 2",
          caption: "",
          header: "",
          key: "2",
        },
        {
          src:c3,
          altText: "Slide 3",
          caption: "",
          header: "",
          key: "3",
        },
      ];
    return (
        <div>
         <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>   
        </div>
    )
}

export default Header
