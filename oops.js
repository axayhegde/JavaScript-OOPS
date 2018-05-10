//Declaring a class ES6

class Student {
    constructor(rollNo,name,grade){
        this.rollNo = rollNo;
        this.name = name;
        this.grade = grade;
    }
    show(){
        console.log('The students name is ' + this.name);
        console.log('The students rollNo is ' + this.rollNo);
        console.log('The students grade is ' + this.grade);
    }
}

//Creating an instance
var studentObj = new Student(1,"akshay",9);
studentObj.show();
