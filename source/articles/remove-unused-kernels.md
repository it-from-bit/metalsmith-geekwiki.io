---
title: "RHEL / CentOS: Safely remove old unused Kernels"
layout: "articles/article-page.pug"
summary: "RHEL / CentOS: Safely remove old unused Kernels"
featured_image:
create_date: "01-31-2014"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "RHEL / CentOS: Safely remove old unused Kernels"
  summary: "RHEL / CentOS: Safely remove old unused Kernels"
  href: "###remove-unused-kernels###"
---
I have ran into it before when you do a yum update, it prompts you telling you that there isn't enough space free on the /boot partition. You have two options at this point, either increase the space the /boot partition has.. or clean up your old unused kernels that are taking up the space. Personally, I don't see a reason in keeping more than 2 kernels at a time, you'll more than likely never go back to a previous version once you've upgraded.

So, to remove the old kernels first you will want to check to see what version you're currently running, that way we know not to remove it:

```bash
$ uname -r
2.6.32-220.13.1.el6.x86_64
```

So in this case, we know our kernel version is 2.6.32-220.13.1.el6.x86_64. Next, we want to list all kernels that are installed, we can do this by running the following command:

```bash
$ rpm -q kernel
kernel-2.6.32-220.el6.x86_64
kernel-2.6.32-220.7.1.el6.x86_64
kernel-2.6.32-220.13.1.el6.x86_64
```

So as you can see, there are 3 total installed. We know our current version is stable and works for us, so let's remove the other two. We can do so by simply yum removing them:

```bash
$ yum remove kernel-2.6.32-220.el6.x86_64 kernel-2.6.32-220.7.1.el6.x86_64
```

And that's it! You can rerun the rpm -q kernel command and see that there is only one left and then you can check your free space on the /boot partition.
