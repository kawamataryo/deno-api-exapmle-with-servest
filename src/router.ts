import {
  createRouter,
  contentTypeFilter,
} from "https://servestjs.org/@v1.0.0/mod.ts";
import { getAllPosts, getPost, createPost, deletePost, updatePost } from "./controllers/postsController.ts";

export const routes = () => {
  const router = createRouter();

  router.get("posts", getAllPosts);
  router.get(new RegExp("^posts/(.+)"), getPost);
  router.post("posts", contentTypeFilter("application/json"), createPost);
  router.put(new RegExp("^posts/(.+)"), contentTypeFilter("application/json"), updatePost);
  router.delete(new RegExp("^posts/(.+)"), deletePost);

  return router;
}