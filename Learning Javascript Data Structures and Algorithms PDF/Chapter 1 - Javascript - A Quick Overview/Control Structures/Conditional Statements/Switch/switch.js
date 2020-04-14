var month = 5;

switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Month is not January, February or March");
}

// The 'case' clause determines whether the value of 'switch' is equal to the value of
//      the 'case' clause
// The 'break' statement stops the switch statement from executing the rest of the statement
//      (otherwise, it will execute all the scripts from all case clauses below the match case
//      until a break statement is found in one of the case clauses)
// The 'default' statement executes if none of the case statements are true (or if the executed
//      'case' statement does not have a 'break' statement)