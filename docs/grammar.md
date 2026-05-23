# MCS Grammar

A mustache is defined by a JSON object with the following keys:

{
"height": "all" | "semi" | "none",
"angle": "horizontal" | "diagonal" | "upward",
"gap": true | false,
"lip": "over" | "on" | "linegap",
"extended": true | false,
"radius": "flat" | "round",
"thickness": 1..10
}


**Rules:**
- If `height` is `none`, column is removed entirely (only wings exist).
- If `gap` is `true`, a narrow white channel splits the column.
- `extended` increases wing length from 55 to 85 units.
- `radius` only affects the top of the column.
