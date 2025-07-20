# Getting Started with Yappacino

Welcome to Yappacino! This guide will walk you through creating your first project, setting up your environment, and writing your first code.

## 1. Install Prerequisites
- Install [Bun](https://bun.sh/) (recommended runtime)
- (Windows) Ensure `retro.exe` is available in `.wintools` or run `yapm retro-init` to set up the package manager

## 2. Create a New Project
```sh
yapm init # Initialize in current directory
yapm new my-first-yapp # Create a new project in 'my-first-yapp' folder
cd my-first-yapp
```

## 3. Project Structure
- `src/main.yap` — Your main Yappacino file
- `.yapp/src/libs/` — Global libraries
- `dist/` — Transpiled JS output

## 4. Write Your First Code
Edit `src/main.yap`:
```yap
unsynchronised constant variable greeting: Ligature = "Hello, Yappacino!";
C:\Standard\System\io\format\print\ln(greeting);
```

## 5. Transpile and Run
```sh
yapm transpile # Transpile .yap files to JS
node dist/main.js # Run the transpiled JS
```

## 6. Add a Global Library
```sh
yapm install -g mylib # Create a global lib
# Edit .yapp/src/libs/mylib/index.yap to add functions
```
Use in your code:
```yap
yapport mylib
C:\Standard\System\io\format\print\ln(mylib.hello());
```

## 7. Use Brainrot Keywords
- `yambda(x) => x * 2` — Lambda/closure
- `|>` — Pipe operator for chaining
- `stipulate`/`otherwise` — If/else
- `compeer` — Switch
- `towards` — For loop

## 8. Explore Examples
Check the `/example-projects` and `/examples` folders for more demos.

## 9. Troubleshooting
- If the `yap` executable fails, run `bun src/backup/yapped_index.js`
- For Windows package management, use `retro.exe` (see `yapm retro-init`)

## 10. Next Steps
- Read `Doc.md` and `README.md` for full documentation
- Try building a CLI tool, website, or math app in Yappacino!

Happy yapping!
