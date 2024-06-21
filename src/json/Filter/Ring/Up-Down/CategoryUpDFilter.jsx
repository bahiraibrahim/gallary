import { Col, Container, Row } from "react-bootstrap";
import UpD from "./UpD.json";
import CategoryCard from "../../../../compunant/category/CategoryCard";

const CategoryUpDFilter = () => {
  return (
    <Container>
      <Row md={2} xs={1} lg={4} className="g-3 me-3">
        {UpD.map((item) => (
          <Col key={item.id}>
            <CategoryCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryUpDFilter;
