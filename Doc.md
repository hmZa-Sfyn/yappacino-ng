# Yappacino Documentation

## Overview
Yappacino is a superset language and ecosystem for rapid scripting, package management, and transpilation to JavaScript. It features brainrot keywords, global package management, and a custom CLI (`yapm`).

## Features
- Custom syntax and keywords
- Package manager (`yapm`) with project, install, uninstall, and transpile commands
- Integration with `retro.exe` for Windows package management
- Global library support via `.yapp/src/libs`
- Fun import keyword: `yapport <libname>`

## Getting Started
- `yapm init` — Initialize a new project
- `yapm new <name>` — Create a new project
- `yapm install <pkg>` — Install a package
- `yapm install -g <pkg>` — Install a global package
- `yapm uninstall <pkg>` — Uninstall a package
- `yapm uninstall -g <pkg>` — Uninstall a global package
- `yapm transpile` — Transpile `.yap` files to JS
- `yapm fix-imports` — Fix import statements
- `yapm retro-init` — Set up `retro.exe` for Windows

## Syntax Highlights
- Variables: `volatile mutable variable x: Integer = 5;`
- Functions: `-> Integer independent invariable function foo(x: Integer) { ... }`
- Classes: `transient classification MyClass { ... }`
- Control: `stipulate (x > 0) { ... } otherwise { ... }`
- Lambda: `yambda(x) => x * 2;`
- Global import: `yapport mylib`

## Directory Structure
- `src/` — Source files
- `.yapp/src/libs/` — Global libraries
- `.wintools/retro.exe` — Windows package manager

## License
See `LICENSE.md` for details.
