import { Router } from "express";
import {
  createBook,
  getBooks,
  getSingleBook,
  updateAllBooks,
  uploadUserDocument,
} from "../controllers/bookController";
const router: Router = Router();
router
  .route("/")
  .post(uploadUserDocument, createBook)
  .get(getBooks)
  .put(updateAllBooks);
router.route("/:bookId").get(getSingleBook);

export default router;
