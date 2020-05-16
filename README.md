# RESTful API exapmle with Deno and Servest

This is an RESTfull API example with deno and servest.

## Get started

After clone this repository, start api server.

```bash
$ deno run --allow-net src/main.ts
```

Request with cURL or [VSCode REST API](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

```bash
# get all posts
$ curl --request GET \
  --url http://localhost:8080/posts

# get single post
$ curl --request GET \
  --url http://localhost:8080/posts/{POST_ID}

# create post
$ curl --request POST \
  --url http://localhost:8080/posts \
  --header 'content-type: application/json' \
  --data '{"title": "sample","content": "Laborum mollit duis ad consequat."}'

# update post
$ curl --request PUT \
  --url http://localhost:8080/posts/{POST_ID} \
  --header 'content-type: application/json' \
  --data '{"title": "update","content": "Labore minim sit et id aliquip ad voluptate nisi mollit incididunt id irure enim."}'

# delete post
$ curl --request DELETE \
  --url http://localhost:8080/posts/{POST_ID}
```

## Dependencies

- [Deno](https://github.com/denoland/deno) - A secure JavaScript and TypeScript runtime.
- [Servest](https://github.com/keroxp/servest) -A progressive http server for Deno.