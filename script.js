document.getElementById("year").textContent = new Date().getFullYear();

const LINKS = {
  discord: "#",
  x: "#",
  play: "#"
};

document.getElementById("discord-link").href = LINKS.discord;
document.getElementById("x-link").href = LINKS.x;
document.getElementById("play-link").href = LINKS.play;
