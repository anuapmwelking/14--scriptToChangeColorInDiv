const upDivs = document.getElementById("pills-profile").querySelectorAll(".web-blocks");
for (let i = 0; i < upDivs.length; i++) {
  let bgColors = new Array(upDivs.length).fill(["#0e88d1", "#f86960", "#ffbe35", "#1ea4a4"]).flat();
  upDivs[i].style.backgroundColor = bgColors[i];
}

const pastDivs = document.getElementById("pills-contact").querySelectorAll(".web-blocks");
for (let i = 0; i < pastDivs.length; i++) {
  let bgColors = new Array(pastDivs.length).fill(["#0e88d1", "#f86960", "#ffbe35", "#1ea4a4"]).flat();
  pastDivs[i].style.backgroundColor = bgColors[i];
}