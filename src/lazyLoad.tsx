import { lazy } from "react";

export const lazyLoad = (path: string, componentName: string) => {
  return lazy(() => {
    const promise = import(path);
    if (componentName === null) {
      return promise;
    }
    return promise.then((module) => ({ default: module[componentName] }));
  });
};
