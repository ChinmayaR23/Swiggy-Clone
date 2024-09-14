# Stage 2: Set up the backend (Express.js)
FROM node:18-alpine AS build-backend

WORKDIR /app

# Copy the backend package.json and install dependencies
COPY ./package.json ./package-lock.json ./
RUN npm install

# Copy the backend code
COPY ./ ./ 

# Expose the port the backend will run on
EXPOSE 5000

# Start the backend server
CMD ["nodemon", "index.js"]
