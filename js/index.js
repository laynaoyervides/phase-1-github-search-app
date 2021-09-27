//global variables
let userInput = document.getElementById("search").value.trim();
let user_list = document.getElementById("user-list");
//Accept: application/vnd.github.v3+json
//get username from API
function searchGit () {
   let gitApi = `https://api.github.com/users/${userInput}/repos`;
    return fetch(gitApi) 
    .then(res => res.json())
    .then (function(data){
        console.log(data);
        if (data === 'Not Found'){
            alert ("user not found");
            return false;
        }
        else {
            user_list.innerHTML = data.login;
        }
    })
}
let user_name = "";

//
//button click functions
function submitSearch() {
    if (userInput.length<= 0){
        alert("Please enter a username");
        document.getElementById("search").value = "";
        document.getElementById("search").value.focus();
        return false;
    }
    else {
        user_name = document.getElementById.split("").join("");
        searchGit();
        document.getElementById("search").value = "";
        document.getElementById("search").value.focus();
    }
}

const form = document.getElementById('github-form');
form.addEventListener('submit', submitSearch);

console.log(userInput);

