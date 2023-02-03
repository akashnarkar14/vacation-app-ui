import "./propertyList.css";

const propertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://thumbs.dreamstime.com/b/hotel-lobby-luxury-staircases-fountain-39479289.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Hotel</h1>
          <h2>123</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://media.istockphoto.com/photos/luxurious-villa-with-pool-picture-id506903162?b=1&k=20&m=506903162&s=612x612&w=0&h=Ur4Yb2eFL-LxW9b4pAzhCL9o_iZLZ2naMyGRZexwUsQ="
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>villas</h1>
          <h2>13</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>resort</h1>
          <h2>143</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1563076430-e532c761e99b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bG9nJTIwY2FiaW58ZW58MHx8MHx8&w=1000&q=80"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>cabins</h1>
          <h2>143</h2>
        </div>
      </div>
    </div>
  );
};

export default propertyList;
