FROM nginx:1.20-alpine

# Configure Node
RUN apk add --update nodejs npm && \
    npm config -g set prefix /usr && \
    ln -vs /usr/lib/node_modules /root/.node_modules

COPY config/ /opt/env-config/config
COPY env.js /opt/env-config
COPY build/ /usr/share/nginx/html
EXPOSE 80
WORKDIR /usr/share/nginx/html
CMD ["/bin/sh", "-c", "npm link dotenv && node /opt/env-config/env.js ${ENVIRONMENT} . replacePlaceholders && nginx -g \"daemon off;\""]
