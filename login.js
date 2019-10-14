/* eslint-disable require-jsdoc */
import {
    Courses,
    User,
    allUsers,
    allCourses
} from "/main.js"
function loginAuthentication() {
    const userId = document.getElementById("user");
    const password = document.getElementById("password");
    let users = [{ "user1": new User("john", "doe", "123456789", "student", "password1", "123") },
    { "user2": new User("leul", "tarik", "12345678910", "student1", "password2", "1234") }];
    for (let user of users) {

        if (user._id === userId && user._password === password) {
            if (user.role === "student") window.open(./Users/leulnecha / Documents / GitHub / Project1 / student.html, '_blank')
            else if (user.role === "faculty") window.open(/Users/leulnecha / Documents / GitHub / Project1 / student.html, '_blank')
            else window.open(/Users/leulnecha / Documents / GitHub / Project1 / student.html, '_blank')
        }


    }

}
document.getElementById("login").addEventListener("click", loginAuthentication());