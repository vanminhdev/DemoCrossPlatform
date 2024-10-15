console.log("Hello '' world");
var str = "Nguyen Van A";
console.log(`Hello world ${str}`);

var str2 = "";

if (str2) {
    
}

console.log(-1/0);

let num = 1;
let num2 = num;

num = 3;
console.log(num2);

let student = {
    id: 1,
    name: "Nguyễn Văn A",
    method1: () => {
        console.log("abc")
    }
}



student.method1();

let student2 = student;
student.name = "Nguyễn Văn B";

console.log(student2);


function method1() {
    let a = 1;
    a = 2;

    //let a = 2;

    const b = 1;

    var c = 1;
    c = 2;

    var c = 3;

    console.log("method1");
}

method1();

let method2 = () => {
    console.log("method2");
}

console.log(method1);
console.log(method2);

const student3 = {
    id: 1,
    name: "Nguyễn Văn A",
}

// student3 = {
//     id: 2,
//     name: "Nguyễn Văn B",
// }

student3.id = 2;
student3.name = "Nguyễn Văn B";

console.log(student3);

let abc = ""

if (abc) {
    console.log('vào đây');
}

let x = abc ? "A" : "B";