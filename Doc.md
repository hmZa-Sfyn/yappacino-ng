# Yappacino Documentation

## Version
Current: **v1.1.0**

## Overview
Yappacino is a superset language and ecosystem for rapid scripting, package management, and transpilation to JavaScript. It features brainrot keywords, global package management, and a custom CLI (`yapm`).

## Features
- Custom syntax and keywords
- Package manager (`yapm`) with project, install, uninstall, and transpile commands
- Integration with `retro.exe` for Windows package management
- Global library support via `.yapp/src/libs`
- Fun import keyword: `yapport <libname>`
- Lambda/closure: `yambda(x) => x * 2;`

## CLI Usage
- `yapm init` — Initialize a new project
- `yapm new <name>` — Create a new project
- `yapm install <pkg>` — Install a package
- `yapm install -g <pkg>` — Install a global package
- `yapm uninstall <pkg>` — Uninstall a package
- `yapm uninstall -g <pkg>` — Uninstall a global package
- `yapm transpile` — Transpile `.yap` files to JS
- `yapm fix-imports` — Fix import statements
- `yapm retro-init` — Set up `retro.exe` for Windows

## Global Libraries
Global packages are stored in `.yapp/src/libs/<pkg>`. Use the brainrot keyword `yapport <libname>` to import them in your code.

## Brainrot Keywords
- `yapport <libname>` — Import global libs
- `yambda(x) => x * 2` — Lambda/closure
- `stipulate` — If
- `otherwise` — Else
- `compeer` — Switch
- `towards` — For loop

## Advanced Features
- Numeric variable names: `volatile mutable variable 42: Integer = 99;`
- Custom types: `stable mutable variable foo: Ligature = "bar";`
- Class inheritance, static methods, and more

## Troubleshooting
- If the `yap` executable fails, run `bun src/backup/yapped_index.js`.
- For Windows package management, use `retro.exe` (see `yapm retro-init`).

## Directory Structure
- `src/` — Source files
- `.yapp/src/libs/` — Global libraries
- `.wintools/retro.exe` — Windows package manager
- `examples/` — Example scripts

## Links
- [GitHub Repository](https://github.com/hmZa-Sfyn/yappacino-ng)
- [retro.exe index](https://retroindex.vercel.app/)

## License
See `LICENSE.md` for details.
