---
title: "Disabling root login on Linux"
layout: "articles/article-page.pug"
summary: "Disabling root login on Linux"
featured_image: "assets/articles/rootlogin.png"
create_date: "08-14-2013"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags: [ "root" ]
share:
  title: "Disabling root login on Linux"
  summary: "Disabling root login on Linux"
  href: "###disabling-root-login###"
---
One of the biggest mistakes any Linux Administrator can make is allowing root to log into the server directly via SSH, the reason this is a huge mistake is root is an account that everyone knows the name of so any cracker can brute force your server and obtain the root password and cause a load of headaches for you. This security vulnerability, if you want to call it that is very easy to fix. It's a lot better to create a separate account that you use and then you can grant that user sudo rights to root.

**Note: Make sure you have a regular user account and they have sudo privileges before you disable the root login. I will go over how to do this first, before disabling root login.**

Create and enable sudo rights to a new user

```bash
$ useradd -G wheel <new username>
```

Now set a password for the newly created user

```bash
passwd <new username>
```

Then you must make sure that the wheel group is enabled, to do this you can use the visudo command which will open the sudoers file up in the VI editor

```bash
$ visudo
```

Inside the file, go down towards the bottom and you'll see something like this:

```bash
## Allows people in group wheel to run all commands
# %wheel ALL=(ALL) ALL
```

All you need to do is simply remove the hash before the %wheel line and then write, save, and quit the file.

```bash
## Allows people in group wheel to run all commands
%wheel ALL=(ALL) ALL
```

Now let's disable root login. To do this, we'll need to edit the sshd_config file which is the configuration file that SSHD uses. Depending on your distro, will depend on where this file is located typically it is located in /etc/ssh/, sudo to root as you new user and edit this file

```bash
$ vi /etc/ssh/sshd_config
```

Inside this file search for a line that says "PermitRootLogin" it will be in a block that looks like this:

```bash

# Authentication:

#LoginGraceTime 2m
#PermitRootLogin yes
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10
```

Make the PermitRootLogin line look like this, which will disable logging in as root via ssh:

```bash
PermitRootLogin no
```

Now we need to make the changes take affect, to do this we simply restart the sshd service (your connection will not be lost)

```bash
$ /etc/init.d/sshd restart
```

Once it reloads, root is now disabled on your system and you have a user that you can sudo as.
