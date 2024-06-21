import { Card, Col } from "react-bootstrap";
import star from "../../assets/star.png";
import { style } from "./CategoryStyle";

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ img, text, price }) => {
  return (
    <Col className="my-2 m-auto" sm="6" xs="8" md="5" lg="3">
      <Card style={style} className='card-all'>
        <div className="allCard mb-3 ">
          <img
            alt="zcv"
            src={img}
            className="category-card-img h-100"
            style={{
              width: "100%",
              margin: "10px 55px",
            }}
          />
          <Card.Body
            className="card_1"
            style={{ marginLeft: "-100px", fontSize: "18px" }}
          >
            <p className="category-text my-2">{text}</p>
            <Card.Text>
              <div
                className="d-flex justify-content-between"
                style={{ marginTop: "20px" }}
              >
                <div className="d-flex">
                  <img
                    className="rate"
                    src={star}
                    style={{
                      height: "16px",
                      width: "16px",
                      marginTop: "20px",
                    }}
                  />
                  <div
                    className="card-rate mx-2"
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    4.5
                  </div>
                </div>
                <div className="d-flex">
                  <div
                    className="card-currency mx-1"
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    {price}جنيه
                  </div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default CategoryCard;
