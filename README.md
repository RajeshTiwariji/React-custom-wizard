# react custom wizard 
React easy wizard is multistep from throw a bunch of react components at it (data forms, text / html components etc) and it will take the user through those components in steps.
Access provides several quick-create form tools on the Create tab, each of which lets you create a form with a single click. However, if you want to be more selective about what fields appear on the form, you can use the Form Wizard instead.






### get started
- run
```
npm install --save react-easy-wizard
```
- Import package form react custom wizard
```
     import CustomWizard from 'react-custom-wizard'
```
- define the list of all the components* you want to step through. The `title` indicates the title of the UI step and component. Heading is optional you can run it without heading also

```
 const steps = [
          {tag: 'Step 1', component:Step1, heading:"Step 1: Basic store info and platform"},
          {tag: 'Step 2', component:Step2, heading:"Step 2: Additional store info"},
          {tag: 'Step 3', component:Step3, heading:"Step 3: Setup the connection to your store"},
          {tag: 'Step 4', component:Step4, heading:"Step 4: Install the plugin we need to continue"},
          {tag: 'Step 5', component:Step5, heading:"Step 4: Install the plugin we need to continue"}
      ]
```

- and now render it out somewhere in your app
```
    render() {
            return(
                <CustomWizard steps={steps}/>
            );
           }
```
- defult properties
-- if don't want to show header put false
```
    showHeading :true
```
- for showing state name at top
```
    showNameState: true,
```
- for start with anther state just change currentstep.
```
    currentStep: 1,
```
- for changing hedaer style just change classname
```
    classOnHeading : "wizard-heading",
```
-for changing btn text on next and previous button
```
    textOnNextbtn: "Next",
    textOnPreviousbtn: "Previous",
```
- for changing the class name in buttons
```
    classNext: "btnss next",

    classPrevious: "btnss previous",

```

<<<<<<< HEAD
require dependency for animation
```
'react-transition-group'
=======

### run example in browser
A full example is found in the `src/examples` directory.

- run `npm install`
- then run `npm run example`
- then go to `http://localhost:8080/webpack-dev-server/src/examples/index.html` in your browser
- hot reload will work as you dev
>>>>>>> b613d2561921d58a2055057dd3f6794f65524bd2

````