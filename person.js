// 3. Write a “person” class to hold all the details.

class Person {
  constructor(FullName, Age, Gender, City, State, PhnNumber, Email) {
    this.FullName = FullName;
    this.Age = Age;
    this.Gender = Gender;
    this.City = City;
    this.State = State;
    this.PhnNumber = PhnNumber;
    this.Email = Email;
  }
  getFullName() {
    console.log(`Name: ${this.FullName}`);
  }
  getAge() {
    console.log(`Age: ${this.Age}`);
  }
  getGender() {
    console.log(`Gender: ${this.Gender}`);
  }
  getCity() {
    console.log(`City: ${this.City}`);
  }
  getState() {
    console.log(`State: ${this.State}`);
  }
  getPhnNumber() {
    console.log(`Phone Number: ${this.PhnNumber}`);
  }
  getEmail() {
    console.log(`Email: ${this.Email}`);
  }
}

let person = new Person("Charan",23,"M","Hyderabad","Telangana","9063553767","thummalasaicharanreddy@gmail.com")

person.getFullName();
person.getAge();
person.getGender();
person.getCity();
person.getState();
person.getPhnNumber();
person.getEmail();