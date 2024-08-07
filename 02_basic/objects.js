// singleton 

//Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Jatin",
    age: "21",
    [mySym]: "mykey1",
    email: "Jatin@google.com",
    location:  "Ghaziabad",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// functions 

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
