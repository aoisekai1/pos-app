# Run Docker File Web App
    docker build -t my-nextjs-app .
    
# Create Container Web App:
    docker run -d -p 3000:3000 --name nextjs-container my-nextjs-app

# Create Container Database
    docker run -d \
        --name db-postgres \
        -e POSTGRES_USER=myuser \
        -e POSTGRES_PASSWORD=mypassword \
        -e POSTGRES_DB=mydb \
        -p 5432:5432 \
        postgres

# To Login Database
    docker exec -it my-postgres psql -U myuser -d mydatabase

