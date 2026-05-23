# MCS – Mustache Construct Syntax

A parametric visual language to define, analyze, and generate mustaches based on Golden Age aesthetics.

### Variables
| Parameter  | Values                     | Description                       |
|------------|----------------------------|-----------------------------------|
| height     | `all`, `semi`, `none`      | Column height (philtrum fill)     |
| angle      | `horizontal`, `diagonal`, `upward` | Wing orientation (θ)            |
| gap        | `true`, `false`            | GCC (Gap Centered Column)         |
| lip        | `over`, `on`, `linegap`    | Vertical position relative to lip |
| extended   | `true`, `false`            | Wings past mouth corners          |
| radius     | `flat`, `round`            | Top of column shape (R)           |
| thickness  | 1 – 10 (scale)             | Hair block density (ρ)            |

### Quick Start
1. Open `index.html` in your browser for the visual editor.
2. `node cli/generate.js` for terminal SVG generation.
3. Import `mcs-engine.js` into your own projects.

### Examples
- Clark Gable: `{ height: "all", angle: "diagonal", gap: false, lip: "over", extended: true, radius: "flat", thickness: 8 }`
- Vincent Price: `{ height: "semi", angle: "diagonal", gap: false, lip: "over", extended: false, radius: "flat", thickness: 3 }`
- My Grandfather: `{ height: "all", angle: "horizontal", gap: false, lip: "linegap", extended: false, radius: "flat", thickness: 5 }`
