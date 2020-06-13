FROM node:10 as builder
COPY package.json ./
RUN npm install && \
	mkdir ./react && \
	mv ./node_modules ./react

WORKDIR ./react
COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=builder ./react/build /usr/share/nginx/html
COPY scripts/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]