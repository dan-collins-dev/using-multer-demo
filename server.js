import path from "path";
import express from "express";
import multer from "multer";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const uploadDestination = multer({ storage });

app.use(express.static("./public"));
app.use("/uploads", express.static("./uploads"));

app.get("/pictures", async (req, res) => {
    const picturesPath = path.join(__dirname, "data", "pictures.json");
    const pictures = JSON.parse(await fs.readFile(picturesPath));
    res.status(200).json(pictures);
});

app.post(
    "/pictures",
    uploadDestination.single("picture"),
    async (req, res, next) => {
        if (!req.file) {
            return res.status(404).json({
                errorMsg: "Picture was not loaded.",
            });
        }

        try {
            const file = req.file;

            const picturesPath = path.join(__dirname, "data", "pictures.json");
            const pictures = JSON.parse(await fs.readFile(picturesPath));

            file.url = `http://localhost:8080/uploads/${file.originalname.replace(
                " ",
                "%20",
            )}`;

            pictures.push(file);
            await fs.writeFile(picturesPath, JSON.stringify(pictures));

            res.status(201).json(file);
        } catch (error) {
            console.error(error);
        }
    },
);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log("Press CTRL+C to end this process");
});
