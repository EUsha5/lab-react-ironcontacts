// components/Card.js

import React from 'react';

const contact = (props) => {
  return (

    <tr>
      <td><img src={props.pictureUrl} alt="" height="60vh" /></td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td>
        <button onClick = {()=> props.deleteClickHandler()}>Delete</button> 
      </td>
    </tr>
  )
};

export default contact;