---
title: "How to install a LAMP (Linux, Apache, MySQL, PHP) stack on CentOS/RHEL"
layout: "articles/article-page.pug"
summary: "How to install a LAMP (Linux, Apache, MySQL, PHP) stack on CentOS/RHEL"
featured_image: "assets/articles/lamp.jpg"
create_date: "04-19-2013"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "How to install a LAMP (Linux, Apache, MySQL, PHP) stack on CentOS/RHEL"
  summary: "How to install a LAMP (Linux, Apache, MySQL, PHP) stack on CentOS/RHEL"
  href: "###how-to-install-lamp-linux-apache-mysql-php-stack-on-centosrhel###"
---

### What is a LAMP Stack?

A LAMP stack is a group of software that you install on a server to serve your own websites. Much like how this blog is being served to you, I purchased a VPS and then made a LAMP stack out of the server. LAMP stands for Linux, Apache, MySQL and PHP. Typically the Linux part is already taken care of for you when you purchase a new VPS or dedicated server from a hosting provider so we'll skip the Linux portion (I'll write up an article later on how install Linux). So with that being said, you should have a Linux server up and running and you should be able to log in as root (or use sudo) to install and configure the rest of the stack.

You will require root privileges to install the stack, if you don't have this then you will not be able to complete this.

## LAMP Installation
With all of the above said, it's now time to install the required components.

### * Step 1: Install Apache
To install Apache, simply type the following in a open terminal /shell

```bash
$ sudo yum -y install httpd
```

Once the install finishes you then will want to start the process which there are two ways of doing it.. I'll provide both commands, but both of them do the exact same thing just in a different manner.

```bash
$ sudo service httpd start
```

or

```bash
$ /etc/init.d/httpd start
```

Once you have done the above, you then can verify that apache has installed correctly and it is running by opening up a web browser and navigating to your server's IP address such as http://192.168.1.1 and it should display the apache test page which looks like this:

![apache-test-page](/assets/articles/apache-test-page.jpg)

If you want apache to automatically start when you reboot your server just simply chkconfig it to on like so:

```bash
$ sudo chkconfig httpd on
```

### * Step 2: Install MySQL
To install MySQL, simply type the following in a open terminal / shell

```bash
$ sudo yum -y install mysql-server
```

Please note, when MySQL is installing it will ask you two questions, just simply type yes for both of them and MySQL will complete it's installation.

Once the install finishes you then will want to start the MySQL process by issuing the following command, and much like apache there are two ways of doing it and I'll show you both.

```bash
$ sudo service mysqld start
```

or

```bash
$ sudo /etc/init.d/mysqld start
```

Once you have started the MySQL server you should then set a MySQL root password and run the mysql_secure_installation to set credentials and security for your MySQL instance, to start the setup simply run the following command:

```bash
$ sudo /usr/bin/mysql_secure_installation
```

By default the root password for MySQL is blank so when prompts you for a password, just hit enter. After you hit enter, it will ask you if you want to set a root password to which you will want to type Y and follow the instructions.

The actual setup of MySQL is pretty much automatic, it only asks you a few questions and then does the rest of the configuration. You simply need to answer yes or no to a few questions and you'll be good to go for MySQL. Typically for a easy installation, you just say yes to all the options. The options will look like this:

```bash
By default, a MySQL installation has an anonymous user, allowing anyone
to log into MySQL without having to have a user account created for
them. This is intended only for testing, and to make the installation
go a bit smoother. You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] y
 ... Success!

Normally, root should only be allowed to connect from 'localhost'. This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] y
... Success!

By default, MySQL comes with a database named 'test' that anyone can
access. This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] y
 - Dropping test database...
 ... Success!
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done! If you\'ve completed all of the above steps, your MySQL
installation should now be secure.

Thanks for using MySQL!
```

If you want MySQL to automatically start when you reboot your server just simply chkconfig it to on like so:

```bash
$ sudo chkconfig mysqld on
```

### * Step 3: Install PHP
To install PHP, simply type the following in a open terminal /shell

```bash
$ sudo yum -y install php php-mysql
```

Once the install finishes you have successfully installed PHP and the PHP-MySQL plugin. You now will want to restart apache, so apache then will be able to use php that you just installed and you can then create php pages. Simply restart apache by issuing the following command:

```bash
$ sudo /etc/init.d/httpd restart
```

And you're done! You now have a complete LAMP stack. See my future posts on good ways to setup your vhost structure to serve multiple domains on one IP and more. Let me know if you have any questions or run into any snags!
