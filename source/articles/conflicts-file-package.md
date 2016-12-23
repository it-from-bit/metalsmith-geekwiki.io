---
title: "RHEL5 / CentOS5: File Conflicts when Upgrading VMWare Tools with Yum"
layout: "articles/article-page.pug"
summary: "RHEL5 / CentOS5: File Conflicts when Upgrading VMWare Tools with Yum"
featured_image:
create_date: "01-30-2014"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "RHEL5 / CentOS5: File Conflicts when Upgrading VMWare Tools with Yum"
  summary: "RHEL5 / CentOS5: File Conflicts when Upgrading VMWare Tools with Yum"
  href: "###conflicts-file-package###"
---
One of the issues that I have ran into is when you're running VMWare virtual machines, and a new kernel comes out, it seems to break the vmware-tools upgrade processes. It was extremely frustrating, because you would go to update and see the following issues:

```bash
Transaction Check Error:

file /lib/modules/2.6.18-8.el5/extra/vmware-tools-vmxnet3/vmxnet3.ko from install of kmod-vmware-tools-vmxnet3-1.0.47.0-2.6.18.8.el5.3.x86_64 conflicts with file from package kmod-vmware-tools-vmxnet3-1.0.37.0-2.6.18.8.el5.3.x86_64
 file /lib/modules/2.6.18-8.el5/extra/vmware-tools-vmxnet/vmxnet.ko from install of kmod-vmware-tools-vmxnet-2.0.9.1-2.6.18.8.el5.3.x86_64 conflicts with file from package kmod-vmware-tools-vmxnet-2.0.9.0-2.6.18.8.el5.3.x86_64

```

The way that I was fixing it, was simply removing all of VMWare Tools packages, doing my updates and then reinstalling.. I would use a simple for loop for this:

```bash
$ for i in $(rpm -qa | grep -I vmware);do yum -y remove $i;done
```

This worked, but it was extremely annoying when you needed to upgrade a bunch of systems, and there was always that issue of forgetting to re-install the yum packages after and then you would reboot the node and the vmxnet3 driver wasn't installed and your network interface wouldn't come up.

I then stumbled upon a fancy package that you can install to relieve you from these hassles, it's called yum-kmod. Once I found this package, it saved from having to remove the vmware packages completely. Just simply install yum-mod and it will handle the conflicts for you.

```bash
$ yum -y install yum-kmod
```

Please note, this is completely different on RHEL6 because yum-kmod is built into RHEL6. It's really a pain, and I'll write an additional article on this once I get to that point. I hope this helps you guys if you run into this issue, which is extremely frustrating.

If you know of a better way to resolve this, let us know.. but this seems to do the job, hassle-free.
