# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:14.5.0-alpine as develop-stage
WORKDIR /app
COPY package*.json /app/
# RUN npm install -g increase-memory-limit
# RUN increase-memory-limit
# RUN export NODE_OPTIONS=--max_old_space_size=4096
RUN npm install
COPY ./ /app/

# build stage
FROM develop-stage as build-stage
# RUN npm
RUN npm run-script build

# RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# production stage
FROM nginx:1.17.0-alpine as production-stage
COPY --from=build-stage /app/build/ /usr/share/nginx/html

#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/
EXPOSE 7081
CMD ["nginx", "-g", "daemon off;"]