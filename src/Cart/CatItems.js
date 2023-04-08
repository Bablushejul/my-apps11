import React from 'react';

const CatItems = (props) => {
  return (
    <div>
      
      <span>{props.name}</span>
      <span>--</span>
        <span>{props.price}</span>
        <span>-</span>
        <span>{props.amount}</span>
      
        <span>-</span>
        <button onClick={props.onRemove}>Remove</button>
    
    </div>
  );
}

export default CatItems;