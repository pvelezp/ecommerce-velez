# VelezCommerce
This is an application built by Pablo Vélez based on a frontend test.
It shows a mobile devices list. You can see the product detail in a new page and
also add that product into the cart one by one.

## Installation
You should run:
```bash
npm install
```

## Running the application
You should run:
```bash
npm start
```

## Testing
You can run all test suites with:
```bash
npm test
```

## Linting
You can run the lint tests with:
```bash
npm run lint
```

## Build
You can run:
```bash
npm run build
```

## About the changes and refactors:
A Module driven design pattern was used for the code directory architecture. SOLID principles applied to React were applied. And all the best practices as possible were applied.
This is a list of some relevant changes:
1. Module architecture design
2. Vite was chosen as it's blazing-fast tool for scaffolding and bundling projects with near-instant code compilation and rapid hot module replacement.
3. [Rome](https://rome.tools/)  was chosen as an alternative to Eslint and prettier because it is inmensily faster to run. ~25x Faster than Prettier and Rome's ~15x times faster than ESLint.
4. Vitest(Pretty similar to jest) and React Testing Library were used for unit testing and integration testing for
the mayority of the code. Unit testing to main components and integration testing for
the whole shopping flow and experience.
5. A Dockerfile was added.

Im totally open to feedback and comments about my code. Thank you.

Another app made by me: [Flex world](https://flex-world.netlify.app/)