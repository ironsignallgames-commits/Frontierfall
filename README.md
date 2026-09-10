# Frontierfall website

A simple static website designed for GitHub Pages.

## Publish it on GitHub Pages

1. Create a new **public** repository on GitHub. A good name is `frontierfall`.
2. Upload **index.html**, **style.css**, **script.js** and the **assets** folder into the repository.
3. Open the repository's **Settings**.
4. In the left menu, open **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the **main** branch and the **/(root)** folder, then save.
7. GitHub will display the website URL after the deployment completes.

Your URL will normally look like:

`https://YOUR-USERNAME.github.io/frontierfall/`

If you instead create a repository named exactly `YOUR-USERNAME.github.io`,
it can become your main GitHub Pages site.

## Change your links

Open `script.js` and replace the three `#` values:

- `discord`
- `x`
- `play`

## Add real screenshots

The first version deliberately uses styled placeholders so it works immediately.

When you want to add screenshots:
1. Put image files inside `assets/`.
2. Replace one of the `.world-image` placeholder divs in `index.html` with an `<img>` element.
3. Ask ChatGPT if you want the exact edit done for you.

## Recommended next additions

- Frontierfall logo
- Google Play URL
- Discord invite URL
- Gameplay trailer
- 4 map screenshots
- Ranger / Medic artwork
- Companion artwork
- Privacy Policy page
- Contact / support page
