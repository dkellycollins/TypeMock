/**
 * Creates a mock based on the provided instance and options.
 *
 * @param instance {any} - The instance to mock. Any properties or methods on the provided instance
 *                         will also be available on the mock. If not provided an empty object will be mocked.
 * @param options {MockOptions} - Options used when building the mock. See {MockOptions} for more details.
 *                                If not provided, default options will be used.
 * @returns {any} - A mock instance.
 */
export function mock<T>(instance: any = {}, options: MockOptions = defaultOptions): T {
   return new Proxy(instance, new DefaultProxyHandler(options));
}

/**
 * Options used when creating a mock.
 */
export interface MockOptions {

   /**
    * The value to return when a property does not exist on an instance.
    */
   defaultValue: any;
}

var defaultOptions = {
   defaultValue: () => void 0
};

class DefaultProxyHandler<T> implements ProxyHandler<T> {
   
   constructor(private options: MockOptions) {
      
   }
   
   public get(target, property, recevier) {
      return (property in target)
         ? target[property]
         : this.options.defaultValue;
   }
}