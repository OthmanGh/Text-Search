export function formatDate(dateString) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [year, month, day] = dateString.split('-');

  const monthName = months[parseInt(month) - 1];

  return `${monthName} ${day}, ${year}`;
}

export const highlightText = (text, searchQuery) => {
  if (!searchQuery.trim()) return text;

  const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
  return parts.map((part, index) => (
    <span key={index} className={part.toLowerCase() === searchQuery.toLowerCase() ? 'highlight' : ''}>
      {part}
    </span>
  ));
};
