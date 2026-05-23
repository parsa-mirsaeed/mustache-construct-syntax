# MCS – Mustache Construct Syntax

**A parametric visual programming language for defining, analyzing, and generating mustache styles based on Golden Age aesthetics.**

## 🧔 Overview

MCS is a rigorous, mathematical system that treats every mustache as a configuration of **8 independent variables**. It includes a web-based visual editor, a JavaScript rendering engine, and a CLI tool for generating SVG outputs.

## 📐 The 8 Variables

| Variable | Values | Description |
| :--- | :--- | :--- |
| **Height** | `all`, `semi`, `none` | Column height (philtrum fill) |
| **Angle** | `horizontal`, `diagonal`, `upward` | Wing orientation (θ) |
| **GCC (Gap Centered Column)** | `true`, `false` | Splits the column with a central gap |
| **Lip Position** | `over`, `on`, `linegap` | Vertical position relative to the lip line |
| **Extended Wings** | `true`, `false` | Wings extend past mouth corners |
| **Radius (Top)** | `flat`, `round` | Shape of the top of the column |
| **Thickness (ρ)** | `1` – `10` | Hair block density |
| **Wing Shape** | `rectangular`, `triangular` | Shape of the wing ends |

## 🚀 Quick Start

### Web Interface
1. Open `index.html` in your browser.
2. Adjust the sliders and dropdowns to create your mustache.
3. Click any preset button to load a classic style.
4. Copy the JSON output for your records.

### CLI Tool (Node.js)
```bash
node cli/generate.js examples/gable.json gable.svg
