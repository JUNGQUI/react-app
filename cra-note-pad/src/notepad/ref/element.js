import React, {useRef, useEffect} from 'react';

export default function RefElement() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
      <div>
        <input type="text" ref={inputRef} />
        <button>저장</button>
      </div>
  );
}