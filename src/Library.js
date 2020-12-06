
function createLibrary(library) {
  return {
    name: library,
    shelves: {fantasy: [],
              fiction: [],
              nonFiction: []},
  }
};

function addBook(library, bookToAdd) {
  if (bookToAdd.genre === "fantasy") {
  return library.shelves.fantasy.push(bookToAdd);
  } else if (bookToAdd.genre === "fiction") {
    return library.shelves.fiction.push(bookToAdd);
    } else if (bookToAdd.genre === "nonFiction") {
      return library.shelves.nonFiction.push(bookToAdd);
      } else {
         return library.shelves.nonFiction.push(bookToAdd);
     }

};

function checkoutBook(library, book) {
  for (var i = 0; i < library.length; i++){
    if (library.shelves.includes(book))
    return library.shelves.shift(book) 
 }
};
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
