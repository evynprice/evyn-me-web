FROM node

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3232

CMD [ "node", "index.js" ]
