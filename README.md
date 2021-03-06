# Jspatterncli

## Context
This program will filter a list of elements containing a defined pattern.

In the following file `data.js`, there are `Countries` containing `Peoples` containing `Animals`.

Sample of running the command and the expected output:

```bash

$ node app.js --filter=ry
[
   { name: 'Satanwi',
     people:
      [ { name: 'Elmer Kinoshita',
          animals:
           [ { name: 'Wrysel' },
        { name: 'Cora Howell',
          animals:
           [ { name: 'Rrya' },
             { name: 'Pronryorn' } ] },
        { name: 'Anthony Bruno',
          animals:
           [ { name: 'Caryxcal' },
             { name: 'Tryantula' },
             { name: 'Oryx' } ] } ] } ]
...
]
```

The CLI also includes a function to count People and Animals by adding the count of children in the name, eg. Satanwi [2].

Example:
```bash
node app.js --count
[
  { name: 'Satanwi [1]',
     people:
      [ { name: 'Elmer Kinoshita [1]',
          animals:
           [ { name: 'Wrysel' },
        { name: 'Cora Howell [2]',
          animals:
           [ { name: 'Rrya' },
             { name: 'Pronryorn' } ] },
        { name: 'Anthony Bruno [3]',
          animals:
           [ { name: 'Caryxcal' },
             { name: 'Tryantula' },
             { name: 'Oryx' } ] } ] } ]
...
]
```