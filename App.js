/**
 * 
 * <div id:"parent">
 *      <div id:"child">
 *          <h1>I'm an h1 tag</h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 */
const parent = React.createElement(
    "div", {id:"parent"},[ 
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h1", {}, "I'm an h1 tag")
    ]),
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h1", {}, "I'm an h1 tag")
    ])
]);




// const heading = React.createElement(
//     "h1",
//     {id: "heading"}, //Props
//     "Hello World from React!"); //Props
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);