## Typescript React Boilerplate

To use this as a bootstrap, you can export the files from git into an empty directory:

    [user@host ~]$ git archive master | tar x -C ../path/to/new/empty_project_dir/

You can then `git init` (or use another VCS entirely) and proceed as normal.

## Building

You need Typescript, DefinitelyTyped & http-server installed globally:

    [user@host ~]$ npm install -g typescript tsd http-server

You can `tsc --watch` from the project root to compile the project, sensible default settings for the tsc compiler are in tsconfig.json.

