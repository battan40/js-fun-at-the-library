function createTitle(thinkOf1) {
  return `The ${thinkOf1}`
}

function buildMainCharacter(info, numb, choice) {
  var ghoulCharacter = {
    name: info,
    age: numb,
    pronouns: choice,
  };
  return ghoulCharacter;
}

function saveReview(reviewsHere, reviews) {
  if (reviews.includes(reviewsHere)) {
    return reviews
  } else {
    reviews.push(reviewsHere);
  }
};


var bookTitle = "Teenage Ghoul"
function calculatePageCount (bookTitle) {
  for (var i = 0; i <= 340; i ++)
  return (([...bookTitle].length) * [20]);
}
calculatePageCount(bookTitle);


var bookTitle = "The Dragon in the Summer"
function calculatePageCount (bookTitle) {
  for (var i = 0; i <= 560; i ++)
  return (([...bookTitle].length) * [20]);
}
calculatePageCount(bookTitle);



function writeBook(title, mainCharacter, genre) {
  book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return book;
}

function writeNewBook(title, mainCharacter, genre) {
  dragonBook = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return dragonBook;
}

function editBook(book) {
  book.pageCount *= .75
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
