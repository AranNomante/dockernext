FROM ubuntu:20.04

FROM node:18.12.1

WORKDIR /usr/app

COPY . .

RUN npm install -f
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]
