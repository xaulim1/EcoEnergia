import React from 'react';

const Chatbot: React.FC = () => {
  return (
    <iframe
      id="chatbot-iframe"
      src="https://greenbotupx3.netlify.app/"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '400px',
        height: '600px',
        border: 'none',
        zIndex: 9999
      }}
      title="Chatbot"
      allow="microphone"
    />
  );
};

export default Chatbot;