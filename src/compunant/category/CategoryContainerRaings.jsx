import { Col, Container, Row } from "react-bootstrap";
import storeItems from "../../json/Raings.json";
import CategoryCard from "./CategoryCard";

const CategoryContainer = () => {
  return (
    <Container>
      <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row md={2} xs={1} lg={4} className="g-3 me-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <CategoryCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
