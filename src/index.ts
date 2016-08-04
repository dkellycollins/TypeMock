export function mock<T>(instance: any = {}): T {
   return new Proxy(instance, new DefaultProxyHandler());
}

class DefaultProxyHandler<T> implements ProxyHandler<T> {

   public get(target, property, recevier) {
      return (property in target)
         ? target[property]
         : () => void 0;
   }
}