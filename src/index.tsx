import React from 'react';

interface ButtonProps {
  label: string;
}

const Component = ({label}: ButtonProps) => {
  return (<span>
    {label}
  </span>)
};

export default Component;
