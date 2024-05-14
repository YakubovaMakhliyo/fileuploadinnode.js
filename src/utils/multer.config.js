import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  path: `${path.join(process.cwd(), "uploads")}`,
  destination: function (req, file, cb) {
    cb(null, `${path.join(process.cwd(), "uploads")}`);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const uploads = multer({ storage });
