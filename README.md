# react custom wizard 
React easy wizard is multistep from throw a bunch of react components at it (data forms, text / html components etc) and it will take the user through those components in steps.
Access provides several quick-create form tools on the Create tab, each of which lets you create a form with a single click. However, if you want to be more selective about what fields appear on the form, you can use the Form Wizard instead.


### what does it do?
something like this of course:

![react easy wizard]
(https://github.com/RajeshTiwariji/React_wizard/tree/master/LICENSE.md)



### get started
- run
```
npm install --save react-easy-wizard
```
- require into your project via
```
var ReactCostumWizard = require('react-easy-wizard')
```
- define the list of all the components* you want to step through. The `title` indicates the title of the UI step and component.

```
const steps =
    [
      {title: 'Step 1', component: Step1},
      {title: 'Step 2', component: Step2},
      {title: 'Step 3', component: Step3},
      {title: 'Step 4', component: Step4},
      {title: 'Step 5', component: Step5}
    ]
```

- and now render it out somewhere in your app
```
    <div>
        <ReactCostumWizard steps={steps}/>
    </div>    
```



### dev
- all node source is in src/main.js
- you need to install dependencies first `npm install`
- make any changes and run `npm run build` to transpile the jsx into `dist`
- the transpilation is run as an auto pre-publish task so it should usually be up to date when consumed via npm
- `npm run build-example` builds and packs the example app into the 'docs' folder so it can be accessed via ghpages


### run example in browser
A full example is found in the `src/examples` directory.

- run `npm install`
- then run `npm run example`
- then go to `http://localhost:8080/webpack-dev-server/src/examples/index.html` in your browser
- hot reload will work as you dev

