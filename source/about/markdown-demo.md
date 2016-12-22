---
title: Hello World! - Example Article 
layout: articles/article-page.pug
#subtitle: Markdown Syntax Examples
summary: This is the summary of the article...
author: 
  prefix: By
  username: jhyland87
#alpha_content: This is the alpha content..
---
Example of a full-page article/blog post using *Markdown* syntax.

<sup>Much of this is sourced from [daringfireball.net](https://daringfireball.net/projects/markdown/syntax)</sup>

The Markdown code used for this article can be found **[here](https://gist.githubusercontent.com/jhyland87/2548e5e516d972d0b56ab21b51779cff/raw/68c0d6a38a9d759ff1e2a37a9ab44d412e61b78b/hello-world.md)**

---------------------------------------

## Index

* [Headers](#headers)
* [Emphasis](#emphasis)
* [Blockquotes](#blockquotes)
* [Tables](#tables)
* [Lists](#lists)
  * [Unordered](#unordered-lists)
* * [Ordered](#ordered-lists)
* [Horizontal Rules](#horizontal-rules)
* [Code](#code)
  * [Inline](#inline-code)
  * [Code Blocks](#code-blocks)
  * [Tripple Backticks](#tripple-backticks)
* [Superscript](#superscript)
* [Hyperlinks](#hyperlinks)
  * [Inline](#inline-style)
  * [Referenced](#referenced-style)
* [Backslask Escapes](#backslash-escapes)

---------------------------------------

# HEADERS

Basic headers...

The following code:

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

Will Produce:

    <h1 id="header-1">Header 1</h1>
    <h2 id="header-2">Header 2</h2>
    <h3 id="header-3">Header 3</h3>
    <h4 id="header-4">Header 4</h4>
    <h5 id="header-5">Header 5</h5>
    <h6 id="header-6">Header 6</h6>

Which looks like:

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

Alternatively, for H1 and H2, an underline-ish style, this code:

    Alternative H1
    ==============
    Alternative H2
    --------------

Will Produce:

    <h1 id="alternative-h1">Alternative H1</h1>
    <h2 id="alternative-h2">Alternative H2</h2>

Which looks like:

Alternative H1
==============
Alternative H2
--------------

---------------------------------------

# EMPHASIS

This code:

    **This is bold.**

    ~~This is strikthrough.~~

    *This is italicized.*

    This is **bold**, ~~strikethrough~~ and **italicized**.

Will Produce:

    <p><strong>This is bold.</strong></p>
    <p><del>This is strikthrough.</del></p>
    <p><em>This is italicized.</em></p>
    <p>This is <strong>bold</strong>, <del>strikethrough</del> and <strong>italicized</strong>.</p>

Which looks like:

**This is bold.**

~~This is strikthrough.~~

*This is italicized.*

This is **bold**, ~~strikethrough~~ and **italicized**.

---------------------------------------

# BLOCKQUOTES

This code:

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    > 
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

Will Produce:

    <blockquote>
    <p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p>
    <p>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.</p>
    </blockquote>

Which looks like:

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Markdown allows you to be lazy and only put the > before the first line of a hard-wrapped paragraph:

This code:

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.
    Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding additional levels of >:

Will Produce:

    <blockquote>
    <p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p>
    <p>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.
    Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding additional levels of &gt;:</p>
    </blockquote>

Which looks like:

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding additional levels of >:

This code:

    > This is the first level of quoting.
    >
    > > This is nested blockquote.
    >
    > Back to the first level.

Will Produce:

    <blockquote>
    <p>This is the first level of quoting.</p>
    <blockquote>
    <p>This is nested blockquote.</p>
    </blockquote>
    <p>Back to the first level.</p>
    </blockquote>

Which looks like:

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

Blockquotes can contain other Markdown elements, including headers, lists, and code blocks:

This code:

    > ## This is a header.
    > 
    > 1.   This is the first list item.
    > 2.   This is the second list item.
    > 
    > Here's some example code:
    > 
    >     return shell_exec("echo $input | $markdown_script");

Will produce:

    <blockquote>
    <h2 id="this-is-a-header-">This is a header.</h2>
    <ol>
    <li>This is the first list item.</li>
    <li>This is the second list item.</li>
    </ol>
    <p>Here&#39;s some example code:</p>
    <pre><code>return shell_exec(&quot;echo $input | $markdown_script&quot;);
    </code></pre></blockquote>

Which looks like:

> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");

---------------------------------------

# TABLES

Colons can be used to align columns.

This code:

    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | col 3 is      | right-aligned | $1600 |
    | col 2 is      | centered      |   $12 |
    | zebra stripes | are neat      |    $1 |

Will produce:

    <table>
    <thead>
    <tr>
    <th>Tables</th>
    <th style="text-align:center">Are</th>
    <th style="text-align:right">Cool</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>col 3 is</td>
    <td style="text-align:center">right-aligned</td>
    <td style="text-align:right">$1600</td>
    </tr>
    <tr>
    <td>col 2 is</td>
    <td style="text-align:center">centered</td>
    <td style="text-align:right">$12</td>
    </tr>
    <tr>
    <td>zebra stripes</td>
    <td style="text-align:center">are neat</td>
    <td style="text-align:right">$1</td>
    </tr>
    </tbody>
    </table>

Which looks like:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

This code:

    Markdown | Less | Pretty
    --- | --- | ---
    *Still* | `renders` | **nicely**
    1 | 2 | 3

Will produce:

    <table>
    <thead>
    <tr>
    <th>Markdown</th>
    <th>Less</th>
    <th>Pretty</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><em>Still</em></td>
    <td><code>renders</code></td>
    <td><strong>nicely</strong></td>
    </tr>
    <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    </tr>
    </tbody>
    </table>

Which looks like:

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

---------------------------------------

# LISTS

Markdown supports ordered (numbered) and unordered (bulleted) lists.

### Unordered Lists

Unordered lists use asterisks, pluses, and hyphens — interchangably — as list markers:

This code:

  *   Red (using asterisks)
  *   Green (using asterisks)
  *   Blue (using asterisks)

Will produce:

    <ul>
    <li>Red (using asterisks)</li>
    <li>Green (using asterisks)</li>
    <li>Blue (using asterisks)</li>
    </ul>

Which looks like:

*   Red (using asterisks)
*   Green (using asterisks)
*   Blue (using asterisks)


This code:

  +   Red (using plus sign)
  +   Green (using plus sign)
  +   Blue (using plus sign)

Will produce:

    <ul>
    <li>Red (using plus sign)</li>
    <li>Green (using plus sign)</li>
    <li>Blue (using plus sign)</li>
    </ul>

Which looks like:

+   Red (using plus sign)
+   Green (using plus sign)
+   Blue (using plus sign)

This code:

  -   Red (using hyphen)
  -   Green (using hyphen)
  -   Blue (using hyphen)

Will produce:

    <ul>
    <li>Red (using hyphen)</li>
    <li>Green (using hyphen)</li>
    <li>Blue (using hyphen)</li>
    </ul>

Which looks like:

-   Red (using hyphen)
-   Green (using hyphen)
-   Blue (using hyphen)

### Ordered Lists

This code:

  1.  Bird (using number 1)
  2.  McHale (using number 2)
  3.  Parish (using number 3)

Will produce:

    <ol>
    <li>Bird (using number 1)</li>
    <li>McHale (using number 2)</li>
    <li>Parish (using number 3)</li>
    </ol>

Which looks like:

1.  Bird (using number 1)
2.  McHale (using number 2)
3.  Parish (using number 3)

---------------------------------------

# HORIZONTAL RULES

You can produce a horizontal rule tag (`<hr />`) by placing *three or more* **hyphens**, **asterisks**, or **underscores** on a line by themselves. If you wish, you may use spaces between the hyphens or asterisks. Each of the following lines will produce a horizontal rule:

With **3** **asterisks** (`*`)

    ***

With **3** *spaced* **hyphens** (`-`)

    - - -

With **3** *spaced* **underscores** (`_`)

    _ _ _

With a whole bunch of **hyphens** (`-`)

    ---------------------------------------

All of which will produce:

    <hr />

Which looks like:

---------------------------------------

---------------------------------------

# CODE

### Inline Code

This code:

    Just an `inlineCode();` example.

Will produce:

    <p>Just an <code>inlineCode();</code> example.</p>

Which looks like:

Just an `inlineCode();` example.

### Code Blocks

This code:

        // Indented with two tabs
        $(document).ready(function(){
          console.log('Document is ready!')
        })

Will produce:

    <pre><code>// Indented with two tabs
    $(document).ready(function(){
      console.log(&#39;Document is ready!&#39;)
    })
    </code></pre>

Which looks like:

    // Indented with two tabs
    $(document).ready(function(){
      console.log('Document is ready!')
    })

### Tripple Backticks

This code:

    ```javascript
    $(function(){
      $('div').html('I am a div.');
    });
    ```

Will produce:

    <pre><code class="lang-javascript">$(function(){
      $(&#39;div&#39;).html(&#39;I am a div.&#39;);
    });
    </code></pre>

Which looks like:

```javascript
$(function(){
  $('div').html('I am a div.');
});
```

---------------------------------------

# SUPERSCRIPT

This code:

    Normal Text, <sup>Text with `<sup></sup>` tags.</sup>

    Normal Text, <sub>Text with `<sub></sub>` tags.</sub>

    Normal Text, <sub><sup>Text with `<sub></sub>` **and** `<sup></sup>` tags.</sup></sub>

Will produce:

    <p>Normal Text, <sup>Text with <code>&lt;sup&gt;&lt;/sup&gt;</code> tags.</sup></p>
    <p>Normal Text, <sub>Text with <code>&lt;sub&gt;&lt;/sub&gt;</code> tags.</sub></p>
    <p>Normal Text, <sub><sup>Text with <code>&lt;sub&gt;&lt;/sub&gt;</code> <strong>and</strong> <code>&lt;sup&gt;&lt;/sup&gt;</code> tags.</sup></sub></p>

Which looks like:

Normal Text, <sup>Text with `<sup></sup>` tags.</sup>

Normal Text, <sub>Text with `<sub></sub>` tags.</sub>

Normal Text, <sub><sup>Text with `<sub></sub>` **and** `<sup></sup>` tags.</sup></sub>

---------------------------------------


# HYPERLINKS

### Inline Style

This code:

    This is [an example](http://example.com/ "Title") inline link.

    [This link](http://example.net/) has no title attribute.

Will produce:

    <p>This is <a href="http://example.com/" title="Title">an example</a> inline link.</p>
    <p><a href="http://example.net/">This link</a> has no title attribute.</p>

Which looks like:

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

### Referenced Style

This code:

    This is [an example] [google] reference-style link.

    [google]: https://www.google.com/  "Google search homepage"

Will produce:

    <p>This is <a href="https://www.google.com/" title="Google search homepage">an example</a> reference-style link.</p>

Which looks like:

This is [an example] [google] reference-style link.

[google]: https://www.google.com/  "Google search homepage"

<sup>**Note:** The referenced link settings (2nd line) can be anywhere else in the document.</sup>

---------------------------------------

# BACKSLASH ESCAPES

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax. For example, if you wanted to surround a word with literal asterisks (instead of an HTML <em> tag), you can use backslashes before the asterisks, like this:

This code:

    \*literal asterisks\*

Will produce:

    <p>*literal asterisks*</p>

Which looks like:

\*literal asterisks\*

Markdown provides backslash escapes for the following characters:

    \   backslash
    `   backtick
    *   asterisk
    _   underscore
    {}  curly braces
    []  square brackets
    ()  parentheses
    #   hash mark
    +   plus sign
    -   minus sign (hyphen)
    .   dot
    !   exclamation mark