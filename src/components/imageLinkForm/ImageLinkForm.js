import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({
  onInputChange,
  onButtonSubmit,
  userId,
  setEntries
}) => {
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
      }).catch(err => console.log(err));
  };

  return (
    <div>
      <p className="f3">
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onImageSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
