"use strict";

const uploadForm = document.getElementById("upload-form");
const image = document.getElementById("image");
const fileInput = document.getElementById("file-input")

fileInput.addEventListener("change", (event) => {
    if (fileInput.files[0] !== undefined) {
        image.src = URL.createObjectURL(event.target.files[0]);
    } else {
        image.src = ""
    }
})

uploadForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const form = new FormData(uploadForm);

    try {
        const res = await fetch("http://localhost:8080/pictures", {
            method: "POST",
            body: form,
        });

        const data = await res.json();
        const returnedImage = document.getElementById("image2");
        returnedImage.src = data.url;

    } catch (error) {
        console.error(error);
    }

    this.reset();
});
