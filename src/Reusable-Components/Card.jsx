
import "./Card.css"

const Card = ({ icon, title, onclick }) => {
  return (
    <div className="card">
      <img src={icon} className="image-card" />
      <p className="title-global">{title}</p>
      <div className="btn-card">
        <button className="btn-global" onClick={onclick}>Go</button>
      </div>
    </div>
  );
};

export default Card;
