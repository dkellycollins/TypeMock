import 'harmony-reflect';
import * as assert from 'better-assert';
import * as TypeMock from '../index';

describe('TypeMock.mock', () => {
   it('should call a missing method without error', () => {
      //Arrange
      var mock = TypeMock.mock<any>();

      //Act
      mock.missingMethod();
      
      //Assert
      assert(true);
   });

   it('should call stubbed method on instance passed into mock.', () => {
      //Arrange
      var mock = TypeMock.mock<any>({
         returnOne() {
            return 1;
         }
      });
      
      //Act
      var actual = mock.returnOne();
      
      //Assert
      assert(actual == 1);
   });
});
