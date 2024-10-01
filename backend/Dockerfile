# Stage 1: Install dependencies
FROM node:18-alpine AS build-backend

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --only=dev

# Copy the entire backend code
COPY . .

# Expose the port the backend will run on
EXPOSE 5000

# Use nodemon for development and node for production
# Uncomment the line depending on your environment

# Development (using nodemon for hot reload)
# CMD ["npx", "nodemon", "index.js"]

# Production (using node directly)
CMD ["node", "index.js"]
