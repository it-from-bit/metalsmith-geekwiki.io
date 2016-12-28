---
title: "Having fun with MAMP, Automator and Growlnotify on my Macbook"
layout: "articles/article-page.pug"
summary: "Having fun with MAMP, Automator and Growlnotify on my Macbook"
featured_image: "assets/articles/datatables-live-ajax-plugin.png"
create_date: "08-25-2012"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags:
share:
  title: "Having fun with MAMP, Automator and Growlnotify on my Macbook"
  summary: "Having fun with MAMP, Automator and Growlnotify on my Macbook"
  href: "###having-fun-with-automator-and-growlnotify-on-my-macbook###"
---
### 1) [Automator](http://www.tekdefense.com/automater/)
I still consider myself somewhat new to the whole <em>MacBook</em> thing, and I discovered something that seemed kind of fun, called Automator, something that only comes with Apple products.

From the Apple website:

> With Automator you can automate much of what you do with your computer. Create and print a family directory with the contacts in your Address Book. Find and add images from your favorite websites to iPhoto. Print your documents to your iPad. Instantly rename dozens of files in the Finder. Even perform scheduled backups of important information. There's no limit to what you can do, and Automator can do in seconds and minutes what could take you hours to do by hand.

Basically, you can automate anything you do manually, and save it into an "Application Bundle", (AKA, a .app file).

### 2) [MAMP](http://mamp.info)

Also, I do a lot of local development on my MacBook, most of which gets pushed to a basic LAMP stack setup. To emulate the LAMP stack as closely as possible, I use the free version of MAMP. MAMP is a very handy tool if you are developing for a LAMP environment, with a little bit of customization, you can just drop in new VirtualHost config files and Host file entries and you have yourself a local version of whatever website you are editing.

### 3) [Growl](http://growl.info)

Growl is a popular app in the appstore, unfortunately it isn't free, but cmon, you already bought an Apple product which was ridiculously overpriced, you can afford $1.99 application. A lot of other applications tie into this, and it basically just shows notifications on your desktop. It has an API that you can tie into, as well as a binary tool "[growlnotify](http://growl.info/downloads)" that you can use to display notifications.

___

Down to the point. When creating PHP/Apache/MySQL based application, I don't like to have the error displayed on the website, but then that means that I need to monitor the error logs to make sure everything is solid.

Well, if you combine the 3 applications, you can accomplish the log monitoring pretty easily. I created an Automator Application with the action: "Run Shell Script". That in itself is a whole new blog post, but id rather just give you a link to someone who has already documented how to create a basic .app to run a shell script, [here](http://arstechnica.com/apple/2011/03/howto-build-mac-os-x-services-with-automator-and-shell-scripting/).

So there are 3 different .app's that I made, one for the MySQL logs, one for the Apache logs, and then one for PHP, the PHP one is a little more sophisticated than the other two.

All 3 of these scripts run with basic logic, just tail the log file and pipe the new output to an action that will use growlnotify to alert me for the new log entries.

**Apache Log Monitor**

```bash
/usr/bin/tail -fn0 /Applications/MAMP/logs/apache_error.log | while read line
do
 /usr/local/bin/growlnotify --title "Apache Notice" --message "$line" --image /Users/my.name/Pictures/Apache_Icon.png
done
```

**MySQL Log Monitor**

```bash
/usr/bin/tail -fn0 /Applications/MAMP/logs/mysql_error_log.err | while read line
do
    /usr/local/bin/growlnotify --title "MySQL Notice" --message "$line" --image /Users/my.name/Pictures/MySQL_Icon.png
done
```

**PHP Log Monitor**

```bash
/usr/bin/tail -fn0 /Applications/MAMP/logs/php_error.log | while read line
do
    msg=$(echo $line | awk -F: '{$1=""; $2=""; $3=""; print $0}'| sed -e 's/^[ t]*//')
    if [ -n "$(echo $line | grep 'PHP Fatal')" ]
    then
        /usr/local/bin/growlnotify -t "PHP Fatal Error" -m "$msg" -s --image /Users/my.name/Pictures/PHP_Fatal.jpg
    elif [ -n "$(echo $line | grep 'PHP Parse')" ]
    then
        /usr/local/bin/growlnotify -t "PHP Parser Error" -m "$msg" --image /Users/my.name/Pictures/PHP_Parser.jpg
    elif [ -n "$(echo $line | grep 'PHP Warning')" ]
    then
        /usr/local/bin/growlnotify -t "PHP Warning" -m "$msg" --image /Users/my.name/Pictures/PHP_Warning.jpg
    elif [ -n "$(echo $line | grep 'PHP Notice')" ]
    then
        /usr/local/bin/growlnotify -t "PHP Notice" -m "$msg" --image /Users/my.name/Pictures/PHP_Notice.jpg
    else
        /usr/local/bin/growlnotify -t "PHP Log" -m "$msg" --image /Users/my.name/Pictures/PHP_Other.jpg
    fi
done
```

The PHP log monitor will detect what type of error it is, (Fatal, Parser, Warning, Notice, etc), and show a different/specific icon for the error type. It will also add the "sticky" option to the Fatal errors, which just makes the notice stay in place until you click the acknowledgement button.

So just put these into an Apple Application Stack, and the next step is to get these to run when you login, which is obviously optional, but it's a lot easier than running these manually every time you want to do some developing.

To get them to run when you login, just add all 3 of these .app's to the Login Items list under your system preferences.

Have fun!
