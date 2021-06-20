# Production Build

# Stage 1: Build react client
FROM node:14.15.3-alpine3.12 as client

# Working directory be app
WORKDIR /usr/app/frontend/

COPY client/package*.json ./

# Install dependencies
RUN npm install

# copy local files to app folder
COPY frontend/ ./
RUN ls

RUN npm run build

# Stage 2 : Build Server

FROM node:14.15.3-alpine3.12

WORKDIR /usr/src/app/
COPY --from=frontend /usr/app/frontend/build/ ./frontend/build/
RUN ls

WORKDIR /usr/src/app/backend/
COPY server/package*.json ./
RUN npm install -qy
COPY backend/ ./

ENV PORT 3001

EXPOSE 3001

CMD ["npm", "start"]