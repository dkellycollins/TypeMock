export function mock<T>(instance: any = {}): T {
   return new Proxy(instance, {
      get(target, prop) {
         return (prop in target)
            ? target[prop]
            : () => void 0;
      }
   });
}