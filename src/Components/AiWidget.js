import React, { useEffect, useState } from 'react';

const AiWidget = () => {
  const baseUrl = 'https://2human.ai';
  const aiName = 'penny';
  const templateName = 'timdplr-gmail-com';
  const isLeft = true;

  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const containerStyle = {
    position: 'fixed',
    zIndex: '1000',
    left: visible ? (isLeft ? '10px' : 'auto') : '-10000px',
    right: visible ? (isLeft ? 'auto' : '10px') : 'auto',
    top: visible ? '20px' : '-10000px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'left 0.3s, right 0.3s, top 0.3s',
  };

  const buttonStyle = {
    position: 'fixed',
    left: isLeft ? '20px' : 'auto',
    right: isLeft ? 'auto' : '20px',
    bottom: '20px',
    zIndex: '1000',
    border: 'none',
    background: 'none',
    outline: 'none',
    transform: hover ? 'scale(1.2)' : 'scale(1)',
    transition: 'transform 0.3s',
  };

  const imgStyle = {
    width: '60%',
    height: 'auto',
    transition: 'transform 0.3s',
  };

  useEffect(() => {
    const iframe = document.getElementById('your-app-iframe');
    if (iframe) {
      iframe.src = `${baseUrl}/ai/${aiName}/${templateName}`;
    }
  }, [baseUrl, aiName, templateName]);

  return (
    <>
      <div style={containerStyle}>
        <div>
          <h3>AI {aiName}</h3>
        </div>
        <iframe id='your-app-iframe' 
          style={{ width: '600px', height: `${window.innerHeight * 0.5}px`, border: 'none' }}
          title="AI Widget"
        />
      </div>
      <button 
        style={buttonStyle} 
        onClick={toggleVisibility}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          style={imgStyle}
          src={ visible ?`${baseUrl}/images/icon-animation/icon-9.png` : `${baseUrl}/images/icon-animation/icon-7.png`}
          alt="Open AI"
        />
      </button>
    </>
  );
};

export default AiWidget;
