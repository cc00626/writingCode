const fn1 = (a) => {
  return a + 1;
};

const fn2 = (a) => {
  return a + 2;
};

const fn3 = (a) => {
  return a + 3;
};

const compose = (...fns) => {
  return fns.reduce(
    (acc, it) => {
      return (...args) => {
        return acc(it(...args));
      };
    },
    (it) => it,
  );
};
const com = compose(fn1, fn2, fn3);

console.log(com(1));
