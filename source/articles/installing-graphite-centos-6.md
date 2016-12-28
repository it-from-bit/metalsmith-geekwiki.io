---
title: "Installing Graphite on CentOS 6"
layout: "articles/article-page.pug"
summary: "Installing Graphite on CentOS 6"
featured_image: "assets/articles/statsd.png"
create_date: "07-01-2012"
author:
  firstname: "Kyle"
  lastname: "Corupe"
  format: "firstname lastname (username)"
  username: "kcorupe"
tags:
share:
  title: "Installing Graphite on CentOS 6"
  summary: "Installing Graphite on CentOS 6"
  href: "###installing-graphite-centos-6###"
---
This is the fastest way I have found to get Graphite installed. It is a rough tutorial but this is the fasteset way I have found to get it up and running.

*   Install epel repo

```bash
rpm -ivh http://mirror.us.leaseweb.net/epel/6/i386/epel-release-6-5.noarch.rpm
```

*   Install dependencies

```bash
yum install Django pycairo bitmap bitmap-fonts python-pip gcc python-devel mod_wsgi perl django-tagging
```
*   You can try and compile from source, but if it can be avoided always use some sort of package manager, in this case we will use Python Pip!

```bash
pip-python install carbon
pip-python install carbon
pip-python install whisper
pip-python install graphite-web
```

*   Setup basic conf files (you may need to configure them more later, but for now example confs will do to get the basic interface up

```bash
cd /opt/graphite/conf
cp carbon.conf.example carbon.conf
cp storage-schemas.conf.example storage-schemas.conf
cp graphite.wsgi.example graphite.wsgi
```
*   Setup httpd conf file: Use this as an example: [Example Graphite Vhost](http://bazaar.launchpad.net/~graphite-dev/graphite/trunk/view/head:/examples/example-graphite-vhost.conf)

```bash
vi /etc/httpd/conf.d/graphite.conf
```

*   Setup graphite webapp

# Enable debug

```bash
cd /opt/graphite/webapp/graphite
cp local_settings.py.example local_settings.py
vi local_settings.py
```

```bash
python manage.py syncdb
```

# Start carbon

```bash
cd /opt/graphite/
./bin/carbon-cache.py start
```

# Chown log file dir so apache can write

```bash
chown -R apache:apache /opt/graphite/storage/
```
