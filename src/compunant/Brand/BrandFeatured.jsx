import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import brand1 from "../../assets/Brand/brand1.jpg";
import brand2 from "../../assets/Brand/brand2.jpg";
import brand3 from "../../assets/Brand/brand6.jpg";
import brand4 from "../../assets/Brand/brand7.jpg";
import SubTitle from "../Utility/SubTitle";

// eslint-disable-next-line react/prop-types
const BrandFeatured = ({ title, btntitle }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-2 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand4} />
      </Row>
    </Container>
  );
};

export default BrandFeatured;
