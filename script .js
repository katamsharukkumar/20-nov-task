//  Q-1
console.log(`-----------------Q1-------------------------`);
class book {
  title;
  author;
  isbn;
  constructor(title,author,isbn,) 
  { 
    this.title=title;
    this.author=author;
    this.isbn=isbn;
  }

  checkout()
  {
      console.log(this.title,"book bring by someone")
  }
  return()
  {
      console.log(this.title,"book is returned")
  }
  updatetitle(NewTitle)
  {
    this.title = NewTitle
    console.log("Title was changed to" ,NewTitle)
  }
}

var library=new book("Amma diarylo konni pageelu","Ravi","5604");
console.log(library)
library.checkout();
library.return();
library.updatetitle("Amma diarylo konni pageelu part-2");
console.log(library)

console.log(`-----------------Q2-------------------------`);
// Q-2 
class Product {
  name;
  price;
  category;
  

  constructor(name,price,category) {
   this.name = name;
   this.price =price;
   this.category =category;
  }

  applyDiscount(amount){  
  this.price = this.price-amount;
}

  getPriceAtferDiscount(){
    console.log(`The price of ${this.name} ${this.category} after discount is ${this.price}`)
}

}

var fan =new Product("Crompton",2000,"highspeedfan");
console.log(fan);
fan.applyDiscount(500);
console.log(fan);
fan.getPriceAtferDiscount();

console.log(`--------------`);
var light =new Product("wipro",500,"150w light");
console.log(light);
light.applyDiscount(50);
console.log(light);
light.getPriceAtferDiscount();

console.log(`-----------------Q3-------------------------`);
// Q-3

class BankAccount {
  accountHolderName;
  accountNumber;
  balance;

  constructor(holdername,number,amount) {
    this.accountHolderName = holdername;
    this.accountNumber= number;
    this.balance =amount;
  }

  deposit(amount) {
    this.balance += amount;
    // console.log(`${this.balance}`);
  }

  withdraw(amount) {
    this.balance -=amount;
    // console.log(`${this.balance}`);
  }

  getBalance() {
    console.log(this.balance);
  }
}

var bankholder1 =new BankAccount('sharuk',32453232,5000)
console.log(bankholder1);
bankholder1.deposit(500);
bankholder1.getBalance();
bankholder1.withdraw(1000);
bankholder1.getBalance();
console.log(`--------------`);

var bankholder2 =new BankAccount('sasi',3453457856,10000)
console.log(bankholder2);
bankholder2.deposit(2000);
bankholder2.getBalance();
bankholder2.withdraw(6000);
bankholder2.getBalance();

// Q-4
console.log(`-----------------Q4-------------------------`);
class Vehicle {
  model;
  licensePlate;
  mileage;

  constructor(model,licensePlate,mileage) {
    this.model = model;
    this.licensePlate = licensePlate;
    this.mileage = mileage;
  }
    start() {
      console.log(`${this.model} car starts`);
    }
    drive(miles) {
     this.currentMileage= this.mileage + miles;
    }

    getMileage() {
      console.log(this.currentMileage);
      
    }
}

var Audi =new Vehicle("A5","AP37DC9474",10)
console.log(Audi);
Audi.start();
Audi.drive(10);
Audi.getMileage();
console.log(`-------------`);
var Toyota =new Vehicle("Vellfire","AP37DC9474",8)
console.log(Toyota);
Toyota.start();
Toyota.drive(6);
Toyota.getMileage();

console.log(`-----------------Q5-------------------------`);
// Q5

class Student {
  name;
  grade;

  constructor(name,grade) {
    this.name = name;
    this.grade = grade;
  }

  setGrade(newGrade) {
    this.grade = newGrade;
  }

  getGrade() {
    console.log(this.grade);
  }
}

var student1 =new Student("Telugu", "A");
console.log(student1);
student1.setGrade("A+");
student1.getGrade();
console.log(`--------------`);
var student2 =new Student("English", "C");
console.log(student2);
student2.setGrade("B");
student2.getGrade();