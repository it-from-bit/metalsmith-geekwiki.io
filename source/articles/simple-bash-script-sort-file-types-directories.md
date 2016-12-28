---
title: "Simple Bash Script to Sort File Types into Directories"
layout: "articles/article-page.pug"
summary: "Simple Bash Script to Sort File Types into Directories"
featured_image:
create_date: "09-04-2013"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags: [ "automation", "bash", "scripting" ]
share:
  title: "Simple Bash Script to Sort File Types into Directories"
  summary: "Simple Bash Script to Sort File Types into Directories"
  href: "###simple-bash-script-sort-file-types-directories###"
---
Often times I find myself needing to sort a lot of files into certain directories, for example I have downloaded a lot of free ebooks and a lot of them have different file types such as epub, mobi, azw, or even pdf and I want to keep them sorted into their respective folders to make it easier to pull up particular file types. To quickly do this I wrote a very simple and basic bash script that will allow me to do this.


```bash
#!/bin/bash

array=( epub mobi pdf azw )
bookdir="/books"
sourcedir="/home/user/"

for i in "${array[@]}"
do
 echo "Moving books with file type: $i"
 find $sourcedir -type f -iname "*.$i" -print0 | xargs -0 -I file mv -v "file" "$bookdir/$i/"
 chown -R apache.apache "$bookdir/$i"
done

```

All it does is look for particular files that end in the extension that is in the array, and then move them into the bookdir/extension folder. So as an example if I had file1.epub in the /home/user/ directory, it would find that file and then move it to /books/epub.

This is a very basic script, and is just here to help people get the idea of how to automate tasks that you would normally do manually.
