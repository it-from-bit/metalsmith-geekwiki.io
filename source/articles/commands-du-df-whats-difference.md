---
title: "DU vs. DF - Which Ones Right? Which To Trust?"
layout: "articles/article-page.pug"
summary: "DU vs. DF - Which Ones Right? Which To Trust?"
featured_image: "assets/articles/3d-pie-chart.png"
create_date: "02-24-2014"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "df", "disk usage", "du", "partition" ]
  share:
    title: "DU vs. DF - Which Ones Right? Which To Trust?"
    summary: "DU vs. DF - Which Ones Right? Which To Trust?"
    href: "###commands-du-df-whats-difference###"
---
[du](http://linux.die.net/man/1/du "Man page for command 'du'") and [df](http://linux.die.net/man/1/df "Man page for command 'df'") are both basic Linux commands that come pre-installed on every flavor of Linux (to the best of my knowledge).

Snippet from the man page for [du](http://linux.die.net/man/1/du "Man page for command 'du'")...

> NAME
>     du -- display disk usage statistics
>
> DESCRIPTION
>     The du utility displays the file system block usage for each file argument and for each directory in the file hierarchy rooted in each directory argument.  If no file is speci-
>     fied, the block usage of the hierarchy rooted in the current directory is displayed.</blockquote>

And then for [df](http://linux.die.net/man/1/df "Man page for command 'df'")...

>NAME
>     df -- display free disk space
>
>DESCRIPTION
>     The df utility displays statistics about the amount of free disk space on the specified filesystem or on the filesystem of which file is a part.  Values are displayed in
>     512-byte per block counts.  If neither a file or a filesystem operand is specified, statistics for all mounted filesystems are displayed (subject to the -t option below).

These commands are used pretty much every day, either by a SysAdmin troubleshooting an issue or setting up an application, or scripts that need to know the available or used disk space.

...But have you ever noticed that sometimes (... every time) they show results are different?

Typically (Not always, but usually), the size reported by _df_ will be more than whats reported by _du_, but it's very rare that they both report the same disk usage. Actually, personally... I have never seen them report the same size, and I've managed more Linux servers than I can even begin to count. Both of the commands use a different "ruler" per say when they determine the size of said folder/mount. So depending on what you're trying to get exactly, they can both be correct.

**NOTE:** In the output of any of my examples of _du_, I use the _-s_ flag to display the _summary_ of said directory, as opposed to outputting a tree-like display of the contents of the directory, and then the size of each of the files/folders. Then the _-h_ flag will display the space in human-readable format (for both _du_ and _df_).

There are a few reasons behind this, so lets go over it in some detail....=
___

#### Reason # 1
Files in memory will be included in the output of _df_. _du_ doesn't account for the files in memory, just the files that are actually on disk.

___

#### Reason # 2

The command _df_ will include the size of deleted files with open file descriptors. So hypothetically, if you were to have a large file (Lets say... a 4GB log file... because someone didnt enable logrotate), and you open that file, then someone steps on your toes and accidentally deletes that same 4GB log file (Or right then, it finally gets rotated), _df_ will still include the size of the file as if it was still there, thus, reporting an improper folder/mount point size.

**NOTE:** You can use the [lsof](http://linux.die.net/man/8/lsof "LSOF man page") command to help find file descriptors to deleted files. The exact command is _lsof +L1_

___

#### Reason #3
The command _df_, for the most part, get most of its info from the file systems primary superblock, so it's almost as if the results were cached, and you're pulling it from the cache. As opposed to _du_, which gathers the information for the output at the time you execute the command. You can tell this by how long it takes for the commands to execute. I'll execute both a _du_ and _df_ on the same machine, with the same mounts, and wrap it in a _time_ command...

```bash
$ time df -h /mnt/media/
Filesystem             Size  Used Avail Use% Mounted on
//192.168.1.140/Media  5.4T  2.4T  3.1T  44% /mnt/media

real	0m0.020s
user	0m0.010s
sys	0m0.000s

$ time du -sh /mnt/media/
1.6T	/mnt/media/

real	0m6.861s
user	0m0.270s
sys	0m0.800s
```

Not only is the usage almost a full TB off in the disk usage, but there was a difference of about 6 seconds! You can test this yourself by copying or moving data, then using the [watch command](http://linux.die.net/man/1/watch) in two different terminals and watch the differences in the sizes. The results from _df_ will update much faster, but the results wont change every time it executes.

___

#### Summary
Unless you're doing something like writing a script to interact with the NFS directly or something similar like that, I wouldn't really trust the output of _df_. I think of df as somewhat of a guesstimation or a ballpark figure of the partition sizes. The only real upside of it is the fact it executes nearly immediately. The _du_ command is much more reliable and accurate. So if you can spare the time it takes to execute the command, I would suggest using _du_ any day.

**Why is this information useful?** Sometimes (many times in my personal experience), you will execute something like an install script or something that will use one or the other to check for free disk space before it continues. I can remember more than a few times I had to use _lsof_ to check for open file descriptors because a script was erroring out. 
