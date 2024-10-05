const renderDescription = (text: string) => {
  const parts = text.split(/(\{highlight}.*?\{\/highlight})/g);
  return parts.map((part, index) => {
    if (part.startsWith('{highlight}') && part.endsWith('{/highlight}')) {
      const highlightedText = part
        .replace('{highlight}', '')
        .replace('{/highlight}', '');
      return (
        <span key={index} className="highlight">
          {highlightedText}
        </span>
      );
    }
    return part;
  });
};

export default renderDescription;
