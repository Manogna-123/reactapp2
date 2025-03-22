import React, { useState } from 'react';

export default function TextForm(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted it to uppercase","success")
  };

  const handleLClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted it to Lowerrcase","success")
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("text is cleared","success")
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success")
  };

  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("white spaces are removed","success")
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
         <textarea
  className="form-control"
  style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}
  value={text}
  onChange={handleOnchange}
  id="myBox"
  rows="8"
></textarea>

        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert into UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLClick}>
          Convert into LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaceClick}>
          Remove Extra Space
        </button>
      </div>

      <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode} my-3`}>
        <h1>Your text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter text to preview here'}</p>
      </div>
    </>
  );
}
