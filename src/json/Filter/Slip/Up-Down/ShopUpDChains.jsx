import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../../../../compunant/Utility/Pagination/Pagination";
import CategoryUpDFilter from "./CategoryUpDChains";
import CategoryHeaderChains from "../CategoryHeaderSlip";
import SearchCountResultChains from "../SearchCountResult";

const ShopUpDChains = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeaderChains />
      <Container>
        <SearchCountResultChains title="400 نتيجة بحث ..." />
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

export default ShopUpDChains;
