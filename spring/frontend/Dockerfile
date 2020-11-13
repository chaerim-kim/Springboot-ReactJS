#FROM node:lts as build
#
#RUN apt-get update
#
#RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
#
## install simple http server for serving static content
#RUN npm install -g http-server
#
## make the 'app' folder the current working directory
#WORKDIR /app
#
## copy both 'package.json' and 'package-lock.json' (if available)
#COPY ./app/package*.json /app/
#
## install project dependencies
#RUN npm install
#
## copy project files and folders to the current working directory (i.e. 'app' folder)
#COPY app /app
#
## build app for production with minification
#RUN npm run build
#
#EXPOSE 8000
#CMD [ "http-server", "dist" ]
#
#
#
#FROM nginx:stable-alpine AS production
#COPY --from=build /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
