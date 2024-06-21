import { Col, Container, Row } from "react-bootstrap";
import DUp from "./D-to-Up.json";
import CategoryCard from "../../../../compunant/category/CategoryCard";

const CategoryDUpChains = () => {
  return (
    <Container>
      <Row md={2} xs={1} lg={4} className="g-3 me-3">
        {DUp.map((item) => (
          <Col key={item.id}>
            <CategoryCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryDUpChains;
