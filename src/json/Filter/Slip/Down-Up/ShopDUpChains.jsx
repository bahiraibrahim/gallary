import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../../../../compunant/Utility/Pagination/Pagination";
import CategoryDUpFilter from "./CategoryDUpChains";
import CategoryHeaderChains from "../CategoryHeaderSlip";
import SearchCountResultChains from "../SearchCountResult";

const ShopDUpChains = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeaderChains />
      <Container>
        <SearchCountResultChains title="400 نتيجة بحث ..." />
        <Row className="d-flex flex-row">
          <Col sm="8" xs="8" md="12">
            <CategoryDUpFilter />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopDUpChains;
