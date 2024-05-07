import "./Card.css"
import Proptypes from "prop-types"
function Card(props){
    return (
        <>
        <div className="div">
            <p>{props.msg}</p>
            <span>{props.name}</span>
        </div>
        </>
    )
}
Card.propTypes = {
    msg : Proptypes.string,
    name : Proptypes.string
}

export default Card;