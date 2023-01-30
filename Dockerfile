FROM node:16-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ARG DB_PASS
ENV DB_PASS ${DB_PASS}

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
RUN rm -rf ./build
RUN npm install -g typescript
RUN npm install -g ts-node

RUN yarn install
RUN yarn build
COPY . .

EXPOSE 80
CMD ["node", "build/index.js"]