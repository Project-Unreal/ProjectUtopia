import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import { TabCardGroup } from "./molecules/TabCardGroup";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <>
        <App/>
        <TabCardGroup tabs={["test"]} selected_id={0}/>
    </>, rootElement);
