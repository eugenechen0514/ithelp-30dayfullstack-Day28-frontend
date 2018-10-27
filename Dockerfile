FROM nginx:1.15

# Localtime
ENV TZ=Asia/Taipei
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Nginx default public folder
WORKDIR /usr/share/nginx/html

# Copy public files
COPY ./build .

# Package (option)
# RUN apt-get update
# RUN apt-get install -y vim
# RUN apt-get install -y curl
# RUN apt-get install -y wget
