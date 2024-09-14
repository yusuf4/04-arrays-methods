// =========== Task 1
function checkAge(age) {
     return age>18 ?  true:  confirm('Родители разрешили?');
}
checkAge(15);


// ============ Task 2
function pow(x,n){
    let sum = x;
    for (let i = 1; i<n; i++){
        sum *=x;
    }
    return sum;
}
console.log(pow(3,2));


// =========== Task 3
let ask = ((question, yes, no)=>{
    if (confirm(question)) yes()
     else no();
})

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

// ========= Task 4

let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=>b-a);
alert(arr);


// =======  Task 5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
console.log(users);
let names=users.map((el)=>el.name);
console.log(names);
alert( names );


// =========== Task 6

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];
console.log(users);

let usersMapped = users.map(user=>({
    id: user.id,
    fullName: `${user.name} ${user.surname}`
}));
console.log(usersMapped)

// ======= Task 7

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petya, masha ];
console.log(arr);

function getAverageAge(arr){
    return arr.reduce((sum, currentValue)=>
         sum + currentValue.age / arr.length , 0
    )

}
//getAverageAge(arr)
console.log(getAverageAge(arr));
alert(getAverageAge(arr))

