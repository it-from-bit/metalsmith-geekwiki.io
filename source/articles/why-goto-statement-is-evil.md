---
title: "Why the GOTO Statement Is Evil"
layout: "articles/article-page.pug"
summary: "Why the GOTO Statement Is Evil"
featured_image: "assets/articles/goto.png"
create_date: "06-14-2012"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags:
share:
  title: "Why the GOTO Statement Is Evil"
  summary: "Why the GOTO Statement Is Evil"
  href: "###why-goto-statement-is-evil###"
---

![Goto statement](cpp_goto_statement.jpg)

**What is the goto statement?**
 Basically, it's a way for you to easily "jump" around in your code. You can insert "goto labels" within your code, then simply jump to that segment of your code by just inserting "goto LABELNAME". In some languages, you don't need to specify the labels at all, you can simply specify the line number you wish to jump to within the current page. Regardless of the language you are using, you will not find it in any Structured Programming Paradigm, due to the fact goto is considered a "short cut" or a "temporary fix" for a task that can just as easily be accomplished using a subroutine, codeblock, function, or a loop such as for or while.

Back when I started learning Perl, I will admit I had pretty much no idea what I was doing, I just knew that if I wanted to be a good SysAdmin, I would need to learn some type of server side code, other than PHP, I chose Perl.

I was creating the first version of Cronus, without going into too much detail on the project itself, its a command line utility, written in perl, and made to run on Windows. It basically allows you to remotely manage Windows servers using the Win32::OLE module, so you could quickly restart services, see whats killing the server, whos logged in, reboot it, etc etc.

Here would be a basic example of how I constructed Cronus using the goto statement:
**NOTE:** Obviously this isn't the exact script, this is just an example of how I would have done it.

```perl
#!C:Perlperl.exe

use strict;
use warnings;
use Switch;

goto MAIN;

MAIN:
# Get user input
print "Command> ";
chomp(my $command = <>);

# Switch
switch($command) {
    case "who"      { goto WHO; }
    case "reboot"   { goto REBOOT; }
    case "exit"     { goto EXIT; }
    else            { goto HELP; }
}

# WHO: This returns who is on the server
WHO:
# --- Code to query WMI and see whos taking up all the spots on the server ---
goto MAIN;

# REBOOT: Guess what this does?
REBOOT:
# --- Code to force a shutdown/reboot on the server ---
goto MAIN;

# HELP: For those who just dont know
HELP:
# --- Code to display a help menu with commands ---
goto MAIN;

# Exit!
EXIT:
print "Goodbyen";
exit;
```

Now to any beginner, this looks perfectly fine, however when I showed it to someone who was an experienced SysAdmin and Perl programmer, I received a nice long lecture on why using goto is highly frowned upon in the programming world, and how it should be done correctly, at least in perl, for the sake of this tutorial.

The goto statement doesn't cause any programming defects within the code itself, meaning it doesn't cause any problems within the code or how it runs, or prohibit functionality, or make it run slower, or throw errors when it's compiling. Using goto just makes the code much harder to deal with, it turns your code into "Spaghetti Code".

> Spaghetti code is a pejorative term for source code that has a complex and tangled control structure, especially one using many GOTOs,
exceptions, threads, or other "unstructured" branching constructs. It is named such because program flow tends to look like a bowl of spaghetti, i.e. twisted and tangled. Spaghetti code can be caused by several factors, including inexperienced programmers and a complex program which has been continuously modified over a long life cycle. Structured programming greatly decreased the incidence of spaghetti code.

I realize that Wikipedia isn't a reliable source for quotes, but it's kinda funny they specifically use GOTO as an example huh? I actually wasn't able to find any other examples of spaghetti code, every example referred to the goto statement!

So there you have it, goto is just a PITA to work with, especially if you are picking up from someone else's work, if you think about it, you're basically giving them the virtual run-around within your script.  A good code structure consists of modules being separated from all other code, and being called upon from the main script.

So, if I were to re-write the Perl example above, and remove all 'goto' statements, it would look like this.

```perl
#!C:Perlperl.exe

use strict;
use warnings;
use Switch;

while(1) {
   # Get user input
    print "Command> ";
    chomp(my $command = <>);

    # Switch
    switch($command) {
        case "who"      { WHO(); }
        case "reboot"   { REBOOT(); }
        case "exit"     { EXIT(); }
        else            { HELP(); }
    }
}

#########################################
# SUBROUTINES

sub WHO
{
    # --- Code to query WMI and see whos taking up all the spots on the server ---
}

sub REBOOT
{
    # --- Code to force a shutdown/reboot on the server ---
}

sub HELP
{
    # -- Code to display a help menu with commands ---
}

sub EXIT
{
    print "Goodbyen";
    exit;
}
```

See what I mean? This separates the subroutines from the main code which calls the subroutines, much easier to read, anyone digging into this code or adding to it would know exactly where to look and where to add other subroutines.

Here is a visual representation of why it's hard to read, if you were to draw arrows as to how you follow the code:
![09fig09.gif](/assets/articles/09fig09.gif)

Get what I mean by a "virtual run-around" now?

As of now, I can't think of any "valid" reasons to use the GoTo statement, it's been said thats it's "acceptable"  in lower level programming languages, but again, I don't see what you can accomplish with goto that you can't with some other form of loop or function.
