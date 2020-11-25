FROM node:lts as build

#RUN apt-get update

#RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# install simple http server for serving static content
#RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . /app

# Uses port which is used by the actual application
EXPOSE 3000

# Build the application
RUN npm run build


#CMD [ "http-server", "dist" ]


# #### Stage 2: Serve the React application from Nginx
# FROM nginx:stable-alpine AS production
# COPY --from=build /app/dist /usr/share/nginx/html
# # Expose port 80 to the Docker host, so we can access it from the outside.
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
