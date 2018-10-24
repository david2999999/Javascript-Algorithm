class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        console.log(`Your full name is ${this.firstName} ${this.lastName}`);
    }

    markLate() {
        this.tardies++;
        console.log(`${this.firstName} ${this.lastName} has been late ${this.tardies} times`);
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage() {
        let sum = this.scores.reduce((a, b) => a + b);
        return sum / this.scores.length;
    }

    static EnrollStudents(...students) {
        return "Enrolling students";
    }
}

let firstStudent = new Student("Dav", "Qwe");
let secondStudent = new Student("Harry", "Steele");

firstStudent.fullName();
firstStudent.addScore(98);
firstStudent.addScore(2);
console.log(firstStudent.calculateAverage());

secondStudent.fullName();