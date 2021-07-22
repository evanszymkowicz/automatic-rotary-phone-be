FROM node:14.17.3
WORKDIR /src
# Do not copy seed data in prod
COPY ["package.json", "package-lock.json*", "db"]
RUN npm install
COPY ./src .
CMD ["npm", "start"]