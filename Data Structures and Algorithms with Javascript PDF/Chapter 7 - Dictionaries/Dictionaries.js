function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.dataStore[key] = value;
}

function find(key, value){
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    for (var key in Object.keys(this.dataStore)) {
        console.log(key + " -> " + this.dataStore[key]);
    }
}