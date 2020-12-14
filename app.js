//1.  Using a loop, iterate through this array and console.log all the donuts.

var donuts = new Array("chocolate", "vanilla", "glazed", "donut1", "donut2", "donut3", "donut4");
console.log(donuts);

for (i = 0; i < donuts.length; i++) {
    console.log("donut");
}

//2. Write the command to remove the first donut from the array.

donuts.shift();


//3. Write the command to remove the last donut from the array.

donuts.pop();


//4. Write the command to add a new donut "lime zest" to the front of the array.

donuts.unshift("lime zest");

//5.Write the command to add another donut “lemon pie to the end of the array.

donuts.push("lemon pie");

// 6.**Use either the join or toString method to convert an array to a string.

console.log(donuts)

// 7.**Write the command to make a copy of the array using slice. The copy should NOT include two donuts.

donuts=donuts.slice(2);

//8. Write the command that gives the indexOf where "chocolate" is located.

console.log(donuts.indexOf("chocolate"));

//9. Write the command that gives the indexOf where "glazed" is located (You may get a negative number).



// 10.Using the splice command, remove one donut from the array and add another.

donuts.splice(0, 1, "donut7");


//11. **Create a new variable called withDonut and set it equal to the people array concatenated with the string of "Bob".

var withDonut = donuts + ("Bob")
console.log(withDonut);




// 12. Reverse the order of the donuts in the array.

// console.log(donuts.reverse();

//13. **Create a function called getdonuts() that will display all the donuts in your array and display on your page.




for (i = 0; i < donuts.length; i++) {
    console.log("donut");
}









// var numbers= [9,10,11,12];
//  console.log(numbers);
// // // creating an array with the new js keyword
//  var strings= new Array("lime", "lemon", "orange", "cherry");
//  console.log(strings); 
// //use the js new keyword matk the index
//  var booleans= new Array()
//  booleans[0]= 9<10;
//  booleans[1]= 11===11.5;
//  booleans[2]= 12>8;
//  booleans[3]= "April"=="april";
//   console.log(booleans);
// //create an array with all of us use one of the methods to create an array
// var classlist= new Array()
// classlist[0]= "Ngoc";
// classlist[1]= "April";
// classlist[2]= "Kevin";
// classlist[3]= "Sheily";
// classlist[4]= "Destinee";
// classlist[5]= "Marvin";
// classlist[6]= "Syed";
// classlist[7]= "Abraham";
// console.log(classlist);
// // console.log(classlist);
// //Accessing an array
// console.log(classlist[6]);
// // .length method gives us the index # of our array
// console.log(classlist.length);
// //Array Methods
// //built-in methods.methodname(data);
// //.push
// classlist.push("Aven");
// //.pop
// classlist.pop(); 
// // .shift removes an index from the BEGINNING of an array
// classlist.shift();
// //.unshift "Ari" adds an index to the BEGINNING of an array
// classlist.unshift("Ari");
// //.splice add/remove an index in the array
// // replace 1 element at a certain index
// classlist.splice(3, 2, "Alex");
// // Looping over an array
// // to see all the items in our array //iterations
// // for loop while loop for each loop
// //3 things we need to loop through data
// for (i=0; i<classlist.length; i++) {
// console.log(classlist[i]);
// }
// //Finding an index
// //locate a specific array item
// //.indexof()
// classlist.indexOf("Syed");



