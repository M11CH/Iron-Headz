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
    var genders = document.getElementsByName("gender");
    var gender;
    for(var i = 0; i < genders.length; i++){
	if(genders[i].checked){
	    gender = genders[i].value;
	}
    }

    var activities = document.getElementsByName("activity");
    var activity;
    for(var i = 0; i < activities.length; i++){
	if(activities[i].checked){
	    activity = activities[i].value;
	}
    }
    
    console.log(gender);
    console.log(activity);
    
    // display calculation result
    var table = document.getElementById("calculatortab");
    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = "RESULT";

    // disable submit button
    document.getElementById("submitbutt").disabled=true;

}
