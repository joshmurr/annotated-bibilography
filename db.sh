sudo docker run --rm --name bib -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=bib -p 5432:5432 -v ~/docker/volumes/postgres:/var/lib/postgresql/data postgres:latest
