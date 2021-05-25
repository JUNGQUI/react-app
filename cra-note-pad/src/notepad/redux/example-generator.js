function* minsu() {
  const msgList = [
    '민수1',
    '민수2',
    '민수3',
    '민수4',
    '민수5',
  ];

  for(const msg of msgList) {
    console.log('before yield');
    console.log('수지:', yield msg);
    console.log('after yield');
  }
}

function suji() {
  const msgList = [
    '',
    '수지1',
    '수지2',
    '수지3',
    '수지4',
  ]
  const gen = minsu();
  for (const msg of msgList) {
    console.log('before suji');
    console.log('민수:', gen.next(msg).value);
    console.log('after suji');
  }
}