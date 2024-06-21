import Pagination from "../Utility/Pagination/Pagination";
import BrandContainer from "./BrandContainer";

const AllBrand = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer />
      <Pagination />
    </div>
  );
};

export default AllBrand;
