# bangs
Bangs are unopinionated, single-responsibility CSS class selectors with one property and marked with !important.
Inspired by [Atoms](http://acss.io/), [Tachyons](http://tachyons.io/), [Gravitons](http://jxnblk.com/gravitons/), and [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/).

## Examples


```html
<style>
  .\!fw\:b { font-weight: bold; }
  @media print {
    .\!ff\:ss\@p { font-family: sans-serif; }
  }
</style>
<p class="!fw:b">friends with benefits</p>
<p class="!ff:ss@p">fast forward slightly slower please</p>
```

## Syntax

The syntax of a bang classame goes like this:
```
!propqual:val@media
```

1. Bang classnames always start with `!`. Yes, that’s valid HTML. (In CSS, the bang must be escaped with a backslash.)
2. The initials for the property, and property-qualifier if applicable, are concatenated.
3. Then comes the colon (escaped in CSS), followed by the initials for the value.
4. Finally, optionally, the at-sign (escaped in CSS) and the initials for the media query.

### Constants
In the classname syntax, there exist certain constants to promote predicability.
For all properties,

- a value of `:i` stands for `inherit`
- a value of `:0` stands for `initial` or `0`
  (in the case of a conflict, it stands for `initial`, and `0` is assigned another abbreviation)
- a value of `:n`, if it exists, stands for `normal` or `none`
- a value of `:a`, if it exists, stands for `auto`

## Usage

Add a bang to an HTML element’s `[class]` attribute to override its normal behavior
(whether that behavior be defined by the browser or another class’s styles).
Think of them as an alternative to inline styles.

Use them when you would say,

> I want this to look just like a \_\_\_\_\_ component except with a different \_\_\_\_\_.

Bangs are meant to be used as trumps. Use them in HTML only!
Do not use bangs when building your CSS codebase. They are not meant to be used as
building blocks for making bigger objects/components.

At the same time, I do *not* recommend using *only* bangs in your markup, as dictated by
**Atomic CSS**. This can be very confusing and can actually hinder development. You should
use classes with styles that correspond to actual objects and components.
Use bangs only as exceptions, not the norm.
