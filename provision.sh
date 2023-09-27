#!/bin/bash

apt-get update -y

# Install prerequisites
apt-get install -y apt-transport-https ca-certificates curl software-properties-common

# Install Docker
curl -fsSL https://get.docker.com | sh
usermod -aG docker vagrant

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Criar pasta do projeto
mkdir -p /projeto

chmod -R 777 /projeto