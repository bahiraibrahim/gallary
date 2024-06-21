import { Col, Container, Row } from "react-bootstrap"
import Pagination from "../../compunant/Utility/Pagination/Pagination"
import CategoryContainer1 from "../../compunant/category/CategoryContainerChains"
import CategoryHeaderChains from "../../json/Filter/Slip/CategoryHeaderSlip"
import SearchCountResultChains from "../../json/Filter/Slip/SearchCountResult"

const ShopProducts_2 = () => {
  return (
    <div style={{minHeight:'670px'}}>
    <CategoryHeaderChains/>
    <Container>
    <SearchCountResultChains title='400 نتيجة بحث ...'/>
    <Row className="d-flex flex-row">
    <Col sm='2' xs='2' md='1' className="d-flex">
    </Col>
    <Col sm='10' xs='10' md='12'>
    <CategoryContainer1 title="" btntitle=""/>
    </Col>
    </Row>
    <Pagination/>
    </Container>
    </div>
  )
}

export default ShopProducts_2