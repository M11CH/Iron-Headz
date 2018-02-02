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
    // display calculation result
    var table = document.getElementById("calculatortab");
    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = "RESULT";

    // disable submit button
    document.getElementById("submitbutt").disabled=true;

}
