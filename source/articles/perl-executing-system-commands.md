---
title: "Perl - Executing System Commands"
layout: "articles/article-page.pug"
summary: "Perl - Executing System Commands"
featured_image:
create_date: "07-15-2012"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags:
share:
  title: "Perl - Executing System Commands"
  summary: "Perl - Executing System Commands"
  href: "###perl-executing-system-commands###"
---
Perl comes with the ability to execute commands at the OS level, on any OS you are running (Linux, Windows, Mac, etc etc)

There are three options available, all are different:
1.  **system** - Returns an exit code of the command you ran
2.  **exec** - doesn't return anything at all
3.  **backticks ( \`\` )** - Returns the output of the command

The most common is the backticks, you can run something, then parse the output. It's common to split it by the line returns into an array, then parse it line by line.

I have always believed executing system commands from a language other than the language your'e actually using in the execution, (Bash, Windows DOS, etc), is bad practice. I mean having a script thats half perl and half bash just seems like it may be inconsistent or unreliable.

If you consult with the Google Gods, it seems thats a popular opinion, nearly every result says do NOT use it, unless...
1.  You need to capture (or supress) the output.
2.  There exists no built-in function or Perl module to do the same task, or you have a good reason not to use the module or built-in.
3.  You sanitise your input.
4.  You check the return value.

So, the 2nd one pretty much rules out a LOT of reasons to use system, exec, or backticks. (moving files, copying files, even using ssh and scp on Linux). The only time I have ever found it OK to use, was when I was using [PsExec](http://www.linuxdigest.org/wp-content/uploads/bb897553.aspx) on a Windows OS, because I needed to execute commands on a remote Windows server, and parse the output, (Did have to pipe it all to STDOUT though).

While researching this info, I came across a nice perl module, [IPC::System::Simple](http://www.linuxdigest.org/wp-content/uploads/Simple.pm). looks like a nice and easy way to execute remote commands, using a perl module! It can do the same as the Perl commands 'system', 'exec' and even the backticks. Only time that would really be useful though, is if you can install any perl module (EG: if you always run it locally). Where I work, we usually have to make the scripts compatible with all servers, and its best to do it without requiring other perl modules to be installed. So, in my opinion, use the IPC::System::Simple if you're executing the script locally, but if you need to run it on any server, it's just easy to use the backticks, system or exec commands...

I made this post primarily just to annoy The Geoff Hatch.
