FROM nginx:alpine

RUN apk add --no-cache openssl

#RUN mkdir -p /etc/nginx/ssl && \
#    openssl req -x509 -nodes \
#    -out /etc/nginx/ssl/gateway.crt \
#    -keyout /etc/nginx/ssl/gateway.key \
#    -subj "/C=ES/ST=Andalucia/L=Malaga/O=42/OU=42/CN=gateway.local/UID=gateway"

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]