import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/photos/the-bandraworli-sea-link-mumbai-india-picture-id860528756?k=20&m=860528756&s=612x612&w=0&h=5uau9cXU4jVjW7b9YejARZcRyubZLkMpbIO8HTD93Oc="
          alt=""
          className="featuredimg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://thumbs.dreamstime.com/b/victoria-memorial-rainy-season-kolkata-calcutta-india-late-evening-40919987.jpg"
          alt=""
          className="featuredimg"
        />
        <div className="featuredTitles">
          <h1>Kolkata</h1>
          <h2>43 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.holidify.com/images/bgImages/DELHI.jpg"
          alt=""
          className="featuredimg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>177 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
