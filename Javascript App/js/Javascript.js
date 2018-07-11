var usersDetails = [{ uid:1, username: "sanket", email: "sanketsa@abc.com", firstName: "Sanket", lastName: "Sawant", gender: "male", address: "xbuasg ihaxihx nicjni" },
            { uid:2, username: "chaitali", email: "chaitalisa@abc.com", firstName: "Chaitali", lastName: "Sawant", gender: "female", address: "xbuasg ihaxihx nicjni" }];

var userDefaultToDoItems = [{tdId:"Title_1",item:"item 1"},{tdId:"Title_1",item:"item 2"},{tdId:"Title_1",item:"item 3"},{tdId:"Title_1",item:"item 4"},
							{tdId:"Title_2",item:"item 1"},{tdId:"Title_2",item:"item 2"},{tdId:"Title_2",item:"item 3"},
							{tdId:"Title_3",item:"item 1"}];
			
var userDefaultToDoList = [{tdId:"Title_1", toDoTitle : "Title", itemsCount : 4, dateCreated : new Date("07/02/2018"), dateReminder : new Date("07/05/2018"), dateDue: new Date("07/07/2018")},
							{tdId:"Title_2", toDoTitle : "Title2", itemsCount : 3, dateCreated : new Date("07/10/2018"), dateReminder : new Date("07/15/2018"), dateDue: new Date("07/27/2018")},
							{tdId:"Title_3", toDoTitle : "Title3", itemsCount : 1, dateCreated : new Date("07/12/2018"), dateReminder : new Date("07/15/2018"), dateDue: new Date("07/17/2018")}];			
			
function onLoadUserDetails(isEdit) {
    var userDetailsDiv = document.getElementById("userDetailsResult");
    
    var userDetailsTable = "";
    for (var i=0;i<usersDetails.length;i++)
    {
		if(isEdit)
			userDetailsTable += "<tr><td><a href='#' onclick='populateUserDetailsForEdit("+usersDetails[i].uid+")'>" + usersDetails[i].username + "</a></td>  <td>" + usersDetails[i].email + "</td>  <td>" + usersDetails[i].firstName + "</td>  <td>" + usersDetails[i].lastName + "</td>  <td>" + usersDetails[i].gender + "</td>  <td>" + usersDetails[i].address + "</td> <td><input type='submit' name='btnUserEdit' value='Edit' id='btnUserEdit' onclick='populateUserDetailsForEdit("+usersDetails[i].uid+")'/></td></tr>";
		else
			userDetailsTable += "<tr><td>" + usersDetails[i].username + "</td>  <td>" + usersDetails[i].email + "</td>  <td>" + usersDetails[i].firstName + "</td>  <td>" + usersDetails[i].lastName + "</td>  <td>" + usersDetails[i].gender + "</td>  <td>" + usersDetails[i].address + "</td></tr>";
    }

	if(isEdit)
		userDetailsDiv.innerHTML = "<table class='table'><tr><td>Username</td> <td>Email</td> <td>First Name</td> <td>Last Name</td> <td>Gender</td> <td>Address</td> <td>Edit</td></tr>" + userDetailsTable + "</table>";
	else
		userDetailsDiv.innerHTML = "<table class='table'><tr><td>Username</td> <td>Email</td> <td>First Name</td> <td>Last Name</td> <td>Gender</td> <td>Address</td> </tr>" + userDetailsTable + "</table>";
}

function addUser() {
    var userName = document.getElementById("userName");
    var email = document.getElementById("emailId");
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var gender;
    var address = document.getElementById("address");

    if (document.getElementById("rdMale").checked) {
        gender = document.getElementById("rdMale").value;
    }
    else {
        gender = document.getElementById("rdFemale").value;
    }
    usersDetails.push({ username: userName.value, email: email.value, firstName: firstName.value, lastName: lastName.value, gender: gender, address: address.value });
    onLoadUserDetails(false);
}

function redirectToEditUser(){
	window.location="file:///D:/Sanket/Training/Javascript/Javascript%20App/UserProfile.html";
}

function redirectToDoList(){
	window.location="file:///D:/Sanket/Training/Javascript/Javascript%20App/ToDoList.html";
}

function redirectToRegistration(){
	window.location = "file:///D:/Sanket/Training/Javascript/Javascript%20App/UserRegistration.html";
}

function editProfileUsersList(){
	var editProfileUsersListDiv = document.getElementById('editProfileUsersList');
	var userDetailsTable = "";
    for (var i=0;i<usersDetails.length;i++)
    {
        userDetailsTable += "<tr><td>" + usersDetails[i].username + "</td>  <td>" + usersDetails[i].email + "</td>  <td>" + usersDetails[i].firstName + "</td>  <td>" + usersDetails[i].lastName + "</td>  <td>" + usersDetails[i].gender + "</td>  <td>" + usersDetails[i].address + "</td></tr>";
    }

    userDetailsDiv.innerHTML = "<table class='table'><tr><td>Username</td> <td>Email</td> <td>First Name</td> <td>Last Name</td> <td>Gender</td> <td>Address</td> </tr>" + userDetailsTable + "</table>";
}

function findUser(uid){
	for(var i=0;i<usersDetails.length;i++){
		if(usersDetails[i].uid===uid){
			return usersDetails[i];
		}
	}	
}

function populateUserDetailsForEdit(uid){
	var selectedUser = findUser(uid);
	document.getElementById('firstNameEdit').value=selectedUser.firstName;
	document.getElementById('lastNameEdit').value=selectedUser.lastName;
	document.getElementById('userNameEdit').value=selectedUser.username;
	document.getElementById('emailIdEdit').value=selectedUser.email;
	document.getElementById('addressEdit').value=selectedUser.address;
	document.getElementById('uidEdit').innerText = selectedUser.uid;
}

function clearText() {
	document.getElementById('uidEdit').innerText = "No records selected";
	document.getElementById('firstNameEdit').value = "";
	document.getElementById('lastNameEdit').value = "";
	document.getElementById('emailIdEdit').value = "";
	document.getElementById('userNameEdit').value = "";
	document.getElementById('addressEdit').value = "";
}

function editUserDetails(){
	var firstName = document.getElementById('firstNameEdit').value;
	var lastName = document.getElementById('lastNameEdit').value;
	var userName = document.getElementById('userNameEdit').value;
	var emailId = document.getElementById('emailIdEdit').value;
	var address = document.getElementById('addressEdit').value
	var uid = document.getElementById('uidEdit').innerText;
	for(var i=0;i<usersDetails.length;i++){
		if(usersDetails[i].uid == uid){
			usersDetails[i].firstName = firstName;
			usersDetails[i].lastName = lastName;
			usersDetails[i].username = userName;
			usersDetails[i].email = emailId;
			usersDetails[i].address = address;
		}
	}
	onLoadUserDetails(true);
	clearText();
}

var tempToDoItems = [];
function newToDoItem(){
	var toDoItem = document.getElementById('toDoItem').value;
	var toDoItemListDiv = document.getElementById('toDoItemList');
	var toDoTitle = document.getElementById('toDoTitle').value;
	
	
	var lblId = toDoTitle.replace(' ','') + "_" + toDoItemListDiv.childNodes.length;
	toDoItemListDiv.innerHTML += "<label class='col-form-label' id="+lblId+">"+toDoItem+"</label><br/>";
	tempToDoItems.push(toDoItem);
	document.getElementById('toDoItem').value = '';
}

function clearModalValue(){
	document.getElementById('toDoItem').value = "";
	document.getElementById('toDoItemList').innerHTML = "";
	document.getElementById('toDoTitle').value ="";
}

function addNewToDoList(){
	var toDoItemListDiv = document.getElementById('toDoItemList');
	var toDoTitle = document.getElementById('toDoTitle').value;
	var userToDoLists = document.getElementById('userToDoLists');
	var dateCreated = new Date();
	var dateReminder = new Date(document.getElementById('toDoReminderDate').value);
	var dateDue = new Date(document.getElementById('toDoDueDate').value);
	var toDoDivId = toDoTitle.replace(' ','')+"_"+toDoItemListDiv.childNodes.length+"_"+userToDoLists.childNodes.length;
	var id = "'"+toDoDivId+"'";
	var innerHtml = "<div id=" + toDoDivId +
					" class='border col-3' style='padding:10px; margin:5px'> <h4><label class='col-form-label'>"+toDoTitle+
					"</label><span class='close' onclick='deleteToDoList(\""+toDoDivId +"\")'>&times;</span></h4><div class='dropdown-divider' style='border-top: 1px solid #1e2329'></div><div>"+toDoItemListDiv.innerHTML+"</div></div>"
					
	userToDoLists.innerHTML+=innerHtml;
	
	for(var i=0;i<tempToDoItems.length;i++){
		userDefaultToDoItems.push({tdId:toDoDivId, item: tempToDoItems[i]});
	}
	
	userDefaultToDoList.push({tdId:toDoDivId, toDoTitle:toDoTitle, itemsCount:(tempToDoItems.length), dateCreated:dateCreated, dateReminder:dateReminder, dateDue:dateDue});
	tempToDoItems = [];
	clearModalValue();
	loadToDoListTable();
}

function deleteToDoList(divId){
	var item = document.getElementById(divId); 
	item.parentNode.removeChild(item);
}

function loadToDoListTable(){
	var toDoListTableDiv = document.getElementById('toDoListTable');
	var userToDoTable = "";
    for (var i=0;i<userDefaultToDoList.length;i++)
    {
		userToDoTable += "<tr><td>"+userDefaultToDoList[i].toDoTitle+"</td><td><a href='#' onclick=''>" + userDefaultToDoList[i].itemsCount + " item(s) in the list.</a></td>  <td>" + userDefaultToDoList[i].dateCreated + "</td>  <td>" + userDefaultToDoList[i].dateReminder + "</td>  <td>" + userDefaultToDoList[i].dateDue + "</td> </tr>";
    }

	toDoListTableDiv.innerHTML = "<table class='table'><tr><td onclick='sortTable(\"title\")'>To Do Title</td> <td onclick='sortTable(\"items\")'>Items</td> <td onclick='sortTable(\"created\")'>Created Date</td> <td onclick='sortTable(\"remainder\")'>Reminder Date</td> <td onclick='sortTable(\"due\")'>Date Due</td></tr>" + userToDoTable + "</table>";
	
}

function compareTitle(a,b){
	var titleA = a.toDoTitle.toLowerCase();
	var titleB = b.toDoTitle.toLowerCase();
	
	if (titleA > titleB) {
		return 1;
	  } else if (titleA < titleB) {
		return -1;
	  }
	
	return 0;
}

function sortTable(header){
	
	switch(header.toLowerCase()){
		case "due":
			userDefaultToDoList.sort(function (a,b){
				var dcA = a.dateDue;
				var dcB = b.dateDue;
				
				if (dcA > dcB) {
					return 1;
				  } else if (dcA < dcB) {
					return -1;
				  }
				
				return 0;
			})
		break;
		
		case "items":
			userDefaultToDoList.sort(function (a,b){
				var titleA = a.itemsCount;
				var titleB = b.itemsCount;
				
				if (titleA > titleB) {
					return 1;
				  } else if (titleA < titleB) {
					return -1;
				  }
				
				return 0;
			})
		break;
		
		case "created":
			userDefaultToDoList.sort(function (a,b){
				var titleA = a.dateCreated;
				var titleB = b.dateCreated;
				
				if (titleA > titleB) {
					return 1;
				  } else if (titleA < titleB) {
					return -1;
				  }
				
				return 0;
			})
		break;
		
		case "remainder":
			userDefaultToDoList.sort(function (a,b){
				var titleA = a.dateReminder;
				var titleB = b.dateReminder;
				
				if (titleA > titleB) {
					return 1;
				  } else if (titleA < titleB) {
					return -1;
				  }
				
				return 0;
			})
		break;
		
		default :
			userDefaultToDoList.sort(function (a,b){
				var titleA = a.toDoTitle.toLowerCase();
				var titleB = b.toDoTitle.toLowerCase();
				
				if (titleA > titleB) {
					return 1;
				  } else if (titleA < titleB) {
					return -1;
				  }
				
				return 0;
			})
		break;
	}
	
	
	loadToDoListTable();
}

function login(){
	var loginId = document.getElementById('loginId').value;
	var loginPassword = document.getElementById('loginPassword').value;
	var isFound = false;
	
	usersDetails.find( user => { if ((user.username === loginId)||(user.email===loginId)){
											isFound = true;
										}
								});
	
	if(isFound){
		redirectToEditUser();
	}
}