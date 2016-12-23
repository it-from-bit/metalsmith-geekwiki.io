---
title: "Common Misconceptions About Linux"
layout: "articles/article-page.pug"
summary: "Common Misconceptions About Linux"
featured_image: "assets/articles/winvslinux.jpeg"
create_date: "06-15-2012"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "centos", "grub", "Install", "Linux", "redhat", "redhat satellite", "spacewalk" ]
share:
  title: "Common Misconceptions About Linux"
  summary: "Common Misconceptions About Linux"
  href: "###common-misconceptions-about-linux###"
---
Before I started learning Linux, I was very hesitant to start because of how intimidated I was from what I had heard. Now that I have much more experience, I have the ability to refute most of these misconceptions.

None of these are in any specific order at all.

1) Most software isn't compatible with Linux.

This is kind of a silly excuse not to use Linux. Expecting every Windows Application to work on a Linux Server is like expecting the transmission from your VW Beatle to work in your Camaro SS... It won't work. However, there are many ways to get Windows applications to work on Linux, for example, you can use the application called [Wine](http://www.linuxdigest.org/wp-content/uploads/about). Wine is a very popular application which allows you to run Windows applications under a Linux OS. It basically tricks the application into thinking its running on Windows by creating the registry and the C:/ drive with the System32 folder and other essentials.

Most of the popular or mainstream applications will usually have different install packages for Windows, OSX and Linux, but sometimes you might find an application that won't work in Wine and doesn't have an installable for Linux. The Open-Source community is big on coming with free alternatives for applications that are otherwise expensive and/or incompatible with platforms other than what they were originally designed to work with.

Lets take the Microsoft Office Suite for example. Originally, you were unable to get Microsoft Word, Microsoft Outlook and Microsoft Excel installed on Ubuntu, even using Wine. But you could easily find alternatives for each of these. Instead of Microsoft Word, you could use [Open Office](http://www.linuxdigest.org/wp-content/uploads/www.openoffice.org), instead of Excel, you could use [Calc](http://www.linuxdigest.org/wp-content/uploads/calc.html), instead of Outlook, you could use [Mozilla Thunderbird](http://www.linuxdigest.org/wp-content/uploads/thunderbird). The Linux community works hard making free applications that you can use as alternative to proprietary software, unfortunately, not everything will work.

2) Theres no support for Linux. 
![Linux Support](/assets/articles/linux_support.png)
100% not true! You can get just as much support for Linux as you can for Windows, if not more. Keep in mind, the mentality of the Open-Source type of administrator using a _free_ operating system, probably believes in _free_ support as well, wouldn't you think? Every distribution has their own support forum where members can jump on and help support you for free, or other forums that aren't associated with your specific distribution such as www.linuxforums.org, www.linuxquestions.com, www.linuxforum.com, and many more if you just google "Linux Support".

If you choose to take the paid support route, thats perfectly fine as well, sites such as [RedHat](http://www.linuxdigest.org/wp-content/uploads/www.redhat.com) or [Canonical](http://www.linuxdigest.org/wp-content/uploads/www.canonical.com) provide paid support for Linux distributions.

3) No one uses it.
This one actually kind of upsets me, anyone saying this or using it as an excuse not to learn Linux obviously has done little to no research. I guess to dig into this a little more, I should split it up into Linux being used by desktop users and Linux being used for servers.

**Linux as a Desktop at Home**
I suppose I can  see why some people would believe this. For a while, you didn't really have an option to get a computer with Linux installed, you had to either get it with Windows or nothing at all, and install whatever flavor of Linux you desired, and depending on the laptop and manufacturer, you may have just voided the warranty. Because of this, not many people installed Linux for home use, just the tech savvy nerds (or _Linux Ninjas_ ;-)), who knew what they were getting into.

However, much has changed in the recent few years. Installing Linux won't void your warranty, and some manufacturers even give you the option to get the laptop/desktop with a popular desktop version of Linux already installed, [Ubuntu](https://www.ubuntu.com/). This means you are getting a laptop or desktop with the guarantee that Ubuntu will work with the hardware provided, using the latest drivers.

**Linux as a Desktop at Work**
Back when I started doing technical support, in my young teens, someone using Linux as a desktop at work was completely unheard of. The Windows SysAdmins used Windows Desktops, the Linux SysAdmins used Windows Desktops with [PuTTY](http://www.linuxdigest.org/wp-content/uploads/putty) to manage Linux/Unix servers, and the developers or designers all used Mac OSX, but using any flavor of Linux to support a Windows or Linux environment was out of the question, regardless of how experienced you were or if you were able to support yourself.

This too has changed. In every tech company I have been contracted to or worked at, I was able to use whatever OS I felt would best give me the ability to support the environment. Meaning if I was supporting Microsoft servers, I would use a Windows desktop, if I was supporting a Linux environment, then I would use Ubuntu or whatever other flavor I preferred.

The support of Linux Workstations in the corporate environment is pretty limited, which seems to be fine. The type of person who would rather use Linux than Windows every day at work and/or home, is typically the type of person who has the mentality that they can support themselves without the aid of a support department.

**Linux as a Web Server**
![Linux as a Web Server](/assets/articles/wsweb1.gif)
Linux's most popular application, bu far, is the Apache web server, which is the #1 most used web service in the world. Compared to Microsofts IIS, Apache is cheaper, easier, more secure and much more stable.

I'm not a big fan of throwing up graphs from other websites, especially since I can't guarantee the reliability of the research behind it, but heres a few that shows reports of which Web Servers are used the most, and what years they were taken: [2007 - search-this.com](http://www.search-this.com/2007/06/27/microsoft-iis-vs-apache-who-serves-more/), [2008 - Pingdom](http://royal.pingdom.com/2008/03/18/apache-dominates-the-top-100-websites-iis-still-far-behind/), [2009 - Netcraft](http://www.linuxdigest.org/wp-content/uploads/30), [2010 - pingdom.com](http://www.linuxdigest.org/wp-content/uploads/apache-web-server-hit-a-home-run-in-2010), [2011 - pingdom.com](http://www.linuxdigest.org/wp-content/uploads/microsoft-iis-web-server-market-share-loss).

Now if you take a look at the first one I listed, by search-this.com taken in  2007, you will see that Microsoft/IIS is the most popular choice for Fortune 500 companies. At first, this seemed a little off to me, but when you scroll down and actually read the article, it will make much more sense. None of the Fortune 500 companies are Internet based companies, like Facebook, Google, Yahoo, etc etc, (At least not when that article was published).

Companies that are not Internet based web companies don't really need to have all of the features that Apache has and IIS doesn't. Lets take **Exxon Mobil** as an example. It's a Fortune 500 company, but what does the website _www.exxonmobil.com_ itself do? Nothing really, it's not a search engine or a social networking website, Exxons products aren't sold online. The website probably doesn't get enough traffic to actually need the extensive features of Linux/Apache, they can get by using Microsoft/IIS, and not having to hire any Linux Administrators.

Previously, I worked at a Windows based hosting company, which used IIS as it's primary HTTP provider, and currently I work at a company that has just two Microsoft/IIS servers used for the billing service, (We got suckered into using Metranet, which apparently requires Microsoft Server 2003/IIS). Both companies  require the Windows servers to be rebooted every so often to release some of the allocated resources or some other reasons. This blew me away... How is this not seen as a problem?! I just never understood the mentality behind the SysAdmins who managed these servers. To them, it was "typical" to have to reboot the servers every week or two weeks, to me, this is like having to pull over and turn your car off then back on every 10 miles or so. On the Linux systems at my current company, if you login and look at the uptime, and it's _under_ a certain time, we try to figure out who rebooted it and why, but if its a Windows server and we look at the uptime, and its _over_ a certain amount of time, we start to wonder why someone hasn't rebooted it lately, and a reboot gets scheduled. If you're running an internet based company, uptime is your #1 priority, would you want a web server that needed to be rebooted like that? Nope!

4) It isn't optimal for the work environment.
This really depends on who is using it and why. If you're a secretary of the CEO of PetsMart, you're probably better off using Microsoft Windows, perfect since hes probably using it as well, and its just easier for when you're scheduling his meetings and making PowerPoint presentations.

But if you're talking about the technical aspect of the company, you should pick your primary OS based off of what you are managing. If you are doing technical support for a call center, you probably still want to use Windows, if you're managing a Microsoft/IIS based web server, you should again be on a Windows computer. Now if you're managing Linux Servers, or if you're an Oracle or MySQL DBA, then wouldn't you think the most appropriate OS to be working on would be the most relevant? I manage 100% Linux servers at work, I was using Ubuntu for a while, until the only way to get better hardware was to get a Mac, which actually seems to be working out great, since OSX is based off of FreeBSD, this works just as well, if not better, than when I was using Ubuntu

5) Linux is difficult, or near impossible, for a non-techy or Windows Admin to use.
Again, this is probably easier explained split between desktop/server distros.

**Linux Servers**
One of the main reasons that Linux servers are more stable and able to operate with less overhead than Windows, is the fact that it doesn't require a Graphical User Interface to be managed. You are able to install the X Window System, and then install Gnome or KDE or some other type of Desktop Environment, then install a service that enables you to remotely manage the server by connecting to it through a Graphical User Interface, much like RDC on Windows. The two most popular options are VNC and NX, (I prefer NX, since it operates over SSH and uses posix users, which is much more secure).

Microsoft has focused on making the management of Windows Servers very "Point and Click", meaning you have a good chance of being able to find out how to work an application simply by looking around in the interface and the menus of the application, and taking a couple guesses. So when a Windows administrator attempts to perform a task on a Linux server that doesn't have a GUI installed (which is about 99% of the time), they are going to have no idea how to perform a single task. When managing a Linux server, you actually have to know what you're doing, you can't blindly log into the server and click around hoping to get it right, theres no "Next, Next, Next, Next" buttons, just the command line and the "man" command to look at the manual for said command(s). This is typically why people think its "impossible" to manage Linux Servers.

**Linux Desktops**
Now the problem here, is the impression of difficulty of managing a Linux Server seems to have carried over to the Linux Desktop, possibly because both are "Linux"? I guess since a Windows Server is just as easy to manage as a Windows Desktop, people assume a Linux Desktop is just as difficult to manage as a Linux Server, totally wrong!

![gnome_control_center2](/assets/articles/gnome_control_center2.png)

Ubuntu, the most popular version of a Linux Desktop, has come a very long way. I use Ubuntu at home, and besides when I have to use the terminal to restart services for development purposes, I never use the terminal, and I see no reason to do so. Nearly everything works fine, out of the box, and is very simple to understand.

Ubuntu has accomplished a very Windows-like "Point and Click" interface for the common home use computer. You even have the ability to select from multiple themes, most of which resemble the Windows Desktop GUI.  You get the task bar, the start menu, the window frame with a max/min/exit buttons, all programs menu, etc.

Personally, I prefer using a different distribution of Linux Desktop, Linux Mint. Very similar to Ubuntu, Mint just seems to work a little better, it has some extra drivers pre-installed and some extra features. [Heres a small youtube review](http://www.youtube.com/watch?v=0z_IIq2su2w)

6) You have to know how to code to use Linux, for either a Desktop or Server distribution.
Unless you are doing some type of custom development, or writing some of your own automation tasks, theres absolutely no reason to know how to code if you are just using a desktop version of Linux, such as Ubuntu or Mint in #5 above. Most of the system files are written in Bash, Perl, Python or C, since these distributions are Open Source, you have the ability to edit these as you please to customize your desktop, but again.... You don't NEED to know how to code.

But do you NEED to know how to code to manage a Linux _Server_? Technically, no. You can install the X Window System, and then install Gnome or KDE or some other type of Desktop Environment, or install a web-based control panel such as cPanel/WHM or Webmin, and manage the server from there just fine. But dont expect to get a job managing a Linux environment without the ability to automate some tasks by scripting them out.

Lets face it, any SysAdmins should be able to code. Linux Administrators should learn some languages such as Perl, Python or Bash, and Windows Administrators should learn Powershell or VB. It has nothing to do with the OS itself, good System Administrators should know how to code! Why? If you're managing a Linux server, and someone tells you to perform a task such as killing the process '/usr/bin/perl /opt/scripts/someScript.pl", how do you do it? Typically you just run _ps aux | grep someScript.pl_, get the process ID, then run _kill -9 123_.

But what if you're given a file called servers.list, which contains 400 servers, and you're told to run it on every one of those servers, right now. What do you do then? You might be expected to write a script to complete this task. The same goes for Windows administrators, the most useful Windows SysAdmins can accomplish the same tasks that can be done in the GUI via WMI or Powershell scripts.

![RHN](/assets/articles/RHN.png)

7) Linux is difficult to maintain and keep updated.
I've heard this one a few times before, but I dont get how it would be any harder to keep up to date than any other OS out there.

If you're just using a single desktop, you get alerts about updates that need to be installed, you can easily select to ignore the updates, postpone them, or select which updates to install and which ones to ignore.

If you're managing a full network of servers, there are plenty of utilities you can use to manage the updates on all the servers at once. For the CentOS distro, you can use a free utility called Spacewalk, if you're using RedHat servers, you can use RedHat Satellite, which is the exact same thing as Spacewalk, only with commercial support from RedHat, so it comes with a nice hefty price tag.

Both RedHat Satellite and Spacewalk give you the ability to manage updates, errata, configuration files and much more on an entire network of servers, just as easily as it is to manage a single server.

8) You can't run games on Linux.
It really depends on what game you are trying to run, and the restrictions of the game itself. Theres usually a way to get any game working on Linux, even if it's not supposed to work on Linux or isn't supported, a lot of games can be ran via Wine, which is covered in #1.

I can't exactly testify to every game out there and say whether or not it will work on Linux or not, or if it needs Wine or not. I know that you can install **Cedega**, which is a proprietary fork of Wine that provides the ability to install multiple games with little to no effort, however I haven't personally used it. The only games I have used was anything powered by Steam, and Battlefield 2, all of the Steam games and Battlefield 2 worked perfectly fine. Every now and then when you closed out of the game, the resolution would be a little messed up, but all you need to do is restart X.

One of the biggest reasons, specific to gaming, would be the infamous World Of Warcraft. There was a rumor going around that it wasn't possible to run WoW on Linux via Wine.. Well guess what, GOOGLE IT! It is totally possible, [heres a Youtube vide on how to do it](http://www.youtube.com/watch?v=DIzgUq4Lpa4). However, there is a slight problem with it. WoW bans any account it perceives as a "Bot", now one way it determines if it is a bot or not, is by the Operating System. The most popular bots run on Linux, so when WoW sees that your account is running on an OS other than Windows, theres a good chance they will shut down and purge your account, and you will lose all of our precious gold! What will you do then?! You might have to go outside into the sunlight.

9) Too many hardware constraints and limitations.
Theres no more hardware constraints on a Linux Server than a Windows Server, the key is to do research before you build your box.

Every distribution will have a list of hardware requirements on the website, heres the requirements for Ubuntu, and RedHat. All you really need to do is google the name of your distribution + "Hardware Requirements". Along with the hardware requirements, the website should contain a blacklist of hardware, which contains hardware that is supported, hardware that will not work and is unsupported, and hardware that may work but is unsupported.

10) Linux is difficult to install, and you have to remove Windows/Mac to use it.
Actually, the latest installation process of Ubuntu seems to be much more user-friendly than any install of Windows. Windows seems to be greedy and want to take up the entire harddrive for itself.

![ubuntu-install-partitions](/assets/articles/ubuntu-install-partitions.png)

Ubuntu on the other hand is much more polite, it's as easy as the Windows install, where you can continuously click "Next" and get everything installed by default. If you have another Operating System installed on your harddrive, and you want to keep it, you can select to keep it during the Ubuntu install. Ubuntu will then setup Grub for you s you can select what OS ou wish to boot into at boot time.

If you're installing a Server version of Linux, the installation might be a little more difficult, but not much more at all. Theres still the option to install via the Graphical User Interface, and simply select what applications you wish to have installed for the purpose of the server. Heres a [YouTube video](http://www.youtube.com/watch?v=fjEfO_cMkXQ) I found showing you how to do a basic RedHat OS install.


11) You have to know how to use the Command Line Interface to use it.
This isn't true in the least bit, especially for desktop versions, there wouldn't be much point of a desktop of there wasn't a GUI for it. Desktop distributions of Linux usually come with the option to install something like [KDE](http://www.kde.org/) or [GNOME](http://www.gnome.org/) or any other interface you choose.
Regarding Servers, you can setup X and manage it via a desktop just as if it was a desktop distribution, however, it's highly advised against, due to security and resource issues.
There are other routes you can take to manage a Linux server without installing X, and having limited knowledge of the command line.

One of them called [Plesk, by Parallels](http://www.parallels.com/products/plesk/). I can't really give a solid opinion on this, since I haven't ever actually used it, but I know it's one of the more popular "solutions".

Another route would be [DirectAdmin](http://www.directadmin.com/install.html). This is an open source application used to manage Linux servers. A lot of the cheaper hosting providers will install this for you for free if you request. It's not nearly as powerful or secure as any of the paid solutions, but it gets the job done, sometimes... I have very limited experience with DirectAdmin, and thats because it ended up breaking the configurations it was managing more than anything. I would definitely **not** recommend this product, not that I would recommend using any web based System Management application.

![cpanel-whm](/assets/articles/cpanel-whm.png)

The most popular that comes to mind, would be [WHM/cPanel](http://cpanel.net/). If you get a Dedicated server or a VPS from a hosting provider, theres a good chance that they will offer this as part of the package. Though I am against any of these management applications, I will say this is the lesser of the evils. There are security holes (Just like any other application does), but they are patched relatively quickly, and the support is actually very efficient. I used cPanel to manage my first Linux server, and I feel safe recommending this for anyone looking for a web based solution.

12) The Hardware Compatibility Is Very Limited.
I don't believe this is true at all. I've been using Linux (Desktop and Server Distros) for most of my career, and I have yet to run into a compatibility issue that held me up for longer than a few minutes. If there's something brand new, then there may not be a driver out for it yet, but rest assured, someones working n it! Just to be safe though, Google for the compatibility list for whatever hardware you are looking to install.

13) Linux Isn't Susceptible to Malware or Viruses.
This is more of a myth I would say, Linux is just as susceptible as anything else when it comes to viruses and malware. However, viruses that target Linux are much less common than ones that target Windows. I believe that the reason behind this is because Linux is more commonly used as a server, and less commonly used as a desktop, and most viruses target the desktop users via email attachments or downloads on exploited websites.  It may also be because the average Linux user simply knows how to spot a phishy website or email more efficiently than the average Windows user.

Just as there are viruses, malware, and other vulnerabilities to exploit on both Linux server and desktop distributions, theres firewall software as well, some of the more popular ones are [ClamAV](http://www.clamav.net/), [AVG](http://free.avg.com/us-en/download.prd-alf) and [Avast](http://howtoubuntu.org/how-to-install-and-update-avast-antivirus-in-ubuntu). Also, one of my personal favorites would be [CSF](http://configserver.com/cp/csf.html), CSF is actually just a wrapper around iptables, but it also checks for common vulnerabilities in existing applications you have installed, and gives you suggestions on how to remediate said vulnerabilities, it also gives you a "security rating" scale, the higher, the better!
