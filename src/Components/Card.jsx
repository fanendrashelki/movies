const Card = (props) => {
  return (
    <>
      <div className="card">
        <div>
          <img src={props.currentItem.img_url} alt="image" width="100px" />
        </div>
        <div className="card-body">
          <h2>{props.currentItem.name}</h2>
          <p>Rating: {props.currentItem.rating}</p>
          <p className="max-lines">{props.currentItem.description}</p>
          <a href={props.currentItem.watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
