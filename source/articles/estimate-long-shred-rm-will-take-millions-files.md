---
title: "Estimate how long shred or rm will take on millions of files"
layout: "articles/article-page.pug"
summary: "Estimate how long shred or rm will take on millions of files"
featured_image: "assets/articles/shredding.jpg"
create_date: "05-18-2014"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "Estimate how long shred or rm will take on millions of files"
  summary: "Estimate how long shred or rm will take on millions of files"
  href: "###estimate-long-shred-rm-will-take-millions-files###"
---
Today I came across a challenge, try and figure out how long it will take to remove millions of files from our systems. We are all about security, so we need to run shred rather than rm when we remove files to ensure they are securely deleted. If you don't know what shred is, it's an application on linux that allows you to securely delete any file from your system. It will do, by default, 3 passes over the file to ensure that the file is completely unrecoverable if anyone tried to. The problem though is, when you're doing this to millions of files (in our case, it was roughly 43million) it is extremely slow, and people will ask you to try and figure out how long it would take for the command to finish..

I was asked this very question quite a few times and told them I would try and get some sort of estimate, and this is the best way that I managed to do it, and it seemed to be close to the actual time it took for the files to be shredded. Please note, there is one very HUGE issue with this estimate.. and that is that it can CHANGE AT ANY GIVEN TIME based on the load and the I/O of the system. So when you provide this information to someone, tell them that it is an extremely rough estimate just to tell you what the current speed of shredding or deletion at that point in time.

Anyway, here is the script that we used to tell us this information. As a note, start running your shred or rm command in a screen window and then run this script on the same server/node.

```bash
#!/bin/bash

a=$(df | grep "/folder" | awk '{print $3}')
sleep 60
b=$(df | grep "/folder" | awk '{print $3}')

blocks_per_minute=$((a-b))
minutes_left=$((blocks_left/blocks_per_minute))
hours_left=$((minutes_left/60))
days_left=$((hours_left/24))

echo "Shred Estimate"
echo "------------------------------------"
echo "Blocks per minute: $blocks_per_minute"
echo "Blocks left: $blocks_left"
echo "Minutes left: $minutes_left"
echo "Hours left: $hours_left"
echo "Days left: $days_left"

```

The above will produce the following output:

[```bash

Shred Estimate
------------------------------------
Blocks per minute: 70632
Blocks left: 805646648
Minutes left: 11406
Hours left: 190
Days left: 7

```

I hope this helps someone at some point, and I am definitely not claiming to be the expert at this, but this seemed to work for us.

Let us know if you know of a better way of doing this in the comments.
