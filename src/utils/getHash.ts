export const getHash = () =>
  window.location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';