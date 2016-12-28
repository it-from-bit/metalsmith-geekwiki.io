---
title: "RHEL: Cannot retrieve repository metadata (repomd.xml) for repository"
layout: "articles/article-page.pug"
summary: "RHEL: Cannot retrieve repository metadata (repomd.xml) for repository"
featured_image:
create_date: "01-29-2014"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "RHEL: Cannot retrieve repository metadata (repomd.xml) for repository"
  summary: "RHEL: Cannot retrieve repository metadata (repomd.xml) for repository"
  href: "###retrieve-repository-metadata###"
---
I've ran into this issue a few times where I currently work, and it was extremely frustrating trying to figure out why I was unable to update our systems via yum, and kept receiving this error.

```bash
$ yum update
Loaded plugins: fastestmirror, rhnplugin, security
This system is receiving updates from RHN Classic or RHN Satellite.
Loading mirror speeds from cached hostfile
Error: Cannot retrieve repository metadata (repomd.xml) for repository: rhel-x86_64-server-5. Please verify its path and try again
```

What we found for this issue, is the server was unable to retrieve the metadata from the repository, just like it said. Meaning that a firewall or network issue was happening with the node, or the repository is unavailable. In our case, it was simply because we didn't configure the node to use the proxy that we had set up to reach the repository. So we made the following change:

Enable the http proxy settings in the up2date config file:

```bash
$ vim /etc/sysconfig/rhn/up2date
And set these values:

enableProxy[comment]=Use a HTTP Proxy
enableProxy=1

httpProxy[comment]=HTTP proxy in host:port format, e.g. squid.redhat.com:3128
httpProxy=proxy.address.com:3128
```

Hopefully this works for you, if it doesn't and you find other ways to resolve this, please post in the comments letting us know!
