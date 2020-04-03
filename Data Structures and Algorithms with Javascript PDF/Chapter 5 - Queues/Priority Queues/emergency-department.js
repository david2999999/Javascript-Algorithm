function patient(name, code) {
    this.name = name;
    this.code = code;
}

// we need to redefine the dequeue() function that removes the element in the queue with the
// highest priority, which is defined with the lowest priority code.
// The new dequeue() function will iterate through the queue's underlying array and remove
// the element with the lowest priority code
function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; i++) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority, 1);
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
    }
    return retStr;
}

var emgergencyDepartment = new Queue();

var p = new Patient("Smith",5);
emgergencyDepartment.enqueue(p);

p = new Patient("Jones", 4);
emgergencyDepartment.enqueue(p);

p = new Patient("Fehrenbach", 6);
emgergencyDepartment.enqueue(p);

p = new Patient("Brown", 1);
emgergencyDepartment.enqueue(p);

p = new Patient("Ingram", 1);
emgergencyDepartment.enqueue(p);

console.log(emgergencyDepartment.toString());
var seen = emgergencyDepartment.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(emgergencyDepartment.toString());

// another round
seen = emgergencyDepartment.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(emgergencyDepartment.toString());

seen = emgergencyDepartment.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(emgergencyDepartment.toString());