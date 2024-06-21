import { Col, Container, Row } from "react-bootstrap";
import ring from "./RingAx.json";
import CategoryCard from "../../../../compunant/category/CategoryCard";

const CategoryRingFilter = () => {
  return (
    <Container>
      <Row md={2} xs={1} lg={4} className="g-3 me-3">
        {ring.map((item) => (
          <Col key={item.id}>
            <CategoryCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryRingFilter;
