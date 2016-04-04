# Bangs Documentation

## Value Constants

For [all properties](PROPERTIES.md),

the suffix | stands for a written value of
---------- | -----------------------------
`-i`       | `inherit` (available for all properties)
`-0`       | `initial` (available for all properties)<sup>&lowast;</sup>
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

appendage    | meaning                                           | property support
---------    | -------                                           | ----------------
no appendage | all media queries                                 | all properties
`-s`         | `@media screen`                                   | all properties
`-sK`        | `@media screen and (min-width: 30em)` (small+)    | display, order, width, padding, margin
`-sM`        | `@media screen and (min-width: 45em)` (medium+)   | display, order, width, padding, margin
`-sG`        | `@media screen and (min-width: 60em)` (large+)    | display, order, width, padding, margin
`-sT`        | `@media screen and (min-width: 75em)` (x-large+)  | display, order, width, padding, margin
`-sP`        | `@media screen and (min-width: 90em)` (xx-large+) | none so far
`-p`         | `@media print`                                    | all properties
`-h`         | pseudo-classes `:hover` and `:focus`              | font-[style&#x007c;variant&#x007c;weight], background-color, opacity, text-transform, color

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
