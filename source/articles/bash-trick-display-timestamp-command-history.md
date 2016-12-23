---
title: "Bash Trick - Display Timestamp For Each Command In History"
layout: "articles/article-page.pug"
summary: "Bash Trick - Display Timestamp For Each Command In History"
featured_image:
create_date: "04-24-2014"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags:
share:
  title: "Bash Trick - Display Timestamp For Each Command In History"
  summary: "Bash Trick - Display Timestamp For Each Command In History"
  href: "###bash-trick-display-timestamp-command-history###"
---
Ever go through your _history_, and wish you knew the exact date and time a given command was typed? Well theres actually a fairly simple trick. It's the global _HISTTIMEFORMAT_ variable.

To test it out, copy and paste the following into your bash prompt, type a few commands, then type _history_ again.
```bash
$ HISTTIMEFORMAT="%d/%m/%y %T "
```

You should see the typical history output, with the date and time prepended to each line. Heres an example from my _history_ output.
```bash
  497  24/04/14 01:16:46 man nmap
  498  24/04/14 01:16:46 sudo su -
  499  24/04/14 01:16:46 sudo su -
  500  24/04/14 01:16:46 exit
  501  24/04/14 01:16:53 clear
  502  24/04/14 01:16:54 HISTTIMEFORMAT="%d/%m/%y %T "
  503  24/04/14 01:16:57 ls
  504  24/04/14 01:17:04 whoami
  505  24/04/14 01:17:17 ps aux |grep bla
  506  24/04/14 01:17:20 history |tail
```

Now if you want this to be permanent, then execute the following, to add it to your _.bash_profile_
```bash
$ echo 'export HISTTIMEFORMAT="%d/%m/%y %T "' >> ~/.bash_profile
```
