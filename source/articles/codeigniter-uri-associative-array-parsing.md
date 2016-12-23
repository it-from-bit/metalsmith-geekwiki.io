---
title: "CodeIgniter URI Associative Array Parsing"
layout: "articles/article-page.pug"
summary: "CodeIgniter URI Associative Array Parsing"
featured_image: "assets/articles/codeigniter.png"
create_date: "08-20-2012"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags:
share:
  title: "CodeIgniter URI Associative Array Parsing"
  summary: "CodeIgniter URI Associative Array Parsing"
  href: "###codeigniter-uri-associative-array-parsing###"
---
When using CI (CodeIgniter), I ran into a problem that would put my entire application out of play unless fixed;

I pass arrays through GET, you may ask why I would do such a thing, and I really don't care to explain.

Anyways,

> index.php?foo[]=a&foo[]=b&bar[]=c&bar[]=d

Would transform into:

```php
array(
    [foo]   => array(
                    'a', 'b'
                    ),
    [bar]   => array(
                    'c', 'd'
                    )
);
```

However, with the **url_to_assoc**, it would turn it into

```php
$foo = 'b';
$bar = 'd';
```

This turns into a problem when you need arrays passed through the URL. So a couple of friends and I started to look at it, and we found out that it was the **_url_to_assoc** function within <strong>/syscore/core/URI.php</strong>.

With a little modification from Joshya Flyer, we were able to get it to work. Now, if you pass /foo/a/foo/b/bar/c/baz/d/baz/e, foo will be an array with both a and b, bar will be string with just c, and baz will be an array with just e.
The code is below.

```php
	function _uri_to_assoc($n = 3, $default = array(), $which = 'segment')
	{
		if ($which == 'segment')
		{
			$total_segments = 'total_segments';
			$segment_array = 'segment_array';
		}
		else
		{
			$total_segments = 'total_rsegments';
			$segment_array = 'rsegment_array';
		}

		if ( ! is_numeric($n))
		{
			return $default;
		}

		if (isset($this->keyval[$n]))
		{
			return $this->keyval[$n];
		}

		if ($this->$total_segments() < $n)
		{
			if (count($default) == 0)
			{
				return array();
			}

			$retval = array();
			foreach ($default as $val)
			{
				$retval[$val] = FALSE;
			}
			return $retval;
		}

		$segments = array_slice($this->$segment_array(), ($n - 1));

		$var = array_chunk($segments, 2);

		$result = array();

		/* Custom modificatioms begin here
		*/
		foreach ($var as $eachSet)
		{
			if (isset($eachSet[0]) and isset($eachSet[1]))
				if (isset($result[$eachSet[0]]))
				{
					if (is_array($result[$eachSet[0]]))
					{
						$result[$eachSet[0]][] = $eachSet[1];
					}
					else
					{
						$result[$eachSet[0]] = array($result[$eachSet[0]]);
						$result[$eachSet[0]][] = $eachSet[1];
					}
				}
				else
				{
					$result[$eachSet[0]] = $eachSet[1];
				}
		}

		// Cache the array for reuse
		$this->keyval[$n] = $result;

		/*
		print "URI TO ARR<br>";
		print_r($result);
		print "<hr>";
		*/
		return $result;
	}
```

Now, of course, this entails doing just the opposite. taking an array and making it into a URI. THe code for that is below.

```php
function assoc_to_uri($array)
	{
		$temp = array();
		foreach ($array as $key => $val)
		{
			if(is_array($val))
			{
				foreach($val as $subval)
				{
					$temp[] = $key;
					$temp[] = $subval;
				}
			}
			else
			{
				$temp[] = $key;
				$temp[] = $val;
			}
		}
		return implode('/', $temp);
	}
```

It seems to be working well for us, if you have any questions, just let us know.

I posted a thread about it on CI, they didn't seem very helpful at all: http://codeigniter.com/forums/viewthread/222168/
