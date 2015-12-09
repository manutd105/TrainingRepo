var books = [
  {title: "The Hobbit",
   author: "J. R. R. Tolkein'",
   alreadyRead: true
  },
  {title: "The Lord of the Rings",
  author: "J. R. R. Tolkein'",
  alreadyRead: false
  }
  ]; 

  for (var i = 0; i < books.length; i++) 
  {
  var book = books[i]; 

  if (book.alreadyRead) 
  {
    console.log("You already read " + book.title + " by " + book.author);
  } else 
  {
    console.log("You still need to read " + book.title + " by " + book.author);
  }
  }