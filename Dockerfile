FROM node:16.3-alpine

WORKDIR /app

RUN apk --update add cmake autoconf automake libtool binutils libexecinfo-dev g++ make python3 \
  && rm -rf /var/cache/apk/*

ADD ./.aws-lambda-rie/aws-lambda-rie /usr/local/bin/aws-lambda-rie

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENTRYPOINT [ "scripts/entry_script.sh" ]
CMD ["lambda.handler"]