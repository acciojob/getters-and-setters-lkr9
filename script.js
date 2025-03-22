//complete this code
class Person {
constructor(name ,age){
this.name=name;
this.age=age;

}
getname(){
return this.name;
}
setname(n){
this.name=n}
getage(){
return this.age}
setage(a){
this.age=a}

}
class Student extends Person {
 study() {
        console.log(`${this.name} is studying`); 
 }
}

class Teacher extends Person {
 teach() {
        console.log(`${this.name} is teaching`); 
 }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
