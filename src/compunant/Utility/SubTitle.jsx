import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const SubTitle = ({ title,btntitle ,pathText}) => {
  return (
    <div className="d-flex justify-content-between pt-4">
    <div className="sub-tile">{title}</div>
    {btntitle ? (
      <Link to={`${pathText}`} style={{textDecoration:'none'}}>
            <button className="shopping-now">{btntitle}</button>
            </Link>
    ) : null}
</div>
  )
}

export default SubTitle