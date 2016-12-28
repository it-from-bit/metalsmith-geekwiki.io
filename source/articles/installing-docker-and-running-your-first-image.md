---
title: "Installing Docker and running your First Image"
layout: "articles/article-page.pug"
summary: "Installing Docker and running your First Image"
featured_image: "assets/articles/docker.png"
create_date: "04-06-2015"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "Installing Docker and running your First Image"
  summary: "Installing Docker and running your First Image"
  href: "###installing-docker-and-running-your-first-image###"
---
The technology world moves so fast, especially now. It also seems that technology comes and then goes, but then comes back even better than it use to be. Take Docker for an example, it's a container technology that allows developers and sysadmins to build, ship, and run distributed applications. This is much like LXC, but on steroids. If you haven't played with Docker yet, now is the time to do so because it is extremely exciting!

### Installing Docker
There are a couple of ways to install docker, depending on the operating system that you're using. All of which make it super stupid simple.

On RHEL/CentOS 6:

```bash
$ sudo yum install epel-release
$ sudo yum install docker-io
```

(Note, for CentOS-6 there is a package name conflict with a system tray application and its executable, so the Docker RPM package was called).

On RHEL/CentOS 7:

```bash
$ sudo yum install docker
```

If you want the instructions for other operating systems, visit the docker page by clicking [here](https://docs.docker.com/installation/).

### Getting your first image

Now that you have docker installed, you can search the hub, which is the public repository where everyone can submit images to:

```bash
$ docker search nginx
NAME                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
nginx                             Official build of Nginx.                        746       [OK]
jwilder/nginx-proxy               Automated Nginx reverse proxy for docker c...   177                  [OK]
maxexcloo/nginx-php               Docker framework container with Nginx and ...   31                   [OK]
...
```

Once you've found the name of the image you want to get, then simply pull it down:

```bash
$ docker pull nginx
```

You'll see a lot of hashes and "Downloading" and "Download completes" while it downloads.. and then once it's complete, you should see something similar to:

```bash
nginx:latest: The image you are pulling has been verified. Important: image verification is a tech preview feature and should not be relied on to provide security.
Status: Downloaded newer image for nginx:latest
```

Then you can run the following to list all of your local images available:

```bash
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
nginx               latest              224873bdcaa1        6 days ago          93.44 MB
```

### Using your image

Now that you have your image locally, you can initiate a shell prompt in interactive mode by running the following command:

```bash
$ docker run -t -i nginx:latest /bin/bash
root@b58f7e38c058:/#
```

Note, that you can run standard linux commands based on the image that you pulled. This particular nginx image is actually debian based so you can run apt-get update or any other debian commands you'd like. However, none of your changes will be saved once you exit out of the interactive shell. In the next article, I'll go over writing changes to your images.

Alliteratively to the interactive shell, you can run the image in daemon mode like so:

```bash
$ docker run --name some-nginx -d nginx
```

There is more to the nginx image that you'll need to do, to get your content there, but that's the general idea. The best way to understand what all you can and can't do with an image is to visit the docker hub website and view the readme file which will explain how to do things with the image. You can see that at: https://hub.docker.com
