#!/bin/bash

export PROJECT_NAME=mesa
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENV_DIR=$WORKON_HOME/$PROJECT_NAME
export VIRTUALENV=$VIRTUALENV_DIR/bin

# pip and virtualenv
if ! hash pip 2>/dev/null; then
    echo "Installing pip..."
    echo "------------------------------"

    # install pip
    cd /tmp
    wget -O get-pip.py https://bootstrap.pypa.io/get-pip.py --no-check-certificate
    sudo -H python get-pip.py

    # create virtualenv for project
    sudo -H pip install virtualenvwrapper
    mkdir -p $WORKON_HOME
    virtualenv $VIRTUALENV_DIR

    # install dependencies
    $VIRTUALENV/pip install -U setuptools
    $VIRTUALENV/pip install -r /vagrant/requirements.txt

    # create database
    $VIRTUALENV/python manage.py migrate

    echo "pip installed"
    echo "------------------------------"
fi


# Git
if ! hash git 2>/dev/null; then
    echo "Installing Git..."
    echo "------------------------------"

    sudo apt-get update
    sudo apt-get install git -y

    echo "Git installed"
    echo "------------------------------"
fi


# Nginx
if ! hash nginx 2>/dev/null; then
    echo "Installing Nginx..."
    echo "------------------------------"

    sudo apt-get update
    sudo apt-get install nginx -y

    sudo rm -f /etc/nginx/sites-enabled/default
    sudo cp -pf /vagrant/nginx.conf /etc/nginx/sites-available/$PROJECT_NAME.conf
    sudo ln -sf /etc/nginx/sites-available/$PROJECT_NAME.conf /etc/nginx/sites-enabled/$PROJECT_NAME
    sudo service nginx restart

    echo "Nginx installed"
    echo "------------------------------"
fi


# Supervisor
if ! hash supervisorctl 2>/dev/null; then
    echo "Installing Supervisor..."
    echo "------------------------------"

    sudo apt-get update
    sudo apt-get install supervisor -y

    sudo cp -pf /vagrant/supervisor.conf /etc/supervisor/conf.d/$PROJECT_NAME.conf
    sudo supervisorctl reread
    sudo supervisorctl update

    echo "Supervisor installed"
    echo "------------------------------"
fi
