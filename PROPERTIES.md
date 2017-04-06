# Properties

This file lists information about each property and its supported values.


## Layout

### `display`
```
    , "stability": 2
    , "values": [
        { "name": "none"               , "code": "n"  , "stability": 3 }
        { "name": "contents"           , "code": "c"                   }
      , { "name": "block"              , "code": "b"                   }
      , { "name": "inline"             , "code": "l"                   }
      , { "name": "run-in"             , "code": "r"                   }
      , { "name": "flow"               , "code": "f"                   }
      , { "name": "flow-root"          , "code": "o"                   }
      , { "name": "table"              , "code": "t"  , "stability": 0 }
      , { "name": "flex"               , "code": "x"  ,                 "use": ".flexbox()" }
      , { "name": "grid"               , "code": "g"  ,                 "use": ".grid()"    }
      , { "name": "list-item"          , "code": "s"  , "stability": 3 }
      , { "name": "list-item flow-root", "code": "s_o"                 }
      , { "name": "list-item inline"   , "code": "s_l"                 }

      , { "name": "inline-block"       , "code": "lb" , "stability": 1 }
      , { "name": "inline-list-item"   , "code": "ls" , "stability": 1 }
      , { "name": "inline-table"       , "code": "lt" , "stability": 1 }
      , { "name": "inline-flex"        , "code": "lf" , "stability": 1 }
      , { "name": "inline-grid"        , "code": "lg" , "stability": 1 }

      , { "name": "table-row"          , "code": "tr" , "stability": 0 }
      , { "name": "table-column"       , "code": "tl" , "stability": 0 }
      , { "name": "table-cell"         , "code": "tc" , "stability": 0 }
      , { "name": "table-row-group"    , "code": "trg", "stability": 0 }
      , { "name": "table-header-group" , "code": "thg", "stability": 0 }
      , { "name": "table-footer-group" , "code": "tfg", "stability": 0 }
      , { "name": "table-column-group" , "code": "tlg", "stability": 0 }
      ]

-sK    true
-sM    true
-sG    true
-sT    true

-nK    true
-nM    true
-nG    true
-nT    true
```

### `position`
```
.-ps-s    static
.-ps-r    relative
.-ps-a    absolute
.-ps-f    fixed
.-ps-k    sticky
```

### `left`
```
.-l-a    auto
.-l-z    0
```

### `right`
```
.-r-a    auto
.-r-z    0
```

### `top`
```
.-t-a    auto
.-t-z    0
```

### `bottom`
```
.-b-a    auto
.-b-z    0
```

### `float`
```
.-fl-n    none
.-fl-l    left
.-fl-r    right
```

### `clear`
```
.-cl-n    none
.-cl-l    left
.-cl-r    right
.-cl-b    both
```

### `z-index`
```
.-z-a     auto
.-z-z      0
.-z-1      1
.-z-2      2
.-z-3      3
.-z-4      4
.-z-5      5
.-z-6      6
.-z-7      7
.-z-_1    -1
.-z-_2    -2
.-z-_3    -3
.-z-_4    -4
.-z-_5    -5
.-z-_6    -6
.-z-_7    -7
```

### `vertical-align`
```
.-va-a     baseline
.-va-b     bottom
.-va-c     middle
.-va-t     top
.-va-tb    text-bottom
.-va-tt    text-top
.-va-sb    sub
.-va-sp    super
```

### `flex-direction`
```
.-xd-r     row
.-xd-c     column
.-xd-rr    row-reverse
.-xd-cr    column-reverse
```

### `flex-wrap`
```
.-xw-nw    nowrap
.-xw-wp    wrap
.-xw-wr    wrap-reverse
```

### `justify-content`
```
.-xjc-xs    flex-start
.-xjc-xe    flex-end
.-xjc-c     center
.-xjc-sb    space-between
.-xjc-sa    space-around
```

### `align-content`
```
.-xac-s     stretch
.-xac-xs    flex-start
.-xac-xe    flex-end
.-xac-c     center
.-xac-sb    space-between
.-xac-sa    space-around
```

### `align-items`
```
.-xai-s     stretch
.-xai-xs    flex-start
.-xai-xe    flex-end
.-xai-c     center
.-xai-b     baseline
```

### `align-self`
```
.-xas-a     auto
.-xas-s     stretch
.-xas-xs    flex-start
.-xas-xe    flex-end
.-xas-c     center
.-xas-b     baseline
```

### `order`
```
.-xo-z      0
.-xo-1      1
.-xo-2      2
.-xo-3      3
.-xo-4      4
.-xo-5      5
.-xo-6      6
.-xo-7      7
.-xo-_1    -1
.-xo-_2    -2
.-xo-_3    -3
.-xo-_4    -4
.-xo-_5    -5
.-xo-_6    -6
.-xo-_7    -7

-sK    true
-sM    true
-sG    true
-sT    true
```

### `flex`
```
.-x-a    auto
.-x-c    content
.-x-z    0
.-x-h    0.5
.-x-1    1
.-x-2    2

.-x-1o1      100%
.-x-1o2      50%
.-x-2o2      100%
.-x-1o3      33.3%
.-x-2o3      66.7%
.-x-3o3      100%
.-x-1o4      25%
.-x-2o4      50%
.-x-3o4      75%
.-x-4o4      100%
.-x-1o5      20%
.-x-2o5      40%
.-x-3o5      60%
.-x-4o5      80%
.-x-5o5      100%
.-x-1o6      16.7%
.-x-2o6      33.3%
.-x-3o6      50%
.-x-4o6      66.7%
.-x-5o6      83.3%
.-x-6o6      100%
.-x-1o8      12.5%
.-x-2o8      25%
.-x-3o8      37.5%
.-x-4o8      50%
.-x-5o8      62.5%
.-x-6o8      75%
.-x-7o8      87.5%
.-x-8o8      100%
.-x-1o10     10%
.-x-2o10     20%
.-x-3o10     30%
.-x-4o10     40%
.-x-5o10     50%
.-x-6o10     60%
.-x-7o10     70%
.-x-8o10     80%
.-x-9o10     90%
.-x-10o10    100%

-sK    true
-sM    true
-sG    true
-sT    true
```


## Box Structure

### `box-sizing`
```
.-kz-c    content-box
.-kz-r    border-box
```

### `width`
```
.-w-a    auto
.-w-z    0

.-w-1o1      100%
.-w-1o2      50%
.-w-2o2      100%
.-w-1o3      33.3%
.-w-2o3      66.7%
.-w-3o3      100%
.-w-1o4      25%
.-w-2o4      50%
.-w-3o4      75%
.-w-4o4      100%
.-w-1o5      20%
.-w-2o5      40%
.-w-3o5      60%
.-w-4o5      80%
.-w-5o5      100%
.-w-1o6      16.7%
.-w-2o6      33.3%
.-w-3o6      50%
.-w-4o6      66.7%
.-w-5o6      83.3%
.-w-6o6      100%
.-w-1o8      12.5%
.-w-2o8      25%
.-w-3o8      37.5%
.-w-4o8      50%
.-w-5o8      62.5%
.-w-6o8      75%
.-w-7o8      87.5%
.-w-8o8      100%
.-w-1o10     10%
.-w-2o10     20%
.-w-3o10     30%
.-w-4o10     40%
.-w-5o10     50%
.-w-6o10     60%
.-w-7o10     70%
.-w-8o10     80%
.-w-9o10     90%
.-w-10o10    100%

.-w-96px      96px
.-w-192px     192px
.-w-288px     288px
.-w-384px     384px
.-w-480px     480px
.-w-576px     576px
.-w-672px     672px
.-w-768px     768px
.-w-864px     864px
.-w-960px     960px
.-w-1056px    1056px
.-w-1152px    1152px
.-w-1248px    1248px
.-w-1344px    1344px
.-w-1440px    1440px

.-w-5em     5em
.-w-10em    10em
.-w-15em    15em
.-w-20em    20em
.-w-25em    25em
.-w-30em    30em
.-w-35em    35em
.-w-40em    40em
.-w-45em    45em
.-w-50em    50em
.-w-55em    55em
.-w-60em    60em
.-w-65em    65em
.-w-70em    70em
.-w-75em    75em
.-w-80em    80em
.-w-85em    85em
.-w-90em    90em

-sK    true
-sM    true
-sG    true
-sT    true
```

### `margin-top`, `margin-bottom`, ‘margin-vertical’
```
.-mt  .-mb  .-mv

-a     auto
-z     0
-q     0.25vru
-h     0.5vru
-1     1vru
-2     2vru
-4     4vru
-8     8vru
-g     16vru
-_q    -0.25vru
-_h    -0.5vru
-_1    -1vru
-_2    -2vru
-_4    -4vru
-_8    -8vru
-_g    -16vru

-sK    true
-sM    true
-sG    true
-sT    true
```
(where ‘vru’ is one “vertical rhythm unit,” that is, `var(--vru, 1.5rem)`)
```
  , {
      "name": "margin-vertical"
    , "code": {
        "mt": "margin-top"
      , "mb": "margin-bottom"
      , "mv": "margin-vertical"
      }
    , "summary": "Sets the top, bottom, or top and bottom margin space on an element."
    , "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
    , "inherited": false
    , "initial": "0"
    , "values": [
        { "name" : "inherit"  ,                 "use": { "mv": ".-mt-i ; .-mb-i ;" } }
        { "name" : "initial"  ,                 "use": { "mv": ".-mt-0 ; .-mb-0 ;" } }
        { "name" : "auto"     , "code" : "a"  , "use": { "mv": ".-mt-a ; .-mb-a ;" } }
      , { "name" : "0"        , "code" : "z"  , "use": { "mv": ".-mt-z ; .-mb-z ;" } }
      , { "name" : "0.25vru"  , "code" : "q"  , "use": { "mt": "margin-top: calc(0.25  ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(0.25  ~'*' var(--vru, 1.5rem));", "mv": ".-mt-q ; .-mb-q ;" } }
      , { "name" : "0.5vru"   , "code" : "h"  , "use": { "mt": "margin-top: calc(0.5   ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(0.5   ~'*' var(--vru, 1.5rem));", "mv": ".-mt-h ; .-mb-h ;" } }
      , { "name" : "1vru"     , "code" : "1"  , "use": { "mt": "margin-top: calc(1     ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(1     ~'*' var(--vru, 1.5rem));", "mv": ".-mt-1 ; .-mb-1 ;" } }
      , { "name" : "2vru"     , "code" : "2"  , "use": { "mt": "margin-top: calc(2     ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(2     ~'*' var(--vru, 1.5rem));", "mv": ".-mt-2 ; .-mb-2 ;" } }
      , { "name" : "4vru"     , "code" : "4"  , "use": { "mt": "margin-top: calc(4     ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(4     ~'*' var(--vru, 1.5rem));", "mv": ".-mt-4 ; .-mb-4 ;" } }
      , { "name" : "8vru"     , "code" : "8"  , "use": { "mt": "margin-top: calc(8     ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(8     ~'*' var(--vru, 1.5rem));", "mv": ".-mt-8 ; .-mb-8 ;" } }
      , { "name" : "16vru"    , "code" : "g"  , "use": { "mt": "margin-top: calc(16    ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(16    ~'*' var(--vru, 1.5rem));", "mv": ".-mt-g ; .-mb-g ;" } }
      , { "name" : "-0.25vru" , "code" : "_q" , "use": { "mt": "margin-top: calc(-0.25 ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(-0.25 ~'*' var(--vru, 1.5rem));", "mv": ".-mt-_q; .-mb-_q;" } }
      , { "name" : "-0.5vru"  , "code" : "_h" , "use": { "mt": "margin-top: calc(-0.5  ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(-0.5  ~'*' var(--vru, 1.5rem));", "mv": ".-mt-_h; .-mb-_h;" } }
      , { "name" : "-1vru"    , "code" : "_1" , "use": { "mt": "margin-top: calc(-1    ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(-1    ~'*' var(--vru, 1.5rem));", "mv": ".-mt-_1; .-mb-_1;" } }
      , { "name" : "-2vru"    , "code" : "_2" , "use": { "mt": "margin-top: calc(-2    ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(-2    ~'*' var(--vru, 1.5rem));", "mv": ".-mt-_2; .-mb-_2;" } }
      , { "name" : "-4vru"    , "code" : "_4" , "use": { "mt": "margin-top: calc(-4    ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(-4    ~'*' var(--vru, 1.5rem));", "mv": ".-mt-_4; .-mb-_4;" } }
      , { "name" : "-8vru"    , "code" : "_8" , "use": { "mt": "margin-top: calc(-8    ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(-8    ~'*' var(--vru, 1.5rem));", "mv": ".-mt-_8; .-mb-_8;" } }
      , { "name" : "-16vru"   , "code" : "_g" , "use": { "mt": "margin-top: calc(-16   ~'*' var(--vru, 1.5rem));", "mb": "margin-bottom: calc(-16   ~'*' var(--vru, 1.5rem));", "mv": ".-mt-_g; .-mb-_g;" } }
      ]
    , "media": {
        "screen" : true
      , "print"  : true
      , "small+" : true
      , "medium+": true
      , "large+" : true
      , "xlarge+": true
      }
    }
```

### `margin-left`, `margin-right`, ‘margin-horizontal’
```
.-ml  .-mr  .-mh

-a     auto
-z     0
-q     0.25rem
-h     0.5rem
-1     1rem
-2     2rem
-4     4rem
-8     8rem
-g     16rem
-_q    -0.25rem
-_h    -0.5rem
-_1    -1rem
-_2    -2rem
-_4    -4rem
-_8    -8rem
-_g    -16rem

-sK    true
-sM    true
-sG    true
-sT    true
```
```
  , {
      "name": "margin-horizontal"
    , "code": {
        "ml": "margin-left"
      , "mr": "margin-right"
      , "mh": "margin-horizontal"
      }
    , "summary": "Sets the left, right, or left and right margin space on an element."
    , "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
    , "inherited": false
    , "initial": "0"
    , "values": [
        { "name" : "inherit"  ,                 "use": { "mh": ".-ml-i ; .-mr-i ;" } }
        { "name" : "initial"  ,                 "use": { "mh": ".-ml-0 ; .-mr-0 ;" } }
        { "name" : "auto"     , "code" : "a"  , "use": { "mh": ".-ml-a ; .-mr-a ;" } }
      , { "name" : "0"        , "code" : "z"  , "use": { "mh": ".-ml-z ; .-mr-z ;" } }
      , { "name" : "0.25rem"  , "code" : "q"  , "use": { "mh": ".-ml-q ; .-mr-q ;" } }
      , { "name" : "0.5rem"   , "code" : "h"  , "use": { "mh": ".-ml-h ; .-mr-h ;" } }
      , { "name" : "1rem"     , "code" : "1"  , "use": { "mh": ".-ml-1 ; .-mr-1 ;" } }
      , { "name" : "2rem"     , "code" : "2"  , "use": { "mh": ".-ml-2 ; .-mr-2 ;" } }
      , { "name" : "4rem"     , "code" : "4"  , "use": { "mh": ".-ml-4 ; .-mr-4 ;" } }
      , { "name" : "8rem"     , "code" : "8"  , "use": { "mh": ".-ml-8 ; .-mr-8 ;" } }
      , { "name" : "16rem"    , "code" : "g"  , "use": { "mh": ".-ml-g ; .-mr-g ;" } }
      , { "name" : "-0.25rem" , "code" : "_q" , "use": { "mh": ".-ml-_q; .-mr-_q;" } }
      , { "name" : "-0.5rem"  , "code" : "_h" , "use": { "mh": ".-ml-_h; .-mr-_h;" } }
      , { "name" : "-1rem"    , "code" : "_1" , "use": { "mh": ".-ml-_1; .-mr-_1;" } }
      , { "name" : "-2rem"    , "code" : "_2" , "use": { "mh": ".-ml-_2; .-mr-_2;" } }
      , { "name" : "-4rem"    , "code" : "_4" , "use": { "mh": ".-ml-_4; .-mr-_4;" } }
      , { "name" : "-8rem"    , "code" : "_8" , "use": { "mh": ".-ml-_8; .-mr-_8;" } }
      , { "name" : "-16rem"   , "code" : "_g" , "use": { "mh": ".-ml-_g; .-mr-_g;" } }
      ]
    , "media": {
        "screen" : true
      , "print"  : true
      , "small+" : true
      , "medium+": true
      , "large+" : true
      , "xlarge+": true
      }
    }
```

### `margin`
```
.-ma-a     auto     o
.-ma-z     0        0
.-ma-q     0.25vru  0.25rem
.-ma-h     0.5vru   0.5rem
.-ma-1     1vru     m
.-ma-2     2vru     m
.-ma-4     4vru     m
.-ma-8     8vru     m
.-ma-g     16vru    m
.-ma-_q    -0.25vru -0.25rem
.-ma-_h    -0.5vru  -0.5rem
.-ma-_1    -1vru    -1rem
.-ma-_2    -2vru    -2rem
.-ma-_4    -4vru    -4rem
.-ma-_8    -8vru    -8rem
.-ma-_g    -16vru   -16rem

-sK    true
-sM    true
-sG    true
-sT    true
```
```
  , {
      "name": "margin"
    , "code": "m"
    , "summary": "Sets the margin space on an element."
    , "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
    , "inherited": false
    , "initial": "0"
    , "values": [
        { "name" : "auto", "code" : "a" }
      , { "name" : "0"   , "code" : "z" }
      ]
    , "media": {
        "screen" : true
      , "print"  : true
      , "small+" : true
      , "medium+": true
      , "large+" : true
      , "xlarge+": true
      }
    }
```

### `padding-top`, `padding-bottom`, ‘padding-vertical’
```
.-pt  .-pb  .-pv

-z    0
-q    0.25vru
-h    0.5vru
-1    1vru
-2    2vru
-4    4vru
-8    8vru
-g    16vru

-sK    true
-sM    true
-sG    true
-sT    true
```
(where ‘vru’ is one “vertical rhythm unit,” that is, `var(--vru, 1.5rem)`)
```
  , {
      "name": "padding-vertical"
    , "code": {
        "pt": "padding-top"
      , "pb": "padding-bottom"
      , "pv": "padding-vertical"
      }
    , "summary": "Sets the top, bottom, or top and bottom padding space on an element."
    , "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
    , "inherited": false
    , "initial": "0"
    , "values": [
        { "name" : "inherit"  ,                 "use": { "pv": ".-pt-i; .-pb-i;" } }
        { "name" : "initial"  ,                 "use": { "pv": ".-pt-0; .-pb-0;" } }
      , { "name" : "0"        , "code" : "z"  , "use": { "pv": ".-pt-z; .-pb-z;" } }
      , { "name" : "0.25vru"  , "code" : "q"  , "use": { "pt": "padding-top: calc(0.25 ~'*' var(--vru, 1.5rem));", "pb": "padding-bottom: calc(0.25 ~'*' var(--vru, 1.5rem));", "pv": ".-pt-q; .-pb-q;" } }
      , { "name" : "0.5vru"   , "code" : "h"  , "use": { "pt": "padding-top: calc(0.5  ~'*' var(--vru, 1.5rem));", "pb": "padding-bottom: calc(0.5  ~'*' var(--vru, 1.5rem));", "pv": ".-pt-h; .-pb-h;" } }
      , { "name" : "1vru"     , "code" : "1"  , "use": { "pt": "padding-top: calc(1    ~'*' var(--vru, 1.5rem));", "pb": "padding-bottom: calc(1    ~'*' var(--vru, 1.5rem));", "pv": ".-pt-1; .-pb-1;" } }
      , { "name" : "2vru"     , "code" : "2"  , "use": { "pt": "padding-top: calc(2    ~'*' var(--vru, 1.5rem));", "pb": "padding-bottom: calc(2    ~'*' var(--vru, 1.5rem));", "pv": ".-pt-2; .-pb-2;" } }
      , { "name" : "4vru"     , "code" : "4"  , "use": { "pt": "padding-top: calc(4    ~'*' var(--vru, 1.5rem));", "pb": "padding-bottom: calc(4    ~'*' var(--vru, 1.5rem));", "pv": ".-pt-4; .-pb-4;" } }
      , { "name" : "8vru"     , "code" : "8"  , "use": { "pt": "padding-top: calc(8    ~'*' var(--vru, 1.5rem));", "pb": "padding-bottom: calc(8    ~'*' var(--vru, 1.5rem));", "pv": ".-pt-8; .-pb-8;" } }
      , { "name" : "16vru"    , "code" : "g"  , "use": { "pt": "padding-top: calc(16   ~'*' var(--vru, 1.5rem));", "pb": "padding-bottom: calc(16   ~'*' var(--vru, 1.5rem));", "pv": ".-pt-g; .-pb-g;" } }
      ]
    , "media": {
        "screen" : true
      , "print"  : true
      , "small+" : true
      , "medium+": true
      , "large+" : true
      , "xlarge+": true
      }
    }
```

### `padding-left`, `padding-right`, ‘padding-horizontal’
```
.-pl  .-pr  .-ph

-z    0
-q    0.25rem
-h    0.5rem
-1    1rem
-2    2rem
-4    4rem
-8    8rem
-g    16rem

-sK    true
-sM    true
-sG    true
-sT    true
```
```
  , {
      "name": "padding-horizontal"
    , "code": {
        "pl": "padding-left"
      , "pr": "padding-right"
      , "ph": "padding-horizontal"
      }
    , "summary": "Sets the left, right, or left and right padding space on an element."
    , "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
    , "inherited": false
    , "initial": "0"
    , "values": [
        { "name" : "inherit"  ,                 "use": { "ph": ".-pl-i; .-pr-i;" } }
        { "name" : "initial"  ,                 "use": { "ph": ".-pl-0; .-pr-0;" } }
      , { "name" : "0"        , "code" : "z"  , "use": { "ph": ".-pl-z; .-pr-z;" } }
      , { "name" : "0.25rem"  , "code" : "q"  , "use": { "ph": ".-pl-q; .-pr-q;" } }
      , { "name" : "0.5rem"   , "code" : "h"  , "use": { "ph": ".-pl-h; .-pr-h;" } }
      , { "name" : "1rem"     , "code" : "1"  , "use": { "ph": ".-pl-1; .-pr-1;" } }
      , { "name" : "2rem"     , "code" : "2"  , "use": { "ph": ".-pl-2; .-pr-2;" } }
      , { "name" : "4rem"     , "code" : "4"  , "use": { "ph": ".-pl-4; .-pr-4;" } }
      , { "name" : "8rem"     , "code" : "8"  , "use": { "ph": ".-pl-8; .-pr-8;" } }
      , { "name" : "16rem"    , "code" : "g"  , "use": { "ph": ".-pl-g; .-pr-g;" } }
      ]
    , "media": {
        "screen" : true
      , "print"  : true
      , "small+" : true
      , "medium+": true
      , "large+" : true
      , "xlarge+": true
      }
    }
```

### `padding`
```
.-pa-z    0       0
.-pa-q    0.25vru 0.25rem
.-pa-h    0.5vru  0.5rem
.-pa-1    1vru    1rem
.-pa-2    2vru    2rem
.-pa-4    4vru    4rem
.-pa-8    8vru    8rem
.-pa-g    16vru   16rem

-sK    true
-sM    true
-sG    true
-sT    true
```
```
  , {
      "name": "padding"
    , "code": "p"
    , "summary": "Sets the padding space on an element."
    , "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
    , "inherited": false
    , "initial": "0"
    , "values": [
        { "name" : "0", "code" : "z" }
      ]
    , "media": {
        "screen" : true
      , "print"  : true
      , "small+" : true
      , "medium+": true
      , "large+" : true
      , "xlarge+": true
      }
    }
```


## Text Structure

### `font-style`
```
.-fs-n    normal
.-fs-t    italic

-h        true
```

### `font-variant`
```
.-fv-n    normal
.-fv-s    small-caps

-h        true
```

### `font-weight`
```
.-fw-n      normal
.-fw-b      bold
.-fw-100    100
.-fw-200    200
.-fw-300    300
.-fw-400    400
.-fw-500    500
.-fw-600    600
.-fw-700    700
.-fw-800    800
.-fw-900    900

-h        true
```

### `font-size`
```
.-fz-z    0
```

### `font-family`
```
.-ff-ss    sans-serif
.-ff-sf    serif
.-ff-ms    monospace
.-ff-fy    fantasy
.-ff-cv    cursive
```

### `line-height`
```
.-lh-n    normal
.-lh-z    0
```

### `letter-spacing`
```
.-ls-n    normal
.-ls-z    0
```

### `word-spacing`
```
.-ws-n    normal
.-ws-z    0
```

### `text-align`
```
.-ta-l    left
.-ta-r    right
.-ta-s    start (stability: 2)
.-ta-e    end (stability: 2)
.-ta-c    center
.-ta-j    justify
```

### `text-indent`
```
.-ti-z    0
```

### `white-space`
```
.-sp-n     normal
.-sp-nw    nowrap
.-sp-pr    pre
.-sp-pw    pre-wrap
.-sp-pl    pre-line
```

### `overflow-wrap`
```
.-ow-n    normal
.-ow-b    break-word
```

### `column-count`
```
.-cc-a    auto
.-cc-1    1
.-cc-2    2
.-cc-3    3
.-cc-4    4
.-cc-5    5
.-cc-6    6
```

### `column-width`
```
.-cw-a    auto
```

### `page-break-[before|after]`
```
.-pbb  .-pba
```
(for `-before` or `-after`, respectively)
```
-a    auto
-t    always
-f    avoid

NOTE: no support for any media queries
```


## Box Cosmetics

### `border-*-style`
```
.-rls  .-rrs  .-rts  .-rbs  .-rhs  .-rvs  .-ras
```
(for `-left`, `-right`, `-top`, `-bottom`, ‘horizontal’, ‘vertical’, or ‘all’, respectively)
```
-n     none
-h     hidden
-s     solid
-do    dotted
-da    dashed
-db    double
-gv    groove
-rg    ridge
-is    inset
-os    outset
```

### `border-*-color`
```
.-rlc  .-rrc  .-rtc  .-rbc  .-rhc  .-rvc  .-rac
```
(for `-left`, `-right`, `-top`, `-bottom`, ‘horizontal’, ‘vertical’, or ‘all’, respectively)
```
-t    transparent
-c    currentColor
-b    #000000
-w    #ffffff
```

### `background-image`
```
.-bi-n    none
```

### `background-position`
```
.-bp-l     left
.-bp-r     right
.-bp-c     center
.-bp-t     top
.-bp-b     bottom
.-bp-lt    left   top
.-bp-lc    left   center
.-bp-lb    left   bottom
.-bp-ct    center top
.-bp-cc    center center
.-bp-cb    center bottom
.-bp-rt    right  top
.-bp-rc    right  center
.-bp-rb    right  bottom
```

### `background-size`
```
.-bz-a     auto
.-bz-cn    contain
.-bz-cr    cover
```

### `background-repeat`
```
    , "stability": 2
    , "values": [
        { "name": "repeat"   , "code": "r"  , "alt": "background-repeat: repeat    repeat;"    }
      , { "name": "no-repeat", "code": "nr" , "alt": "background-repeat: no-repeat no-repeat;" }
      , { "name": "space"    , "code": "sp" , "alt": "background-repeat: space     space;"     }
      , { "name": "round"    , "code": "rd" , "alt": "background-repeat: round     round;"     }
      , { "name": "repeat-x" , "code": "rx" , "alt": "background-repeat: repeat no-repeat;" }
      , { "name": "repeat-y" , "code": "ry" , "alt": "background-repeat: no-repeat repeat;" }
      , { "name": "space-x"  , "code": "spx", "use": "background-repeat: space no-repeat ;" }
      , { "name": "space-y"  , "code": "spy", "use": "background-repeat: no-repeat space ;" }
      , { "name": "round-x"  , "code": "rdx", "use": "background-repeat: round no-repeat ;" }
      , { "name": "round-y"  , "code": "rdy", "use": "background-repeat: no-repeat round ;" }
      , { "name": "repeat space" , "code": "r_sp"  }
      , { "name": "repeat round" , "code": "r_rd"  }
      , { "name": "space  repeat", "code": "sp_r"  }
      , { "name": "space  round" , "code": "sp_rd" }
      , { "name": "round  repeat", "code": "rd_r"  }
      , { "name": "round  space" , "code": "rd_sp" }
      ]
```

### `background-attachment`
```
.-ba-f    fixed
.-ba-s    scroll
.-ba-l    local
```

### `background-origin`
```
.-bo-c    content-box
.-bo-p    padding-box
.-bo-r    border-box
```

### `background-clip`
```
.-bk-c    content-box
.-bk-p    padding-box
.-bk-r    border-box
```

### `background-color`
```
.-bc-t    transparent
.-bc-c    currentColor
.-bc-b    #000000
.-bc-w    #ffffff

-h        true
```

### `box-shadow`
```
.-ks-n    none
```

### `overflow`
```
.-ko-a    auto
.-ko-v    visible
.-ko-h    hidden
.-ko-s    scroll
```

### `opacity`
```
.-o-z    0.0
.-o-h    0.5
.-o-1    1.0

-h        true
```

### `visibility`
```
.-v-v    visible
.-v-h    hidden
.-v-c    collapse
```


## Text Cosmetics

### `text-transform`
```
.-tt-n     none
.-tt-cp    capitalize
.-tt-uc    uppercase
.-tt-lc    lowercase

-h        true
```

### `text-decoration`
```
.-td-n     none
.-td-ul    underline
.-td-ol    overline
.-td-lt    line-through

-h        true
```

### `text-shadow`
```
.-ts-n    none
```

### `text-overflow`
```
.-to-k    clip
.-to-e    ellipsis
.-to-f    fade (stability: 2)
```

### `list-style-type`
```
.-lst-n     none
.-lst-dc    decimal
.-lst-dz    decimal-leading-zero
.-lst-lr    lower-roman
.-lst-ur    upper-roman
.-lst-la    lower-alpha
.-lst-ua    upper-alpha
.-lst-ll    lower-latin
.-lst-ul    upper-latin
.-lst-lg    lower-greek
.-lst-d     disc
.-lst-c     circle
.-lst-s     square
```

### `list-style-position`
```
.-lsp-os    outside
.-lsp-is    inside
```

### `list-style-image`
```
.-lsi-n     none
```

### `color`
```
.-c-t    transparent
.-c-c    currentColor
.-c-b    #000000
.-c-w    #ffffff

-h       true
```

### `quotes`
```
.-q-n    none
```
