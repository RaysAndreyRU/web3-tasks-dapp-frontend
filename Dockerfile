FROM node:20-bullseye-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .

ARG VITE_LUMIA_PROJECT_ID
ARG VITE_STRICT_MODE
ARG VITE_DEBUG
ARG VITE_APP_BACKEND_URL

ENV VITE_LUMIA_PROJECT_ID=${VITE_LUMIA_PROJECT_ID}
ENV VITE_STRICT_MODE=${VITE_STRICT_MODE}
ENV VITE_DEBUG=${VITE_DEBUG}
ENV VITE_APP_BACKEND_URL=${VITE_APP_BACKEND_URL}

RUN npm run build


FROM node:20-bullseye-slim AS runner

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
