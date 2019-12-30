"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class App extends React.Component {
    render() {
        return React.createElement("h1", null,
            "Hello ",
            this.props.compiler,
            " and ",
            this.props.framework,
            "!");
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map