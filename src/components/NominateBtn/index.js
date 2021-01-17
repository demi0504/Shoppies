import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

// ...props, spread all of the passed props onto this element
const NominateBtn = props => {
	const [ isDisabled, setIsDisabled ] = useState(false);

  const handleClick = (event) => {
    
    setIsDisabled(true);
    props.nominateClick(event);
  }

  return (
    <Button 
      className="nominate-btn"  
      tabIndex="0"
			variant="outline-secondary"
			value={props.title}
      onClick={handleClick}
      disabled={isDisabled}
      >
      Nominate
    </Button>
  );
}

export default NominateBtn;