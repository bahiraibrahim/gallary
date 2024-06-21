import { Container, Row } from "react-bootstrap";
import SubTitle from "../../compunant/Utility/SubTitle";
import HomeCategoryCard from "../../compunant/category/HomeCategoryCard";
import one from "../../assets/products/Chains/5.jpg";
import two from "../../assets/products/Chains/6.jpg";
import three from "../../assets/products/Chains/7.jpg";
import four from "../../assets/products/Chains/8.jpg";

const HomeCategoryChins = () => {
  return (
    <Container>
      <SubTitle title=" السلسلة" btntitle="المزيد" pathText="/all-category-2" />
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

export default HomeCategoryChins;
