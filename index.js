// get input
const inputYear = document.getElementById("inputYear");
const inputMonth = document.getElementById("inputMonth");
const inputDay = document.getElementById("inputDay");

// get display

const displayYear = document.getElementById("dispYears");
const displayMonth = document.getElementById("dispMonths");
const displayDay = document.getElementById("dispDay");

//get btn
const btn = document.getElementById("calculateBtn");

//get alert message
const alertMsgText = document.getElementById("alertMesage");
const unborn = document.getElementById("notBorn");

// call date object
const d = new Date();

let todayDay, todayMonth, todayYear;
todayYear = d.getFullYear();
todayMonth = d.getMonth() + 1;
todayDay = d.getDate();
// console.log(todayYear, todayMonth, todayDay);
let year, month, day;

function calcAge() {
	year = inputYear.value;
	month = inputMonth.value;
	day = inputDay.value;
	year === "" || month === "" || day === "" ? alertText() : calculateAge(year, month, day); //FIXME: not running after first reset
}

function alertText() {
	alertMsgText.setAttribute("style", "color: red");

	setTimeout(() => {
		alertMsgText.setAttribute("style", "display: none; color: red");
	}, 3000);
}

function calculateAge(year, month, day) {
	console.log("TEst b4 function");
	inputYear.setAttribute("style", "pointer-events: none;  color:#adb5bd; background-color:#ced4da;");
	inputMonth.setAttribute("style", "pointer-events: none;  color:#adb5bd; background-color:#ced4da;");
	inputDay.setAttribute("style", "pointer-events: none;  color:#adb5bd; background-color:#ced4da;");
	const a = new Date(year, month, day);

	if (d.getTime() - a.getTime() < 0) {
		console.log("Not born");
		notBorn();
		console.log("after functio call");
	} else {
		// FIXME:
		let ageDay, ageMonth, ageYear;
		ageDay = todayDay - day;
		ageMonth = todayMonth - month;
		ageYear = todayYear - year;
		displayAge(ageDay, ageMonth, ageYear);
		btn.innerText = "Reset";
		btn.style.backgroundColor = "orangered";
		btn.setAttribute("onclick", "btnreset()");
	}
}

function reset() {
	displayYear.textContent = "00";
	displayMonth.textContent = "00";
	displayDay.textContent = "00";
	inputYear.value = null;
	inputMonth.value = null;
	inputDay.value = null;
	inputYear.setAttribute("style", "pointer-events:  auto;  ");
	inputMonth.setAttribute("style", "pointer-events:  auto;  ");
	inputDay.setAttribute("style", "pointer-events:  auto;  ");
}

function displayAge(dDAy, dMonth, dYear) {
	displayDay.textContent = dDAy;
	displayMonth.textContent = dMonth;
	displayYear.textContent = dYear;
}

function notBorn() {
	unborn.setAttribute("style", "color: red");
	setInterval(() => {
		unborn.setAttribute("style", "display: none; color: red");
	}, 3000);
	setTimeout(() => {
		btnreset();
	}, 4000);

	//
}

function btnreset() {
	btn.innerText = "Calculate age";
	btn.style.backgroundColor = "steelBlue";
	unborn.setAttribute("style", "display: none; color: red");
	reset();
}
