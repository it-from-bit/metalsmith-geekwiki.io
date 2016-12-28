---
title: "Customize Your Bash Prompt"
layout: "articles/article-page.pug"
summary: "Customize Your Bash Prompt"
featured_image: "assets/articles/Bash_Prompt_Smiley.png"
create_date: "02-13-2014"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "bash", "bash prompt", "ps1" ]
share:
  title: "Customize Your Bash Prompt"
  summary: "Customize Your Bash Prompt"
  href: "###unique-bash-prompts###"
---

### Bash Prompt
The bash prompt, when customized, can be more useful than most people think. The default one that comes with most distros is pretty ugly and boring. The default is...

```bash
PS1='\s-\v\$ '
```

Which looks like this when you're in the console:
![Default Bash Prompt](/assets/articles/PS1/default_bash_prompt.png)
About as lame as it gets huh?

Heres what the modified one looks like. This was created by myself and some of the other administrators/moderators of this website. Whats cool about this one, (as opposed to the other one), is...
*   It shows the current time in the console prompt
*   It shows if the last command was a failure or a success (green/red checkbox)
*   Shows the current working directory that you're in
*   Shows the hostname of the server you're on
*   Displays your UID (To prevent mistakingly executing commands as others)

```bash
$ export PS1="\[\e[0m\][\[&#92;&#48;33[1;30m\]\d \T\[\e[0m\]] \[\e[0m\]\[\e[0;92m\]\u@\h\[\e[0m\]:\[\e[0;94m\]\w\[&#92;&#48;33[1;30m\]($(if [[ $? == 0 ]]; then echo "\[\e[0;92m\]\342\234\223\[\e[0m\]"; else echo "\[\e[0;91m\]\342\234\227\[\e[0m\]"; fi)\[&#92;&#48;33[1;30m\])\[\e[0m\]$ "
```

Heres a picture of it with some examples from my ver own bash prompt!
![Example](/assets/articles/PS1/bash_example.png)

### Changing Your Prompt
You can test out new ones by just setting the _$PS1_ variable in your current shell session, then once you find the one you like, you make sure to set that prompt as the value of _PS1_ within _~/.bash_profile_

#### More Prompt Strings
**Example #1**

```bash
export PS1="\s-\v\$ "
```

![Example](/assets/articles/PS1/bash_example_1.png)

**Example #2**

```bash
export PS1="&#92;&#48;33[0;36m\T \[&#92;&#48;33[1;30m\][\[&#92;&#48;33[1;34m\]\u@\h\[&#92;&#48;33[1;30m\]\[&#92;&#48;33[0;32m\]&#92;&#48;33[1;30m\]] \[&#92;&#48;33[1;37m\]\w\[&#92;&#48;33[0;37m\] \$ "
```

![Example](/assets/articles/PS1/bash_example_2.png)

**Example #3**

```bash
export PS1="${Color_Off}[${Grey}\d \T${Color_Off}] ${Color_Off}${IGreen}\u@\h${Color_Off}:${IBlue}\w${Grey}(\$(if [[ \$? == 0 ]]; then echo \"${IGreen}\342\234\223${Color_Off}\"; else echo \"${IRed}\342\234\227${Color_Off}\"; fi)${Grey})${Color_Off}\$ "
```

![Example](/assets/articles/PS1/bash_example_3.png)

**Example #4**

```bash
export PS1="\[&#92;&#48;33[0;37m\]\342\224\214\342\224\200\$([[ \$? != 0 ]] && echo \"[\[&#92;&#48;33[0;31m\]\342\234\227\[&#92;&#48;33[0;37m\]]\342\224\200\")[$(if [[ ${EUID} == 0 ]]; then echo '\[&#92;&#48;33[0;31m\]\h'; else echo '\[&#92;&#48;33[0;33m\]\u\[&#92;&#48;33[0;37m\]@\[&#92;&#48;33[0;96m\]\h'; fi)\[&#92;&#48;33[0;37m\]]\342\224\200[\[&#92;&#48;33[0;32m\]\w\[&#92;&#48;33[0;37m\]]\n\[&#92;&#48;33[0;37m\]\342\224\224\342\224\200\342\224\200\342\225\274 \[&#92;&#48;33[0m\]"
```

![Example](/assets/articles/PS1/bash_example_4.png)

**Example #5**

```bash
export PS1="$sq_color\342\224\214\342\224\200\$([[ \$? != 0 ]] && echo \"[\[&#92;&#48;33[01;37m\]\342\234\227$sq_color]\342\224\200\")[\[&#92;&#48;33[01;37m\]\t$sq_color]\342\224\200[\[&#92;&#48;33[01;37m\]\u@\h$sq_color]\n\342\224\224\342\224\200\342\224\200> \[&#92;&#48;33[01;37m\]\W$sq_color $ \[&#92;&#48;33[01;37m\]>>\\[\&#92;&#48;33[0m\\] "
```

![Example](/assets/articles/PS1/bash_example_5.png)

**Example #6**

```bash
export PS1="\n\$(if [[ \$? == 0 ]]; then echo \"\[&#92;&#48;33[0;34m\]\"; else echo \"\[&#92;&#48;33[0;31m\]\"; fi)\342\226\210\342\226\210 [ \W ] [ \t ]\n\[&#92;&#48;33[0m\]\342\226\210\342\226\210 "
```

![Example](/assets/articles/PS1/bash_example_6.png)
This ones boring

**Example #7**

```bash
# I like this one a lot, but it takes too long to load
# (atleast for something as simple as a prompt.. even a second is too long)
export PS1="\n\[&#92;&#48;33[1;37m\]\342\224\214($(if [[ ${EUID} == 0 ]]; then echo '\[&#92;&#48;33[01;31m\]\h'; else echo '\[&#92;&#48;33[01;34m\]\u@\h'; fi)\[&#92;&#48;33[1;37m\])\342\224\200(\[&#92;&#48;33[1;34m\]\$?\[&#92;&#48;33[1;37m\])\342\224\200(\[&#92;&#48;33[1;34m\]\@ \d\[&#92;&#48;33[1;37m\])\[&#92;&#48;33[1;37m\]\n\342\224\224\342\224\200(\[&#92;&#48;33[1;32m\]\w\[&#92;&#48;33[1;37m\])\342\224\200(\[&#92;&#48;33[1;32m\]\$(ls -1 | wc -l | sed 's: ::g') files, \$(ls -sh | head -n1 | sed 's/total //')b\[&#92;&#48;33[1;37m\])\342\224\200> \[&#92;&#48;33[0m\]"
```

![Example](/assets/articles/PS1/bash_example_7.png)

**Example #8**

```bash
export PS1="\[\e[01;32m\]\u@\h \[\e[01;34m\]\W \`if [ \$? = 0 ]; then echo -e '\e[01;32m:)'; else echo -e '\e[01;31m:('; fi\` \[\e[01;34m\]$\[\e[00m\] "
```

![Example](/assets/articles/PS1/bash_example_8.png)

**Example #9** Courtesy of mr Glenney

```bash
export PS1="\[&#92;&#48;33[01;32m\]\u|\[&#92;&#48;33[01;35m\]\$?\[&#92;&#48;33[01;34m\] \w \[&#92;&#48;33[01;31m\]\$\[&#92;&#48;33[00m\] "
```

![Example](/assets/articles/PS1/bash_example_9.png)

**Example #10**
This is my personal favorite, it shows the timestamp, the # of the commands executed in the current session, username, hostname, current working directory, and a success/fail icon for the last command

```bash
export PS1="\[\e[0m\][\[&#92;&#48;33[1;30m\]\d \T\[\e[0m\]]\[\e[0m\]{\[&#92;&#48;33[1;30m\]\#\[\e[0m\]} \[\e[0m\]\[\e[0;92m\]\u@\h\[\e[0m\]:\[\e[0;94m\]\w\[&#92;&#48;33[1;30m\](\`if [ \$? = 0 ]; then echo \"\[\e[0;92m\]\342\234\223\[\e[0m\]\"; else echo \"\[\e[0;91m\]\342\234\227\[\e[0m\]\"; fi\`\[&#92;&#48;33[1;30m\])\[\e[0m\]$ "
```


 ![PS1 Example](/assets/articles/PS1-example.png)

**Example #11**
This is what I have setup on most of my servers. Instead of setting up the $PS1 variable in the ~/.bash_profile or ~/.bashrc files, I created a bash script located at /etc/profile.d/prompt_color.sh, which will use the above prompt (example #10), unless the user is root, then it will use the same prompt, but it will change the username and host color from green to red. Code for the bash script is below.

```bash
#!/bin/bash

if [ $(id -u) -eq 0 >/dev/null 2>&1 ]; then
 export PS1="\[\e[0m\][\[&#92;&#48;33[1;30m\]\d \T\[\e[0m\]]\[\e[0m\]{\[&#92;&#48;33[1;30m\]\#\[\e[0m\]} \[\e[31;1m\]\u@\h\[\e[0m\]:\[\e[0;94m\]\w\[&#92;&#48;33[1;30m\](\`if [ \$? = 0 ]; then echo \"\[\e[0;92m\]\342\234\223\[\e[0m\]\"; else echo \"\[\e[0;91m\]\342\234\227\[\e[0m\]\"; fi\`\[&#92;&#48;33[1;30m\])\[\e[0m\]# "
else
 export PS1="\[\e[0m\][\[&#92;&#48;33[1;30m\]\d \T\[\e[0m\]]\[\e[0m\]{\[&#92;&#48;33[1;30m\]\#\[\e[0m\]} \[\e[0m\]\[\e[0;92m\]\u@\h\[\e[0m\]:\[\e[0;94m\]\w\[&#92;&#48;33[1;30m\](\`if [ \$? = 0 ]; then echo \"\[\e[0;92m\]\342\234\223\[\e[0m\]\"; else echo \"\[\e[0;91m\]\342\234\227\[\e[0m\]\"; fi\`\[&#92;&#48;33[1;30m\])\[\e[0m\]$ "
fi
```

![Profiled PS1 Example](/assets/articles/profiled-ps1-example.png)

**Example #12**

This one may be a little overwhelming, but I think it's pretty useful. It displays:
*   Total number of sessions on the server
*   Date and time
*   Execution time of last command
*   Number of commands executed in the current session
*   Username
*   Hostname
*   Current working directory
*   Status code of last command (Green checkbox on success, otherwise, red numeric value)
*   Also, the username@host changes from green to red if you sudo to root, just like in the previous examples

```bash
#!/bin/bash
# Create /etc/profile.d/prompt.sh and add the content of this gist to it.
#
# Prompt example:
#   (2)[Fri May 06 10:00:30|  0:003]{4}root@ip-172-31-1-226:~(0)#
# Format is:
#   (sessions on server)[date time| Last command exec time]{sessions on server}username@hostname:working_directory(exit code of last cmd)#
#
# Example Output: http://d.pr/i/19B87
#
# Credit: Original version was taken from http://stackoverflow.com/a/8464508/5154806
#

bold='\[\e[1m\]'
plain='\[\e[0m\]'

set_begin() {
	[[ -z "$begin" ]] && begin="$(date +"%s %N")"
}

calc_elapsed() {
	# Thresholds for command execution time (seconds)
	warn_threshold='300'      # 5 minutes
	danger_threshold='3600' # 1 hour

	read begin_s begin_ns <<< "$begin"
	begin_ns="${begin_ns##+(0)}"
	# PENDING - date takes about 11ms, maybe could do better by digging in
	# /proc/$$.  
	read end_s end_ns <<< $(date +"%s %N")
	end_ns="${end_ns##+(0)}"
	local s=$((end_s - begin_s))
	local ms

	[[ "$end_ns" -ge "$begin_ns" ]] && ms=$(((end_ns - begin_ns) / 1000000)) || ( s=$((s - 1)); ms=$(((1000000000 + end_ns - begin_ns) / 1000000)) )

	elapsed="$(printf " %2u:%03u" $s $ms)"

	[[ "$s" -ge 300 ]] && elapsed="$elapsed [$(human_time $s)]"

	# If the last execution elapsed time is greater than one of the above thresholds, then
	# set the color to red or yellow
	if [[ $s -gt $danger_threshold ]]; then
		elapsed="\[\e[31;1m\]$elapsed\[\e[0m\]"
	elif [[ $s -gt $warn_threshold ]]; then
		elapsed="\[\e[33m\]$elapsed\[\e[0m\]"
	fi
}

human_time() {
	local s=$1
	local days=$((s / (60*60*24)))
	s=$((s - days*60*60*24))
	local hours=$((s / (60*60)))
	s=$((s - hours*60*60))
	local min=$((s / 60))

	[[ "$days" != 0 ]] && local day_string="${days}d "

	printf "$day_string%02d:%02d\n" $hours $min
}  

timer_prompt() {
	status=$?
	local size=16
	sess_count=$(who | wc -l)
	calc_elapsed

	[[ "${#PWD}" -gt $size ]] && pwd_string="${PWD: -$size}" || pwd_string="$(printf "%${size}s" $PWD)"

	if [[ $(id -u) -eq 0 ]]; then
		color='\[\e[31;1m\]'
		suffix='#'
	else
		color='\[\e[0m\]\[\e[0;92m\]'
		suffix='$'
	fi

	PS1="(\[&#92;&#48;33[1;30m\]$sess_count\[\e[0m\])\[\e[0m\][\[&#92;&#48;33[1;30m\]\d \T\[\e[0m\]|\[\e[0m\]$bold$elapsed]\[\e[0m\]{\[&#92;&#48;33[1;30m\]\#\[\e[0m\]}$color\u@\h\[\e[0m\]:\[\e[0;94m\]\w\[&#92;&#48;33[1;30m\](\`if [ \$? = 0 ]; then echo \"\[\e[0;92m\]\342\234\223\[\e[0m\]\"; else echo \"\[\e[0;91m\]$status\[\e[0m\]\"; fi\`\[&#92;&#48;33[1;30m\])\[\e[0m\]$suffix "

	begin=
}

set_begin
trap set_begin DEBUG
PROMPT_COMMAND=timer_prompt
```

![Custom PS1](/assets/articles/custom-ps1-1.png)

___

[I found a useful PS1 generator here, incase anyones interested](http://www.kirsle.net/wizards/ps1.html)

**Instead of changing the _$PS1_ variable inside your **~/.bash_prompt** file every time you find a new one you like**, I decided to throw multiple _$PS1_ values inside of an array, that way, whenever you want to change it, you can change the array key.. Check er out!..

```bash
# Multiple bash prompts
bash_prompt[0]="${Color_Off}[${Grey}\d \T${Color_Off}] ${Color_Off}${IGreen}\u@\h${Color_Off}:${IBlue}\w${Grey}(\$(if [[ \$? == 0 ]]; then echo \"${IGreen}\342\234\223${Color_Off}\"; else echo \"${IRed}\342\234\227${Color_Off}\"; fi)${Grey})${Color_Off}\$ "
bash_prompt[1]="\s-\v\$ "
bash_prompt[2]="\[\e[0m\][\[&#92;&#48;33[1;30m\]\d \T\[\e[0m\]] \[\e[0m\]\[\e[0;92m\]\u@\h\[\e[0m\]:\[\e[0;94m\]\w\[&#92;&#48;33[1;30m\]($(if [[ $? == 0 ]]; then echo "\[\e[0;92m\]\342\234\223\[\e[0m\]"; else echo "\[\e[0;91m\]\342\234\227\[\e[0m\]"; fi)\[&#92;&#48;33[1;30m\])\[\e[0m\]$"
bash_prompt[3]="\s-\v\$ "
bash_prompt[4]="&#92;&#48;33[0;36m\T \[&#92;&#48;33[1;30m\][\[&#92;&#48;33[1;34m\]\u@\h\[&#92;&#48;33[1;30m\]\[&#92;&#48;33[0;32m\]&#92;&#48;33[1;30m\]] \[&#92;&#48;33[1;37m\]\w\[&#92;&#48;33[0;37m\] \$ "
bash_prompt[5]="\[&#92;&#48;33[0;37m\]\342\224\214\342\224\200\$([[ \$? != 0 ]] && echo \"[\[&#92;&#48;33[0;31m\]\342\234\227\[&#92;&#48;33[0;37m\]]\342\224\200\")[$(if [[ ${EUID} == 0 ]]; then echo '\[&#92;&#48;33[0;31m\]\h'; else echo '\[&#92;&#48;33[0;33m\]\u\[&#92;&#48;33[0;37m\]@\[&#92;&#48;33[0;96m\]\h'; fi)\[&#92;&#48;33[0;37m\]]\342\224\200[\[&#92;&#48;33[0;32m\]\w\[&#92;&#48;33[0;37m\]]\n\[&#92;&#48;33[0;37m\]\342\224\224\342\224\200\342\224\200\342\225\274 \[&#92;&#48;33[0m\]"
bash_prompt[6]="$sq_color\342\224\214\342\224\200\$([[ \$? != 0 ]] && echo \"[\[&#92;&#48;33[01;37m\]\342\234\227$sq_color]\342\224\200\")[\[&#92;&#48;33[01;37m\]\t$sq_color]\342\224\200[\[&#92;&#48;33[01;37m\]\u@\h$sq_color]\n\342\224\224\342\224\200\342\224\200> \[&#92;&#48;33[01;37m\]\W$sq_color $ \[&#92;&#48;33[01;37m\]>>\\[\&#92;&#48;33[0m\\] "
bash_prompt[7]="\n\$(if [[ \$? == 0 ]]; then echo \"\[&#92;&#48;33[0;34m\]\"; else echo \"\[&#92;&#48;33[0;31m\]\"; fi)\342\226\210\342\226\210 [ \W ] [ \t ]\n\[&#92;&#48;33[0m\]\342\226\210\342\226\210 "
bash_prompt[8]="\n\[&#92;&#48;33[1;37m\]\342\224\214($(if [[ ${EUID} == 0 ]]; then echo '\[&#92;&#48;33[01;31m\]\h'; else echo '\[&#92;&#48;33[01;34m\]\u@\h'; fi)\[&#92;&#48;33[1;37m\])\342\224\200(\[&#92;&#48;33[1;34m\]\$?\[&#92;&#48;33[1;37m\])\342\224\200(\[&#92;&#48;33[1;34m\]\@ \d\[&#92;&#48;33[1;37m\])\[&#92;&#48;33[1;37m\]\n\342\224\224\342\224\200(\[&#92;&#48;33[1;32m\]\w\[&#92;&#48;33[1;37m\])\342\224\200(\[&#92;&#48;33[1;32m\]\$(ls -1 | wc -l | sed 's: ::g') files, \$(ls -sh | head -n1 | sed 's/total //')b\[&#92;&#48;33[1;37m\])\342\224\200> \[&#92;&#48;33[0m\]"
bash_prompt[9]="\[\e[01;32m\]\u@\h \[\e[01;34m\]\W \`if [ \$? = 0 ]; then echo -e '\e[01;32m:)'; else echo -e '\e[01;31m:('; fi\` \[\e[01;34m\]$\[\e[00m\] "
bash_prompt[10]="\[&#92;&#48;33[01;32m\]\u|\[&#92;&#48;33[01;35m\]\$?\[&#92;&#48;33[01;34m\] \w \[&#92;&#48;33[01;31m\]\$\[&#92;&#48;33[00m\] "

# Change the key valye to match the desired PS1 value above
export PS1=${bash_prompt[2]}
```

Makes it **MUCH** easier!

### What Are The Other Prompts
I guess since I'm explaining _$PS1_ n depth, I could go a bit further.
**_PS#.._**
1.  **PS1** - Default interaction prompt. The default interactive prompt on your Linux can be modified as shown below to something useful and informative.
2.  **PS2** - Continuation interactive prompt. A very long unix command can be broken down to multiple line by giving \ at the end of the line. The default interactive prompt for a multi-line command is “> “.
3.  **PS3** - Prompt used by "select" inside shell script. You can define a custom prompt for the select loop inside a shell script, using the PS3 environment variable.
4.  **PS4** - Used by "set -x" to prefix tracing output. The PS4 shell variable defines the prompt that gets displayed, when you execute a shell script in debug mode.
5.  **PS5** - PROMPT_COMMAND. Bash shell executes the content of the PROMPT_COMMAND just before displaying the PS1 variable.

Sources: [kristie.net](http://www.kirsle.net/wizards/ps1.html)
