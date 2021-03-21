import React, {useState, useCallback} from 'react';

export default function RefElement2() {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);

  const setInitialCallback = useCallback(ref => ref && setText(INITIAL_TEXT), []);

  return (
      <>
        {showText &&
        (
            <input type="text"
                   ref={setInitialCallback}
                   value={text}
                   onChange={e => setText(e.target.value)} />
                   )
        }
        <button onClick={() => setShowText(!showText)}>{showText ? '가리기' : '보이기'}</button>
      </>
  );
}

const INITIAL_TEXT = '안녕하세요';