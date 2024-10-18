import React from 'react';

type props = {
  text: string;
  styles: string;
  onClick?: () => void;
};

const Button = ({ text, styles, onClick }: props) => {
  return (
    <button onClick={onClick} className={styles}>
      {text}
    </button>
  );
};

export default Button;
