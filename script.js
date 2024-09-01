let User = prompt("Enter Snake , Water Or Gun");
let Cpu1 = Math.floor(Math.random() * 3);
let Cpu = ["Snake", "Water", "Gun"][Cpu1];

const game = (Cpu, User) => {
  if (Cpu === User) {
    return "Nobody";
  } else if (Cpu === "Snake" && User === "Water") {
    return "User";
  } else if (Cpu === "Snake" && User === "Gun") {
    return "Cpu";
  } else if (Cpu === "Water" && User === "Gun") {
    return "Cpu";
  } else if (Cpu === "Water" && User === "Snake") {
    return "User";
  } else if (Cpu === "Gun" && User === "Water") {
    return "User";
  } else if (Cpu === "Gun" && User === "Snake") {
    return "Cpu";
  }
};
let res = game(Cpu, User);
document.write(
  `Cpu = ${Cpu} <br><br> User = ${User} <br><br> The Winner is: ${res}`
);
