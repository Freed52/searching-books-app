# Use a lighter version of Node as a parent image
FROM node:13.12.0
# Set the working directory to /api
WORKDIR /api
# copy package.json into the container at /api
COPY package*.json /api/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /api
COPY . /api/
# Make port 80 available to the world outside this container
EXPOSE 5000
# Run the app when the container launches
CMD ["node", "index.js"]