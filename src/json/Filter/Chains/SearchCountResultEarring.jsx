import UnopDropdown from "unop-react-dropdown";
import sort from "../../../assets/sort.png";
import "../../../Styles/SearchCountResult.css";
import SubTitleFilter from "../../../compunant/Utility/SubTitleFilter";

// eslint-disable-next-line react/prop-types
const SearchCountResultSlip = ({ title }) => {
  let handler = () => {};
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt=""
              />
              ترتيب حسب
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter w-100">
            <SubTitleFilter btn=" الــكــل" pathText="/Slip-all" />
            <SubTitleFilter btn=" اكسسوار" pathText="/Slip-ax" />
            <SubTitleFilter btn=" اقل-اعلى" pathText="/dow-to-up" />
            <SubTitleFilter btn="اعلى-اقل " pathText="/up-to-dow" />
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResultSlip;
