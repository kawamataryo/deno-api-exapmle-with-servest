# RESTful API exapmle with Deno and Servest

This is an RESTfull API example with deno and servest.

## Usage

### 1. Server start

After clone this repository, start api server.

```bash
$ deno run --allow-net src/main.ts
```

### 2. Requst to API
Request with cURL or [VSCode REST API](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

**Get all posts**
```bash
$ curl --request GET \
  --url http://localhost:8080/posts
```

**Get single post**

```bash
$ curl --request GET \
  --url http://localhost:8080/posts/{POST_ID}
```

**Create post**

```bash
$ curl --request POST \
  --url http://localhost:8080/posts \
  --header 'content-type: application/json' \
  --data '{"title": "sample","content": "Laborum mollit duis ad consequat."}'
```

**Update post**

```bash
$ curl --request PUT \
  --url http://localhost:8080/posts/{POST_ID} \
  --header 'content-type: application/json' \
  --data '{"title": "update","content": "Labore minim sit et id aliquip ad voluptate nisi mollit incididunt id irure enim."}'
```

**Delete post**

```
$ curl --request DELETE \
  --url http://localhost:8080/posts/{POST_ID}
```

## Dependencies

- [Deno](https://github.com/denoland/deno) - A secure JavaScript and TypeScript runtime.
- [Servest](https://github.com/keroxp/servest) -A progressive http server for Deno.