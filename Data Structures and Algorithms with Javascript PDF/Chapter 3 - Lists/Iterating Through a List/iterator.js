// The 'for' loop starts by setting the current position to the front of the list
// The loop continues while the value of currPos is less than the length of the list
// We move forward the current position with the use of the next() function
for(names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}

// We can also iterate through the list from the end of the list
for(names.end(); names.currPos() >= 0; names.prev()) {
    console.log(names.getElement());
}

// iterators are used only to move through a list and should not be combined with any functions
// for adding and removing items