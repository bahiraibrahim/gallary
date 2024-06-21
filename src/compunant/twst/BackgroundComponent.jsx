
import { useState, useEffect } from 'react';
import back from '../../assets/back.jpg'

const BackgroundComponent = () => {
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showBackground && <img src={back} className="background-image" />}
    </div>
  );
};

export default BackgroundComponent;
