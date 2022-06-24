const express = require("express");
const router = express.Router();
const blogPostController = require("../controllers/blogPostController");

router
  .route("/")
  .get(blogPostController.getAllBlogPosts)
  .post(blogPostController.createNewBlogPost)
  .put(blogPostController.editBlogPost)
  .delete(blogPostController.deleteBlogPost);

router.route("/:id").get(blogPostController.getBlogPost);

module.exports = router;
