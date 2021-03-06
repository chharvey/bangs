# The `flex` Property

## Syntax:

    none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]

### One value:
```
initial            =      0         1        auto
none               =      0         0        auto
auto               =      1         1        auto
content            =      1         1      content
<number>           = <flex-grow>    1         0
<width-percentage> =      1         1    <flex-basis>
```
### Two values:
```
<number> <number>           = <flex-grow>    <flex-shrink>         0
<number> <width-percentage> = <flex-grow>         1           <flex-basis>
```
### Three values:
```
<number> <number> <width-percentage> = <flex-grow>    <flex-shrink>    <flex-basis>
```

## Examples:
(For brevity we will assume `flex-direction: row` and the **main size** refers to `width`.)

### `flex: initial`
Equivalent to `flex: 0 1 auto`.
The item is sized to its `width` value, or its contents if it is not given,
but may shrink if there is not enough space in the container.

### `flex: none`
Equivalent to `flex: 0 0 auto`.
The item is sized to its `width` value, or its contents if it is not given,
and is **fully inflexible** (will neither grow nor shrink).

### `flex: auto`
Equivalent to `flex: 1 1 auto`.
The item is sized to its `width` value, or its contents if it is not given,
but is **fully flexible** (will either grow or shrink, based on the available space in the container).

### `flex: content`
Equivalent to `flex: 1 1 content`.
The item is sized to its contents, but is fully flexible.

### `flex: <number>`
Equivalent to `flex: <flex-grow> 1 0`.
The item is sized as small as possible, but is fully flexible,
and will grow in proportion to its `<flex-grow>` value (as compared to that of other flex items).

#### `flex: 1`
Equivalent to `flex: 1 1 0`.
The item is sized as small as possible, but is fully flexible.

#### `flex: 0` (unitless zero)
Equivalent to `flex: 0 1 0`.
The item is sized as small as possible and is fully inflexible.

### `flex: <width-percentage>`
Equivalent to `flex: 1 1 <flex-basis>`.
The item is sized to the specified `<width-percentage>` value, and is fully flexible.

#### `flex: 0%` (zero with any unit)
Equivalent to `flex: 1 1 0`.
Also equivalent to `flex: 1`.
The item is sized as small as possible, but is fully flexible.
