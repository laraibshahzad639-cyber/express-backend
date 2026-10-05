const books = [

    {
        id: 1,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        price: 4000,
        color: "Red",
        publisher: "Prentice Hall",
        year: 2008,
        pages: 464,
        language: "English",
        rating: 4.5,
        stock: 10,
        description: "A book about writing clean and maintainable code."
    },

    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Help",
        price: 2000,
        color: "White",
        publisher: "Avery",
        year: 2018,
        pages: 320,
        language: "English",
        rating: 4.8,
        stock: 15,
        description: "A practical guide to building good habits and breaking bad ones."
    },

    {
        id: 3,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        category: "Programming",
        price: 1500,
        color: "Black",
        publisher: "Addison-Wesley",
        year: 1999,
        pages: 352,
        language: "English",
        rating: 4.7,
        stock: 8,
        description: "A guide to becoming a better and more effective programmer."
    },

    {
        id: 4,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Finance",
        price: 3000,
        color: "Red",
        publisher: "Plata Publishing",
        year: 1997,
        pages: 336,
        language: "English",
        rating: 4.6,
        stock: 12,
        description: "A book about financial education and managing money."
    },

    {
        id: 5,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        category: "Programming",
        price: 1300,
        color: "Blue",
        publisher: "O'Reilly Media",
        year: 2008,
        pages: 176,
        language: "English",
        rating: 4.2,
        stock: 6,
        description: "A guide to the important and useful parts of JavaScript."
    }

];
//sort(a to z )

// books.sort((a,b)=>{
//     if(a.author<b.author){
//       return -1
//     }
//     if(a.author>b.author){
//       return 1
//     }
//     else{                                                                
//       return 0
//     }

// })

// sort(z to a )
books.sort((a,b)=>{
  if(a.author<b.author)
  {
    return -1
  }
  if(a.author>b.author){
    return 1
  }
  else{
    return 0
  }
})


export default books;