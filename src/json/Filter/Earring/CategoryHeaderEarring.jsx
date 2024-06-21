import { Col, Container, Row } from "react-bootstrap";
import SubTitleFilter from "../../../compunant/Utility/SubTitleFilter";
import { Link } from "react-router-dom";
import search from "../../../assets/search1.png";

const CategoryHeaderEarring = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start gap-5 py-2 flex-wrap">
            <SubTitleFilter btn=" الــكــل" pathText="/Earring-all" />
            <SubTitleFilter btn=" اكسسوار" pathText="/Earring-ax" />
            <SubTitleFilter btn=" اقل-اعلى" pathText="/do-to-up" />
            <SubTitleFilter btn="اعلى-اقل " pathText="/up-to-do" />
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

export default CategoryHeaderEarring;
