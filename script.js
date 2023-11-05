//Resume using JSON format:

let Profile = {
    "AboutMe":{
        "Name": "Nathisha SM",
        "Role":"MERN Developer",
        "EmailId":"abcd@gmail.com",
        "PhoneNumber":"1234567890",
        "Address":["TamilNadu", "Kanyakumari", "Nagercoil"],
        "Education":[ "BE-EEE", "Anna University", "2018", "8.3"],
    },
    "Summary":"A Passionate MERN Stack Developer",
    

    "Work Experience": {
        "Job Title" :"Manual Tester",
        "Description": "Having 3 yrs of experience as a tester",
        "Company name":"Amazon Development center",
        "Achievements": "Tested and helped in developing quality software products"
    },
    "Skills":{
    "Name":"Web Development",
    "Keywords": ["HTML", "CSS", "Javascript"]
    },
    
    "Hobby": ["Debugging", "Listening to music"],

    "Languages known":["English", "Tamil", "Malayalam", "Hindi"],
    "References": {
        "name":"qwerty",
        "contact":"0987654321"

    }

}
console.log(Profile);



// JSON iteration over (for, for in  loop, for each, for of )
// Using for loop:
var arr=[{
    "name":"John",
    "age": "20",
    "year":"1990",
    "city":"Delhi"
},
{
"name":"Doe",
"age": "30",
"city":"Chennai",
"year":1995
}

]
//using for loop:
for (var i=0; i<arr.length; i++)
{
    console.log(arr[i].name , arr[i].age);
}

//using for In:
for (let key in arr)
{
   console.log(arr[key].name, arr[key].year);
}

//using for of:
for (let data of arr)
{
    console.log(data.name, data.city);
}