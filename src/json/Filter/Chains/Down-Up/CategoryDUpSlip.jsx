import { Col, Container, Row } from "react-bootstrap";
import DowToUp from "./Dw-to-Up.json";
import CategoryCard from "../../../../compunant/category/CategoryCard";

const CategoryDUpSlip = () => {
  return (
    <Container>
      <Row md={2} xs={1} lg={4} className="g-3 me-3">
        {DowToUp.map((item) => (
          <Col key={item.id}>
            <CategoryCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryDUpSlip;
