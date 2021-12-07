FROM node:alpine AS development

# Working Directory of container
WORKDIR /usr/src/app

# Healthchecking to monitor application status
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -v http://localhost:1337/ || exit 1

# Container User with root permissions
# USER root

# Container DotENV Configuration
ENV NODE_ENV 'production'

# Install Application Dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn install

# Copy source of application
COPY . .

# Build files
RUN yarn build:webpack

# Use non-root user for process
USER node

# Application Entrypoint
EXPOSE 3600/tcp
ENTRYPOINT ["node"]
CMD [ "dist/bundle.js" ]