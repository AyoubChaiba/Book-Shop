import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() {  }
  getBooks() {
      return  [
        {
          id : 1,
          title : "The Design of Web APIs",
          author : "Arnaud Lauret",
          image : "https://m.media-amazon.com/images/I/61ZND26BDZL._SY466_.jpg",
          description : "The Design of Web APIs is a practical, example-packed guide to crafting extraordinary web APIs. Author Arnaud Lauret demonstrates fantastic design principles and techniques you can apply to both public and private web APIs.",
          amount : 38.47 ,
        },
        {
          id : 2,
          title : "Learning GraphQL: Declarative Data Fetching for Modern Web Apps",
          author : "Eve Porcello" ,
          image : "https://m.media-amazon.com/images/I/91FpTCr6IWL._SY466_.jpg",
          description : "Why is GraphQL the most innovative technology for fetching data since Ajax? By providing a query language for your APIs and a runtime for fulfilling queries with your data, GraphQL presents a clear alternative to REST and ad hoc web service architectures. With this practical guide, Alex Banks and Eve Porcello deliver a clear learning path for frontend web developers, backend engineers, and project and product managers looking to get started with GraphQL." ,
          amount : 24.5 ,
        },
        {
          id : 3,
          title : "Web Scraping with Python: Collecting More Data from the Modern Web",
          author : " Ryan Mitchell" ,
          image : "https://m.media-amazon.com/images/I/91F185Qd4TL._SY466_.jpg",
          description : "If programming is magic then web scraping is surely a form of wizardry. By writing a simple automated program, you can query web servers, request data, and parse it to extract the information you need. The expanded edition of this practical book not only introduces you web scraping, but also serves as a comprehensive guide to scraping almost every type of data from the modern web." ,
          amount : 64.5 ,
        },
        {
          id : 4,
          title : "Elon Musk",
          author : "Walter Isaacson" ,
          image : "https://m.media-amazon.com/images/I/814mI0-rkxL._SY466_.jpg",
          description : "When Elon Musk was a kid in South Africa, he was regularly beaten by bullies. One day a group pushed him down some concrete steps and kicked him until his face was a swollen ball of flesh. He was in the hospital for a week. But the physical scars were minor compared to the emotional ones inflicted by his father, an engineer, rogue, and charismatic fantasist." ,
          amount : 14.5 ,
        },
        {
          id : 5,
          title : "Python Crash Course, 3rd Edition: A Hands-On, Project-Based Introduction to Programming",
          author : "Eric Matthes " ,
          image : "https://m.media-amazon.com/images/I/8118skNqi1L._SY466_.jpg",
          description : "You’ll start by learning basic programming concepts, such as variables, lists, classes, and loops, and practice writing clean code with exercises for each topic. You’ll also learn how to make your programs interactive and test your code safely before adding it to a project. You’ll put your new knowledge into practice by creating a Space Invaders–inspired arcade game, building a set of data visualizations with Python’s handy libraries, and deploying a simple application online." ,
          amount : 74.5 ,
        },
        {
          id : 6,
          title : "Steve Jobs",
          author : "Walter Isaacson" ,
          image : "https://m.media-amazon.com/images/I/71JUYyLjZeL._SL1500_.jpg",
          description : "Based on more than forty interviews with Steve Jobs conducted over two years—as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing." ,
          amount : 84.5 ,
        },
      ]
    }
}
