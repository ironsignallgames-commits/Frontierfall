document.getElementById("year").textContent = new Date().getFullYear();

/*
  Replace the # values below when you have the real links.
  Example:
  const LINKS = {
    discord: "https://discord.gg/YOURCODE",
    x: "https://x.com/YOURACCOUNT",
    play: "https://play.google.com/store/apps/details?id=YOUR.APP.ID"
  };
*/
const LINKS = {
  discord: "#",
  x: "#",
  play: "#"
};

document.getElementById("discord-link").href = LINKS.discord;
document.getElementById("x-link").href = LINKS.x;
document.getElementById("play-link").href = LINKS.play;

document.querySelector(".play-button").addEventListener("click", () => {
  alert("Add your Frontierfall YouTube trailer here when it is ready.");
});
