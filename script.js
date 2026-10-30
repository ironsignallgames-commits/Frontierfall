document.getElementById("year").textContent = new Date().getFullYear();

const LINKS = {
  discord: "https://discord.gg/e5gqtqHmHY",
  x: "https://x.com/frontierfall",
  facebook: "https://www.facebook.com/share/1DxeGmQL9s/",
  youtube: "https://www.youtube.com/@IrongSignallGames",
  play: "https://play.google.com/store/apps/details?id=com.ironsignalgames.frontierfall"
};

document.getElementById("discord-link").href = LINKS.discord;
document.getElementById("x-link").href = LINKS.x;
document.getElementById("facebook-link").href = LINKS.facebook;
document.getElementById("youtube-link").href = LINKS.youtube;

const playLink = document.getElementById("play-link");
playLink.href = LINKS.play;
playLink.setAttribute("aria-label", "Download Frontierfall from Google Play");

// Ensure legacy in-page PLAY links also open the public Google Play listing.
document.querySelectorAll('a[href="#play"]').forEach((link) => {
  link.href = LINKS.play;
  link.setAttribute("aria-label", "Download Frontierfall on Google Play");
});

// Refresh launch messaging on older cached HTML versions if necessary.
const playSection = document.getElementById("play");
if (playSection) {
  const eyebrow = playSection.querySelector(".eyebrow");
  const description = playSection.querySelector("p");
  if (eyebrow) eyebrow.textContent = "AVAILABLE NOW ON ANDROID";
  if (description) {
    description.textContent =
      "Frontierfall is live on Google Play. Download now and begin your next expedition.";
  }
}

// Make the new account-deletion page easy to find.
const footerLinks = document.querySelector(".footer-links");
if (footerLinks && !footerLinks.querySelector('a[href="account-deletion.html"]')) {
  const accountDeletion = document.createElement("a");
  accountDeletion.href = "account-deletion.html";
  accountDeletion.textContent = "Account deletion";
  footerLinks.appendChild(accountDeletion);
}

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
