 
FROM nginx
 
EXPOSE 88

COPY dist/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

USER root