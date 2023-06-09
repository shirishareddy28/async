let allUsers = [
{
    Name:"siri",
    image:"https://images.unsplash.com/photo-1587614382231-d1590f0039e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60 ",
    DateofBirth:" 23-08-1994",
    Email:"siri@gmail.com",
},
{
    Name:"puri",
    image:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60 ",
    DateofBirth:"23-08-2000",
    Email:"puri@gmail.com",
},
{
    Name:"giri",
    image:"https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60 ",
    DateofBirth:"18-10-1993",
    Email:"giri@gmail.com",
},
{
    Name:"rohit",
    image:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60 ",
    DateofBirth:"18-07-1995",
    Email:"rohit@gmail.com",
},
{
    Name:"bharath",
    image:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60 ",
    DateofBirth:"28-01-2000",
    Email:"bharath@gmail.com",
},
];
function generateRandomUser() {
    let random = Math.floor(Math.random() * allUsers.length);
    document.getElementById("userName").innerText=allUsers[random].Name;
    document.getElementById("userEmail").innerText=allUsers[random].Email;
    document.getElementById("userDOB").innerText=allUsers[random].DateofBirth;
    document.getElementById("userImg").setAttribute("src",allUsers[random].image);

}
