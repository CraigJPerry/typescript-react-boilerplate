## Typescript React Boilerplate

To use this as a bootstrap:

    [user@host ~]$ git archive master | tar x -C ../path/to/new/empty_project_dir/

You can then `git init` and proceed as normal.

### Building

I'm roadtesting the VSCode editor and while i wouldn't normally include e.g. a .idea/ directory, i am including .vscode since it's developer agnostic. `CTRL+SHIFT+B` will launch the tsc compiler in watching mode.

Alternatively, run `npm start` for the same.
