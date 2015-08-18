#!/bin/bash

PROJECT_DIR=/vagrant
NUM_WORKERS=3
WSGI_MODULE=mesa.wsgi

cd $PROJECT_DIR

# activate the virtual environment
source ~/.virtualenvs/mesa/bin/activate

# start the app server
exec gunicorn ${WSGI_MODULE}:application \
    --workers $NUM_WORKERS \
    --bind=127.0.0.1:8001
