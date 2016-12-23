---
title: "Viewing Bash Exit Status Codes With Pipes"
layout: "articles/article-page.pug"
summary: "Viewing Bash Exit Status Codes With Pipes"
featured_image:
create_date: "06-25-2012"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "bash", "exit codes with tee", "pipe exit codes", "tee exit code" ]
share:
  title: "Viewing Bash Exit Status Codes With Pipes"
  summary: "Viewing Bash Exit Status Codes With Pipes"
  href: "###viewing-bash-exit-status-codes-with-pipes###"
---
Recently I was executing bash scripts from within bash scripts, and executing commands based off of exit code, typically I just use

```bash
/bin/bash ./script.sh || echo "script.sh failed"
```

or just the typical

```bash
/bin/bash ./script.sh
if [ $? -ne 0 ]; then echo "script.sh failed"; fi
```

But now what if you are also piping the output of _script.sh_ through _tee_? Then you will see that $? is actually the exit code of the tee command.

I found a nifty bash variable/array, $PIPESTATUS. This is an array that contains the exit statuses of all of the exit codes ran by the last command.

By default, if you just echo $PIPESTATUS, you will get the first value, which in this case would be the exit value of /bin/bash ./script.sh.

The exit code of the scripts/commands are placed into the $PIPESTATUS array in the same order that they are executed. Heres an example of how to properly access the exit codes:

```bash
who | wc -l | foo

if [ ${PIPESTATUS[0]} -ne "0" ]; then
 echo "The 'who' command failed"
elif [ ${PIPESTATUS[1]} -ne "0" ]; then
 echo "The 'wc -l' command failed"
elif [ ${PIPESTATUS[2]} -ne "0" ]; then
 echo "The 'foo' command failed"
else
 echo "it worked!"
fi
```
