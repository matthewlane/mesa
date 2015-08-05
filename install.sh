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
    $VIRTUALENV/pip install -U setuptools

    echo "pip installed"
    echo "------------------------------"
fi
