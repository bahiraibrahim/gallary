import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const SubTitleFilter = ({ title,btn ,pathText}) => {
  return (
    <div className="d-flex justify-content-between pt-4">
    <div className="sub-tile">{title}</div>
    {btn ? (
      <Link to={`${pathText}`} style={{textDecoration:'none'}}>
            <button className="shopping">{btn}</button>
            </Link>
    ) : null}
</div>
  )
}

export default SubTitleFilter