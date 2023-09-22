function signUp() {
  var name = document.getElementById("name");
  var surname = document.getElementById("surname");
  var email = document.getElementById("email");
  var pw = document.getElementById("password");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (pw.value.length == 0) {
    alert("Please fill in password");
  } else if (name.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (pw.value.length > 8) {
    alert("Max of 8");
  } else if (!pw.value.match(numbers)) {
    alert("please add 1 number");
  } else if (!pw.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!pw.value.match(lowerCaseLetters)) {
    alert("please add 1 lovercase letter");
  } else {
    localStorage.setItem("name", name.value);
    // localStorage.setItem("surname", surname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", pw.value);
    alert("Your account has been created");
  }
}

//checking
function signIn() {
  var storedEmail = localStorage.getItem("email");
  var storedPw = localStorage.getItem("password");

  var email = document.getElementById("Email");
  var userPw = document.getElementById("pw");
  var userRemember = document.getElementById("rememberMe");

  if (email.value == storedEmail && userPw.value == storedPw) {
    window.location.href = "home.html";
  } else {
    alert("Error on login");
  }
}

function getUserName() {
  var firstName = localStorage.getItem("name");
  document.getElementById("abc").innerHTML = firstName;
}

// upload

let fileInput = document.getElementById("file-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");

fileInput.addEventListener("change", () => {
  fileList.innerHTML = "";
  numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

  for (i of fileInput.files) {
    let reader = new FileReader();
    let listItem = document.createElement("li");
    let fileName = i.name;
    let fileSize = (i.size / 1024).toFixed(1);
    listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
    }
    fileList.appendChild(listItem);
  }
});

// JavaScript code for search panel
const searchInput = document.getElementById('myInput');
const list = document.getElementById('myUL');
const listItems = list.getElementsByTagName('li');

searchInput.addEventListener('input', function() {
  const searchQuery = this.value.toLowerCase();

  Array.from(listItems).forEach(function(item) {
    const itemName = item.innerText.toLowerCase();

    if (itemName.includes(searchQuery)) {
      item.style.display = 'block';
    } else {
      item.style.display = "none";
    }
  });
});

