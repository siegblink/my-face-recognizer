import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className="rank-text">
      {`${name}'s entry count is `}
      <span className="entry">{entries}</span>
      <span className="image-link-text">
        {'Detect faces in your pictures. Try it.'}
      </span>
    </div>
  );
};

export default Rank;
