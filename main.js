$(document).ready(function(event) {
    class User {
        constructor(name, surname, dateofbirth, age, mail, mob, city, agry){
            this.name = name;
            this.surname = surname;
            this.dateofbirth = dateofbirth;
            this.age = age;
            this.mail = mail;
            this.mob = mob;
            this.city = city;
            this.agry = agry;
        }
    }
    let xhr = new XMLHttpRequest(),
        button = $('#submit');
        button.on('click', function(event) {
            userName = $('#name').val();
            userSurname = $('#surname').val();
            userDateofbirth = $('#dateofbirth').val();
            userAge = $('#age').val();
            userMail = $('#mail').val();
            userMob = $('#mob').val();
            userCity = $('#city').val();
            userAgry = $('#agry').val();
            xhr.open('post', 'https://www.google.com/', true);
            user = new User(userName,userSurname,userDateofbirth,userAge,userMail,userMob,userCity,userAgry) 
            let sendUser = JSON.stringify(user);
            xhr.onloadend = (user) => {
            };
            xhr.onerror = (error) => {
            };
            xhr.onprogress = (progress) => {
            };
       });
});