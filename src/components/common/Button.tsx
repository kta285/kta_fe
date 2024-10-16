import React from 'react';

type props = {
  text: string;
  styles: string;
  onClick?: () => void;
};

const Button = ({ text, styles }: props) => {
  return <button className={styles}>{text}</button>;
};

export default Button;
