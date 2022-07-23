import {
    getDatabase,
    ref,
    get,
    set,
    update,
    remove,
    child,
  }
 from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";


  const db = getDatabase();


  var nameBox = document.getElementById("Name");
  var emailBox = document.getElementById("email");
  var messageBox = document.getElementById("message");
  var btn = document.getElementById("btn");
  var nameV, emailV, messageV;
  function insertData(event) {
    event.preventDefault();
    readFormData();
    if (nameV == "" && emailV == "" && messageV == "") {
      alert("Fields can not be blank");
    } else {
      // Code to send the data to Firebase
      set(ref(db, "data/" + nameV), {
        name: nameV,
        email: emailV,
        message: messageV,
      })
        .then(() => {
          alert("Data Stored Successfully");
        })
        .catch((error) => {
          alert("Unsccussful", error);
        });
  
      clearFormData();
    }
  }


  function readFormData() {
    rollV = RollBox.value;
    nameV = NameBox.value;
    genderV = GenBox.value;
    addressV = AddBox.value;
    console.log(rollV, nameV, genderV, addressV);
  }
  function clearFormData() {
    nameBox.value = "";
    emailBox.value = "";
    messageBox.value = "";
  }  

document.getElementById(btn).onclick = insertData;
