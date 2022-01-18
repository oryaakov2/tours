import React, { useState } from 'react';

const Tour = ({ id, name, info, price, image, removeItem }) => {

  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <article className="single-tour">
        <img src={image} alt="tour" />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => { setReadMore(!readMore) }}>
              {readMore ? 'show less' : 'read more'}
            </button>
          </p>
          <button className='delete-btn' onClick={removeItem}>Not Interested</button>
        </footer>
      </article>
    </>
  )
};

export default Tour;
