FROM hayd/alpine-deno:1.0.1

ENV PORT 8080
ENV HOST 0.0.0.0

WORKDIR /app

USER deno

COPY . .

CMD ["run", "--allow-net", "--allow-env", "app/main.ts"]