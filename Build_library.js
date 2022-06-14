class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
   return (this._ratings.reduce((previousValue, currentValue) => previousValue + currentValue))/this._ratings.length;
  }
  addRating(array) {
    // this._ratings.push(array);
    // Code below returned 5 if a user set a mark more than 5 and 1 if it set below 1
    if(number > 5) {
      number = Math.min(number, 5);
    } else if(number < 1){
      number = Math.max(number, 1);
    }
    this._ratings.push(number);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
   get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
   get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
   get songs() {
    return this._songs;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed);

const personalJesus = new CD('Depeche Mode', 'Personal Jesus', [`Enjoy the silence`,
'Personal Jesus',
'Cover Me']);
personalJesus.toggleCheckOutStatus();
personalJesus.addRating(5);
personalJesus.addRating(4.5);
personalJesus.addRating(4.9);
personalJesus.addRating(5);
console.log(personalJesus.getAverageRating());
console.log(personalJesus);

// First variant of catalog----------------------------------------------------------------------------
/* 
let catalog = [];
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    catalog.push(this);
  }
*/
// Second variant of catlog----------------------------------------------------------------------------
/*
let catalog = {

  _books: [],

  _movies:[],

  _cds:[],

  get books(){
      return this._books;
  },

  get Movies(){
      return this._movies;
  },

  get cds(){
      return this._cds;
  },

  addBook(book){
    this._books.push(book)
  },

  addMovies(movie){
    this._movies.push(movie)
  },

  addCds(cd){
      this._cds.push(cd)
  },

  removeBook(book){
    let booksaArr = this._books;
    for(let i = 0; i < booksaArr.length; i++){
      if(booksaArr[i].title === book){
       delete booksaArr[i]
      }
    }
   },

   removeMovie(movie){
     let movieArr = this._movies;
     for(let i = 0; i < movieArr.length; i++){
       if(movieArr[i].title === movie){
         delete movieArr[i]
       }
     }
   },

   removeCd(cd){
     let cdArr = this._cds;
     for(let i = 0; i < cdArr.length; i++){
       if(cdArr[i].title === cd){
         delete cdArr[i]
       }
     }
   },

  findBook(book){
    let booksaArr = this._books;
    for(let i = 0; i < booksaArr.length; i++){
      if(booksaArr[i].title === book){
        let Book = booksaArr[i]
        console.log(`(Title: ${Book.title}),(Author: ${Book.author}),(ratings: ${Book.ratings}),(Average rating: ${Book.averageRating}),(Pages: ${Book.pages}),(Checked Out: ${Book.isCheckedOut})`)
      }
    }
   },

   findMovie(movie){
     let movieArr = this._movies;
     for(let i = 0; i < movieArr.length; i++){
       if(movieArr[i].title === movie){
         let Movie = movieArr[i]
         console.log(`(Title: ${Movie.title}),(Director: ${Movie.director}),(ratings: ${Movie.ratings}),(Average rating: ${Movie.averageRating}),(Run Time: ${Movie.runTime}),(Checked Out: ${Movie.isCheckedOut})`)
       }
     }
   },

   findCd(cd){
     let cdArr = this._cds;
     for(let i = 0; i < cdArr.length; i++){
       if(cdArr[i].title === cd){
         let Cd = cdArr[i]
         console.log(`(Title: ${Cd.title}),(Artist: ${Cd.artist}),(ratings: ${Cd.ratings}),(Average rating: ${Cd.averageRating}),(Tracks: ${Cd.songs}),(Shuffled Tracks: ${Cd.shuffledTracks}),(Checked Out: ${Cd.isCheckedOut})`)
       }
     }
   },
}

// Something to improve the LET catalog above 
// const catalog = {
// ...
//   removeItem(title, medium) {
//     this[medium] = this[medium].filter(m =>m.title !== title)
//   }
// }
// catalog.removeItem('Ok Computer', 'cds')
*/

//Third variant of catalog----------------------------------------------------------------------------
/*
// STEP 1: Catalog class. 
class Catalog {
    constructor() {
        this._media = [];
    }
    get media() {
        return this._media;
    }
    addMedia(media) {
        this._media.push(media);
    }
}
// STEP 2: New catalog instance.
const catalog = new Catalog();

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    // STEP 3: Add all media to catalog
        catalog.addMedia(this);
  }
  ...

console.log(catalog.media);
*/