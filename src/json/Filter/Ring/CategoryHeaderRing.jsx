import { Col, Container, Row } from "react-bootstrap";
import SubTitleFilter from "../../../compunant/Utility/SubTitleFilter";
import { Link } from "react-router-dom";
import search from "../../../assets/search1.png";

const CategoryHeaderRing = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start gap-5 py-2 flex-wrap">
            <SubTitleFilter btn=" الــكــل" pathText="/all" />
            <SubTitleFilter btn=" اكسسوار" pathText="/ring-ax" />
            <SubTitleFilter btn=" اقل-اعلى" pathText="/down-up" />
            <SubTitleFilter btn="اعلى-اقل " pathText="/up-down" />
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

export default CategoryHeaderRing;
