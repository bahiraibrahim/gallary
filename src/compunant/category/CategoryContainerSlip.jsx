import { Col, Container, Row } from "react-bootstrap";
import Slip from "../../json/Slip.json";
import CategoryCard from "./CategoryCard";

const CategoryContainer3 = () => {
  return (
    <Container>
      <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row md={2} xs={1} lg={4} className="category-All">
        {Slip.map((item) => (
          <Col key={item.id}>
            <CategoryCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryContainer3;
