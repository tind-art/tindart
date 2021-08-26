// const tempBestArray = JSON.parse(``)

import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
// import Header from './Header';
// import LoginPage from './LoginPage';
// import GalleryPage from './GalleryPage';
// import HomePage from './HomePage';
import ImageDisplay from './ImageDisplay';

function App() {
  const [userId, setUserId] = useState('');
  const [imageList, setImageList] = useState([]);

  const [imageListLength, setImageListLength] = useState(0);
  const [lastViewed, setLastViewed] = useState(-1);
  const [currImage, setCurrImage] = useState({});
  //setUserId('buddy1');
  // preload images and populate browser cache
  useEffect(() => {
    async function preloadImages(userId) {
      await fetch(`/api/images/${userId}`, { method: 'GET' })
        .then((res) => res.json())
        .then((images) => {
          setImageListLength(images.length);
          images.forEach(
            ({
              _id: key,
              url,
              numLikes,
              title,
              artist_display: artist,
              date_display: date,
              alt_text: screenReaderText,
              medium_display: medium,
            }, i) => {
              console.log(url);
              const img = new Image();
              img.src = url;
              const imageObj = {
                key,
                url,
                numLikes,
                title,
                artist,
                date,
                medium,
                screenReaderText,
              };
              imageList.push(imageObj)
            }
          );
        })
        .catch((err) => console.log('preloadImages error: ', err));
        setCurrImage(imageList[0])
    }
    let imageObj;
    if (!imageList || imageList.length <= 5) {
      console.log("I ain't got no images");
    preloadImages('buddy1')
    }
   
    // const newImageList = JSON.parse(JSON.stringify(imageList));
    setImageList(imageList);
  });

  // user selects like or dislike
  async function swipeImage(event) {
    const newLastViewed = lastViewed + 1;
    setLastViewed(newLastViewed);
    const currImage = imageList[0];
    setImageList(imageList.slice(1));
    setCurrImage(currImage);
    const [likeEndpoint, dislikeEndpoint, apiCall] = [
      `/api/like/`,
      `/api/dislike/`,
      (endpoint) => {
        fetch(endpoint, { method: 'PUT', headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }, body:JSON.stringify({user_id:'buddy1',art_id:currImage.key})})
          .then((res) => res.json())
          .catch((err) => console.error(err));
      },
    ];
    if (event === 'like') {console.log("you clicked like");apiCall(likeEndpoint);}
    else if (event === 'dislike') apiCall(dislikeEndpoint);
    else return console.error('swipe error: ');
  }

  return (
    <div className="container">
      {/* <Router>
        <Switch> */}
      {/* <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/home">
            <Header accountBtn="/logout" />
            <HomePage />
          </Route> */}
      {/* <Route path=""> */}
      <div className="wrapper" />
      {/* <Header accountBtn="/login" /> */}
      <ImageDisplay
        url={currImage.url}
        screenReaderText={currImage?.screenReaderText}
        title={currImage?.title}
        artist={currImage?.artist}
        date={currImage?.date}
        medium={currImage?.medium}
        numLikes={currImage?.numLikes}
        userId={userId}
        lastViewed={lastViewed}
        setLastViewed={setLastViewed}
        swipeImage={swipeImage}
      />
      {/* </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
