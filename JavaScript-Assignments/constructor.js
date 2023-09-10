function Student(student_name, student_age, student_gender) 
{
    this.student_name = student_name;
    this.student_age = student_age;
    this.student_gender = student_gender;

}

let s1 = new Student("Pankaj", 23, "Male");

let s2 = new Student("Reena", 23, "Female");

let s3 = new Student("Rajeev", 23, "Male");

Student.prototype.branch = "CSE";
Student.prototype.college = "ABC";

function print_object(s) 
{
    console.log(`Name: ${s.student_name}`);
    console.log(`Age: ${s.student_age}`);
    console.log(`Gender: ${s.student_gender}`);
    console.log(`Branch: ${s.branch}`);
    console.log(`College: ${s.college}`);
    console.log();


}
print_object(s1);
print_object(s2);
print_object(s3);




