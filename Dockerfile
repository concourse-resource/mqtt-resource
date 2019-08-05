FROM alpine:3.7

ARG CODACY_PROJECT_TOKEN

LABEL maintainer.1="André Lademann <vergissberlin@googlemail.com>"

RUN apk add --no-cache \
    bash \
    git \
    jq \
    nodejs

WORKDIR /opt/resource/

ENV CODACY_PROJECT_TOKEN=$CODACY_PROJECT_TOKEN

COPY . /opt/resource

RUN npm install
RUN npm run test &&\
	npm run test-with-coverage

RUN rm -rf \
    spec \
    package.json \
    package-lock.json

RUN chmod +x /opt/resource/out /opt/resource/in /opt/resource/check
