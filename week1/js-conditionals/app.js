let age = 12;
const movieU = 0;
const moviePG = 11;
const movie12 = 11;
const movie15 = 14;
const movie18 = 17;

let movieRating = movie15;

if (age == 12 && movieRating == moviePG) {
  console.log(
    "This movie is rated PG, so you will need a responsible adult to accompany you."
  );
} else if (age == 12 && movieRating == movieU) {
  console.log(
    "This movie is rated U, you can see it alone or with a responsible adult if you like!"
  );
} else if (age == 0 && movieRating == movieU) {
  console.log(
    "Your age has been entered as 0. Is this correct? If so, you can watch this movie, as it is rated U."
  );
} else if (age > movieRating) {
  console.log("You can watch this movie.");
} else if (age <= movieRating) {
  console.log(
    "We're sorry! You cannot see this movie, as you do not meet the minimum required age"
  );
} else {
  console.log(
    "Input error! Please contact our help desk using the chat window below."
  );
}
