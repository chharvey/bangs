# bangs
Bangs are unopinionated, single-responsibility CSS class selectors with exactly one property and marked with !important.
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

## Legend

The syntax of a bang classame goes like this:
```
!propqual:val@media
```

1. Bang classnames always start with `!`. Yes, that’s valid HTML. (In CSS, the bang must be escaped with a backslash.)
2. The initials for the property, and property-qualifier if applicable, are concatenated.
3. Then comes the colon (escaped in CSS), followed by the initials for the value.
4. Finally, optionally, the at-sign (escaped in CSS) and the initials for the media query.

### Properties

```
#### Structure               #### Font                          #### Text
!d    display                !fs    font-style                  !tt    text-transform
!w    width                  !fv    font-variant                !ta    text-align
!p    padding                !fw    font-weight                 !td    text-decoration
!m    margin                 !fz    font-size                   !va    vertical-align
!j    justify-content        !ff    font-family                 !ws    white-space
!o    order
                             #### Lists
#### Theme                   !lst    list-style-type
!c      color                !lsp    list-style-position
!bgc    background-color     !lsi    list-style-image
!bgi    background-image     
```

#### Qualifiers

```
l    left
r    right
t    top
b    bottom
x    horizontal
v    vertical
a    all
```

### Values

```
#### All Properties
:0    initial, 0
:i    inherit
:n    none, normal

#### Display
:bk    block               :tb    table
:il    inline              :tc    table-cell
:ib    inline-block        :fx    flex

#### Width
:1o1    100%        :1o5    20%
:1o2    50%         :2o5    40%
:1o3    33%         :3o5    60%
:2o3    66%         :4o5    80%
:1o4    25%         :1o6    16%
:3o4    75%         :5o6    83%

#### Padding, Margin
:h    0.5rem
:1    1rem
:2    2rem
:4    4rem

#### `justify-content`
:bt    space-between
:ad    space-around
:cr    center
:st    flex-start
:ed    flex-end

#### Text
:t     italic            :lt    left              :u    underline           :a     baseline
:s     small-caps        :rt    right             :o    overline            :b     bottom
:b     bold              :cr    center            :s    line-through        :m     middle
:ss    sans-serif        :jf    justify                                     :t     top
:sf    serif                                                                :tb    text-bottom
:ms    monospace         :ca    capitalize                                  :tt    text-top
:fy    fantasy           :uc    uppercase                                   :sb    sub
:cs    cursive           :lc    lowercase                                   :st    super

:nw    nowrap  
:pr    pre     
:pw    pre-wrap
:pl    pre-line

##### Lists
:dz    decimal-leading-zero
:ur    upper-roman
:ua    upper-alpha
:dc    decimal
:la    lower-alpha
:lr    lower-roman
:lg    lower-greek
:os    outside
:is    inside

##### `font-weight`
:1    100        :4    400        :7    700
:2    200        :5    500        :8    800
:3    300        :6    600        :9    900

#### Colors
:t    transparent
:c    currentColor
```

### Media Queries

```
@s    screen
@p    print
```

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
