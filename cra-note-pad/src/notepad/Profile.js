import React from 'react';
import useUser from './useUser';

export default function Profile({userId}) {
  const user = useUser(userId);

  return (<div>
        {!user && <p>사용자 정보를 가져오는 중...</p>}
        {user && (
            <>
              <p>{`이름 : ${user.name}`}</p>
              <p>{`나이 : ${user.age}`}</p>
            </>
        )}
      </div>
  );
}