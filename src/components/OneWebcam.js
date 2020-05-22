import React from "react";

function OneWebcam(props) {
  // Get the ID of the webcam through the props

  const webcamId = props.match.params.id;

  // Put the ID in a url to show the video in an iframe

  const url = `https://webcams.windy.com/webcams/public/embed/player/${webcamId}/day`;

  return (
    <div id="oneWebcam">
      <iframe src={url} width="780" height="500" title={webcamId} />
    </div>
  );
}

export default OneWebcam;
