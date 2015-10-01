# bangs
Bangs are unopinionated, single-responsibility CSS class selectors with exactly one property and marked with !important. Inspired by Atoms, Tachyons, Gravitons and BEMIT.

## Examples


```html
<style>
  .\!fw_b { font-weight: bold; }
  @media print {
    .\!ff_ss\@p { font-family: sans-serif; }
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

Bang classnames always start with `!`. Yes, that’s valid HTML. (In CSS, the bang must be escaped with a backslash.)

The initials for the property, and property-qualifier if applicable, are concatenated. So margin-left would be `ml`.

Then comes the colon (escaped in CSS), followed by the initials for the value.

Finally, optionally, the at-sign (escaped in CSS) and the initials for the media query.

The initials are below.

### Properties

```
#### Structure                       #### Text
!d    display                        !fs     font-style
!w    width                          !fv     font-variant
!p    padding                        !fw     font-weight
!m    margin                         !fz     font-size
!j    justify-content                !ff     font-family
!o    order                          !tt     text-transform
                                     !ta     text-align
#### Theme                           !lst    list-style-type
!bg     background                   !lsp    list-style-position
!bgc    background-color             !lsi    list-style-image
```

#### Qualifiers

```
a    all
x    horizontal
v    vertical
l    left
r    right
t    top
b    bottom
```

### Values

```
#### All
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
:t     italic            :ca    capitalize        :dz    decimal-leading-zero
:s     small-caps        :uc    uppercase         :ur    upper-roman
:b     bold              :lc    lowercase         :ua    upper-alpha
:ss    sans-serif        :lt    left              :dc    decimal
:sf    serif             :rt    right             :la    lower-alpha
:ms    monospace         :cr    center            :lr    lower-roman
:fy    fantasy           :jf    justify           :lg    lower-greek
:cs    cursive                                    :os    outside
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

Use these classes in HTML only!

Bangs are meant to be used as trumps. Add a bang to an HTML element’s `[class]` attribute to
override its normal behavior (browser-default, base, object, or component styles).
Use them as an alternative to inline styles. Use them when you would say,

> I want this to look just like a \_\_\_\_\_ component except with a different \_\_\_\_\_.

Do not use bangs when building your CSS codebase. They are not meant to be used as
building blocks for making bigger objects/components.

I do *not* recommend using *only* bangs in your markup, as dictated by **Atomic CSS**. This
can be very confusing and can actually hinder development. Use bangs only as exceptions.
