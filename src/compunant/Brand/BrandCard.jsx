import { Col,Card } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
const BrandCard = ({img}) => {
    return (
        <Col xs="12" sm="6" md="4" lg="3"
        className="my-2 d-flex justify-content-center">
        <Card
          className="my-5"
          style={{
            width: "50%",
            height: "60px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#ddd",
          }}>
          <Card.Img style={{ width: "100%", height: "151px" }} src={img} />
        </Card>
      </Col>
    )
}

export default BrandCard