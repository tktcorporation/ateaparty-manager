FROM node:21-bullseye-slim AS build-env

ENV LC_ALL=C.UTF-8

RUN apt-get update && \
    apt-get install -y \
    curl \
    unzip \
    git

RUN npm i -g npm pnpm @antfu/ni
