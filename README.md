# Mesa

Simple message web application to demonstrate:

* [Django](https://www.djangoproject.com)
* [Django REST Framework](http://www.django-rest-framework.org)
* [React](https://facebook.github.io/react/)
* [Redux](http://rackt.org/redux/)
* [ES2015](http://www.ecma-international.org/ecma-262/6.0/) (transpiled with [Babel](http://babeljs.io/) and bundled with [webpack](http://webpack.github.io/))

## Running Locally

You can run this demo locally inside of a virtual machine. Install [VirtualBox](https://www.virtualbox.org/) and [Vagrant](https://www.vagrantup.com/) on your system. Download this repository to your system, change into that directory, and run

    vagrant up

This will set up an [Ubuntu 14.04](http://www.ubuntu.com/) virtual machine and install all of this project's required software inside of that machine. Once Vagrant has finished building the machine, open http://192.168.33.10 in a web browser to visit and use the web application.

## Frontend Package Management

For demo convenience, this project's frontend components were prebuilt into static/js/bundle.js. You can recompile these components with [webpack](http://webpack.github.io/). Within the project directory, run

    webpack

Other required third-party static files are included in the [static directory](static/). You can manage these files using [npm](https://www.npmjs.com/). For example, to update these files to a newer release, run the following commands within the project directory

    npm up
    npm run copy
