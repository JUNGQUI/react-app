import React, {useState, useEffect} from 'react';

export default function WidthPrinter() {
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
  return <div>`width : ${width}`</div>;
}