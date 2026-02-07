# Using Multer Demo

## Project Purpose

This project is to demonstrate how to handle multipart/form-data to store information in a JSON file on the back-end using the `multer` package. This example focuses on uploading images from the front-end and storing them on the backend.

I have included some links to related documentation. If you read the Multer docs, you will see that their examples use commonjs, where this project uses ES6 modules.

- [MDN FormData Documentation](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [Multer](https://www.npmjs.com/package/multer)

## Suggested Challenges

While the project works, I've left some room for the following challenges:

- The code for the form submission assumes that there will always be an image when the submit button is clicked. Add the necessary code to handle other cases like incorrect file types or no file selected
- I've left room to improve naming things. For example, `image2` is not a descriptive name
- Add a field to your form to include a readable name you want to display instead of the file name in the gallery. **Hint**: You'll have to update multiple files to get this working
- Update/fix the styling
- Re-write the code to use commonjs
- Use this as a starting reference to implement your own requirements


## Running Locally

Required Tools

- VS Code
- NodeJS
- npm

In GitBash:

1. Verify NodeJS and npm are installed on your machine by running `node -v` and `npm -v`. If a version number is returned for each command, these have been successfully installed.
2. `cd` into your `projects` directory and run `git clone https://github.com/dan-collins-dev/using-multer-demo.git`
3. `cd` into the cloned repo and run `npm install` to install the required packages.
4.  Open the project with `code .`
5.  Run the server with `npm run dev`