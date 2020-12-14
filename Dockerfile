FROM node:13.12.0-alpine
WORKDIR /

RUN npm install -g serve

COPY . ./

CMD ["serve", "dist"]
