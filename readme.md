# is-it-down

A simple cli tool to quickly determine if a website is currently up or down. The app will make a head request to the passed in cli argument, and determine from the status whether the site is currently responding or not. 

Example:
```bash
$ node index.js http://github.com
...
http://github.com is up! 😃
```

If you omit http from the passed in argument, it will automatically be inserted.

### installation

```bash
git clone https://github.com/jcampuza/is-it-down.git && cd is-it-down
```


