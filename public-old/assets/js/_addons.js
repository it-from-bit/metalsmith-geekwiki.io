/**
 * @package Live
 * @since   1.0
 */

'use strict';

// Imports
document.write('<script src="components/imagesloaded/imagesloaded.pkgd.js"></script>');
document.write('<script src="components/resize-sensor/resize-sensor.js"></script>');

(function($) {

	/**
	 * Pixels to pixels
	 *
	 * @since 1.0
	 *
	 * @param  int val
	 * @return int
	 */
	$.px = function(val) {
		return parseFloat($('html').css('font-size'))*val / 16;
	};

	/**
	 * Human time difference
	 *
	 * @since 1.0
	 *
	 * @param  Date   date
	 * @return string
	 */
	$.humanTimeDiff = function(date) {

		switch (typeof date) {
			case 'number':
				date *= 1000;
			case 'string':
				date = new Date(date);
				break;
		}

		var delta = ((new Date).getTime() - date.getTime()) / 1000;
		if (delta < 1) {
			delta = 0;
		}

		var time_diff = {
			months:  ~~(delta / 2592000),
			weeks:   ~~(delta / 604800),
			days:    ~~(delta / 86400),
			hours:   ~~(delta / 3600),
			minutes: ~~(delta / 60),
			seconds: ~~(delta)
		};

		var i18n = $.humanTimeDiff.i18n;

		if (time_diff.months >= 2)
			return i18n.monthsAgo.replace('%d', time_diff.months);
		if (time_diff.months >= 1)
			return i18n.monthAgo;
		if (time_diff.weeks >= 2)
			return i18n.weeksAgo.replace('%d', time_diff.weeks);
		if (time_diff.weeks >= 1)
			return i18n.weekAgo;
		if (time_diff.days >= 2)
			return i18n.daysAgo.replace('%d', time_diff.days);
		if (time_diff.days >= 1)
			return i18n.dayAgo;
		if (time_diff.hours >= 2)
			return i18n.hoursAgo.replace('%d', time_diff.hours);
		if (time_diff.hours >= 1)
			return i18n.hourAgo;
		if (time_diff.minutes >= 2)
			return i18n.minutesAgo.replace('%d', time_diff.minutes);
		if (time_diff.minutes >= 1)
			return i18n.minuteAgo;
		if (time_diff.seconds >= 10)
			return i18n.secondsAgo.replace('%d', time_diff.seconds);
		return i18n.now;

	};

	/**
	 * Human time difference internationalization strings
	 *
	 * @since 1.0
	 * @var array
	 */
	$.humanTimeDiff.i18n = {
		monthsAgo:  '%d months ago',
		monthAgo:   '1 month ago',
		weeksAgo:   '%d weeks ago',
		weekAgo:    '1 week ago',
		daysAgo:    '%d days ago',
		dayAgo:     '1 day ago',
		hoursAgo:   '%d hours ago',
		hourAgo:    '1 hour ago',
		minutesAgo: '%d mins ago',
		minuteAgo:  '1 min ago',
		secondsAgo: '%d sec ago',
		now:        'now'
	};

	/**
	 * Get data
	 *
	 * @since 1.0
	 *
	 * @param  strong key
	 * @param  mixed  defaultValue
	 * @return mixed
	 */
	$.fn.getData = function(key, defaultValue) {
		return typeof this.data(key) !== 'undefined' ? this.data(key) : defaultValue;
	};

	/**
	 * Get data array
	 *
	 * @since 1.0
	 *
	 * @param  string prefix
	 * @return array
	 */
	$.fn.getDataArray = function(prefix) {

		var
			data = {},
			re   = new RegExp('^' + prefix + '([A-Z])');

		$.each(this.data(), function(key, value) {
			if (re.test(key)) {
				key = key.replace(re, '$1');
				key = key.charAt(0).toLowerCase() + key.slice(1);
				data[key] = value;
			}
		});

		return data;

	};

	/**
	 * Closest descendant
	 *
	 * @since 1.3
	 *
	 * @param  string selector
	 * @param  string parentSelector
	 * @return object
	 */
	$.fn.closestDescendant = function(selector, parentSelector) {

		var _this = this;

		if (typeof parentSelector == 'undefined') {
			parentSelector = selector;
		} else {
			parentSelector += ', ' + selector;
		}

		return this.find(selector).filter(function() {
			return $(this).parent().closest(parentSelector).is(_this);
		});

	};

	/**
	 * Change tag
	 *
	 * @since 1.0
	 *
	 * @param  string tag
	 * @return object
	 */
	$.fn.changeTag = function(tag) {

		var
			replacement = $('<' + tag + '>'),
			attributes  = {},
			contents    = this.children().clone(true);

		// Attributes
		$.each(this.get(0).attributes, function(index, attribute) {
			attributes[attribute.name] = attribute.value;
		});

		// Parameters
		replacement
			.attr(attributes)
			.data(this.data())
			.append(contents);

		this.replaceWith(replacement);

		return replacement;

	}

	/**
	 * Spinner
	 *
	 * @since 1.0
	 *
	 * @return object
	 */
	$.fn.spinner = function() {

		var el = this;

		// No elements
		if (el.length == 0) {
			return this;
		}

		// Multiple elements
		if (el.length > 1) {
			return el.each(function() {
				$(this).spinner();
			});
		}

		// Spinner
		el.addClass('sk-wave');
		for (var i = 1; i <= 5; i++) {
			$('<span />', {class: 'sk-rect sk-rect' + i}).appendTo(el);
		}

		return this;

	},

	/**
	 * Parallax transform
	 *
	 * @since 1.0
	 *
	 * @return object
	 */
	$.fn.parallaxTransform = function() {

		var el = this;

		// Variables
		var init, refresh, win;

		// Window
		win = $(window);

		/**
		 * Initialization
		 *
		 * @since 1.0
		 */
		init = function() {

			// Events
			win.on('scroll resize', refresh);

			refresh();

		};

		/**
		 * Refresh
		 *
		 * @since 1.0
		 */
		refresh = function() {

			// Transform
			el.css('transform', 'translate3d(0, ' + (-win.scrollTop() / 2) + 'px, 0)');

		};

		// Initialization
		init();

		return this;

	},

	/**
	 * Smooth scroll
	 *
	 * @since 2.0
	 *
	 * @return object
	 */
	$.fn.smoothScroll = function(options) {

		var el = this;

		// Options
		switch (typeof options) {

			case 'undefined':
				options = {};
				break;

		}

		el.options = $.extend({}, {

			/**
			 * Target top position
			 *
			 * @since 1.1.1
			 * @var number
			 */
			targetTop: null,

			/**
			 * Scroll speed coefficient
			 *
			 * @since 1.1.1
			 * @var number
			 */
			speedCoefficient: 8,

			/**
			 * Prevent default
			 *
			 * @since 1.1.1
			 * @var bool
			 */
			preventDefault: true

		}, options);

		var
			html = $('html'),
			body = $('body');

		el.filter('[href*="#"]').click(function(event) {

			var
				target     = $('#' + $(this).attr('href').split('#')[1]),
				scroll_top = Math.max(html.scrollTop(), body.scrollTop()),
				target_top = el.options.targetTop === null ? Math.max(target.offset().top, 0) : el.options.targetTop;

			html.add(body).animate({scrollTop: target_top}, Math.abs(scroll_top - target_top) / el.options.speedCoefficient);

			if (el.options.preventDefault) {
				event.preventDefault();
			}

		});

		return this;

	};

	/**
	 * Lazy show
	 *
	 * @since 1.0
	 *
	 * @return object
	 */
	$.fn.lazyShow = function(options) {

		var el = this;

		// Options
		switch (typeof options) {

			case 'undefined':
				options = {};
				break;

		}

		el.options = $.extend({}, {

			/**
			 * Force element hide on init
			 *
			 * @since 1.0
			 * @var bool
			 */
			forceHide: false

		}, options);

		// Variables
		var init, refresh, win, items;

		// Window
		win = $(window);

		/**
		 * Initialization
		 *
		 * @since 1.0
		 */
		init = function() {

			var
				win_top    = win.scrollTop(),
				win_height = win.height();

			// Items
			items = el
				.filter(function() {
					var item = $(this);
					return el.options.forceHide || item.offset().top > win_top + win_height;
				})
				.addClass('lazy-show-hidden');

			// Events
			el.imagesLoaded(function() {

				win.on('scroll resize', refresh);

				refresh();

			});

		};

		/**
		 * Refresh
		 *
		 * @since 1.0
		 */
		refresh = function() {

			var
				win_top    = win.scrollTop(),
				win_height = win.height();

			items
				.filter('.lazy-show-hidden')
				.filter(function() {
					return $(this).offset().top <= win_top + win_height;
				})
				.removeClass('lazy-show-hidden')
				.addClass('lazy-show-visible');

		};

		// Initialization
		init();

		return this;

	};

	/**
	 * Countdown timer
	 *
	 * @since 1.0
	 *
	 * @return object
	 */
	$.fn.countdown = function() {

		var el = this;

		// Variables
		var init, refresh, items;

		/**
		 * Initialization
		 *
		 * @since 1.0
		 */
		init = function() {

			// Items
			items = el
				.filter(function() {
					return ['object', 'number', 'string'].indexOf(typeof $(this).data('countdown-date')) >= 0;
				})
				.each(function() {

					var
						item = $(this),
						date = item.data('countdown-date');

					switch (typeof date) {
						case 'number':
							date *= 1000;
						case 'string':
							date = new Date(date);
							break;
					}

					item.data('countdown-date', date);

				});

			// Inner container
			items
				.filter(':not(:has(span))')
				.wrapInner('<span />');

			// Refresh timer
			setInterval(refresh, 1000);

		};

		/**
		 * Refresh
		 *
		 * @since 1.0
		 */
		refresh = function() {

			items.each(function() {

				var
					item = $(this),
					date = item.data('countdown-date');

				var delta = Math.round((date.getTime() - (new Date).getTime()) / 1000);
				if (delta < 1) {
					delta = 0;
				}

				var time_diff = {};

				time_diff.days    = ~~(delta / 86400);
				time_diff.hours   = ~~((delta - time_diff.days*86400) / 3600);
				time_diff.minutes = ~~((delta - time_diff.days*86400 - time_diff.hours*3600) / 60);
				time_diff.seconds = delta % 60;

				if (time_diff.days == 0) {
					delete time_diff.days;
				}

				time_diff = Object.keys(time_diff).map(function(i) {
					return time_diff[i] < 10 ? '0' + time_diff[i] : time_diff[i];
				});

				$('span', item).text(time_diff.join(time_diff.length > 3 ? ':' : ' : '));

			});

		};

		// Initialization
		init();

		return this;

	};

	/**
	 * Bricks
	 *
	 * @since 1.0
	 *
	 * @param  object options
	 * @param  mixed  param
	 * @return object
	 */
	$.fn.bricks = function(options, param) {

		var el = this;

		// No elements
		if (el.length == 0) {
			return this;
		}

		// Multiple elements
		if (el.length > 1) {
			return el.each(function() {
				$(this).bricks(options);
			});
		}

		// Options
		switch (typeof options) {

			case 'string':
				var el = el.data('bricks');
				if (typeof el == 'undefined') {
					return this;
				}
				return typeof el[options] == 'function' ? el[options](param) : el[options];

			case 'undefined':
				options = {};
				break;

		}

		el.options = $.extend({}, {

			/**
			 * Generate filter
			 *
			 * @since 1.0
			 * @var bool
			 */
			filter: false,

			/**
			 * Columns
			 *
			 * @since 1.0
			 * @var int
			 */
			columns: 4,

			/**
			 * Column minimum width
			 *
			 * @since 1.0
			 * @var int
			 */
			minWidth: 600/4,

			/**
			 * Optimize required space
			 *
			 * @since 1.0
			 * @var bool
			 */
			optimizeSpace: false,

			/**
			 * Refresh during loading progress
			 *
			 * @since 1.4
			 * @var bool
			 */
			refreshProgress: false,

			/**
			 * Precise mode
			 *
			 * @since 1.0
			 * @var bool
			 */
			precise: true,

		}, options);

		// Pointer
		el.data('bricks', el);

		// Variables
		var init, filter, items, item, last_width, last_heights;

		/**
		 * Initialization
		 *
		 * @since 1.0
		 */
		init = function() {

			last_width   = 0;
			last_heights = [];

			items = $('<div />', {class: 'bricks-items'});
			item  = $('> *', el);

			el.addClass('bricks');

			// Filter
			if (el.options.filter) {

				filter = $('<div />', {class: 'bricks-filter'});

				var on_term_click = function() {
					var button = $(this);
					var term   = button.attr('href').substring(1);
					el.filter(term == '__all' ? false : term);
					button
						.addClass('active')
						.siblings().removeClass('active');
				};

				$.each(el.getTerms(), function(index, term) {
					$('<a />', {href: '#'+term})
						.text(term)
						.click(on_term_click)
						.appendTo(filter);
				});

				if ($('> *', filter).length > 0) {
					$('<a />', {href: '#__all', class: 'active'})
						.text($.fn.bricks.i18n.all)
						.click(on_term_click)
						.prependTo(filter);
					filter.appendTo(el);
				}

			}

			// Items
			items.appendTo(el);

			// Item
			item
				.addClass('bricks-item')
				.appendTo(items);

			el.imagesLoaded()
				.progress(function() {

					if (el.options.refreshProgress) {
						el.addClass('ready');
						el.refresh();
					}

				})
				.always(function() {

					el.addClass('ready');
					el.refresh();

					// Events
					$(window).resize(function() {

						var width = items.width();

						if (width != last_width) {
							el.refresh();
							last_width = width;
						}

					});

					new ResizeSensor(item, el.refresh);

				});

		};

		/**
		 * Refresh layout
		 *
		 * @since 1.0
		 *
		 * @return object
		 */
		el.refresh = function() {

			if (!el.hasClass('ready')) {
				return el;
			}

			var
				columns   = Math.max(Math.min(el.options.columns, Math.floor(items.width() / el.options.minWidth)), 1),
				col_width = 100 / columns,

				heights   = [],
				optimize  = el.options.optimizeSpace && columns > 1,
				stack     = Array.apply(null, Array(columns)).map(Number.prototype.valueOf, 0),
				sort_key  = optimize ? 'bricks-height' : 'bricks-index',

				_item     = item.filter(':not(.hidden)');

			_item.each(function() {

				var
					item = $(this),
					height;

				// Width, height
				item.css('width', col_width+'%');

				height = el.options.precise ? item[0].getBoundingClientRect().height : item.outerHeight();
				heights.push(height);

				// Data
				item.data({
					'bricks-index':  -item.index(),
					'bricks-height': height
				});

			});

			// No heights change
			if (heights.length == last_heights.length && heights.every(function(n, index) { return n === last_heights[index]; })) {
				return el;
			}

			last_heights = heights;

			// Rearranging
			$.extend({}, _item)
				.sort(function(a, b) {
					return $(b).data(sort_key) - $(a).data(sort_key);
				})
				.each(function() {

					var
						item = $(this),
						col  = stack.indexOf(Math.min.apply(null, stack));

					item.data('bricks-col', col);
					stack[col] += item.data('bricks-height');

				});

			if (optimize) {

				var i = 0;

				do {

					var
						col_min     = stack.indexOf(Math.min.apply(null, stack)),
						col_max     = stack.indexOf(Math.max.apply(null, stack)),
						height_diff = stack[col_max] - stack[col_min],
						match       = null,

						_item_min   = _item.filter(function() {
							return $(this).data('bricks-col') == col_min;
						}),
						_item_max   = _item.filter(function() {
							return $(this).data('bricks-col') == col_max;
						});

					_item_max.each(function() {

						var item_max = $(this);

						_item_min.each(function() {

							var
								item_min = $(this),
								diff     = item_max.data('bricks-height') - item_min.data('bricks-height');

							if (diff > 0 && diff < height_diff) {

								var dist = Math.abs(height_diff / 2 - diff);

								if (match === null || dist < match.dist) {
									match = {
										dist:     dist,
										diff:     diff,
										item_min: item_min,
										item_max: item_max
									};
								}

							}

						});

					});

					if (match === null) {
						break;
					}

					match.item_min.data('bricks-col', col_max);
					match.item_max.data('bricks-col', col_min);
					stack[col_min] += match.diff;
					stack[col_max] -= match.diff;

				} while (++i < columns);

			}

			stack = stack.map(Number.prototype.valueOf, 0);

			// Setting positions
			_item.each(function() {

				var
					item = $(this),
					col  = item.data('bricks-col');

				item.css({
					top:   stack[col],
					left:  col_width*col+'%'
				});

				stack[col] += item.data('bricks-height');

			});

			// Container height
			items.css('height', Math.ceil(Math.max.apply(null, stack)));

			return el;

		};

		/**
		 * Filter items
		 *
		 * @since 1.0
		 *
		 * @param  string term
		 * @return object
		 */
		el.filter = function(term) {

			item.each(function() {
				var
					item  = $(this),
					terms = item.data('bricks-terms');
				item.toggleClass('hidden', term && (typeof terms == 'undefined' || terms.indexOf(term) == -1));
			});

			el.refresh();

			return el;

		};

		/**
		 * Get available terms
		 *
		 * @since 1.0
		 *
		 * @return array
		 */
		el.getTerms = function() {

			var terms = [];

			item.each(function() {
				var _terms = $(this).data('bricks-terms');
				if (typeof _terms != 'undefined') {
					$.merge(terms, $.grep(_terms, function(term) {
						return terms.indexOf(term) == -1;
					}));
				}
			});

			terms.sort();

			return terms;

		};

		// Initialization
		init();

		return this;

	};

	/**
	 * Bricks internationalization strings
	 *
	 * @since 1.6
	 * @type array
	 */
	$.fn.bricks.i18n = {
		all: 'All'
	};

	/**
	 * Slideshow
	 *
	 * @since 1.0
	 *
	 * @param  object options
	 * @return object
	 */
	$.fn.slideshow = function(options) {

		var el = this;

		// No elements
		if (el.length == 0) {
			return this;
		}

		// Multiple elements
		if (el.length > 1) {
			return el.each(function() {
				$(this).slideshow(options);
			});
		}

		// Options
		switch (typeof options) {

			case 'string':
				var el = el.data('slideshow');
				if (typeof el == 'undefined') {
					return this;
				}
				return typeof el[options] == 'function' ? el[options]() : el[options];

			case 'undefined':
				options = {};
				break;

		}

		el.options = $.extend({}, {

			/**
			 * Interval
			 *
			 * @since 1.0
			 * @var int
			 */
			interval: 2

		}, options);

		// Pointer
		el.data('slideshow', el);

		// Variables
		var init, images;

		/**
		 * Initialization
		 *
		 * @since 1.0
		 */
		init = function() {

			images = $('img', el);

			// Active image
			if (images.filter('.active').length == 0) {
				images.eq(0).addClass('active');
			}

			images.imagesLoaded(function() {

				el.addClass('ready');

				// Next slide event
				setInterval(el.nextSlide, Math.max(el.options.interval, 1)*1000);

			});

		};

		/**
		 * Next slide
		 *
		 * @since 1.0
		 *
		 * @return object
		 */
		el.nextSlide = function() {

			var
				active = images.filter('.active'),
				next   = images.eq(active.index() == images.length-1 ? 0 : active.index()+1);

			active.removeClass('active');
			next.addClass('active');

			return el;

		};

		// Initialization
		init();

		return this;

	},

	/**
	 * Broadcast
	 *
	 * @since 1.0
	 *
	 * @param  object options
	 * @return object
	 */
	$.fn.broadcast = function(options) {

		var el = this;

		// No elements
		if (el.length == 0) {
			return this;
		}

		// Multiple elements
		if (el.length > 1) {
			return el.each(function() {
				$(this).broadcast(options);
			});
		}

		// Options
		switch (typeof options) {

			case 'string':
				var el = el.data('broadcast');
				if (typeof el == 'undefined') {
					return this;
				}
				return typeof el[options] == 'function' ? el[options]() : el[options];

			case 'undefined':
				options = {};
				break;

		}

		el.options = $.extend({}, {

			/**
			 * Service URL
			 *
			 * @since 1.0
			 * @var string
			 */
			url: '',

			/**
			 * Interval
			 *
			 * @since 1.0
			 * @var int
			 */
			interval: 30,

			/**
			 * Entries limit
			 *
			 * @since 1.0
			 * @var int
			 */
			limit: 100,

			/**
			 * Initial entry ID
			 *
			 * @since 1.0
			 * @var int
			 */
			id: 0,

			/**
			 * Additional data
			 *
			 * @since 1.0
			 * @var array
			 */
			data: {},

			/**
			 * On update event
			 *
			 * @since 1.0
			 * @var function
			 */
			onUpdate: function(el, data) {},

			/**
			 * On refresh event
			 *
			 * @since 1.0
			 * @var function
			 */
			onRefresh: function(el) {},

			/**
			 * On entry event
			 *
			 * @since 1.0
			 * @var function
			 */
			onEntry: function(el) {}

		}, options);

		// Instances
		if (typeof $.fn.broadcast.instances == 'undefined') {
			$.fn.broadcast.instances = [];
		}
		$.fn.broadcast.instances.push(el);

		// Pointer
		el.data('broadcast', el);

		// Variables
		var init, addEntry, title, page_title, id, unread;

		/**
		 * Add new entry
		 *
		 * @since 1.0
		 *
		 * @param int    timestamp
		 * @param string content
		 */
		addEntry = function(timestamp, content) {

			var
				date       = new Date(timestamp*1000),
				entry      = $('<div />', {class: 'entry hidden'}),
				_timestamp = $('<span />', {class: 'timestamp'}),
				_content   = $('<div />', {class: 'content'});

			// Timestamp
			_timestamp.text($.humanTimeDiff(date));

			// Content
			_content.html(content);

			// Entry
			entry
				.data('broadcast-timestamp', date)
				.append(_timestamp, _content)
				.prependTo(el);

			// Unread count
			unread++;

		};

		/**
		 * Initialization
		 *
		 * @since 1.0
		 */
		init = function() {

			// Page title
			title = $('head title');

			// Settings
			page_title = title.text();
			id         = el.options.id;
			unread     = 0;

			if (el.options.url) {

				// Refresh timer
				setInterval(el.refresh, 1000);

				// Update event
				el.update();

			}

		};

		/**
		 * Update
		 *
		 * @since 1.0
		 *
		 * @return object
		 */
		el.update = function() {

			$.ajax(el.options.url, {

				method: 'POST',
				data: $.extend({
					id:       id,
					interval: el.options.interval,
					limit:    el.options.limit
				}, el.options.data),
				dataType: 'json',

				success: function(data) {

					if (data === null || typeof data.time == 'undefined' || typeof data.entries == 'undefined') {
						return;
					}

					var time_diff = Math.round( (new Date).getTime() / 1000 ) - data.time;

					// Sort
					data.entries.sort(function(a, b) {
						return a.id - b.id;
					});

					// Adding entries
					$.each(data.entries, function(index, entry) {
						id = Math.max(id, entry.id);
						addEntry(entry.timestamp + time_diff, entry.content);
					});

					// Events
					el.options.onUpdate(el, data);
					$(document).trigger('broadcast:update', [el, data]);

				},

				complete: function() {
					setTimeout(el.update, el.options.interval*1000);
				}

			});

			return el;

		};

		/**
		 * Refresh
		 *
		 * @since 1.0
		 *
		 * @return object
		 */
		el.refresh = function() {

			var
				win     = $(window),
				entries = $('.entry', el);

			// Entries time
			entries.each(function() {

				var
					entry     = $(this),
					time_diff = $.humanTimeDiff(entry.data('broadcast-timestamp'));

				$('.timestamp', entry).text(time_diff);

			});

			if (entries.filter('.hidden').length > 0 && document.hasFocus() && el.offset().top+Math.min(el.height(), $.px(400)) > win.scrollTop() && el.offset().top < win.scrollTop()+win.height()) {

				// Show ready entries
				entries.removeClass('hidden');

				// Remove old entries
				entries
					.filter(function(index) { return index >= el.options.limit; })
					.each(function() {
						var entry = $(this);
						entry.addClass('deleted');
						setTimeout(function() {
							entry.remove();
						}, 2000);
					});

				// Events
				el.options.onEntry(el);
				$(document).trigger('broadcast:entry', [el]);

				unread = 0;

			}

			if ($.fn.broadcast.instances.indexOf(el) == 0) {
				title.text(unread > 0 ? '(' + Math.min(unread, el.options.limit) + ') ' + page_title : page_title);
			}

			// Events
			el.options.onRefresh(el);
			$(document).trigger('broadcast:refresh', [el]);

			return el;

		};

		// Initialization
		init();

		return this;

	};

	/**
	 * Twitter
	 *
	 * @since 1.0
	 *
	 * @param  object options
	 * @return object
	 */
	$.fn.twitter = function(options) {

		var el = this;

		// No elements
		if (el.length == 0) {
			return this;
		}

		// Multiple elements
		if (el.length > 1) {
			return el.each(function() {
				$(this).bricks(options);
			});
		}

		// Options
		switch (typeof options) {

			case 'string':
				var el = el.data('twitter');
				if (typeof el == 'undefined') {
					return this;
				}
				return typeof el[options] == 'function' ? el[options]() : el[options];

			case 'undefined':
				options = {};
				break;

		}

		el.options = $.extend({}, {

			/**
			 * Service URL
			 *
			 * @since 1.0
			 * @var string
			 */
			url: '',

			/**
			 * User name
			 *
			 * @since 1.0
			 * @var string
			 */
			username: '',

			/**
			 * Include retweets
			 *
			 * @since 1.0
			 * @var bool
			 */
			includeRetweets: true,

			/**
			 * Exclude replies
			 *
			 * @since 1.0
			 * @var bool
			 */
			excludeReplies: false,

			/**
			 * Number of tweets
			 *
			 * @since 1.0
			 * @var int
			 */
			count: 5,

			/**
			 * Additional data
			 *
			 * @since 1.0
			 * @var array
			 */
			data: {},

			/**
			 * On update event
			 *
			 * @since 1.0
			 * @var function
			 */
			onUpdate: function(el, data) {}

		}, options);

		// Pointer
		el.data('twitter', el);

		// Variables
		var init, list;

		/**
		 * Initialization
		 *
		 * @since 1.0
		 */
		init = function() {

			list = $('<ul />');

			// Tweet list
			list.appendTo(el);

			if (el.options.url && el.options.username) {

				// Update event
				el.update();

			}

		};

		/**
		 * Update
		 *
		 * @since 1.0
		 *
		 * @return object
		 */
		el.update = function() {

			$.ajax(el.options.url, {

				method: 'POST',
				data: $.extend({
					username:         el.options.username,
					include_retweets: el.options.includeRetweets,
					exclude_replies:  el.options.excludeReplies,
					count:            el.options.count
				}, el.options.data),
				dataType: 'json',

				success: function(data) {

					if (data === null || typeof data.tweets == 'undefined') {
						return;
					}

					list.empty();

					// Adding tweets
					$.each(data.tweets, function(index, tweet) {

						var
							li        = $('<li />'),
							timestamp = $('<a />', {class: 'timestamp'}),
							content   = $('<div />', {class: 'content'});

						// Timestamp
						timestamp
							.attr('href', tweet.url)
							.text($.humanTimeDiff(new Date(tweet.date*1000)))
							.appendTo(li);

						// Content
						content
							.html(tweet.html)
							.appendTo(li);

						li.appendTo(list);

					});

					// Events
					el.options.onUpdate(el, data);
					$(document).trigger('twitter:update', [el, data]);

				}

			});

			return el;

		};

		// Initialization
		init();

		return this;

	};

	/**
	 * Post loader
	 *
	 * @since 1.0
	 *
	 * @param  object options
	 * @return object
	 */
	$.fn.postLoader = function(options) {

		var el = this;

		// No elements
		if (el.length == 0) {
			return this;
		}

		// Multiple elements
		if (el.length > 1) {
			return el.each(function() {
				$(this).postLoader(options);
			});
		}

		// Options
		switch (typeof options) {

			case 'string':
				var el = el.data('post-loader');
				if (typeof el == 'undefined') {
					return this;
				}
				return typeof el[options] == 'function' ? el[options]() : el[options];

			case 'undefined':
				options = {};
				break;

		}

		el.options = $.extend({}, {

			/**
			 * Service URL
			 *
			 * @since 1.0
			 * @var string
			 */
			url: '',

			/**
			 * Number of posts
			 *
			 * @since 1.0
			 * @var int
			 */
			count: 10,

			/**
			 * Initial post ID
			 *
			 * @since 1.0
			 * @var int
			 */
			id: 0,

			/**
			 * Additional data
			 *
			 * @since 1.0
			 * @var array
			 */
			data: {},

			/**
			 * On load event
			 *
			 * @since 1.0
			 * @var function
			 */
			onLoad: function(el, data) {}

		}, options);

		// Pointer
		el.data('post-loader', el);

		// Variables
		var init, addPost, win, posts, control, id;

		// Window
		win = $(window);

		/**
		 * Add new post
		 *
		 * @since 1.0
		 *
		 * @param string content
		 */
		addPost = function(content) {

			posts.append(content);

		};

		/**
		 * Initialization
		 *
		 * @since 1.0
		 */
		init = function() {

			posts   = $('<div />', {class: 'post-loader-posts empty'});
			control = $('.post-loader-control', el);

			// Settings
			id = el.options.id;

			// Posts
			posts.prependTo(el);

			// Control
			$('<span />', {class: 'label'})
				.text($.fn.postLoader.i18n.loadMore)
				.appendTo(control);

			$('<span />', {class: 'spinner'})
				.spinner()
				.appendTo(control);

			if (el.options.url) {

				control.click(function() {
					if (!$(this).hasClass('disabled')) {
						el.load();
					}
				});

			}

		};

		/**
		 * Load
		 *
		 * @since 1.0
		 *
		 * @return object
		 */
		el.load = function() {

			control.addClass('disabled');

			$.ajax(el.options.url, {

				method: 'POST',
				data: $.extend({
					id:    id,
					count: el.options.count
				}, el.options.data),
				dataType: 'json',

				success: function(data) {

					if (data === null) {
						return;
					}

					// Data validation
					if (typeof data.posts == 'undefined') {
						control.removeClass('disabled');
						return;
					}

					posts.css('height', posts.height());

					// Sort
					data.posts.sort(function(a, b) {
						return b.id - a.id;
					});

					// Adding posts
					$.each(data.posts, function(index, post) {
						id = Math.min(id, post.id);
						addPost(post.content);
					});

					posts.imagesLoaded(function() {

						var
							last   = $('> :last-child', posts),
							height = last.length > 0 ? last.position().top + last.outerHeight(true) : 0,
							scroll = win.scrollTop();

						if (data.posts.length > 0) {
							posts.removeClass('empty');
						}
						posts.css('height', height);

						win.scrollTop(scroll - 0.1);

						setTimeout(function() {

							if (data.posts.length < el.options.count) {
								el.addClass('no-posts');
							}

							posts.css('height', 'auto');
							control.removeClass('disabled');

						}, 1000);

						// Events
						el.options.onLoad(el, data);
						$(document).trigger('post_loader:load', [el, data]);

					});

				},

				error: function() {
					control.removeClass('disabled');
				}

			});

			return el;

		};

		// Initialization
		init();

		return this;

	};

	/**
	 * Post loader internationalization strings
	 *
	 * @since 1.6
	 * @var array
	 */
	$.fn.postLoader.i18n = {
		loadMore: 'load more'
	};


})(jQuery);