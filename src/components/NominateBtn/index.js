import React from "react";
import Button from 'react-bootstrap/Button';

// ...props, spread all of the passed props onto this element
function NominateBtn(props) {
	

  return (
    <Button 
      className="nominate-btn"  
      tabIndex="0"
			variant="outline-secondary"
			value={props.title}
			onClick={props.nominateClick}>
      Nominate
    </Button>
  );
}

export default NominateBtn;