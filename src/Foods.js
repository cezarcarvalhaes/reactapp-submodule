import React from 'react';

const Foods = (props) => {
   return (
      <div>
         <h1>This is the React App Submodule</h1>
         <p>I like {props.drink} and {props.food}</p>
      </div>
   )
}

export default Foods;
