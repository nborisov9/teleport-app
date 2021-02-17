const scrollElement = (ref: React.RefObject<HTMLUListElement>, operator: string) => {
  if (ref.current) {
    if (operator === 'increment') {
      return (ref.current.scrollTop += 37);
    }

    if (operator === 'decrement') {
      return (ref.current.scrollTop -= 37);
    }
  }
};

export { scrollElement };
