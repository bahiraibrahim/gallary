import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../../../../compunant/Utility/Pagination/Pagination";
import CategoryHeaderEarring from "../CategoryHeaderEarring";
import SearchCountResultEarring from "../SearchCountResultEarring";
import CategoryDUpEarring from "./CategoryDUpEarring";


const ShopDUpEarring = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeaderEarring/>
      <Container>
        <SearchCountResultEarring title="400 نتيجة بحث ..." />
        <Row className="d-flex flex-row">
          <Col sm="8" xs="8" md="12">
            <CategoryDUpEarring/>
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopDUpEarring;
