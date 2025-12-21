import Activities from "../Pages/Activities/Activities";
import Home from "../Pages/Home/Home";

const Card = ({ icon, title, onclick }) => {
  return (
    <div className="card">
      <img src={icon} alt={title} />
      <p className="title-card">{title}</p>
      <button className="btn" onClick={onclick}>
      </button>
    </div>
  );
};

export default Card;
