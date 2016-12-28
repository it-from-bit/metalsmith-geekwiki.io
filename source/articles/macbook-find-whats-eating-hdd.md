---
title: "Macbook - Find whats eating up your HDD"
layout: "articles/article-page.pug"
summary: "Macbook - Find whats eating up your HDD"
featured_image: "assets/articles/Disk_Inventory_X.jpg"
create_date: "02-10-2014"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "apple", "diagnostics", "mac", "macbook", "troubleshooting" ]
share:
  title: "Macbook - Find whats eating up your HDD"
  summary: "Macbook - Find whats eating up your HDD"
  href: "###macbook-find-whats-eating-hdd###"
---
I know... this isn't Linux, and a lot of Linux folk hate Mac. Putting Apple Inc aside, Mac is actually a great operating system to use to manage Linux servers in a corporate environment. I HATED Macbooks for the longest time, until work gave me the option of using Windows or getting a nice Mac. My primary reason for getting Mac was because if I chose Windows, I would have gotten a crappy Dell, and I was going to install some type of virtualization and use Mint anyhow.

I do a lot of development on my Mac, but my root partition is 698Gi large, which is fairly large, so when one day I got an error that my disk space had only 10% left, I was a but surprised.

I had to hop around all day and use _[du](http://linux.about.com/library/cmd/blcmdl1_du.htm)_ and delete files and folders that I had downloaded, but I still had a large amount taken, and it didn't make sense to me.

After some looking around, and trying some applications that would help, I found the one that was actually super cool, it's called _[Disk Inventory X](http://www.derlien.com/)_. It analyzes all (or selected volumes), and shows you a very nice graphical display. Heres an example (Not from my Macbook):
![Disk Inventory X](/assets/articles/Disk_Inventory_X.jpg)

Pretty useful huh? It shows you a color coded graphical representation.

The application is free to download, so give it a shot!
