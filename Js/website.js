// const form = document.querySelector("form");
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("number");
// const mess = document.getElementById("message");
// function sendEmail() {
//     const clientMessage = `Full Name:${fullName.value} <br> Email:${email.value}<br> Phone:${number.value}<br> Message:${mess.value}`
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "akrakibhossain06@gmail.com",
//         Password: "BA4E90E680A27008790B4985C123C691AC8E",
//         To: 'akrakibhossain06@gmail.com',
//         From: "akrakibhossain06@gmail.com",
//         Subject: "This is the subject",
//         Body: clientMessage
//     }).then(
//         message => {
//             if (message == "OK") {
//                 Swal.fire({
//                     title: "Sent!",
//                     text: "Message sent successfully!",
//                     icon: "success"
//                 });
//             }
//         }
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
// });


const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle('sticky', window.scrollY > 100);
});


let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
}


// document.querySelector("openModal").addEventListener('click', () => {
//     document.querySelector('.modal').style.display = 'flex'
// });


// document.querySelector("closeBtn").addEventListener('click', () => {
//     document.querySelector('.modal').style.display = 'none'
// });


