# Mockfill

Mockfill aims to make mocking objects in typescript an easier experience.
When mocking interfaces in typescript tests, every method must be defined in order 
to be compiled. Even if you can fix the compiler errors, you still need to mock every
method your class under test might use. 

Ideally, we want our tests to only mock methods that play a part in what we are testing.
Mockfill allows us to do this by filling in missing methods with default implementations.

Under the hood, Mockfill uses the Proxy class to intercept all attempts to get properties
from an object. If the underlying object has the property, the Proxy defers to the underlying object.
If the object is missing the property, the Proxy supplies a default value.

## Installing / Getting started

Install
```shell
npm install --save-dev mockfill
```

Usage
```Typescript
import 'harmony-reflect'
import * as Mockfill from 'mockfill'

interface MyInterface {
   methodOne();
   methodTwo();
}

function test() {
   
   //Create a stubbed implementation of MyInterface for our test.
   const myInstance = {
      //We only care about testing methodOne in this test.
      methodOne() {
         return 1;
      }
   }
   const mock = Mockfill.mock<MyInterface>(myInstance);
   
   mock.methodOne(); //returns 1 as expected.
   mock.methodTwo(); //returns nothing, but does not throw an error!
}
```

Because Mockfill uses the Proxy object you must do two things when using it.
1. require 'harmony-reflect' once somewhere in your project.
2. run node with the --harmony-proxies option.

## Developing

This project requires the typings tool to manage external typescript definition files.

```shell
git clone https://github.com/dkellycollins/mockfill.git
cd mockfill/
npm install
cd src/
typings install
```

Installs project dependencies and typescript definition files.

### Building

```shell
npm compile

gulp compile
```

Both commands execute the gulp compile task.

### Testing

```shell
gulp compile
mocha dist/test/**/* --harmony-proxies
```

Runs all tests in the compiled test directory.

## Contributing

Contributing is more then welcome! Just fork this repo and create a pull request
with changes you would like to see.

## Licensing

The code in this project is licensed under MIT license.