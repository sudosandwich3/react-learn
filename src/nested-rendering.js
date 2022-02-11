'use strict';

function ComponentCreator(props) {
    // Controls the state of the children
    const [children, setChildren] = React.useState([])
    const addChild = () => setChildren([...children, children.length])

    // Controls the state of the input tag
    const [text, setText] = React.useState("")
    const onChange = e => setText(e.target.value)

    // An event callback we define to respond to the action on the child component
    const onUpdate = () => /*console.log("Updated!")*/  setText(text + " updated!")
    // JSX elements can be assigned to a variable and used like other JS values
    const childComponents = children.map(x => <ComponentCreator key={x} name={x} onUpdate={onUpdate}/>)

    // Template of the component
    return <div className="border blue">

        {/*Calls a function that adds a new child */}
        <button onClick={addChild}>Add Component</button>

        {/*Button that activates the callback this child's parent gave us.*/}
        {/*The Top level component has no parent so this is wrapped in conditional logic*/}
        {props.onUpdate && <button onClick={props.onUpdate}>Call Parent</button>}

        <input className="margin-left" type="text" value={text} onChange={onChange}/>

        {/*Animation to show when the component renders*/}
        <span key={Math.random()} className={"render-fade"}>Rendered</span>

        {/*Places the JSX element array defined above in the template*/}
        {childComponents}
    </div>
}

let domContainer = document.querySelector('#app');
ReactDOM.render(<ComponentCreator />, domContainer);