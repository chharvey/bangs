# Bangs Documentation

## Trends
This table describes typical letter usage.
The most frequent instances of the letter correspond with the properties and values described below.
Note that this list is non-normative and non-comprehensive:
these are not the only uses of the letters, and there may be exceptions.

Letter | Typical Usage  | Example Properties | Example Values
------ | -------------- |------------------- | --------------
0      | `initial`      | **none** | *all properties use this value*
a      | all            | [padding, margin]&#x200b;(-all) | **none**
a      | `auto`         | **none** | [left, right, top, bottom, z-index, [justify,align]-[content,items,self], flex, width, margin, column-[count,width], background-size, (box-)overflow]: auto
b      | bottom         | bottom, [margin, padding]-bottom | background-position: bottom; vertical-align: [text-]bottom
b      | background     | background-[image, position, size, repeat, attachment, origin, clip, color] | **none**
c      | color          | [border-, background-]color | [border-, background-]color: currentColor
c      | content        | [justify, align]-content | flex: content; [box-sizing, background-[origin, clip]]: content(-box)
c      | column         | grid-template-columns, grid-column-gap, column-[count, width] | flex-direction: column[-reverse]
c      | center         | **none** | [[justify, align]-[content,items,self], text-align, background-position]: center; vertical-align: middle (center)
f      | font           | font-[style, variant, weight, size, family] | **none**
g      | grid           | grid-template-[rows, columns], grid-[row, column]-gap | display: grid (gd)
h      | 0.5 (half)     | **none** | [flex,opacity]: 0.5; [margin,padding]-vertical: 0.5vru; [margin,padding]-horizontal: 0.5rem
h      | hidden         | **none** | [overflow,border-style,visibility]: hidden
i      | `inherit`      | **none** | *all properties use this value*
k      | box            | box-[sizing, shadow], (box-)overflow | **none**
l      | left           | left, [margin, padding]-left | [float, clear, text-align, background-position]: left
m      | margin         | margin | **none**
n      | `normal`       | **none** | [font-[style, variant, weight], line-height, letter-spacing, word-spacing, white-space, overflow-wrap]: normal
n      | `none`         | **none** | [display, float, clear, border-style, background-image, box-shadow, text-[transform,decoration,shadow], list-style-[type,image]]: none
o      | overflow       | [(box-), text-]overflow, overflow-wrap | **none**
p      | padding        | padding |  background-[origin, clip]: padding(-box)
r      | border         | border-[style, color] | [box-sizing, background-[origin, clip]]: border(-box)
r      | right          | right, [margin, padding]-right | [float, clear, text-align, background-position]: right
c      | row            | grid-template-rows, grid-row-gap | flex-direction: row[-reverse]
t      | top            | top, [margin, padding]-top | background-position: top; vertical-align: [text-]top
t      | text           | text-[align, indent, transform, decoration, shadow, overflow] | vertical-align: text-[top, bottom]
u      | `unset`        | **none** | *all properties use this value*
w      | width          | width, column-width | **none**
w      | wrap           | [flex, overflow]-wrap | flex-wrap: [nowrap, wrap, wrap-reverse]; white-space: [nowrap, pre-wrap]
x      | flex           | flex[-direction, -wrap] | flex-[start, end]
x      | clip           | background-clip | text-overflow: clip
z      | size           | box-sizing, font-size, background-size | **none**
z      | 0              | **none** | [left, right, top, bottom, z-index, order, width, margin, padding, font-size, line-height, letter-spacing, word-spacing, text-indent, opacity]: 0

## Value Constants

For [all properties](PROPERTIES.md),

the suffix | stands for a written value of
---------- | -----------------------------
`-i`       | `inherit` (available for all properties)
`-0`       | `initial` (available for all properties)<sup>&lowast;</sup>
`-u`       | `unset`   (**reserved; not supported yet**)
`-n`       | `normal` or `none`, if applicable<sup>&dagger;</sup>
`-a`       | `auto`, if applicable
`-z`       | `0`, if applicable

Every property has support for the values `initial` and `inherit`. Therefore each set of classes
has bangs that use the corresponding suffixes.
For example, the classes `.-d-0` and `.-d-i` have `display: initial;` and `display: inherit;` respectively.
These classes and such classes for all properties are not listed for brevity.

Note that due to currently narrow support for the value `initial`, every class `-0` has a fallback,
which corresponds to the CSS-specified initial value for that property.
For example `.-d-0` is defined as `{display: inline; display: initial;}` because
`inline` is the CSS-specified initial value for `display`.

### Footnotes

<sup>&lowast;</sup>The suffix for the value `initial` might be a little misleading, because the
initial value of a property
is not always `0`. Remember that `-0` stands for whatever **specified value** to which `initial` is mapped,
and `-z`, if available, results in a specified value of `0`.
In some cases, these may be the same, like for `margin`. Here are some more examples:

- Since `0` is the initial value for `padding`, both `-0` and `-z` result in a specified value of `0`.
- Since `auto` is the initial value for `width`, both `-0` and `-a` result in a specified value of `auto`,
  while `-z` results in a specified value of `0` (which may or may not be the computed value of `auto`).
- Since `normal` is the initial value for `font-style`, both `-0` and `-n` result in a specified value of `normal`.
  As `auto` and `0` are not allowed as values of `font-style`, the `-a` and `-z` suffixes are not available.

<sup>&dagger;</sup>As far as I know, no properties have both `normal` and `none` as allowed values.
Until that point, `-n` will stand for the appropriate one. If, at some point in the future, some
property does have both values, I will then need to adjust the syntax.

## Extensions: Media Queries, Hover, Focus

By default, all bangs work in all media types. Additionally, each bang supports the
`screen` and `print` media queries.
Even further, there are more sets of classes that provide support for
additional media queries and hover/focus, and these are mentioned on a per-property basis below
and on [the full list](PROPERTIES.md) (with the keyword `true`).

appendage    | meaning                                            | property support
---------    | -------                                            | ----------------
no appendage | all media queries                                  | all properties
`-s`         | `@media screen`                                    | all properties
`-p`         | `@media print`                                     | all properties
`-sK`        | `@media screen  and (min-width: 30em)` (small+)    | display, order, flex, width, margin, padding
`-sM`        | `@media screen  and (min-width: 45em)` (medium+)   | display, order, flex, width, margin, padding
`-sG`        | `@media screen  and (min-width: 60em)` (large+)    | display, order, flex, width, margin, padding
`-sT`        | `@media screen  and (min-width: 75em)` (x-large+)  | display, order, flex, width, margin, padding
`-sP`        | `@media screen  and (min-width: 90em)` (xx-large+) | none so far
`-nK`        | `@media not all and (min-width: 30em)` (x-small-)  | display
`-nM`        | `@media not all and (min-width: 45em)` (small-)    | display
`-nG`        | `@media not all and (min-width: 60em)` (medium-)   | display
`-nT`        | `@media not all and (min-width: 75em)` (large-)    | display
`-nP`        | `@media not all and (min-width: 90em)` (x-large-)  | none so far
`-h`         | pseudo-classes `:hover` and `:focus`               | font-[style&#x007c;variant&#x007c;weight], background-color, opacity, color, text-[transform&#x007c;decoration]

## Examples

```html
<style>
  @media screen and (min-width: 60em) {
    .-d-ib-sG { display: inline-block !important; }
  }
  .-bc-b-h:hover { background-color: #000000 !important; }
</style>
<p class="-d-ib-sG">Displays as inline-block for large screen sizes.</p>
<p class="-bc-b-h">Black background on hover.</p>
```
