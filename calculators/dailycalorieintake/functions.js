function clearform() {
    // return input fields to original state
    document.getElementById("calculator").reset();

    // enable submit button
    document.getElementById("submitbutt").disabled=false;

    // delete results row if it exists
    var count = document.getElementById("calculatortab").getElementsByTagName("tr").length;
    if (count==16) {
	document.getElementById("calculatortab").deleteRow(-1);
    }
}

function displayresult() {
    // get values from form

    // gender
    var genders = document.getElementsByName("gender");
    var gender;
    for(var i = 0; i < genders.length; i++){
	if(genders[i].checked){
	    gender = genders[i].value;
	}
    }
    // age
    var age = document.getElementById("age").value;
    // height
    var feet = document.getElementById("feet").value;
    var inches = document.getElementById("inches").value;
    // weight
    var pounds = document.getElementById("pounds").value;
    // activity level
    var activities = document.getElementsByName("activity");
    var activity;
    for(var i = 0; i < activities.length; i++){
	if(activities[i].checked){
	    activity = activities[i].value;
	}
    }
    
    console.log(gender);
    console.log(age);
    console.log(feet);
    console.log(inches);
    console.log(pounds);
    console.log(activity);
    
    // display calculation result
    var table = document.getElementById("calculatortab");
    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = "RESULT";

    // disable submit button
    document.getElementById("submitbutt").disabled=true;

}
