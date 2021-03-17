import {useState, useEffect} from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    console.log('did mount');
    return () => {
      console.log('unmount');
      window.removeEventListener('resize', onResize)
    };
  }, []);

  return width;
}