#---------------------------------------------------------------------------------------------------------------------------
#  STAGE 1  =>  Install dependencie, build the project and set up the image to build
#---------------------------------------------------------------------------------------------------------------------------

## STEP 1: Install & Build the project ###
FROM node AS development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY . .
RUN npm install -g @angular/cli && npm install && ng build
# Run npm i

## STEP 2: Set up a imagen to build ###
FROM nginx
COPY --from=development /usr/src/app/dist/wimexpress /usr/share/nginx/html
ENV NODE_ENV=production
EXPOSE 80
ENV NGINX_PORT=80

