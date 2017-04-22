# Bangs!
Bangs! are unopinionated, single-responsibility CSS class selectors marked with `!important`.
Inspired by
[Atoms](http://acss.io/),
[Tachyons](http://tachyons.io/),
[Gravitons](http://jxnblk.com/gravitons/), and
[BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/).

## !IMPORTANT

(see what I did there? but seriously, this is important so please read.)

Bangs! is currently in its initial stages of development, hence the
[0.y.z version number](http://semver.org/). You may use/reference this repository in your own development environment,
but be aware that it is not stable and any major or minor parts may change without warning at any time.
Using Bangs! in production code is not at all recommended until Version 1.0.

## Examples

```html
<style>
  .-fw-b { font-weight: bold !important; }
  @media print {
    .-ff-ss-p { font-family: sans-serif !important; }
  }
  .-td-ul-h:hover { text-decoration: underline !important; }
</style>
<p class="-fw-b">friends with benefits</p>
<p class="-ff-ss-p">fast forward slightly slower please</p>
<p class="-td-ul-h">tabulate data using large hyphens</p>
```

## Usage

Use a bang class when you would say,

> I want this to look just like a \_\_\_\_\_ component except with a different \_\_\_\_\_.

Bang classes are very specific classes used for creating anomalies or fixing broken styles.
They are the end-all-be-all rules that always win, no matter what.
Add a bang to an HTML element’s `[class]` attribute
when you need a quick fix, override, or when you simply need to style it differently for
no logical reason at all. Think of them as alternatives to inline styles.

### Why Not Inline Styles?

- <del>Inline styles are way more specific than class selectors and thus harder to override.</del> <ins>Each bang class has `!important` though, which trumps inline specificity so never mind.</ins>
- Inline styles are much more verbose. Would you rather write
  `style="font-weight: bold !important;"` or `class="-fw-b"`?
  In fact, most likely, the `class` attribute is already present, so you’re really just adding one more class.
- External stylesheets like `bangs.css` can be cached, whereas the data from inline styles is
  re-downloaded each time the user loads a page.
- Some bangs provide fallbacks and multiple browser vendor prefixes (such as `initial` and `box-sizing` respectively).
- Inline styles can’t be applied in media queries. `class="-ff-ss-p"` says,
  “font-family sans-serif on print only.”
- Inline styles don’t have pseudo-classes. `class="-td-ul-h"` says,
  “text-decoration underline on hover only.”

### Use Bangs in Markup Only!

If you use a CSS preprocessor, do *not* use bangs when building your CSS codebase. Unlike classes in the
[Atomic CSS](http://acss.io/) paradigm, bangs are not designed to be building blocks for
making bigger objects/components. Bangs are very specific, localized, and explicit. So rather than
living at the foundation of your codebase, they’re right there at the very tippy top.

Bangs! should be applied last, after all your other stylesheets, whether you’re using
`<link rel="stylesheet" href="bangs.css"/>` in your HTML or `@import url('bangs.css');` in your CSS.
Use bang classes in the HTML `[class]` attribute only.

Now, there is some debate as to whether you should use *only* bangs in your markup and
no other classes at all. You can read my philosophical thoughts about this
[here (link pending)].

## Using Bangs! on Your Own Site
Locally
```
$ npm install bangs
```
```html
<link rel="stylesheet" href="/node_modules/bangs/bangs[.min].css"/>
```
Remotely (from a CDN; not recommended)
```html
<link rel="stylesheet" href="https://cdn.rawgit.com/chharvey/bangs/‹master›/bangs[.min].css"/>
```
where `‹master›` can be a branch or a tag, and optional `[.min]` is for the minified version.

## Developing with Bangs!

Feel free to download Bangs! and expand or modify it to fit your own needs.

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
to highlight only the Width bangs. You can even color-code each type of bang!
