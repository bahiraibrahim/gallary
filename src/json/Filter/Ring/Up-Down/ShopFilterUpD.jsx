import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../../../../compunant/Utility/Pagination/Pagination";
import CategoryUpDFilter from "./CategoryUpDFilter";
import SearchCountResult from "../../../../compunant/Utility/SearchCountResult";
import CategoryHeaderRing from "../../../../json/Filter/Ring/CategoryHeaderRing";

const ShopFilterUpD = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeaderRing />
      <Container>
        <SearchCountResult title="400 نتيجة بحث ..." />
        <Row className="d-flex flex-row">
          <Col sm="8" xs="8" md="12">
            <CategoryUpDFilter />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopFilterUpD;
