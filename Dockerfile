# FROM node:17.0.1

# # Working Directory of container
# WORKDIR /app

# # Healthchecking to monitor application status
# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -v http://localhost:1337/ || exit 1

# # Container User with root permissions
# USER root

# # Container DotENV Configuration
# ENV NODE_ENV 'production'

# # Install Application Dependencies
# COPY package.json yarn.lock /app/
# RUN yarn install

# # Copy source of application
# COPY . .

# # Build files
# RUN yarn build:webpack

# # Use non-root user for process
# USER node

# # Application Entrypoint
# EXPOSE 1337/tcp
# ENTRYPOINT ["node"]
# CMD [ "dist/bundle.js" ]

FROM node:17.0.1

COPY . /src
WORKDIR /src

RUN yarn
RUN yarn run build:webpack

EXPOSE 1337

CMD [ "node", "dist/bundle.js" ]