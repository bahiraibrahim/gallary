import { Col, Row } from "react-bootstrap";
import storeItems from "../../json/All.json";
import StoreItem from "./StoreItem";
import { Link } from "react-router-dom";

const Store = () => {
  <Link to="/cart"></Link>;
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={4} className="g-3 me-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
