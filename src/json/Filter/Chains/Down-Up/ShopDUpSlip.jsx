import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../../../../compunant/Utility/Pagination/Pagination";
import CategoryHeaderSlip from "../CategoryHeaderSlip";
import SearchCountResultSlip from "../SearchCountResultEarring";
import CategoryDUpSlip from "./CategoryDUpSlip";

const ShopDUpSlip = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeaderSlip/>
      <Container>
        <SearchCountResultSlip title="400 نتيجة بحث ..." />
        <Row className="d-flex flex-row">
          <Col sm="8" xs="8" md="12">
            <CategoryDUpSlip/>
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopDUpSlip;
