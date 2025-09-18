# Run Docker File
    docker build -t my-nextjs-app .
    
# Create Container:
    docker run -d -p 3000:3000 --name nextjs-container my-nextjs-app