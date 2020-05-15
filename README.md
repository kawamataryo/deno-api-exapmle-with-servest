# Sandbox for deno

## Get started

### start server
Start server with deno.

```bash
$ deno run --allow-net src/main.ts
```

Request with cURL.

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
