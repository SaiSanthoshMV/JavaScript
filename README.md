# JavaScript Practice

Short repository to collect and organize JavaScript practice code, snippets, exercises, and small projects.

## Structure (suggested)
- `fundamentals/` — basics: variables, functions, scope, closures  
- `algorithms/` — sorting, searching, DS exercises, kata solutions  
- `projects/` — small browser or Node projects  
- `utils/` — helper scripts, snippets, playgrounds  
- `tests/` — test cases and examples  
- `README.md` — this file

## Requirements
- Node.js (LTS) for running scripts (`node`).
- Any modern browser for front-end examples.
- Optional: VS Code for editing and debugging.

## Quick usage
- Run a script:
    - `node fundamentals/example.js`
- Open a front-end demo:
    - open `projects/demo/index.html` in a browser
- Run tests (if tests use a test runner):
    - `npm install` then `npm test` (configure test script in package.json)

## Conventions
- File names: `kebab-case.js` or `camelCase.js` consistently per folder.
- Keep examples minimal and focused.
- Include a short comment header describing purpose and expected input/output.

## Git
- Add a `.gitignore` with:
    - `node_modules/`
    - `.vscode/`
    - `dist/`

## Contributing
- Add a new file under the appropriate folder.
- Name the file clearly and include brief usage instructions in a top comment.
- Open a PR with a short description of what the code demonstrates.

## License
- Default to MIT (add `LICENSE` file if desired).

Feel free to say which folders or examples you want scaffolded and I will generate them.