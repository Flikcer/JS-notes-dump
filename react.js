//npx create-react-app will create a basic app with all boilerplate
//cd into it then npm start to view in browser

//import object and react from react. curly braces needed for non defualt attributes
import React, { Component } from 'react'

//declare the app class component by extending the react class
class App extends Component {
    constructor() {
        super()
    }

    {/* Javascript functions can be written here */}

    render() {
        return (
            <div className="App">
            Hello World!
            </div>
        )
    }
}

//export so it can be used in other files
export default App
//to export multiple components
//export { ComponentA, ComponentB, ComponentC };


// BAD - will throw an error!
render() {
    return (
        <h1>Hello world</h1>
        <h2>Welcome to my React page!</h2>
    )
}

// GOOD
render() {
    return (
        <div>
            <h1>Hello world</h1>
            <h2>Welcome to my React page!</h2>
        </div>
    )
}


//define component as a function
//no return, no imports, no render funciton needed
import React from 'react';

function App() {
  return <div className="App">Hello World!</div>;
}

// OR (arrow-function syntax)

const App = () => {
  return <div className="App">Hello World!</div>;
};

// OR (implicit return)

const App = () => <div className="App">Hello World!</div>;

export default App;

//tells react to render the app component into the DOM, into the element w the id root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// MyComponent.js

import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default MyComponent;




// App.js

import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent title="React" />
      </div>
    );
  }
}

export default App;



// MyComponent.js

import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onButtonClicked}>Click Me!</button>
      </div>
    );
  }
}

export default MyComponent;



// App.js

import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }


  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}

export default App;

// MyComponent.js

import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onButtonClicked } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={onButtonClicked}>Click Me!</button>
      </div>
    );
  }
}

export default MyComponent;

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

// in the render method of App.js
return (
    <div>
      <NavBar username={this.state.username} />
      <Forum username={this.state.username} />
      <Footer />
    </div>
  );


  // MyComponent.js

import React from 'react';

function MyComponent(props) {
  return <div>{props.title}</div>;
}

export default MyComponent;


// App.js

import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent title="Hello World" />
    </div>
  );
}

export default App;

function MyComponent({ title }) {
    // rest of code
  }