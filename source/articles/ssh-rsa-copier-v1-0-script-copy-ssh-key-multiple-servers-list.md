---
title: "Copy your SSH key to multiple servers from a list"
layout: "articles/article-page.pug"
summary: "Copy your SSH key to multiple servers from a list"
featured_image:
create_date: "06-18-2012"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "Copy your SSH key to multiple servers from a list"
  summary: "Copy your SSH key to multiple servers from a list"
  href: "###ssh-rsa-copier-v1-0-script-copy-ssh-key-multiple-servers-list###"
---
We've all been there, you're sitting at work and your boss gives you a task and you immediately get frustrated because not only is it one of the most annoying jobs to do but it also will consume a lot of your time. This happened to me at an old company that I worked for, because whenever a new person would get hired we would have to manually copy their SSH keys to all of the servers that we had (hundreds of servers!). If you love to code like I do, it immediately turns into a project for yourself to automate it so you don't have to deal with it in the future. That is why I created this script. This is just to use as reference (it still works) but I would actually recommend using something called [pssh-copy-id](https://github.com/Ruyk/pssh-copy-id) instead of this script now but back when I created this script I didn't even know it existed.

Also please note, this is definitely not some of my best work.. Don't hold it against me! :)

```perl

#!/usr/bin/perl
# *************************************************
# * SSH RSA Copier v1.0 * Created on 1/31/2011 *
# *************************************************
# * Geoff Hatch - geoff.hatch@linux.com           *
# *************************************************
# * This script will use the ssh-copy-id command *
# * to copy your current RSA key to all servers *
# * listed in a file. *
# *************************************************

# Let's declare the global attributes.
use warnings;
use Expect;
use Term::ReadKey;
use Net::SSH::Expect;

# Run the main function.
&main;

sub main()
{
 $scp = "/usr/bin/ssh-copy-id";

print "********************************************************************************************************************************\r\n";
 print "* SSH RSA Copier v1.0 * Created on 1/31/2011 * *\r\n";
 print "********************************************************************************************************************************\r\n";
 print "* Directions: *\r\n";
 print "* *\r\n";
 print "* Step 1) When prompted enter your username, or press RETURN to use the current username. *\r\n";
 print "* Step 2) When prompted enter your password, this field is required and the script will not continue if nothing is entered. *\r\n";
 print "* Step 3) Let the script do it's thing. *\r\n";
 print "* *\r\n";
 print "* Note: If you do not have a id_rsa and id_rsa.pub key in your .ssh directory, the script will automatically generate them *\r\n";
 print "* for you, and then add your identity via ssh-add. *\r\n";
 print "********************************************************************************************************************************\r\n";
 print "* The script will start in 10 seconds, if you did not mean to run this or wish to stop it, press Ctrl + C now. *\r\n";
 print "********************************************************************************************************************************\r\n\r\n";
 sleep 10;

print "Downloading recent servers list... ";
 if (-e "./rsa_copier.log") { system("rm -rf rsa_copier.log"); }
 # Change this to point to where your server list is
 system("wget -q -O serverlist.txt 'http://mywebsite.com/serverlist.txt'");
 print " completenr";
 &get_user_info;

&check_priv_rsa;
 &check_pub_rsa;
 system("ssh-add");

open SERVERS, "./serverlist.txt" or die $!;

while (<SERVERS>)
 {
 chomp;
 $server = $_;
 &copyrsa($scp, $user, $pass, $server);
 }
 close SERVERS;
 print "\r\n\r\n";
 print "********************************************************************************************************************************\r\n";
 print "* Your RSA key has been pushed to all servers. If you did not have access to any of them you can view the rsa_copier.log *\r\n";
 print "* file which is located in the same directory as the script. *\r\n";
 print "* *\r\n";
 print "* Thank you for using SSH RSA Copier v1.0 *\r\n";
 print "********************************************************************************************************************************\r\n";
}

# Check if the user has a private key.
sub check_priv_rsa()
{
 $privrsadir = $ENV{HOME}."/.ssh/id_rsa";
 if (-e $privrsadir)
 { &check_pub_rsa; }
 else
 {
 print "No private RSA found. Let's make one.\r\n";
 &generate_rsa;
 }
}

# Check if the user has a public key.
sub check_pub_rsa()
{
 $pubrsadir = $ENV{HOME}."/.ssh/id_rsa.pub";

if (-e $pubrsadir)
 {
 #&main;
 }
 else
 {
 print "No public RSA found. Let's make one.";
 &generate_rsa;
 }
}

# No key found, Let's generate the key for them
sub generate_rsa()
{
 $scp_exp = new Expect;

$scp_exp->spawn("ssh-keygen -t rsa") or die "Unable to run the command: $!n";
 $scp_exp->expect(5, [qr'Enter file in which' , sub {$expp = shift; print $expp "r" ;exp_continue; }],
 [qr'Enter passphrase' , sub {$expp = shift; print $expp "r" ;exp_continue; }],
 [qr'Enter same passphrase' , sub {$expp = shift; print $expp "r" ;exp_continue; }],'-re', '$');

$scp_exp->hard_close();
}

# User Input
sub get_user_info()
{
 # Let's get the username to use, if line is empty we'll use the current username.
 print "* Username (blank = use current): ";
 chomp($user = <STDIN>);
 print "\r\n";

if (!$user) # No username? Let's use current.
 { $user = $ENV{'LOGNAME'}; }

# Now let's get the password, but hide the input text.
 print "* Password: ";
 &pass;

sub pass # No password, No continue!
 {
 ReadMode('noecho'); # Hiding the input text
 chomp($pass = ReadLine(0));
 if (!$pass)
 {
 print "n* Password cannot be blank.n* Password: ";
 &pass;
 }
 }
 ReadMode ('normal'); # Un-hiding the rest of the input text.
 print "\r\n";
}

# Main function that will copy the RSA key to the server.
sub copyrsa()
{
 $scp_exp = new Expect;

# Run the copy command.
 $scp_exp->spawn("$scp $server") or die "Cannot spawn ssh-copy-id: $!n";

$scp_exp->expect(5, [qr'(yes/no)s*' , sub {$exph = shift; print $exph "yesr" ;exp_continue; }],
 [qr'Permission denieds*' , sub {$exph = shift; $error = "Permission denied "; &logerror($error, $server); exp_break; }],
 [qr'word:s*' , sub {$exph = shift; print $exph "$passr";exp_continue; }],
 [EOF => sub {$exph = shift; $error = "Error: Could not login, EOF!"; &logerror($error, $server); exp_break; }],
 [timeout => sub {$exph = shift; $error = "Error: Could not login, timeout!"; &logerror($error, $server); exp_break; }],'-re', '$');

$scp_exp->hard_close();
}

# Let's log the issues to a file.
sub logerror
{
 open LOGFILE , ">> ./rsa_copier.log" or die $!;
 print LOGFILE "$error: $serve\r\n";
 close LOGFILE;
}

# End
```
