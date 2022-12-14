#!/bin/bash

echo "criando as imagens"

docker build -t ronaldoluiz/projeto-backend:1.0 backend/.
docker build -t ronaldoluiz/projeto-database:1.0 database/.

echo "realizando o push das imagens"

docker push ronaldoluiz/projeto-backend:1.0 
docker push ronaldoluiz/projeto-database:1.0 