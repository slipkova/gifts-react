import React, {Component, Fragment} from "react";
import Text from "./text";



export default class HelpText extends Component{
    state = {}

    render(){
        const text = (
            <Fragment>If you need help with anything, you can visit our <a href={"https://www.w3schools.com/html/html_links.asp"}>help</a> page or contact our customer support
            </Fragment>
        )
        return <Text text={text} />;
    }
}