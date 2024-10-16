import React from 'react';

type props = {
  text: string;
  styles: string;
};

const Button = ({ text, styles }: props) => {
  return <button className={styles}>{text}</button>;
};

export default Button;