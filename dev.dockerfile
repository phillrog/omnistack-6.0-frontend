FROM nginx:1.15.12-alpine

RUN apk update && apk add --no-cache make git openrc

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
