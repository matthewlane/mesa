# Mesa

Simple message web application to demonstrate:
* [Django](https://www.djangoproject.com)
* [Django REST Framework](http://www.django-rest-framework.org)
* [React](https://facebook.github.io/react/)

## Running Locally

You can run this demo locally inside of a virtual machine. Install [VirtualBox](https://www.virtualbox.org/) and [Vagrant](https://www.vagrantup.com/) on your system. Download this repository to your system, change into that directory, and run

    vagrant up

This will set up an [Ubuntu 14.04](http://www.ubuntu.com/) virtual machine and install all of this project's required software inside of that machine. Once Vagrant has finished building the machine, open http://192.168.33.10 in a web browser to visit and use the web application.

## Frontend Package Management
For demo convenience, required third-party JavaScript files are included in the [static js directory](static/js). You can manage these files using [npm](https://www.npmjs.com/). For example, to update these files to a newer release, run the following commands within the project directory:

    npm up
    npm run copy

## Todo
- [ ] Build frontend with webpack
- [ ] Test frontend with Mocha and Chai
- [ ] Write documentation describing server setup
