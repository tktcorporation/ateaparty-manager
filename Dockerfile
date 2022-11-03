FROM node:16-bullseye-slim AS build-env

ENV LC_ALL=C.UTF-8

RUN apt-get update && \
    apt-get install -y \
    curl \
    unzip \
    git

RUN npm i -g npm pnpm

RUN curl -fsSL https://bun.sh/install | bash
RUN echo 'export BUN_INSTALL="$HOME/.bun"' >> ~/.bashrc
RUN echo 'export PATH="$BUN_INSTALL/bin:$PATH"' >> ~/.bashrc
