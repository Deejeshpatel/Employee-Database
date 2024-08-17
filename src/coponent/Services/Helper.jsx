export const getData = () => {
  const data = localStorage.getItem('myData');
  return data ? JSON.parse(data) : [];
};

export const saveData = (data) => {
  localStorage.setItem('myData', JSON.stringify(data));
};
