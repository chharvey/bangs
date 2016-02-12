# bangs
Bangs are unopinionated, single-responsibility CSS class selectors marked with `!important`.
Inspired by
[Atoms](http://acss.io/),
[Tachyons](http://tachyons.io/),
[Gravitons](http://jxnblk.com/gravitons/), and
[BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/).

## Examples

```html
<style>
  .-fw-b { font-weight: bold !important; }
  @media print {
    .-ff-ss-p { font-family: sans-serif !important; }
  }
  .-td-u-h:hover { text-decoration: underline !important; }
</style>
<p class="-fw-b">friends with benefits</p>
<p class="-ff-ss-p">fast forward slightly slower please</p>
<p class="-td-u-h">tabulate data units</p>
```

## Usage

Use bang classes when you would say,

> I want this to look just like a \_\_\_\_\_ component except with a different \_\_\_\_\_.

Bangs are very specific classes used for creating anomalies or fixing broken styles.
They are the end-all-be-all rules that always win, no matter what.
Add a bang to an HTML element’s `[class]` attribute
when you need a quick fix, override, or when you simply need to style it differently for
no logical reason at all. Think of them as alternatives to inline styles.

### Why Not Inline Styles?

- Inline styles are way more specific (even more than `!important`) and thus harder to override.
- Inline styles are much more verbose. Would you rather write
  `style="font-weight: bold !important;"` or `class="-fw-b"`?
  In fact, most likely, the `class` attribute is already present, so you’re really just adding one more class.
  Also, bangs become especially helpful for when you need fallbacks and multiple browser vendor prefixes.
- Inline styles can’t be applied in media queries. `class="-ff-ss-p"` says,
  “font-family sans-serif on print only.”
- Inline styles don’t have pseudo-classes. `class="-td-u-h"` says,
  “text-decoration underline on hover only.”

### Use Bangs in Markup Only!

If you use a CSS preprocessor, do *not* use bangs when building your CSS codebase. Unlike classes in the
[Atomic CSS](http://acss.io/) paradigm, bangs are not designed to be building blocks for
making bigger objects/components. Bangs are very specific, localized, and explicit. So rather than
living at the foundation of your codebase, they’re right there at the very tippy top.

Bangs should be applied last, after all your other stylesheets, whether you’re using
`<link rel="stylesheet" href="bangs.css"/>` in your HTML or `@import url('bangs.css');` in your CSS.
Use bang classes in the HTML `[class]` attribute only.

Now, there is some debate as to whether you should use *only* bangs in your markup and
no other classes at all. You can read my philosophical thoughts about this
[here] (link pending).

## Syntax

In general, the syntax of a bang classname looks like this:
```
-‹prop›-‹val›[-‹mq› | -h]?
```
Where:
1. The ~~*bang*, i.e., exclamation point,~~ hyphen indicates this class is a Bang and belongs to this stylesheet.
2. `‹prop›` is the initials for the property name, followed by a hyphen.
3. `‹val›` is the initials for the property value.
4. Optionally, either:
  - append `-‹mq›` (media query abbr), or
  - append `-h` for hover/focus-only styles.

### More Examples

```html
<style>
  @media screen and (min-width: 60em) {
    .-d-ib-sG { display: inline-block !important; }
  }
  .-bi-n-h:hover { background-image: none !important; }
</style>
<p class="-d-ib-sG">Displays as inline-block for large screen sizes.</p>
<p class="-bi-n-h">Has no background image on hover.</p>
```

### Value Constants
In the classname syntax, there exist certain constants to promote predicability and readability.
For all properties,

the suffix | stands for a written value of
---------- | -----------------------------
`-i`       | `inherit`
`-0`       | `initial`<sup>&lowast;</sup>
`-n`       | `normal` or `none`, if applicable<sup>&dagger;</sup>
`-a`       | `auto`, if applicable
`-z`       | `0`, if applicable

#### Footnotes

<sup>&lowast;</sup>This might be a little confusing, because the initial value of a property
is not always `0`. Remember that `-0` stands for whatever **specified value** to which `initial` is mapped,
and `-z`, if available, results in a specified value of `0`.
In some cases, these may be the same, like for `margin`. Here are some more examples:

- Since `0` is the initial value for `padding`, both `-0` and `-z` result in a specified value of `0`.
- Since `auto` is the initial value for `width`, both `-0` and `-a` result in a specified value of `auto`,
  while `-z` results in a specified value of `0`.
- Since `normal` is the initial value for `font-style`, both `-0` and `-n` result in a specified value of `normal`,
  and since `auto` and `0` are not allowed as values of `font-style`, the `-a` and `-z` suffixes are not available.

<sup>&dagger;</sup>As far as I know, no properties have both `normal` and `none` as allowed values.
Until that point, `-n` will stand for the appropriate one. If at some point in the future some
property does have both values, I will need to adjust the syntax.

### Media Queries

appendage      | media query
---------      | -----
‹no appendage› |      all media queries (screen, print, etc.)
`-s`           |      all screen sizes
`-sK`          |    small screens and up (greater than 30em/ 480px)
`-sM`          |   medium screens and up (greater than 45em/ 720px)
`-sG`          |    large screens and up (greater than 60em/ 960px)
`-sT`          |  x-large screens and up (greater than 75em/1200px)
`-sP`          | xx-large screens and up (greater than 90em/1440px)
`-p`           |    print

## Developing with Bangs

Feel free to download Bangs and expand or modify it to fit your own needs.

    $ npm install --save-dev bangs

In your CSS, to select *any* element with a bang, use the following selector:
```css
[class^="-"], [class*=" -"] { ... }
```
This will select any element whose `[class]` attribute begins with `-` and/or
contains <code>&nbsp;-</code>, thus effectively selecting any element having any class
beginning with `-`.


This can be very useful if you want to highlight every bang on the page during development.
(Remember to remove it before production.) You could also be more specific and use `"-w-"`,
to highlight only the Width bangs. You can even color-code each type of bang
