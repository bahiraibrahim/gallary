import { Col, Container, Row } from "react-bootstrap";
import SubTitleFilter from "../../../compunant/Utility/SubTitleFilter";

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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeaderEarring;
