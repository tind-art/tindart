import React from 'react';

function ImageDisplay(props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={props.url} alt={props.screenReaderText} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-text">
          {props.artist}
          <br />
          {props.date}
          <br />
          {props.medium}
          <br />
          {props.numLikes}
          <br />
        </h6>
        <button className="btn btn-primary" onClick={() => props.swipeImage('dislike')}>
          Dislike
        </button>
        <button className="btn btn-primary" onClick={() => props.swipeImage('like')}>
          Like
        </button>
      </div>
    </div>
  );
}

export default ImageDisplay;
