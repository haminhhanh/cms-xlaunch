import { useState } from 'react';
import ImageI from './image.interface';

const Image = (props: ImageI) => {
  const name = props.name;
  const [srcState, setSrcState] = useState(`/assets/images/${name}.webp`);

  const handleError = () => {
    setSrcState(`/assets/images/${name}.png`);
  };

  return <img src={srcState} onError={handleError} {...props} />;
};

export default Image;
