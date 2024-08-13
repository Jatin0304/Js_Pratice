const user = {
  username: "Jatin",
  price: "999",

  welcomeMessage: function () {
    //      console.log(`${this.username}, Welcome to website`);
    //    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "Jatin"
//     console.log(this.username);
// }



// const chai = function () {
    //   function chai() {
        //     let username = "Jatin";
        //     console.log(this.username);
        //   }
        // };
        const chai = () => {
            let username = "Jatin";
            console.log(this);
        }
        
        
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Jatin" })

console.log(addTwo(3,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()