#!/bin/bash

# pip and virtualenv/wrapper
if ! hash pip 2>/dev/null; then
    echo "Installing pip..."
    echo "------------------------------"

    cd /tmp
    wget -O get-pip.py https://bootstrap.pypa.io/get-pip.py --no-check-certificate
    sudo -H python get-pip.py

    # virtualenvwrapper
    sudo -H pip install virtualenvwrapper

    echo "pip installed"
    echo "------------------------------"
fi
