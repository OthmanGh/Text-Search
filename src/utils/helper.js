function formatDate(dateString) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [year, month, day] = dateString.split('-');

  const monthName = months[parseInt(month) - 1];

  return `${monthName} ${day}, ${year}`;
}

export default formatDate;
