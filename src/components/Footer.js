import React from "react";

import { useHistory } from "react-router-dom";

function Footer() {
  // Add a "go back" button with useHistory()
  const history = useHistory();

  const goBackHandle = () => {
    history.goBack();
  };

  return (
    <div id="footer">
      <button onClick={goBackHandle}>Go Back</button>
    </div>
  );
}

export default Footer;
