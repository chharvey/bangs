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
#### Layout                   #### Font                          #### Text Structure
!d     display                 !fs    font-style                  !ta     text-align
!w     width                   !fv    font-variant                !ws     white-space
!p     padding                 !fw    font-weight                 !pbb    page-break-before
!m     margin                  !fz    font-size                   !pba    page-break-after
!ps    position                !ff    font-family
!f     float
!va    vertical-align

#### Flexbox
!j    justify-content
!o    order

#### Text Style               #### List Style                    #### Cosmetics
!tt    text-transform         !lst    list-style-type            !c      color
!tr    text-rendering         !lsp    list-style-position        !bgc    background-color
!td    text-decoration        !lsi    list-style-image           !bgi    background-image
                                                                 !v      visibility
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

#### Display                #### Width
:bk    block                :1o1    100%        :1o5    20%
:il    inline               :1o2    50%         :2o5    40%
:ib    inline-block         :1o3    33%         :3o5    60%
:tb    table                :2o3    66%         :4o5    80%
:tc    table-cell           :1o4    25%         :1o6    16%
:fx    flex                 :3o4    75%         :5o6    83%


#### Padding, Margin        #### `justify-content`
:h    0.5rem                :bt    space-between
:1    1rem                  :ad    space-around
:2    2rem                  :cr    center
:4    4rem                  :st    flex-start
                            :ed    flex-end

#### Font, Text
:t     italic            :lt    left                                        :a     baseline
:s     small-caps        :rt    right                                       :b     bottom
:b     bold              :cr    center                                      :m     middle
:ss    sans-serif        :jf    justify                                     :t     top
:sf    serif                                                                :tb    text-bottom
:ms    monospace         :nw    nowrap                                                     :tt    text-top
:fy    fantasy           :pr    pre                                                        :sb    sub
:cs    cursive           :pw    pre-wrap                                                   :st    super
x                        :pl    pre-line                                                          







:ca    capitalize
:uc    uppercase
:lc    lowercase

:u    underline   
:o    overline    
:s    line-through








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

#### Cosmetics

##### Colors
:t    transparent
:c    currentColor

##### Visibility
:v    visible
:h    hidden
:c    collapse
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
