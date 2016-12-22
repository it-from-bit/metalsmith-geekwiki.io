---
title: "Adding JS & CSS Files To CKEditor Content"
layout: "articles/article-page.pug"
summary: "Adding JS & CSS Files To CKEditor Content"
featured_image:
create_date: "08-24-2015"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags:
share:
  title: "Adding JS & CSS Files To CKEditor Content"
  summary: "Adding JS & CSS Files To CKEditor Content"
  href: "###adding-js-css-files-to-ckeditor-content###"
---
Recently, I've been working on a web-development project (Which I'm omitting from this post), which uses the popular WYSIWYG editor, [CKEditor](http://ckeditor.com/).

A popular issue with WYSIWYG editors, is even though they have display a very accurate depiction of what the content will look like as pure HTML, the content still looks different from what it will be when it's actually injected into your page, this is typically because your page has CSS and JS to aid in styling, where as the WYSIWYG editor does not.

Like CKEditor, most of the common RTE's use an iFrame for the content, which is why the CSS/JS is not reflected in the content. I think this actually is done intentionally, to show what it will look like as html exactly, and only html, without any outside interference.

However, I wanted the CSS/JS inside the content. After looking a little bit, I did find a plugin on the CKEditor website, called [CKEditor Include CSS & JS](http://ckeditor.com/addon/doksoftinclude), which seemed to accomplish exactly what I wanted.

Two problems with this plugin...

1. I don't like to pay for such little software packages. I don't at all mind paying for things like Jira for example, but this just seemed to minor
2. We aren't absolutely sure if the project I'm working on will be Open Source or not, or a mixture. If it's not, then this would need to be a factor in any 3rd party software, and if I move forward as if its going to be Open Source, and its not, then that means I would have to go back and re-factor a lot of code.

So, I decided to just do it myself, which was actually just as easy as it sounds. I can't believe people pay for software like this, lol.

Before I show the code below and explain it, let me stress that I am NOT a professional web developer, I'm a Linux Engineer, I just so happen to  know a good amount of web development skills...
### How to use...

	1. Set the ckeditor_id value to the ID of the textarea using CKEditor
	2. Set the value of container_classes to whatever classes the final HTML will be displayed in when displayed on the web-page. Since the ALL CSS/JS of the page will be reflected in the content of the textarea, it's important to set this value correctly, or it may look completely different.
	3. Copy/Paste the code to wherever you want it to execute.

### Whats it do...
1. Look through the current page for any CSS files, specifically looking for any **_&lt;link&gt;_** tags that have the attribute/value of **_type="text/css"_**, which if done properly, all of the link tags should have (if loading CSS), load the value of _ **href** _ into an array.
2. Do the same thing with Javascript files, looking for any **_&lt;script&gt;_** tags with the attribute/value of _ **type="text/javascript"** _, load the value of _ **src** _ into an array.
3. Find the CKEditor instance by looking for an instance named by the value of the variable **_ckeditor_id_**
4. If you have any extra CKEditor settings, apply them here....
5. Waits for the CKEditor instance to be fully initialized, this takes longer than window.load or document.ready, so wait for CKEditors **_instanceReady_** event handler.
6. Once initialized, look for the correct frame associated to the CKEditor you specified in the _ **ckeditor_id** _ variable. This will look for the correct iframe, not just any iframe. Then create a handler referencing the **_&lt;head&gt;_** of that iframe
7. Loop through the array created earlier with the CSS files and create a new **_&lt;link&gt;_** tag with the stylesheet source as the source collected earlier
8. Do the same thing with the array created earlier with the JS files, creating a _ **&lt;script&gt;** _ tag with the javascript href as the href collected earlier

And finally, you can view the code here:

```javascript
// I find its best to do this in window.load as opposed to document.ready, since all the
// DOM elements are then loaded
$( window ).load(function(){
    // ID of the cKeditor instance
    var ckeditor_id = 'your_ckeditor_id';
    var container_classes = 'panel-body panel';

    var $head = $('head');
    var css_files = [];
    var js_files = [];

    // Get all CSS files of the current page
    $head.find('link[type=&quot;text/css&quot;]' ).each(function(i,css){
        css_files.push($(css).attr('href'));
    });

    // Then get all the JS files
    $head.find('script[type=&quot;text/javascript&quot;]' ).each(function(i,js){
        js_files.push($(js).attr('src'));
    });

    // CKeditor handler
    var $ckeditor = CKEDITOR.instances[ckeditor_id];

    // Add whatever class(es) are of the DIV/SPAN that you will be displaying the content in
    $ckeditor.config.bodyClass = container_classes;

    // Wait for the CKeditor instance to be initiated, it takes a bit longer
    // than just window.load, but it has an event handler
    CKEDITOR.on('instanceReady', function(){
        // Find the exact iframe thats used by this ckeditor_id textarea
        var $ckeditor_frame = $('#cke_' + ckeditor_id).find('.cke_wysiwyg_frame');

        // Head element of CKEditors iFrame
        var $ckeditor_head  = $ckeditor_frame.contents().find(&quot;head&quot;);

        // Add all the CSS files..
        $.each(css_files, function(i,css_file){
            $ckeditor_head.append($(&quot;&lt;link/&gt;&quot;, {
                rel: &quot;stylesheet&quot;,
                href: css_file,
                type: &quot;text/css&quot;
            }));
        });

        // Then add all the JS files..
        $.each(js_files, function(i,js_file){
            $ckeditor_head.append($(&quot;&lt;script/&gt;&quot;, {
                src: js_file,
                type: &quot;text/javascript&quot;
            }));
        });

        // DONE!
    });
});
```
