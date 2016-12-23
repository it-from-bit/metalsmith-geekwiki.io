---
title: "Bash Tips And Tricks (Part 1)"
layout: "articles/article-page.pug"
summary: "Bash Tips And Tricks (Part 1)"
featured_image: "assets/articles/linux-commands-2.jpg"
create_date: "02-12-2014"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags:
share:
  title: "Bash Tips And Tricks (Part 1)"
  summary: "Bash Tips And Tricks (Part 1)"
  href: "###bash-tips-and-tricks-part-1###"
---
I have always thought of bash as a "Quick 'n Dirty" way of taking care of things, it isn't by any means a powerful language. It's not meant for writing programs, not meant for creating games, not meant for much other than linux system administration. My "Rule Of Thumb", is if someone gives me a task to complete, I do it manually, if they come twice or three times, I automate it. If I think it will take more than 100 lines of code, I use something other than bash.... Perl or Python perhaps. I don't usually use PHP for CLI apps, but sometimes there are exceptions to the rule. Below are a few tricks I have learned while creating some bash scripts.Feel free to add your own in the comments!

#### 1) Getting The Correct Error Code Of A Command Thats Before A Pipe

A lot of bash scripting consists of executing one thing, and having the output piped ( **|** ) into another command, for example...

```bash
$ /usr/bin/w | grep jhyland | wc -l
1
```

This executes the _/usr/bin/w_ binary, then pipes it to the _grep_ command, which will only return lines that has jhyland in it, then counts the number of lines. So now we know that jhyland is logged into this server only once. Another commonly used tactic is getting the exit code of the last command, which is the $? variable. You can execute a command, then with a conditional statement, see what the exit code was, and process something else accordingly, example below.

```bash
#!/bin/bash

mkdir /tmp/jhyland

if [[ $? -ne 0 ]]
then
 echo "Error while creating /tmp/jhyland"
 exit 1
else
 echo "/tmp/jhyland has been created"
fi
```

The $? will either return 0 (success) or 1 (fail). But what about that command I showed you above? The /usr/bin/w | grep jhyland | wc -l, if that gets executed, then $? will show the exit code for the wc -l part, when what you really want, is the exit code for the /usr/bin/w command. The solution is the system variable $PIPESTATUS, (Well, I guess it's an array). This holds all of the exit codes for every command that was previously ran (Keep in mind, this gets reset every time you run a new command. Heres an example:

```bash
#!/bin/bash

/usr/bin/w | grep jhyland | wc -l

if [[ ${PIPESTATUS[0]} -ne 0 ]]
then
echo "Error while running /usr/bin/w"
exit 1
else
echo "/usr/bin/w ran just fine"
fi
```

Here's a slightly better example of how to leverage it:

```bash
#!/bin/bash

user="jhyland"
ip="192.168.1"

who | grep $user | grep $ip &>/dev/null

if [[ ${PIPESTATUS[1]} -ne 0 ]]; then
 echo "No $user on this server"
elif [[ ${pipestatus[2]} -ne 0 ]]; then
 echo "The user $user is on this server, just not from an IP matching $ip"
else
 echo "The user $user is on this server, from an IP matching $ip"
fi
```

[Heres a more in-depth tutorial.](/articles/viewing-bash-exit-status-codes-with-pipes.html)

___
#### 2) Using _&&_ and _||_ Instead of Conditional Statements
Most Bash scripting is comprised of executing commands, then executing more commands based off of the output or result of the previous command.

If you learn how to use the _&&_ and _||_ operators, you'll find you can convert a lot of scripts to one-liners, or reduce the amount of lines in some of your existing scripts.

The _||_ operator is basically "OR", it's somewhat like using the _-ne_ operator in a conditional statement.

Small example... This following script just creates a directory, then backsup (tar's) a directory and throws the tar into the newly created directory

```bash
mkdir -p  /some/test/directory &>/dev/null
if [[ $? -ne 0 ]]; then
    exit 1
fi

tar cvfz /some/test/directory/backup_file.tar.gz /tmp &>/dev/null
if [[ $? -ne 0 ]]; then
    exit 1
fi
```

Now this little script can actually be reduced down to two lines of code, using the _||_ operator. Heres the example..

```bash
mkdir -p /some/test/directory &>/dev/null || exit 1
tar cvfz /some/test/directory/backup_file.tar.gz /tmp &>/dev/null ||  exit 1
```

Those two snippets do the exact same thing!

Let's get a little more complicated. Lets add confirmations into the script.

```bash
mkdir -p  /some/test/directory &>/dev/null
if [[ $? -ne 0 ]]; then
    echo "Failed to mkdir"
    exit 1
else
    echo "Successfully mkdir'd"
fi

tar cvfz /some/test/directory/backup_file.tar.gz /tmp &>/dev/null
if [[ $? -ne 0 ]]; then
    echo "Failed to tar"
    exit 1
else
    echo "Successfully tar'd"
fi
```

That does the same thing as the previous snippets, only it's a little more verbose. You wouldn't immediately think that you can convert that into a two liner, but you actually can...

```bash
(mkdir -p /some/test/directory &>/dev/null && echo "Successfully mkdir'd") || (echo "Failed to mkdir" && exit 1)
(tar cvfz /some/test/directory/backup_file.tar.gz /tmp &>/dev/null && echo "Successfully tar'd") || (echo "Failed to tar" && exit 1)
```

You can group commands using parentheses, then use the _&&_ and _||_ operators.

One more small example... this is a one liner that ensures the username AND password os set previously in the script, if not, displays whatsup and exits with the proper exit code

```bash
[[ -z $username || -z $password ]] && (echo "Username or password null" && exit 1)
```

It's a little more difficult to read, but very useful!
___
#### 3) Brace Expressions
Utilizing the Brace Expression around a list of worts, allows you to print a list of words with the same prefix and suffix to the words. Here is an example via the CLI of me using the Brace Expression with a suffix:

```bash
echo {inspi,admi,ado,abju,ac,adhe,inji}red inspired admired adored abjured acred adhered injired
```

Example with a prefix:

```bash
echo red{act,an,argue,der,dens,bay} redact redan redargue redder reddens redbay
```

Now this is a pretty useful trick, but for a while, I just wasn't sure what to use it for, but I guess you can do something like this...

```bash
#!/bin/bash

# Get all of the hostnames out of the apache settings output, replace the returns with ,
hosts=$(/usr/sbin/httpd -S 2>&1 | grep namevhost | awk '{print $4}' | tr '\n' ',')

# Compress all apache logs
tar cvfz apache_logs.tar.gz $(eval echo /var/log/httpd/{$hosts}.log)
```

That would tar and compress any  of the log files for any active sites into apache_logs.tar.gz <strong> NOTE:</strong> If you are using a variable within the curly braces, like above (The $hosts variable within {}), then you need to use the eval statement.
___
#### 4) Backticks vs $()
I was originally taught to use backticks for command substitution, heres a small example:

```bash
[jhyland@svr2 ~]$ echo "My name is `whoami` and I am in `pwd`";
 My name is jhyland and I am in /home/jhyland
```

But if you do enough Bash scripting, you will see an issue... How do you nest commands? Meaning, if you need to execute backticks within backticks, it gets pretty messy. You have to escape every nested backtick, and that would be a pretty ugly script! But if you choose to use **$()** instead of backticks, then it gets much simpler.

```bash
echo "The file you are looking for is $(find /home/$(whoami)/Downloads/ -name \'bla-install*.tar.gz)\'"
```

See how you can execute the find command in a subshell, as well as the whoami statement, which is inside of a subshell, inside of another subshell? Thats why you should use $() and not \`\`
___

#### 5) Using Arrays Instead Of Multiple Variables
You don't have to be a very experienced developer to know that using an array is better than using a ton of variables. Arrays are better for multiple reasons... You can manipulate them in nearly any way. So instead of doing this...

```bash
#!/bin/bash
color1='Blue'
color2='Red'
color3='Yellow'
color4='Black'
echo "Colors: $color1, $color2, $color3, $color4."
# Output: Colors: Blue, Red, Yellow, Black.
```

Why not do it the smart way? You can use an array to store the colors. Try this:

```bash
#!/bin/bash
colors=('Blue' 'Red','Yellow','Black')
echo "Colors: ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}"
# Output: Colors: Blue, Red, Yellow, Black.
```

Same output, but less lines of code, and you can add values to it, delete values, reorder it, etc etc. NOTE: The only thing that sucks about arrays in Bash... is the keys have to be numeric. Meaning you cant have ${name[a]} or anything of that sort. The keys are always numeric, never alphabetic.
___
#### 6) The 'test' Utility
Not many people are aware of the test command. Basically, it lets you test a condition, without being in a conditional statement. You just use it to test a condition and it will return an exit code (1 or 0). Here is an example of how you could use it.

```bash
#!/bin/bash

dir=$(test -d $1)

if [[ $dir -eq "0" ]]
then
 the dir exists
fi
```

Now I realize you could just put the condition inside of the if statement itself, but the point is that now you can use $dir all over your script, or use it to compare to other test results.
___

#### 7) Default Bash Variable Values
There are many instances where you want to set a default value for a variable. A lot of people will do something like this:

```bash
#!/bin/bash

first=$1
last=$2

if [[ ! $first ]]
then
 first="John"
fi

if [[ ! $last ]]
then
 last="Doe"
fi

echo "Your name is $first $last"
```
But theres a much easier way:

```bash
#!/bin/bash

# Preferred way of setting a default value to a variable
# (If $1 isn't null, set value of $first to $1, otherwise,
# set value of $first to "John")
first=${1:-John}

# Old school method, whats used in some older bash scripts
# (if $2 is non-zero, then set $last to value of $2, if
# $2 is empty, then set $last to "doe")
[ -n "$2" ] && last=$2 || last="doe"

echo "Your name is $first $last"
```

Using the **${variable:-default value}** method saves you time and space, and is a much easier to utilize variables with default values.
___

#### 8) Align Your Content, Make It Pretty
Typically, when you need to align your output to make it pretty, you would use tabs, or printf, but I found a better way to do so, and i've used it ever since. The command is called **column**, specifically "**column -t**". Heres an example of a simple command of me looking at the passwd file. Lets take a look at the output:

```bash
# egrep "^(geoff|justin|kyle)" /etc/passwd | awk -F: '{print "User", $1, "Home:", $6}' User geoff Home: /home/geoff User justin Home: /home/justin User kyle Home: /home/kyle
```

Pretty basic, just a little ugly huh? Lets try adding **column -t** to the end of it...

```bash
# egrep "^(geoff|justin|kyle)" /etc/passwd | awk -F: '{print "User", $1, "Home:", $6}' | column -t User geoff Home: /home/geoff User justin Home: /home/justin User kyle Home: /home/kyle
```

You can see that theres a difference in the way the columns are laid out. The **column -t** aligns the columns perfectly. This is useful for the **/bin/mount** and **/bin/df** commands as well, we all know how ugly those are, but if you add _column -t_, it turns it into something somewhat representable:

```bash
$ mount | column -t
/dev/simfs  on  /                         type  simfs
(rw,relatime,usrquota,grpquota)
proc        on  /proc                     type  proc         (rw,relatime)
sysfs       on  /sys                      type  sysfs        (rw,relatime)
none        on  /dev                      type  tmpfs        (rw,relatime)
none        on  /dev/pts                  type  devpts       (rw,relatime)
none        on  /proc/sys/fs/binfmt_misc  type  binfmt_misc  (rw,relatime)
$ df | column -t
Filesystem  1K-blocks  Used     Available  Use%  Mounted  on
/dev/simfs  52428800   6981724  45447076   14%   /
none        1048576    4        1048572    1%    /dev
```

___

#### 9) Use double brackets for conditionals, more "superior"
You can code an if statement in bash with either single brackets..

```bash
if [ $this == \'that\' ];
```

or you can use the double brackets

```bash
if [[ $this == 'that' ]];
```

Both of these will operate the same way if $this is set to 'that', but if its not set, or its null, then the first one will fail, first one will throw a syntax error in the if statement.

The double brackets also allow regex matching as well, which can only be accomplished in if statements with single brackets if you execute a subshell and using some form of grep.

Double brackets are also backwards compatible. So theres nothing extra that needs to be done other than a simple find/replace to replace the single brackets to double.

#### 10) Hide Your Grep Result More Efficiently With Grep
You know how when you grep for something, the actual grep line shows up? Example...

```bash
# ps aux |grep something
root      4155  0.0  0.0  13632   952 pts/2    S+   23:16   0:00 grep --colour=auto something
jdoe  29731  1.0  0.0  20256  1176 pts/0    S+   20:30   1:47 tar cvfz something.tar.gz directory
```

Typically people just add _| grep -v grep_, but what if that hides something that you want to see?

Well heres a little tip, if you surround the first character in brackets, then it will exclude the grep command itself.. Example:

```bash
# ps aux |grep [s]omething
jdoe  29731  1.0  0.0  20256  1176 pts/0    S+   20:30   1:47 tar cvfz something.tar.gz directory
```
