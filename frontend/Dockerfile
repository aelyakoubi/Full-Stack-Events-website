# Use the official Node.js 18 image as base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files first (for Docker cache)
COPY package*.json ./

# Install NPM dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the port Vite dev server runs on
EXPOSE 5173

# Command to start the Vite dev server
CMD ["npm", "run", "dev"]
