### Data Structure is a systematic way to organize data in order to use it efficiently. Following terms are the foundation terms of a data structure.

- Interface − Each data structure has an interface. Interface represents the set of operations that a data structure supports. An interface only provides the list of supported operations, type of parameters they can accept and return type of these operations.

- Implementation − Implementation provides the internal representation of a data structure. Implementation also provides the definition of the algorithms used in the operations of the data structure.

## Stack
Arguably the most important Stack in JavaScript is the call stack where we push in the scope of a function whenever we execute it. Programmatically, it’s just an array with two principled operations: push and pop. Push adds elements to the top of the array, while Pop removes them from the same location. In other words, Stacks follow the “Last In, First Out” protocol (LIFO).

Below is an example of a Stack in code. Notice that we can reverse the order of the stack: the bottom becomes the top and the top becomes the bottom. As such, we can use the array’s unshift and shift methods in place of push and pop, respectively.

As the number of items grows, push/pop becomes increasingly more performant than unshift/shift because every item needs to be reindexed in the latter but not the former.
