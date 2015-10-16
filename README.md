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
  .\!td\:u\^:hover { text-decoration: underline; }
</style>
<p class="!fw:b"> friends with benefits </p>
<p class="!ff:ss@p"> fast forward slightly slower please </p>
<p class="!td:u^"> tabulate data units </p>
```

## Syntax

The syntax of a bang classame goes like this:
```
!propqual:val
```

1. Bang classnames always start with `!`.
  Yes, that’s valid HTML. (In CSS, the bang—i.e., exclamation point—must be escaped with a backslash.)
2. The initials for the property, and property-qualifier if applicable, are concatenated.
3. Then comes the colon (escaped in CSS), followed by the initials for the value.
4. Optionally, append an at-sign (escaped in CSS) for media queries
  ```
  !propqual:val@media
  ```
  or a carat (escaped in CSS) for hover/focus-only styles (only available for some properties).
  ```
  !propqual:val^
  ```

See each source file for specific abbreviations.

### Constants
In the classname syntax, there exist certain constants to promote predicability and readability.
For all properties,

- a value of `:i` stands for `inherit`
- a value of `:0` stands for `initial` or `0`<sup>&lowast;</sup>
- a value of `:n` stands for `normal` or `none`, if applicable
- a value of `:a` stands for `auto`, if applicable

<i><sup>&lowast;</sup>There are some cases of conflict, that is, `initial` maps to a numeric value not equal to `0`. In these cases, `:0` stands for `initial`, and another abbreviation, such as `:z`, is assigned the value `0`.</i>

## Usage

Add a bang to an HTML element’s `[class]` attribute to override its “normal” behavior.
Think of it as an alternative to inline styles.

Use them when you would say,

> I want this to look just like a \_\_\_\_\_ component except with a different \_\_\_\_\_.

Bangs are meant to be used as trumps or fixes. Use them in HTML only!
Do not use bangs when building your CSS codebase. They are not meant to be used as
building blocks for making bigger objects/components.

Furthermore, I do *not* recommend using *only* bangs in your markup, as dictated by
[Atomic CSS](http://acss.io/). This can be very confusing and can actually hinder development. You should
use classes with styles that correspond to actual objects and components.
Use bangs only as exceptions, not the norm.

Bangs are very specific, localized, and explicit. They should be applied last,
whether you’re using `<link href="bangs.css"/>` in your HTML or
`@import url('bangs.css');` in your CSS.
