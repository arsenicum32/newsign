FROM node:10.15-alpine as frontend

WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm ci
RUN npm run build
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD ["npm", "run", "start"]
