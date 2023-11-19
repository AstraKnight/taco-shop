const year = document.getElementById("year");
const thisYear = new Date().getUTCFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;



