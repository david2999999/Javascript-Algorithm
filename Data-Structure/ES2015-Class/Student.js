class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        console.log(`Your full name is ${this.firstName} ${this.lastName}`);
    }
}

let firstStudent = new Student("Dav", "Qwe");
let secondStudent = new Student("Harry", "Steele");

firstStudent.fullName();
secondStudent.fullName();