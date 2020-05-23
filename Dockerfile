FROM hayd/alpine-deno:1.0.1

EXPOSE 8888

WORKDIR /app

# Prefer not to run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .

CMD ["run", "--allow-net", "app/main.ts", "--port", "8888"]