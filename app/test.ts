import { A } from '@ember/array';

class Dummy {
  name = "";
}

export class Test {
  test()  {
    const dummies = A([new Dummy()]);
    const last1 = dummies.lastObject;
    if (last1) {
      console.log(last1.name);
    }
    const last2 = dummies.get('lastObject');
    if (last2) {
      console.log(last2.name);
    }
  }
}
