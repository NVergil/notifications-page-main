export const handleCardClick = (index, setCard) => {
  setCard((prevCard) => {
    const updatedCard = [...prevCard];
    updatedCard[index] = {
      ...updatedCard[index],
      active: false,
    };
    return updatedCard;
  });
};

export const markAll = () => {
  
};

export const countActiveItems = (arr) => {
  return arr.reduce((count, item) => {
    return item.active ? count + 1 : count;
  }, 0);
};

