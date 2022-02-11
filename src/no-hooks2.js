'use strict';

function Child(props) {
  let text = ""
  const onChange = e => {
    text += e.target.value
    console.log(`${props.name} text: ${text}`)
  }
  console.log(`${props.name} text: ${text}`)

  // Template of the component
  return <div className="border red">

    {/*Passing a component property to the template*/}
    {props.name}

    {/*A text input whose state is managed by useState*/}
    <input className="margin-left" type="text" value={text} onChange={onChange}/>

    {/*Animation to show when the component renders*/}
    <span key={Math.random()} className={"render-fade"}>Rendered</span>
  </div>
}

function ComponentCreator() {
  // Controls the state of the children
  const [children, setChildren] = React.useState([])
  const addChild = () => setChildren([...children, children.length])

  // JSX elements can be assigned to a variable and used like other JS values
  const childComponents = children.map(x => <Child key={x} name={x} /> )

  // Template of the component
  return <div className="border blue">

    {/*Calls a function that adds a new child */}
    <button onClick={addChild}>Add Component</button>

    {/*Animation to show when the component renders*/}
    <span key={Math.random()} className={"render-fade"}>Rendered</span>

    {/*Places the JSX element array defined above in the template*/}
    {childComponents}
  </div>
}

let domContainer = document.querySelector('#app');
ReactDOM.render(<ComponentCreator />, domContainer);