
let greetings = (nameArray, jobObj) => {
  return `Hello ${nameArray.join(" ")}! Nice to have a ${jobObj.title} ${jobObj.occupation} around.`;
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.