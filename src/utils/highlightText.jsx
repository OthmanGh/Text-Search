export const highlightText = (text, searchQuery) => {
  if (!searchQuery.trim()) return text;

  const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
  return parts.map((part, index) => (
    <span key={index} className={part.toLowerCase() === searchQuery.toLowerCase() ? 'highlight' : ''}>
      {part}
    </span>
  ));
};
