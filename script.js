document.getElementById("year").textContent = new Date().getFullYear();

const LINKS = {
  discord: "https://discord.gg/D3VPy8FqA",
  x: "https://x.com/frontierfall",
  facebook: "https://www.facebook.com/share/1DxeGmQL9s/",
  youtube: "https://www.youtube.com/@IrongSignallGames",
  play: "#"
};

document.getElementById("discord-link").href = LINKS.discord;
document.getElementById("x-link").href = LINKS.x;
document.getElementById("facebook-link").href = LINKS.facebook;
document.getElementById("youtube-link").href = LINKS.youtube;
document.getElementById("play-link").href = LINKS.play;

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
let lastFocused = null;

function openLightbox(src, caption, alt) {
  lastFocused = document.activeElement;
  lightboxImage.src = src;
  lightboxImage.alt = alt || caption || "Expanded Frontierfall screenshot";
  lightboxCaption.textContent = caption || "Frontierfall screenshot";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = "";
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll(".image-button").forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    openLightbox(button.dataset.full || img.src, button.dataset.caption, img.alt);
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});
