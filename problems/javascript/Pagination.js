
function sortItems(items, sortParameter, sortOrder){
  const sortedItems = items.sort((itemA, itemB) => {
    const sortA = itemA[sortParameter];
    const sortB = itemB[sortParameter];
    if (sortParameter === 0){
      return sortA.localeCompare(sortB);
    }
    return Number(sortA) - Number(sortB);
  });
  if (sortOrder === 1){
    return sortedItems.reverse();
  }
  return sortedItems;
}

function fetchItemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber) {
    // Write your code here
    const sortedItems = sortItems(items, sortParameter, sortOrder);
    const start = itemsPerPage * pageNumber;
    const stop = pageNumber * itemsPerPage + itemsPerPage;
    return sortedItems.slice(start, stop).map((item) => item[0]);
}

fetchItemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber);
