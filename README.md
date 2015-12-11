# bangs
Bangs are unopinionated, single-responsibility CSS class selectors marked with !important.
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
!prop:val
```

1. Bang classnames always start with `!`.
  Yes, that’s valid HTML. (In CSS, the bang—i.e., exclamation point—must be escaped with a backslash.)
2. The initials for the property, and property-qualifier if applicable, are concatenated.
3. Then comes the colon (escaped in CSS), followed by the initials for the value.
4. Optionally, append an at-sign (escaped in CSS) for media queries
  ```
  !prop:val@media
  ```
  or a carat (escaped in CSS) for hover/focus-only styles (only available for some properties).
  ```
  !prop:val^
  ```

See each source file for specific abbreviations.

### Constants
In the classname syntax, there exist certain constants to promote predicability and readability.
For all properties,

- the suffix `:i` stands for a written value of `inherit`
- the suffix `:0` stands for a written value of `initial`<sup>&lowast;</sup>
- the suffix `:n` stands for a written value of `normal` or `none`, if applicable
- the suffix `:a` stands for a written value of `auto`, if applicable
- the suffix `:z` stands for a written value of `0`,<sup>&lowast;</sup> if applicable

#### Initial and Specified Values

<sup>&lowast;</sup>If the initial value of a property is `0`, then using both suffixes `:0` and `:z` results in the same **specified value**. Else, `:0` results in whatever specified value to which `initial` is mapped, and `:z` results in a specified value of `0`. Some examples:

- Since `0` is the initial value for `padding`, both `:0` and `:z` result in a specified value of `0`.
- Since `auto` is the initial value for `width`, both `:0` and `:a` result in a specified value of `auto`.
- Since `normal` is the initial value for `font-style`, both `:0` and `:n` result in a specified value of `normal`.

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
