---
title: "Alternatives To Commonly Used Linux Commands"
layout: "articles/article-page.pug"
summary: "Alternatives To Commonly Used Linux Commands"
featured_image: "assets/articles/linux-commands.png"
create_date: "07-01-2014"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "dig", "host", "htop", "less", "more", "mtr", "nslookup", "top", "traceroute", "tracert" ]
share:
  title: "Alternatives To Commonly Used Linux Commands"
  summary: "Alternatives To Commonly Used Linux Commands"
  href: "###alternatives-commonly-used-commands###"
---
In my opinion, one of the best things about Unix/Linux, is there's typically always more than one correct way to do something. Sometimes, some ways are better than others, or quicker or more efficient or reliable, but it's common to get locked into doing something one specific way just because you've done it repeatedly. There's always alternative methods of accomplishing a task, like if you wanted to find out what ports are open on a server, depending on if you are on the server itself or not, you have lsof, nmap, netstat

I like to research alternative methods of accomplishing common tasks, just to see if there's a better way of doing.... whatever it is I'm doing.

## Traceroute vs. MTR
The _[traceroute](http://linux.die.net/man/8/traceroute "Traceroute Man Page")_ command is probably one of the most commonly used commands for diagnosing network related issues. It's a fairly simple command, you just run something like 'traceroute google.com' and it

Screenshot of the difference between the output of traceroute and the output of mtr
![Screenshot of the difference between the output of traceroute and the output of mtr](/assets/articles/traceroute_vs_mtr.png)

will print the route packets trace to whatever host you specified (google.com, in my example).

What if you are waiting for something to change though? Most administrators would combined _traceroute_ with the _[watch](http://linux.die.net/man/1/watch "Linux Watch Man Page")_ command, or even worse, hit the up arrow and hit enter about a thousand times.

There's a great alternative to this, it's a command called [mtr](http://linux.die.net/man/8/mtr "Linux Man Page MTR"). _mtr_ isn't always installed by default, so you may need to use your package installer to install it.

_mtr_ is essentially a live feed of the _traceroute_ output (Screenshot above). It also will show you packet loss on each hop in a live feed, which is what you would alternatively be using _ping_ to do, so you could say this accomplishes both _traceroute_ and _ping_. This is very useful when you're waiting for something to change, or if you need to actively monitor the path to a server, etc.

___
## Top vs. Htop

Even more popular than the _traceroute_ command would be top. I think top is probably the first command you learn as a sys admin, as far as diagnostics goes. Top will show you the load averages, the top

Difference in the output of the commands top and htop
![Command outputs of TOP and HTOP](/assets/articles/top_vs_htop.png)

Resource intensive processes, the users, pids, memory utilization, CPU utilization, pretty much everything you need to know. If you want to manipulate the output (Such as sort by CPU or Memory, only show specific user processes, or show a tree view for example), that can only be accomplished using the arguments associated with top when you run the command itself.

An awesome alternative to _top_, is [htop](http://linux.die.net/man/1/htop "Linux Command Htop Man Page"). Htop will provide you with essentially the same functionally as top, except the interface of htop is fully interactive! You have the ability to actively manipulate the output or interact with the processes in the output, using the F-keys:

**F4** lets you filter the output so you can look for specific commands; **F5** will display the processes in a tree view, showing each parent and child process; **F6** lets you pick a column to sort by, and how to sort it; **F7** and **F8** let you manipulate the nice level of the process; **F9** lets you pick a process to terminate, as well as which kill signal to send, and you can escape htop with **F10**

Just like mtr (and most of the commands listed here), you will need to install this using your package manager.

**Note**: _htop_ will only display processes that it has permissions to, so if you want to see all of the processes on the system, be sure to use sudo. I would just recommending adding an alias to your ~/.bash_profile to alias htop="sudo htop"

Also...  Another alternative to _top_, for monitoring system utilization and resources, would be _[atop](http://linux.die.net/man/1/atop "Linux Man Page Command atop")_. The output of _atop_ is much more informational than the standard _top_ command, but its not at all interactive.

___
## Less vs More
This ones pretty simple actually. Both less and _more_ are just simply pagers. The key difference between Less and More is, More permits you to view the contents of the file, while scrolling down only, you can not scroll up in More. However, with Less, you can scroll up AND down.

I think the irony in the names is just a simple pun, _less_ is _more_, and _more_ is _less_!..

___
## Nslookup vs Dig & Host
![Nslookup_VS_Dig_VS_Host](/assets/articles/Nslookup_VS_Dig_VS_Host.png)

[Nslookup](http://linux.die.net/man/1/nslookup "Nslookup man page") is probably one of the most popular commands for any sysadmin. It's a fairly simple command, all it does is return the DNS record of whatever is provided to it as an argument.

[Dig](http://linux.die.net/man/1/dig "Dig man page") is pretty simple to use, and a lot more informational than _nslookup_. It gives you a more in-depth response about the answer provided; Regurgitates the query you requested back to you; Gives you the answers under the answer section; As well as which server was used to query, and the time the query was performed. Yes, some of this is provided by _nslookup_, but not all of it.

The [host](http://linux.die.net/man/1/host "Host command man page") command basically simplifies both nslookup and dig about as much as it can, which is great for scripting or whenever you need to get right down to the point.

If this isn't enough as it is... _nslookup_ is deprecated. The organization that maintains the code for _nslookup_, Internet Systems Consortium, has very clearly stated so. So I would think that says enough as it is.

**Source:** [blog.smalleycreative.com](http://blog.smalleycreative.com/linux/nslookup-is-dead-long-live-dig-and-host/)

___
## Di vs Df (and Du)
![Output comparison between DU, DF and DI](/assets/articles/df_vs_du_vs_di.png "DU, DF and DI")

Pretty much everyone knows about [df](http://linux.die.net/man/1/df) but theirs one I just learned about. it's called [di](http://linux.die.net/man/1/di), which means Disk Information, (I bet you could have guessed that :-P)

df is a very popular command, used by administrators and scripts very frequently, but still it doesn't provide some excellent and useful features like actual disk space that is available to each user, various useful display formats etc.

You can see in the screenshot on the right, the information provided by the commands _df_, _du_ and _di_. _Di_ provides more information, and is just as quick as _df_, and accurate as _du_, (I'm not quite sure how that's possible... yet, if you know, please comment on this post).

___
## Vi vs VIM
![VIM Plugin YouCompleteMe](/assets/articles/youcompleteme.gif "VIM Plugin YouCompleteMe")

At first glance to me, VIM was nothing more than VI with syntax highlighting. But after further research, I found some differences than count for more than just syntax highlighting.

VI comes installed on most OS's by default, but its not nearly as powerful as VIM.

VIM allows plugins, plugins that won't work with just the simple VI binary by itself. Getting the list of plugins is a while other post, but ill tell you right now that one worth checking into is called [You Complete Me](https://github.com/Valloric/YouCompleteMe). Heres a quick snippet of what YCM is...


> YouCompleteMe is a fast, as-you-type, fuzzy-search code completion engine for [Vim](http://www.vim.org/). It has several completion engines: an identifier-based engine that works with every programming language, a semantic, [Clang](http://clang.llvm.org/)-based engine that provides native semantic code completion for C/C++/Objective-C/Objective-C++ (from now on referred to as "the C-family languages"), a [Jedi](https://github.com/davidhalter/jedi)-based completion engine for Python, an [OmniSharp](https://github.com/nosami/OmniSharpServer)-based completion engine for C# and an omnifunc-based completer that uses data from Vim's omnicomplete system to provide semantic completions for many other languages (Ruby, PHP etc.).


Just a couple more cool things that VIM can accomplish that you can't do directly with VI.. You may have to have all of the VIM packages vim-full. I would just use yum or apt-get to install vim-\*, I think  thats around 25 packages, depending on your distro.

* Editing files on other locations using network protocols such as SSH, SCP or even HTTP
* You can modify files inside compressed archives. as-is
* VIM is becoming more and more common, and being ported to much more distros of OS than VI is
* VIM comes with something called 'vimdiff'. which allows you to compare two files
* With VIM, you can split the screen for editing multiple files, which is actually very handy when having to do things at the console, and you cant use terminator. Just have to learn the controls, somewhat like [screen](http://linux.die.net/man/1/screen).

Thats all I have for now. I definitely prefer VIM to VI, but as long as you don't use NANO... you're OK in my book ;-)
