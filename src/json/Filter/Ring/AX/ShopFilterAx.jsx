import { Col, Container, Row } from "react-bootstrap";
import SearchCountResult from "../../../../compunant/Utility/SearchCountResult";
import CategoryHeaderRing from "../../../../json/Filter/Ring/CategoryHeaderRing";
import CategoryRingFilter from "./CategoryRingFilter";
import Pagination from "../../../../compunant/Utility/Pagination/Pagination";

const ShopFilterAx = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeaderRing />
      <Container>
        <SearchCountResult title="400 نتيجة بحث ..." />
        <Row className="d-flex flex-row">
          <Col sm="8" xs="8" md="12">
            <CategoryRingFilter />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopFilterAx;
