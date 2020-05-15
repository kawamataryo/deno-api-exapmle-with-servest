import {
  ServerRequest
} from "https://servestjs.org/@v1.0.0/mod.ts";
import { posts, Post } from "../models/post.ts";

type PostPayload = {
  id: string;
  title: string;
  content: string;
};

export const getAllPosts = async (req: ServerRequest) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify(posts),
  });
}

export const getPost = async (req: ServerRequest) => {
  const [_, id] = req.match;
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify(posts.find((p) => p.id === id)),
  });
}

export const createPost = async (req: ServerRequest) => {
  const bodyJson = (await req.json()) as PostPayload
  const post = new Post(bodyJson.title, bodyJson.content)
  posts.push(post)

  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify(post),
  });
}

export const deletePost = async (req: ServerRequest) => {
  const [_, id] = req.match;
  const index =  posts.findIndex((p) => p.id === id)
  posts.splice(index, 1)

  await req.respond({
    status: 204
  });
}

export const updatePost = async (req: ServerRequest) => {
  const [_, id] = req.match;
  const bodyJson = (await req.json()) as PostPayload
  const index =  posts.findIndex((p) => p.id === id)

  posts[index].title = bodyJson.title
  posts[index].content = bodyJson.content

  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify(posts[index]),
  });
}