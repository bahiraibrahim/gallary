import { Col, Container, Row } from "react-bootstrap";
import Chains from "../../../Chains.json";
import CategoryCard from "../../../../compunant/category/CategoryCard";

const CategoryAllChains = () => {
  return (
    <Container>
      <Row md={2} xs={1} lg={4} className="g-3 me-3">
        {Chains.map((item) => (
          <Col key={item.id}>
            <CategoryCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryAllChains;
