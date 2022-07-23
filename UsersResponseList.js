import {
    getDatabase,
    ref,
    get,

    child,
  } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
  
  const db = getDatabase();
  
  // Function to read all data from Firebase
  function getAllUserData() {
    const dbref = ref(db);
  
    get(child(dbref, "data/")).then((snapshot) => {
      var users = [];
      snapshot.forEach((childSnapshot) => {
        users.push(childSnapshot.val());
      });
      console.log(users);
      DisplayUsers(users);
    });
  }
  // Reference
  var stdNo = 0;
  var tbody = document.getElementById("tbody");
  
  function DisplayUsers(UsersData) {
    stdNo = 0;
    tbody.innerHTML = "";
    UsersData.forEach((user) => {
      let tr = document.createElement("tr");
  
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
  
      td1.innerText = ++stdNo;
      td2.innerText = user.name;
      td4.innerText = user.email;
      td5.innerText = user.mwssage;
  
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
  
      tbody.append(tr);
    });
  }
  window.onload = getAllUserData;