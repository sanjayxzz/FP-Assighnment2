
//1//

const books = [
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Drama" },
  { title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
];

const filterFantasyBooks = books.filter(book => book.genre === "Fantasy")
console.log(filterFantasyBooks)

//2//

const movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
  { title: "Tripple Frontier", year: 2023, rating: 9.0, genre: "Action" },
  { title: "Jurassic Park", year: 1993, rating: 8.1, genre: "Adventure" },
];

const filterMovies = movies.filter(movie => movie.year > 2010 && movie.rating > 8.0 && movie.genre === "Action")
console.log(filterMovies)

//3//

const restaurants = [
  { name: "Pasta Paradise", stars: 4.5, cuisine: "Italian", openOnSundays: false },
  { name: "Sushi Sensation", stars: 3.8, cuisine: "Japanese", openOnSundays: true },
  { name: "Burger Binge", stars: 4.2, cuisine: "American", openOnSundays: true },
  { name: "Nasi", stars: 4.5, cuisine: "Italian", openOnSundays: true },
];

const filterRestaurants = restaurants.filter( restaurant => restaurant.cuisine === "Italian" && restaurant.openOnSundays && restaurant.stars >= 4)
console.log(filterRestaurants)

//4//

const products = [

  { name: 'Bread', price: 480, quantity: 3 },

  { name: 'Clips', price: 200, quantity: 5 },

  { name: 'green Bread Knife', price: 3077, quantity: 1 },

  { name: 'Slipper', price: 150, quantity: 2 },

]

const filterProducts = products.filter(product => product.name.toLowerCase().includes("bread")).map(product => product.name)
console.log(filterProducts)

//5//


const employees = [
  { name: "David", salary: 60000 },
  { name: "Emma", salary: 75000 },
  { name: "Alex", salary: 90000 },
  { name: "Sophie", salary: 55000 },
];

const addSalaryInfo = (employees) => {
  const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
  const averageSalary = totalSalary / employees.length;

  return employees.map(emp => ({
    ...emp,
    aboveAverage: emp.salary > averageSalary
  }));
};

console.log(addSalaryInfo(employees));


//6//
const community = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },
  { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] },
];

const mostActivePerson = (community) => 
  community.reduce((max, person) => {
    const totalHours = person.hours.reduce((sum, hour) => sum + hour, 0);
    return totalHours > max.totalHours ? { ...person, totalHours } : max;
  }, { totalHours: 0 });

console.log(mostActivePerson(community));


//7//

const communityData = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 4, 5, 6, 7] },
  { name: "Ramesh", role: "student", hours: [4, 5, 6, 4, 5, 6, 0] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [7, 8, 9, 7, 8, 9, 0] },
  { name: "Akshay", role: "student", hours: [1, 3, 5, 7, 9, 0, 2] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "Mohan", role: "student", hours: [4, 6, 8, 0, 1, 9, 2] },
];

const tagRegularStudents = (data) => 
  data.map(person => {
    const totalHours = person.hours.reduce((sum, hour) => sum + hour, 0);
    if (person.role === "student" && totalHours > 20) {
      return { ...person, tag: "regular" };
    }
    return person;
  });

console.log(tagRegularStudents(communityData));
