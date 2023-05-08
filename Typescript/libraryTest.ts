import { Book } from "./book";
import {Library} from "./library"

let books0:Book = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")
let books1:Book = new Book("Harry Potter", 600, "3355512-JK24444", "JK Rowling", "Bloomsbury Salamandra")
let books2:Book = new Book("El Señor de los Anillos", 800, "00998877-TK34222", "J.R.R.Tolkien", "George Allen")
let books3:Book = new Book("Cancion de hielo y fuego", 1000, "55446622-GM75663", "George R.R. Martin", "Gigamesh")
let libOfBooks = [books0,books1,books2,books3]
let LibraryShop:Library = new Library(libOfBooks, "churruca", "Diego Dalvateo");

console.log(LibraryShop.toString())

