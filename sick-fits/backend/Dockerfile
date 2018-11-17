FROM keymetrics/pm2:10-alpine
# Bundle APP files
WORKDIR /app
COPY src ./src/
COPY dist ./dist/
COPY package.json .
COPY pm2.json .
COPY .env .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Show current folder structure in logs
RUN ls -al -R

CMD ["pm2-runtime", "start", "pm2.json" ]