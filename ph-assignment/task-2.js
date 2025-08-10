
// 2.Task: Object Manipulation


const books = [
  { title: "Game of Thrones", author: "George R.R. Martin", year: 1996 },
  { title: "Jack Reacher", author: "Lee Child", year: 1997 },
  { title: "Naruto", author: "Masashi Kishimoto", year: 1999 },
  { title: "Demon Slayers", author: "Koyoharu Gotouge", year: 2016 }
];

const getBookTitles = (bookArray) => {
  return bookArray.map(book => book.title);
}

const titles = getBookTitles(books);
console.log(titles); 