import React from 'react';

const FileBase = ({ type = "file", multiple = false, onDone }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      // Mimic the behavior of react-file-base64 by passing an object with a base64 property
      onDone({ base64: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return <input type={type} multiple={multiple} onChange={handleFileChange} />;
};

export default FileBase;

