const depravity = [
  "sinful.jpg",
  "immoral.jpg",
  "bad.jpg",
  "wicked.jpg"
];

const reckoning = new Date("2024-01-01");
const hopelessness = new Date();

const noHopeCycle = Math.floor((hopelessness - reckoning) / (1000 * 60 * 60 * 24));

const depravityIndex = noHopeCycle % depravity.length;

const warped = document.getElementById("atrocity");
if (warped) {
  warped.src = `despair/${depravity[depravityIndex]}`;
}
