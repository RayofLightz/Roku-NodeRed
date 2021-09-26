FROM nodered/node-red

USER root
RUN mkdir -p /opt/nodered-roku
COPY . /opt/nodered-roku

USER node-red

WORKDIR /usr/src/node-red/
RUN npm install /opt/nodered-roku
