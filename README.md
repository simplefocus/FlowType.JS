# FlowType.JS #

Responsive web typography at its finest: font-size and line-height based on element width.

Check out the [demo site](http://simplefocus.com/flowtype).

## What does FlowType.JS do? ##

Ideally, the most legible typography contains [between 45 and 75 characters per line](http://webtypography.net/Rhythm_and_Proportion/Horizontal_Motion/2.1.2/). This is difficult to accomplish for all screen widths with only CSS media-queries. FlowType.JS eases this difficulty by changing the font-size—and subsequently the line-height—based on a specific element's width. This allows for a perfect character count per line at any screen width.

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

### Font-size and line-height ###

Set your own font-size and line-height using `fontRatio` and `lineRatio` variables.

When setting the font-size using `fontRatio`, increase the value to make the font smaller (and vice verse).

_Note:_ Because each font is different, you will need to "tweak" `fontSize` and "eye ball" your final product to make sure that your character count is within the recommended range.

Line-height (`lineRatio`) is set based on the `fontRatio` size, and defaults to 1.45 (the recommended line-height for maximum legibility).

```javascript
$('body').flowtype({
   fontRatio : 30,
   lineRatio : 1.45
});
```

## Getting Started ##

### Step 1: Set Typography Base ###

Prepare for FlowType.JS by making sure that the typography is flexible. Start with this CSS and make changes as necessary:

```css
body {
   font-size: 18px;
   line-height: 26px;
}
h1,h2,h3,h4,h5,h6,p {
   font-family: inherit;
   font-size: inherit;
}
h1 {
   font-size: 4em;
   line-height: 1em;
}
h2 {
   font-size: 3em;
   line-height: 1em;
}
h3 { etc...
```

_Note:_ Setting a specific font-size and line-height in your CSS file will make sure that your website remains accessible in case your viewer has javascript disabled. These numbers will be overridden as FlowType.JS updates the font-size and line-height numbers inline.

### Step 2: Include FlowType.JS ###

After you have downloaded FlowType.JS, include the `flowtype.jQuery.js` in the head of your HTML document.

### Step 3: Call FlowType.JS ###

To begin the magic, simply call FlowType.JS before the close of your body tag:

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
   fontRatio : 30,
   lineRatio : 1.45
});
```

## FlowType Sass Mixin ##

FlowType is also available as a Sass Mixin. The mixin provides the FlowType functionality using only CSS.

To use the mixin, include the FlowType.scss file into your project and compile using your preferred Sass compiler. You may want to tweak the default settings found in the FlowType.scss file:

```scss
$fontRatio: 35;
$lineRatio: 1.45;
$maxFont: 36;
$minFont: 12;
$maximum: 1000;
$minimum: 1;
```

Then, simply `@include` the mixin into your project:

```scss
body {
  @include flowtype($fontRatio, $lineRatio, $maxFont, $minFont, $maximum, $minimum);
}
```

The mixin will apply all necessary media queries to enable the FlowType functionality.

## Brought to you by... ##

This wonderful piece of magic has been brought to you by the team at [Simple Focus](http://simplefocus.com). Follow Simple Focus on Twitter: [@simplefocus](http://twitter.com/simplefocus).

FlowType.JS is licensed under the MIT License. See the LICENSE.txt file for copy permission.
