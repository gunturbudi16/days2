// Aplikasi Perpustakaan

const library = [
  { title: "Aksksk", author: "jdjdjdj", status: true },
  { title: "B", author: "1", status: false },
  { title: "Cjdjdj", author: "2", status: true }
];

function findBookStatus(title) {
  let book = library.find(book => book.title == title);
  if (book.status == true) {
    return console.log("Book of " + book.title + " is AVAILABLE");
  } else {
    return console.log("Book of " + book.title + " is NOT AVAILABLE");
  }
}

findBookStatus("B");

function findBooksAvailability(status) {
  for (const props of library) {
    if (props.status == status) console.log(props);
  }
}

findBooksAvailability(true);
