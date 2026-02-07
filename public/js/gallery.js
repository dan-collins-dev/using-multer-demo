"use strict";

const gallery = document.getElementById("gallery");

async function getGalleryImages() {
    try {
        const res = await fetch("http://localhost:8080/pictures");
        const data = await res.json();
        data.forEach(element => {
            createImgCard(element);
        });
    } catch (error) {
        console.error(error);
    }
}

function createImgCard(data) {
    const article = document.createElement("article");
    article.classList.add("img-card");

    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    h3.textContent = data.filename;
    img.src = data.url;

    article.appendChild(h3);
    article.appendChild(img);
    gallery.appendChild(article);
}

await getGalleryImages();
