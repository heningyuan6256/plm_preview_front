 
FROM nginx
 
EXPOSE 88

COPY dist/ /usr/share/nginx/html/

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

USER root