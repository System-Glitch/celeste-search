FROM nginx:alpine
LABEL maintainer="https://github.com/ProjectCeleste/celeste-search"
COPY dist/celeste-search /usr/share/nginx/html
