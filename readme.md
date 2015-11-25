# Angular Lazy

> Utilities for projects based on the [Angular Lazy Generator](https://github.com/matoilic/generator-angular-lazy).

## Routing

The Angular Lazy module adds a state factory to the future states provider. The factory then takes care of loading your states of type load defined in routes.json at runtime.
 
## Component Loader Service

The `componentLoader` service allows us to load components manually in our code.
 
### API
 
componentLoader
- [.loadComponent(componentName)](#ComponentLoaderService+loadComponent)
- [.resolve(componentName, identifier)](#ComponentLoaderService+resolve)

<a name="ComponentLoaderService+loadComponent"></a>
### componentLoaderService.loadComponent(componentName) ⇒ <code>Promise</code>
Loads a component with the given name. It will automatically look for the component in the components folder.
E.g. if you pass `popup` it will try to load the component from "components/popup/index".  

| Param | Type |
| --- | --- |
| componentName | <code>String</code> |

<a name="ComponentLoaderService+resolve"></a>
#### componentLoaderService.resolve(componentName, identifier) ⇒ <code>Promise</code>
Resolves an Angular injectable, e.g. service or constant, from the given component. If ensures that the component
is loaded before trying to resolve the injectable.  

| Param | Type |
| --- | --- |
| componentName | <code>String</code> | 
| identifier | <code>String</code> | 

## System Service

The `system` service is a small wrapper around `System` so that `import` calls can be mocked in tests if needed.

### API

system
- [.import(path)](#SystemService+import)

<a name="SystemService+import"></a>
#### systemService.import(path) ⇒ <code>Promise</code>
Imports a component from the given path, relative to the baseURL configured in SystemJS.  

| Param | Type |
| --- | --- |
| path | <code>String</code> | 
