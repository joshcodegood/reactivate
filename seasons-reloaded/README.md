# Project-specific notes and takeaways

## Class-based components
### Benefits
* They are (arguably) easier to read & understand
* They can use the "state" object
    * useful for handling user input
* They have use of lifecycle events
    * Allows you to control the flow of actions and functions

### Rules
* Must be a JS class
* Must extend (subclass) React.Component
* Must define a 'render' method that returns JS

### Rules of State
* Only usable with class components (except with hooks, which we will talk about later)
* Commonly confused with props
    * possibly due to the fact that state can be passed into a component *as* a prop
* State is a JS object. It should contain data relevant to the component
* Updating state on a component causes the component to re-render
* State must be initialized when a component is created
* Once state is initialized, use only `setState` to update it
    * ex./ *never* use `this.state = { name: Phil }` to *update* state. Only to set it.
    * use `this.setState({ name: Phil })` when updating
    * `setState` modifies only the targeted key/value pair

### Component Lifecycle
* constructor
* render
    * at this point, content is visible onscreen
* componentDidMount
    * gets called exactly once, when component is shown onscreen
    * after this, component is listening for updates
* componentDidUpdate
    * perform a function when a change has been made
* componentWillUnmount
    * component waits until it is no longer shown and then performs an action
    * essentially used for cleanup

Here are a few other, infrequently-used lifecycle methods:
------
* shouldComponentUpdate
* getDerivedStateFromProps
* getSnapshotBeforeUpdate

I don't know what they do yet. Will talk about them later

======

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
