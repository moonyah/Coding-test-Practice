const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
  day
).padStart(2, "0")}`;
console.log(formattedDate);