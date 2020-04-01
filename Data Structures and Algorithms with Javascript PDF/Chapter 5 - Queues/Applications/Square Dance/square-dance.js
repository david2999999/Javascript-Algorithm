// Our scenario is to simulate a square dance for singles with a queue
// When men and women arrive at this square dance, they enter the dance hall and
// stand in line for their gender
    // As room becomes available on the dance floor, dance partners are chosen
    // by taking the first man and woman in line
    // The next man and woman move to the front of their respective lines
    // When a couple leaves the floor and there is not both a man and a woman at the front of each line, this fact is announced

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    var names = read("dancers.txt").split("\n");
    for (var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }

    for (var j = 0; j < names.length; j++) {
        var dancer = names[j].split(" ");
        var sex = dancer[0];
        var name = dancer[1];

        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    console.log("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
        var person = females.dequeue();
        putstr("Female dance ris: " + person.name);
        person = males.dequeue();
        console.log(" and the male dancer is: " + person.name);
    }
    console.log();
}