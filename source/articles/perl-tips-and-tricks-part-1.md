---
title: "Perl Tips And Tricks (Part 1)"
layout: "articles/article-page.pug"
summary: "Perl Tips And Tricks (Part 1)"
featured_image: "assets/articles/perl.jpg"
create_date: "07-01-2012"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags:
share:
  title: "Perl Tips And Tricks (Part 1)"
  summary: "Perl Tips And Tricks (Part 1)"
  href: "###perl-tips-and-tricks-part-1###"
---
A good developer tries to use as little lines of code as possible. If theres 2 ways to do something, and one takes one line, and the other takes 3, then you typically would want to go with the one thats just one line of code. Below are 20 tips and tricks I have found over my years of perl experience.

_**Note:** These are in no specific order._

#### **1)** Good Way Of Assigning Default Values

Theres many times in scripting where you need to setup default values for variables. For a while, I was using just the if statement, like this:

```perl
$var = "Undefined" unless $var;
```

However, I found a new favorite way to do this:

```perl
$var ||= "Undefined";
```

Pretty simple right??
####2) Count Number Of Times A String Is In A Paragraph
Sometimes you need to be able to count how many times a specific string is found within a variable, heres a pretty easy and efficient way of doing so.

```perl

my $paragraph = "one two two three three three four four four four five five five five five";

my $word = $ARGV[0];

my $numtimes = 0;
$numtimes++ while ($paragraph =~ /b $word b/gx);

print "$word shows up in the page $numtimes timesn";
```
####3) Using The Double Pipe Operator ( || )
We all know about the || operator, it basically means "or". Heres an example usage:

```perl
SomeModule->bla() || die "SomeModule failed: $!n";
```

Which basically means if SomeModule->bla() fails, then die and show the exit code.
But you know that you can use it more than once? It can save you a TON of lines of code.

Lets say you have a script like below:

```perl
if($var1) {
$name = $var1;
}
elsif($var2) {
 $name = $var2;
}
elsif($var3) {
 $name = $var3;
}
elsif($var4) {
 $name = $var4;
}
else {
 $name = 'John Doe';
}

print "Your name is $name";
```

This just basically sees if $var1 is set, if so, set $name to $var1, if not, is $var2 set? If so, set $name to $var2.... etc etc, and if its not set, then set $name to "John Doe".
But maybe theres an easier way to do this?

```perl
$name = $var1 || $var2 || $var3 || $var4 || 'John Doe';
print "Your name is $name";
```

Does the exact same thing, and just one line of code, way easier isn't it?
####4) Using Perl Replication
One of the most annoying things for me, is going through someones script, and seeing something like this:
```perl
print "==============================n";
print "Settingsn";
print "==============================n";
```

I see this, and its typically all over the script, makes me wonder how long they sat there and held down the '=' key...


Lets try it with replication. Perl comes with the 'x' operator, which will replicate a letter/number/key/whatever, as many times as you want. Heres an example if the above script, using replication
```perl
print "=" x 30 . "n";
print "Settingsn";
print "=" x 30 . "n";
```


Much easier and quicker!


####**5) Short-Hand IF Statements**
I'm a big fan of these because a simple if-else statement can take up between 5 to 7 lines of code, and you really don't need to use that much space. These are also known as "Ternary Operators", nearly every language supports them, but I don't see it utilized often.

Take the below if-else statement into consideration:

```perl
if($female){
$name = 'Jane';
}
else {
 $name = 'John';
}
```

So thats 6 lines of code, and all it does is check if $female is true, if so, $name is Jane, else, $name is John. But this can be completed in just one line, using a short-hand if statement, like below:

```perl
$name = ($female) ? 'Jane' : 'John';
```

That does the exact same thing as the standard if-else above, no slower or faster, it's just quicker and cleaner.
If you want to save even more time, then maybe you don't even need to assign the name to variable, perhaps you just want to check $female right in the middle of the print command, like this:

```perl
print 'Hello, my name is '. ($female) ? 'Jane' : 'John'. "n";
```
####**6) Get The Execution Time**
There may be some cases where you wish to know how long it takes to get to a certain point in your script, or how long it takes to run it all together. Perl has a built in system variable, **$^T**, which can do this for you.

Heres a good example of how to use it.

```perl
my $t;

print "Starting $0...n";

doSomething->module1();
$t = time - $^T;
print "This script has been running for $t " . ($t > 1) ? 'seconds' : 'second' ."n";

doSomething->module2();
$t = time - $^T;
print "This script has been running for $t " . ($t > 1) ? 'seconds' : 'second' ."n";

doSomething->module3();
$t = time - $^T;
print "This script has been running for $t " . ($t > 1) ? 'seconds' : 'second' ."n";
```

The output would look something like what follows:
> Starting test_script.pl...
> This script has been running for 1 second...
> This script has been running for 2 seconds...
> This script has been running for 6 seconds...

This would help you realize that you clearly have an issue with doSomething->module3(), don't you think?

There are modules and other functions you can use to benchmark your scripts, but most of those are perl based. In my opinion, that means that they may not be accurate, due to the fact that the code itself is timing itself. It may not include the time it took to actually run the benchmarking functions/modules you are using. However, the **$^T** variable is a system variable being accessed through perl, so it should be much more accurate.
####7) Writing To A File - A Better Way?
When you want to write to a file in perl, typically you just open a file with a file handle, then print any information to that file handle itself, heres a short example:

```perl
open (MYFILE, '>>'.$file);
print MYFILE "Hello Worldn";
close (MYFILE);
```

But what if you want to put everything that gets sent to STDOUT to a file? This is useful for if your script is generating errors, which you're having a hard time catching to read, and they aren't getting sent to a file. You can simply open STDOUT as the filehandle, then instead of specifying a file, you specify the tee command to append anything that goes to STDOUT to a file. Example:

```perl
open (STDOUT, "| sudo tee -a -i $file")
|| die "Failed to open $file for writing: $!n";

print "Now anything in STDOUT will be send to $filen";
print Dumper(%ENV);
print "Pretty useful, if you as me!n";

close (STDOUT);
```

This will append anything that gets sent to STDOUT to the value of $file.

This is very useful for cron jobs using perl, if you use the typical method, then you have to specifically specify what to append to $file, but using this method, anything that gets displayed, will get appended to $file, until you close the filehandle. If your script is generating an error... this will catch it.

Another reason I think this is better than the typical method, is if you want to both print your data to a file, as well as display it in STDOUT for the user, you would have to print to the filehandle AND print it a second time so it gets sent to STDOUT, while using the normal method. But with this trick, it gets sent to the file and to STDOUT at the same time.
####8) Split - A Common Misconception
Most of the articles/tutorials regarding the split command in perl, show you to use back slashes as the means to specify what you wish to split a string by and store it into a variable. However I find that that may cause issues for some developers code, I know it did in mine.

Heres a small example of how to use the split function, splitting a string with a few letters in it, and storing it into an array, then taking a look at the results..

```perl
my @array;
my $string = " a b c ";

@array = split( / /, $string );

print "Split with backslash:n";
print Dumper(@array);
print "n";

@array = split( ' ', $string );

print "Split with quotes:n";
print Dumper(@array);
print "n";
```

So now the only difference, is that one split is using the single quote to split, and the other is using the back slashes. Here is the output

```bash
$ perl split_with_quote_and_slash.pl
Split with backslash:
$VAR1 = '';
$VAR2 = 'a';
$VAR3 = 'b';
$VAR4 = 'c';

Split with quotes:
$VAR1 = 'a';
$VAR2 = 'b';
$VAR3 = 'c';
```

As you can tell by the output, the back slash will include any empty results, meaning the space in the beginning of the $string variable. Keep in mind, if you use chomp, then that would also trim the space off the front of the variable $string.
####9) Alternative To Using Push To Add A New Value To An Array
So theres nothing wrong with using..

```perl
push @array, "New Value";
```

But alternatively, you could use..

```perl
$array[@array] = 'New Value';
```
####10) Using The Diagnostics Module
Almost everyone uses the warnings module, or is at least aware of it. You can either execute your perl switch with the **-w** switch, or you can add "**use warnings;**" to the top of your script so your script uses the warnings module every time it's executed.
But what about the diagnostics module? Not many people are aware of this. The warnings module will point you in the right direction and get you using best practices, but the diagnostics module will help you much more.
Heres an example script.

```perl
#!/usr/bin/perl
use warnings;
use strict;
#use diagnostics;

my @stuff = qw(1 2 3 4 5 6 7 8 9 10);
print "@stuffn" unless $stuff[10] == 5;
```

The output of the above, with the diagnostics module commented out, would be...

Use of uninitialized value $stuff[10] in numeric eq (==) at diagnostics.pl line 7.
1 2 3 4 5 6 7 8 9 10

Now if we uncomment the "use diagnostics;" line, you can see a version, you can see all of the diagnostic output.
Use of uninitialized value $stuff[10] in numeric eq (==) at diagnostics.pl line
7 (#1)
(W uninitialized) An undefined value was used as if it were already
defined. It was interpreted as a "" or a 0, but maybe it was a mistake.
To suppress this warning assign a defined value to your variables.
To help you figure out what was undefined, perl will try to tell you the
name of the variable (if any) that was undefined. In some cases it cannot
do this, so it also tells you what operation you used the undefined value
in. Note, however, that perl optimizes your program and the operation
displayed in the warning may not necessarily appear literally in your
program. For example, "that $foo" is usually optimized into "that "
. $foo, and the warning will refer to the concatenation (.) operator,
even though there is no . in your program.
1 2 3 4 5 6 7 8 9 10
This can be a HUGE aid in debugging longer scripts that you're having issues with.
