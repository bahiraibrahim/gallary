import { Col, Container, Row } from "react-bootstrap";
import SubTitleFilter from "../../../compunant/Utility/SubTitleFilter";
import { Link } from "react-router-dom";
import search from "../../../assets/search1.png";

const CategoryHeaderSlip = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start gap-5 py-2 flex-wrap">
            <SubTitleFilter btn=" الــكــل" pathText="/Slip-all" />
            <SubTitleFilter btn=" اكسسوار" pathText="/Slip-ax" />
            <SubTitleFilter btn=" اقل-اعلى" pathText="/dow-to-up" />
            <SubTitleFilter btn="اعلى-اقل " pathText="/up-to-dow" />
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

export default CategoryHeaderSlip;
