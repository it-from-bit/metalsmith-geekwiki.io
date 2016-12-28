---
title: "Use Perl modules on remote servers."
layout: "articles/article-page.pug"
summary: "Use Perl modules on remote servers."
featured_image: "assets/articles/perlmod.png"
create_date: "06-08-2012"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "cpan", "perl", "perl module", "ppm", "remote module" ]
share:
  title: "Use Perl modules on remote servers."
  summary: "Use Perl modules on remote servers."
  href: "###use-modules-on-remote-servers###"
---
As a Systems Administrator, mainly for Unix/Linux, you realize how big of a deal automation is. At my work, we have nearly a thousand CentOS/RHEL servers. To execute scripts or commands on a list of servers, you can use a variety of methods.... Pssh, Multiexec (Which Geoff, Kyle and myself made, thank ya very much ;]), Cluster SSH, or even just use Terminator, (I know theres a way to run the same command in all terminator windows).

The problem I had was Perl modules. I write a lot of my own Perl modules, and with that, I update them a lot as well. Now to use the Perl module, it needs to be on the local server. either in the $ENV{'PATH'}, or in the directory the script is being executed itself. So I would write a .pm file, and then just put it on all the servers via either GIT, SVN, or wget it using one of the above tools I listed.

This kinda got to be a pain. I just wanted to update the module, then have it done. with 1000 servers, you run into problems updating them on every server. FW rules, svn conflicts, git conflicts, rsa keys failing, authentication not working, etc etc etc.

Well, I finally found a solution, and it works VERY well. I found a way to keep the Perl module on a remote server, and use it on another, as long as it's accessible via HTTP(s), then you can use it. You can even use authentication, this way not everyone can open a browser and grab the module content.

So lets get started.

### Step 1) Create The Module Repository
Now all you have to do is to create a space on a web server for your modules. I recommend just having a publicly accessible SVN repository, so you can just edit your code locally, commit, and they are automatically updated on all servers. Also, its probably a good idea to create a hierarchy for the modules. Maybe later you will want to use different authentication for different modules.
### Step 2) Make The Module
This is a tutorial on how to access modules from a remote location, NOT a tutorial on how to make modules.

This is a very simple module called FOOBAR.pl. It has one function called check_less, it takes two numbers, and if one number is greater than the other, it returns a fail code:

```perl
package FOOBAR;

use strict;
use warnings;

sub check_less {
 # Initiate the values
 my ($self, $num, $limit) = (@_);

 # Basic sanity checking
 return 0 unless(($self) && ($limit));

 # If $num is greater than $limit, fail
 return ($num > $limit) ? 0 : 1;
};

1;
```

Pretty basic right? If you know Perl at all, then you don't need much more explication for the above.

### Step 3) Initializing The Module
I guess before you do this, you should test to make sure this can hit the module, just jump into the command line and run a wget or telnet or whatever, just make sure you can hit it.

So lets start. First off, paste this into your perl script...

```perl
BEGIN {
    my $LWP = eval { require LWP::UserAgent; };
    if(!$LWP) {
        print "Perl module LWP::UserAgent is not installed on this server.n";
        exit 1;
    }
    else {
        use LWP::UserAgent;
    }

    push @INC, sub {
        my $URL = 'http://someserver.com/perl_modules/FOOBAR.pm';
        my $ua = LWP::UserAgent->new;
        $ua->timeout(10);
        my $module = $ua->get($URL);
        if($module->is_success) {
            my $package = $module->content;
            open my $fh, 'status_line."n";
            exit 1;
        }
    }
}
```

So, explaining what that does...

The BEGIN code block makes sure that no matter where you put this, it gets ran in the beginning.

Next, is the section that actually initializes the LWP::UserAgent module. If you have this installed on your server, you shouldn't have a problem. You can test by running this line:

```bash
$ perl -MLWP::UserAgent -e "print "Module installed.n";"
```

If it works, then you can continue.

```perl
my $LWP = eval { require LWP::UserAgent; };
    if(!$LWP) {
        print "Perl module LWP::UserAgent is not installed on this server.n";
        exit 1;
    }
    else {
        use LWP::UserAgent;
    }
```


This tries to load the LWP::UserAgent module. Typically if you try to use a module that doesn't exist, you get an ugly error,  this will catch the error and print out a nice pretty one, then exit. You can edit this to log the error, or send an alert to Nagios or Zabbix or something of that sort.

The second part of the BEGIN code block, is the part that actually puts the module content into use.

```perl
   push @INC, sub {
        my $URL = 'http://someserver.com/perl_modules/FOOBAR.pm';
        my $ua = LWP::UserAgent->new;
        $ua->timeout(10);
        my $module = $ua->get($URL);
        if($module->is_success) {
            my $package = $module->content;
            open my $fh, 'status_line."n";
            exit 1;
        }
    }
```


The @INC is basically the path of all of the modules or the module directories. If you were to print Dumper(@INC), you would see all of the modules. So this will simply try to use LWP::UserAgent to call the content of the module, if it fails, instead of spitting out an ugly error, it just throws a fail statement. Again, you can send this to Nagios or Zabbix or anything you want.

Thats pretty much it. Put it all together and you have your script. Heres an example of the entire script:

```perl
#!/usr/bin/perl
use strict;
use warnings;

BEGIN {
    my $LWP = eval { require LWP::UserAgent; };
    if(!$LWP) {
        print "Perl module LWP::UserAgent is not installed on this server, it must be installed to use the remote SAM modules.n";
        exit 1;
    }
    else {
        use LWP::UserAgent;
    }

    push @INC, sub {
        my $URL = 'http://someserver.com/perl_modules/FOOBAR.pm';
        my $ua = LWP::UserAgent->new;
        $ua->timeout(10);
        my $module = $ua->get($URL);
        if($module->is_success) {
            my $package = $module->content;
            open my $fh, 'status_line."n";
            exit 1;
        }
    }
}

use FOOBAR;

my($number, $limit) = ($ARGV[0], $ARGV[1]);

my $result = FOOBAR->check_less($number, $limit);

print $number, ($result) ? " is less than " : " is greater than ", $limit ."n";
```


Heres some benchmarks of the script running with the module in the local directory, and the module running remotely on a remote web server:

### EXAMPLES:
Example using the FOOBAR.pm module remotely:

```bash
$ perl jhyland$ time perl test.pl 10 20
10 is less than 20

real	0m0.687s
user	0m0.125s
sys	0m0.059s
```

Example using the FOOBAR.pm module in the local directory:

```bash
$ perl jhyland$ time perl test.pl 10 20
10 is less than 20

real	0m0.012s
user	0m0.007s
sys	0m0.004s
```

### Now For The Con
Pretty much the only issue with using modules on remote servers, is you're script is subject to the response time of the HTTP requests. As we all know, HTTP isn't always reliable. You deal with timeouts, server reset, etc etc
