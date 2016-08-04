export function mock<T>(instance: any = {}, options: ProxyHandlerOptions = defaultProxyHandlerOptions): T {
   return new Proxy(instance, new DefaultProxyHandler(options));
}

interface ProxyHandlerOptions {
   defaultValue: any;
}

var defaultProxyHandlerOptions = {
   defaultValue: () => void 0
};

class DefaultProxyHandler<T> implements ProxyHandler<T> {
   
   constructor(private options: ProxyHandlerOptions) {
      
   }
   
   public get(target, property, recevier) {
      return (property in target)
         ? target[property]
         : this.options.defaultValue;
   }
}