FROM node:alpine

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn cache clean
RUN yarn install

COPY . ./

CMD ["yarn", "start"]