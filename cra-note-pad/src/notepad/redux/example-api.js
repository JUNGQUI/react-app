export function callApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) {
        resolve();
      } else {
        reject('call API Error');
      }
    }, 1000);
  });
}