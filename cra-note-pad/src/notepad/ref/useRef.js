import React, {useRef} from 'react';

export default function RefUseRefExample() {
  const boxListRef = useRef({});
  function showRightBox() {
    let maxRight = 0;
    let maxId = '';
    for (const box of BOX_LIST) {
      const ref = boxListRef.current[box.id];
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (maxRight < rect.right) {
          maxId = box.id;
          maxRight = rect.right;
        }
      }
    }
    alert(`가장 오른쪽 사각형의 ID 는 ${maxId} 입니다.`);
  }

  return (
      <div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100%'
        }}>
          {BOX_LIST.map(item => (
              <div key={item.id}
                   ref={ref => (boxListRef.current[item.id] = ref)}
                   style={{
                     flex: '0 0 auto',
                     width: item.width,
                     height:100,
                     backgroundColor: 'yellow',
                     border: 'solid 1px red'}}>
                {`box_${item.id}`}
              </div>
          ))}
        </div>
        <button onClick={showRightBox}>오른쪽 끝 요소는?</button>
      </div>
  );
}

const BOX_LIST = [
  { id : 1, width : 70},
  { id : 2, width : 100},
  { id : 3, width : 80},
  { id : 4, width : 50},
  { id : 5, width : 20},
  { id : 6, width : 150},
  { id : 7, width : 30}
];