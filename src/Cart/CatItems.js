import React from 'react';

const CatItems = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>
        <span>{props.price}</span>
        <span>{props.amount}</span>
      </div>
      <div>
        <button onClick={props.onRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CatItems;
