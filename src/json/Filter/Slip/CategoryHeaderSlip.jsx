import { Col, Container, Row } from "react-bootstrap";
import SubTitleFilter from "../../../compunant/Utility/SubTitleFilter";
import { Link } from "react-router-dom";
import search from "../../../assets/search1.png";

const CategoryHeaderChains = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start gap-5 py-2 flex-wrap">
            <SubTitleFilter btn=" الــكــل" pathText="/Chains-all" />
            <SubTitleFilter btn=" simple" pathText="/Chains-ax" />
            <SubTitleFilter btn=" اقل-اعلى" pathText="/d-to-up" />
            <SubTitleFilter btn="اعلى-اقل " pathText="/up-to-down" />
            <div className="search-link">
            <Link to="/search">
            <img src={search} /> <span className="search">بــــحــــث...</span>
          </Link>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeaderChains;
