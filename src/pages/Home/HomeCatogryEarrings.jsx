import { Container, Row } from "react-bootstrap";
import SubTitle from "../../compunant/Utility/SubTitle";
import HomeCategoryCard from "../../compunant/category/HomeCategoryCard";
import one from "../../assets/products/Earring/5.webp";
import two from "../../assets/products/Earring/6.webp";
import three from "../../assets/products/Earring/7.webp";
import four from "../../assets/products/Earring/8.webp";

const HomeCategoryEarrings = () => {
  return (
    <Container>
      <SubTitle title=" الحلق" btntitle="المزيد" pathText="/all-category-3" />
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

export default HomeCategoryEarrings;
