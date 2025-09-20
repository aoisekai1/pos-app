#!/bin/bash

BRANCH="main"
CONTAINER_NAME="pos-app"
IMAGE_NAME="pos-app-image"

echo "Deploying to VPS..."

ssh root@202.155.95.74 -T << EOF
  set -e

  echo "Switching to app directory..."
  cd /root/pos-app || exit

  echo "Pulling latest changes from $BRANCH..."
  git fetch origin
  git checkout $BRANCH
  git pull origin $BRANCH

  echo "Stopping old container..."
  docker stop $CONTAINER_NAME || true
  docker rm $CONTAINER_NAME || true
  docker rmi $IMAGE_NAME || true

  echo "Building new image..."
  docker build -t $IMAGE_NAME .

  echo "Running new container..."
  docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME

  echo "Deployment finished successfully!"
EOF
