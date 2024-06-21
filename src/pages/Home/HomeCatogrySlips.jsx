import { Container, Row } from "react-bootstrap";
import SubTitle from "../../compunant/Utility/SubTitle";
import HomeCategoryCard from "../../compunant/category/HomeCategoryCard";
import one from "../../assets/products/Slip/5.jpg";
import two from "../../assets/products/Slip/6.jpg";
import three from "../../assets/products/Slip/7.jpg";
import four from "../../assets/products/Slip/8.jpg";

const HomeCategorySlips = () => {
  return (
    <Container>
      <SubTitle
        title=" الانسيال"
        btntitle="المزيد"
        pathText="/all-category-4"
      />
      <Row className="my-2 d-flex justify-between">
        <HomeCategoryCard
          img={one}
          text="Lorem ipsum, dolor sit amet consectetur"
          price="150"
        />
        <HomeCategoryCard
          img={two}
          text="Lorem ipsum, dolor sit amet consectetur"
          price="100"
        />
        <HomeCategoryCard
          img={three}
          text="Lorem ipsum, dolor sit amet consectetur"
          price="150"
        />
        <HomeCategoryCard
          img={four}
          text="Lorem ipsum, dolor sit amet consectetur"
          price="100"
        />
      </Row>
    </Container>
  );
};

export default HomeCategorySlips;
