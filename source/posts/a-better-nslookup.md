---
title: "A Better Nslookup"
layout: articles/article-page.pug
summary: A custom alternative to the typical nslookup command
author: 
  firstname: Justin
  lastname: Hyland
  format: firstname lastname (username)
  username: jhyland87
tags:
  - nslookup
  - dig
  - DNS
  - nameserver
  - resolv.conf
  - networking
share:
  title: 'A Better Nslookup'
  summary: 'A Better Nslookup'
  href: http://geekwiki.local/posts/a-better-nslookup.html
---

If you're a Systems Administrator, and you use a Mac or any flavor of Linux/Unix for your workstation, chances are you have used the **[nslookup](http://www.linuxdigest.org/wp-content/uploads/Nslookup)** command, typically located at&nbsp;/usr/bin/nslookup. It's a fairly simple command, used to resolve a hostname to an IP, or lookup the PTR record(s) for a given IP address, very useful in every day situations.

In using this command, I found 2 issues with it that I believe hinder the command in some scenarios. If you're just doing a simple lookup on one record, that's no problem. But what if someone gives you a list of hostnames or IP addresses, and tells you to do a lookup on them, and provide the results, or report which ones failed? It gets a little more complicated.
 
The "issues" I see associated with the command are below.

1. No "simple" or "less verbose" output. Whenever you run the command, it will provide data about the server it is using to do the DNS lookup, as well as the hostname and IP address of the record.
2. No exit codes. Even if it fails to find a record, or it can't contact the DNS server, it will give an exit code of 0, which is a "Success" exit code.

Of course, with a little bit of creativity, you can resolve both of these issues, it's just a bit of a pain. You can use **[awk](http://www.linuxdigest.org/wp-content/uploads/AWK)** and **[grep](http://www.linuxdigest.org/wp-content/uploads/Grep)** to return just the results of the lookup, or you can use a conditional statement and return your own exit code. But after doing this a few times, you will realize it's a pain.
 
I scripted a&nbsp;relatively&nbsp;simple bash script that will fix both of these issues.

    #!/bin/bash
     
    # Make sure a paramater was passed
    if [-n "$1"]; then
      lookup=$1
    else
      exit 1
    fi
     
    # Do some regex to see if it's an IP or Hostname
    if [$(echo $lookup | egrep -o '^[0-9]+.[0-9]+.[0-9]+.[0-9]+') ];then
      # Its an IP, lookup the PTR record
      records=$(nslookup $lookup | grep 'name = ' | awk -F' = ' '{print $2}' | sed 's/.$//g' | sort)
    else
      # Its a hostname, lookup the A record
      records=$(nslookup $lookup | grep -A1 'Name:' | grep Address | awk -F': ' '{print $2}')
    fi
     
    # Were there any records returned?
    if [-z $records]; then
      exit 1
    else
      echo "$records"
    fi

 
Basically, here are the steps it follows:

1. Is there a paramater provided? If not, exit 1
2. Does the paramater match the regex for an IP?
3. If it does, then execute lookup and look for the Hostname results, if not, look for &nbsp;PTR results
4. If records were found, display records and exit 0, if no results, exit 1
So like I said, pretty simple, but it works perfect for every day situations. Heres a great example of a typical usage.

        $ for i in justinhyland.com break.com fake-site.omg; do echo -n "$i - "; /bin/bash quick\_nslookup.sh $i || echo "No Records Found"; done`
            justinhyland.com - 108.174.52.211
            break.com - 216.69.227.70
            fake-site.omg - No Records Found

As you can see, the results are straight to the point and easy to read, that's what the managers want right?

# P.S.

Depending on your ISP, the results may vary. For example, if you are on COX, if you run nslookup against a domain like "some-fake-site.idk", obviously it doesn't exist, therefore it doesn't resolve, but COX will return the IP 72.215.225.9, which is the Cox "Page Not Found" error you get when a hostname doesn't resolve. Not much you can do about that except throw in a conditional statement that will match for the IP and return an exit code of 1