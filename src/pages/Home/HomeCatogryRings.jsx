import { Container, Row } from "react-bootstrap";
import SubTitle from "../../compunant/Utility/SubTitle";
import one from "../../assets/products/Rings/1.webp";
import two from "../../assets/products/Rings/2.webp";
import three from "../../assets/products/Rings/3.jpg";
import four from "../../assets/products/Rings/4.webp";
import HomeCategoryCard from "../../compunant/category/HomeCategoryCard";

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title="الخواتم" btntitle="المزيد" pathText="/all-category" />
      <Row className="my-2 d-flex justify-between xs-6">
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

export default HomeCategory;
