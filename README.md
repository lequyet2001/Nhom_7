# Nhom_7

# Cài đặt docker: trên ubuntu 
    - Cập nhật các gói danh sách trên ubuntu: sudo apt update
    - Cài đặt các phần phụ thuộc cần thiết: sudo apt install apt-transport-https ca-certificates curl software-properties-common
    - Thêm kho lưu trữ Docker:
         curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    - Cài đặt Docker: 
        sudo apt update
        sudo apt install docker-ce
    - Kiểm tra version đang sử dụng:
        docker --version
    - Thiết lập Dockerfile :
        FROM ubuntu:20.04
        RUN apt-get update && apt-get install -y curl 
        RUN sudo apt-get install nodejs
        RUN sudo apt-get install npm




        FROM node:18.12.1
        WORKDIR /
        COPY package*.json  ./
        RUN npm install 

        COPY . .

        EXPOSE 9090
        CMD ["npm","start"]


    - Xây dựng images Docker:
        docker build -t your-image-name .
    - Đăng nhập Docker: 
        docker login
    - Tải image lên Docker Hub:
        docker push your-username/your-image-name
# CI/CD với github action và heroku
    