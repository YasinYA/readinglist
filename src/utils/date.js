const primaryDateFormat = (date) => {
  const dateObj = new Date(date);
  return `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;
}

export { primaryDateFormat };
