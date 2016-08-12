FROM node:6.3.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --production
COPY . /usr/src/app

EXPOSE 8080

HEALTHCHECK --interval=10s  --timeout=3s  \
  CMD curl -f http://localhost/debug/health

CMD [ "npm", "start" ]
