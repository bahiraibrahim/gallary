import { Col, Container, Row } from "react-bootstrap"
import Pagination from "../../compunant/Utility/Pagination/Pagination"
import CategoryContainer3 from "../../compunant/category/CategoryContainerSlip"
import CategoryHeaderSlip from "../../json/Filter/Chains/CategoryHeaderSlip";
import SearchCountResultSlip from "../../json/Filter/Chains/SearchCountResultEarring";

const ShopProducts_4 = () => {
  return (
    <div style={{minHeight:'670px'}}>
    <CategoryHeaderSlip/>
    <Container>
    <SearchCountResultSlip title='400 نتيجة بحث ...'/>
    <Row className="d-flex flex-row">
    <Col sm='2' xs='2' md='1' className="d-flex">
    </Col>
    <Col sm='10' xs='10' md='11'>
    <CategoryContainer3 title="" btntitle=""/>
    </Col>
    </Row>
    <Pagination/>
    </Container>
    </div>
  )
}

export default ShopProducts_4