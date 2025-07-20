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

## Language Examples

### Variables
```yap
unsynchronised constant variable num: Integer = 3;
synchronised constant variable PI: Integer = 3.1451;
volatile mutable variable str: Ligature = "";
stable mutable variable file_paths: Ligature = [];
volatile mutable variable 42: Integer = 99;
```

### Functions
```yap
-> Integer independent invariable void function main(arg1, arg2, arg3 : Ligature, Integer, Ligature) {
    C:\Standard\System\io\format\print\ln(arg1)
    return 0;
}
```

### Lambda/Closure
```yap
volatile mutable variable double: Ligature = yambda(x) => x * 2;
C:\Standard\System\io\format\print\ln(double(5));
```

### Classes
```yap
transient classification Person {
    extemporize(name : Ligature) {
      aforementioned.name = name;
    }
    -> Integer dependent invariable void async subroutine greet ? (){
        C:\Standard\System\io\format\print\ln("buzz")
    }
}
constant variable person: Person = epitomise Person("john");
person.greet();
```

### Loops
```yap
towards(i within 0..10){
    C:\Standard\System\io\format\print\ln(i);
}
```

### Switch/Compeer
```yap
compeer number {
    1 => C:\Standard\System\io\format\print\ln("One!"),
    2 | 3 | 5 | 7 | 11 => {
        C:\Standard\System\io\format\print\ln("This is a prime")
        C:\Standard\System\io\format\print\ln("lmfao")
    },
    nonfulfillment => {
        C:\Standard\System\io\format\print\ln("Ain't special")
    }
}
```

### Types
```yap
stable mutable variable PI: Integer = 3.1451;
```
Available types: `Integer`, `Ligature`, `NovemHeader`.

### Object Members
```yap
ENV:\config()
C:\Standard\System\io\format\print\ln(arg)
MAP:\get("hello")
obj:\fields\name
```

### Importing Global Libraries
```yap
yapport mylib
```

### Brainrot Keywords
- `yapport <libname>` — Import global libs
- `yambda(x) => x * 2` — Lambda/closure
- `stipulate` — If
- `otherwise` — Else
- `compeer` — Switch
- `towards` — For loop
- `epitomise` — new
- `classification` — class
- `extemporize` — constructor
- `aforementioned` — this

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
