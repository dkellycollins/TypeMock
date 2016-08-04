import 'harmony-reflect';
import * as assert from 'better-assert';
import * as Mockfill from '../index';

describe('Mockfill', () => {
   describe('mock', () => {
      it('should call a missing method without error', () => {
         //Arrange
         var mock = Mockfill.mock<any>();

         //Act
         mock.missingMethod();

         //Assert
         assert(true);
      });

      it('should call stubbed method on instance passed into mock.', () => {
         //Arrange
         var instance = {
            returnOne() {
               return 1;
            }
         };
         var mock = Mockfill.mock<any>(instance);

         //Act
         var actual = mock.returnOne();

         //Assert
         assert(actual == 1);
      });

      it('should return default value from provided options', () => {
         //Arrange
         var options = {
            defaultValue: 42
         };
         var mock = Mockfill.mock<any>({}, options);

         //Act
         var actual = mock.fourtyTwo;

         //Assert
         assert(actual == 42)
      });
   });
});
