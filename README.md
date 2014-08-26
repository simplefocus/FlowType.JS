# FlowType.JS #

Responsive web typography at its finest: font-size ~~and line-height~~ based on element width.

Check out the [demo site](http://simplefocus.com/flowtype).

## What does FlowType.JS do? ##

Ideally, the most legible typography contains [between 45 and 75 characters per line](http://webtypography.net/2.1.2). This is difficult to accomplish for all screen widths with only CSS media-queries. FlowType.JS eases this difficulty by changing the font-size ~~and line-height~~ based on a specific element's width. This allows for a perfect character count per line at any screen width.

## Options ##

### Thresholds ###

Set minimum and maximum width thresholds to control the FlowType.JS magic within specific element widths.

In this example, FlowType.JS will stop resizing text once the element width becomes smaller than 500px or larger than 1200px.

```javascript
$('body').flowtype({
   minimum : 500,
   maximum : 1200
});
```

Set minimum and maximum font-size thresholds to control the FlowType.JS magic within specific font sizes.

In this example, FlowType.JS will stop resizing text once the font-size becomes smaller than 12px or larger than 40px.

```javascript
$('body').flowtype({
   minFont : 12,
   maxFont : 40
});
```

### Font-size ###

Set your own font-size using the `fontRatio` variable. When using `fontRatio`, increase the value to make the font smaller (and vice versa).

_Note:_ Because each font is different, you will need to "tweak" `fontSize` and "eye ball" your final product to make sure that your character count is within the recommended range.

~~Line-height (`lineRatio`) is set based on the `fontRatio` size, and defaults to 1.45 (the recommended line-height for maximum legibility).~~ See *line-height* below.

```javascript
$('body').flowtype({
   fontRatio : 30
});
```


### Line-height ###

In v1.0 of FlowType, we made the plugin set a specific line-height in pixels. We received many statements that setting a specific line-height is very dangerous. So, what did we do? We removed support for line-height in v1.1.

What do I do now? It's quite simple: use unitless line-height in your CSS. It will automatically make changes based on the `font size`. Here's an example of what we suggest for `line-height`:

```css
line-height: 1.45;
```


## Getting Started ##

### Step 1: Set Typography Base ###

Prepare for FlowType.JS by making sure that the typography is flexible. Start with this CSS and make changes as necessary:

```css
body {
   font-size: 18px;
}

h1,h2,h3,h4,h5,h6,p {
   line-height: 1.45;
}

h1 { font-size: 4em; }
h2 { font-size: 3em; }
h3 { etc...
```

_Note:_ Setting a specific font-size in your CSS file will make sure that your website remains accessible in case your viewer has JavaScript disabled. These numbers will be overridden as FlowType.JS updates the `font-size` number inline.

### Step 2: Install FlowType.JS ###

- [Download the latest release](https://github.com/simplefocus/FlowType.JS/archive/v1.1.0.zip).
- Clone the repo: `git clone https://github.com/simplefocus/FlowType.JS.git`.
- Install with [Bower](http://bower.io): `bower install Flowtype.js`.

### Step 3: Call FlowType.JS ###

To begin the magic, simply call FlowType.JS before the close of your `body` tag:

```javascript
$('body').flowtype();
```

### Step 4: Make Changes ###

You will most likely want to change the default settings. To do so, simply include these options in your code and tweak away:

```javascript
$('body').flowtype({
   minimum   : 500,
   maximum   : 1200,
   minFont   : 12,
   maxFont   : 40,
   fontRatio : 30
});
```

## Brought to you by... ##

This wonderful piece of magic has been brought to you by the team at [Simple Focus](http://simplefocus.com). Follow Simple Focus on Twitter: [@simplefocus](http://twitter.com/simplefocus).

FlowType.JS is licensed under the MIT License. See the LICENSE.txt file for copy permission.
