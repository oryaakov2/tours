import React from 'react';
import Tour from './Tour';

const Tours = (props) => {

  return (
    <>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline" />
      </div>
      <ul>
        {props.data.map((item) => {
          return (
            <Tour {...item} key={item.id} removeItem={() => { props.removeItem(item.id) }} />
          )
        })}
      </ul>
    </>
  )
};

export default Tours;
