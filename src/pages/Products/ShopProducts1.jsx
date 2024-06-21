import { Col, Container, Row } from "react-bootstrap";
import SearchCountResult from "../../compunant/Utility/SearchCountResult";
import CategoryHeaderRing from "../../json/Filter/Ring/CategoryHeaderRing";
import CategoryContainer from "../../compunant/category/CategoryContainerRaings";
import Pagination from "../../compunant/Utility/Pagination/Pagination";

const ShopProducts_1 = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeaderRing />
      <Container>
        <SearchCountResult title="400 نتيجة بحث ..." />
        <Row className="d-flex flex-row">
          <Col sm="8" xs="8" md="12">
            <CategoryContainer/>
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProducts_1;
