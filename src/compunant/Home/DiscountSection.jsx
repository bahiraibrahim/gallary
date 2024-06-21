import { Container,Row,Col } from 'react-bootstrap'
import stone from '../../assets/products/Rings/24.webp'
const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount my-3  mx-2 d-flex text-center align-items-center"
            style={{backgroundColor:'#022a31'}}
            >
                <Col sm="6">
                    <div className="discount-title">
                        خصم يصل حتي ٣٠٪ علي كل منتج
                    </div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={stone} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection