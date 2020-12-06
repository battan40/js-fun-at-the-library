


function shelfBook(book, bookShelf) {
  if (bookShelf.length < 3) {
    bookShelf.unshift(book)
  }
};

function unshelfBook(bookTitle, shelf) {
  for(var i = 0; i <= shelf.length; i++){
    if (shelf[i].title === bookTitle) {
      return shelf.splice(i, 1)
  }
}
};

function listTitles(shelf) {
  var list = [];
  for (var i = 0; i < shelf.length; i++) {
    list.push(shelf[i].title);
  }
  return list.join(", ")
};


function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title)  {
      return true
    }
  }
     return false
};



module.exports = {
   shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
