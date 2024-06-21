import { Col, Container, Row } from "react-bootstrap";
import CategoryContainer2 from "../../compunant/category/CategoryContainerEaring";
import CategoryHeaderEarring from "../../json/Filter/Earring/CategoryHeaderEarring";
import SearchCountResultEarring from "../../json/Filter/Earring/SearchCountResultEarring";

const ShopProducts_3 = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeaderEarring />
      <Container>
        <SearchCountResultEarring title="400 نتيجة بحث ..." />
        <Row className="d-flex flex-row">
          <Col sm="10" xs="10" md="12">
            <CategoryContainer2 title="" btntitle="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopProducts_3;
