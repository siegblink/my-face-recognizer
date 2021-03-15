import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, userId, setEntries }) => {
  const onImageSubmit = () => {
    fetch('https://nameless-depths-48950.herokuapp.com/image', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: userId })
    })
      .then(response => response.json())
      .then(entry => {
        if (entry) {
          setEntries(entry);
          onButtonSubmit();
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="input-wrapper">
        <input className="url-box" type="text" onChange={onInputChange} />
        <button className="input-btn" onClick={onImageSubmit}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
