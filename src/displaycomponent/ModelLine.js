import React from "react";
import {getSquad} from "../SquadResource";

class ModelLine extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            model: null
        };
    }
    render() {
        return generateModelLine(this.state.model)
    }

    componentDidMount() {
        fetch(getSquad())
            .then(response => response.json())
            .then(data => this.setState({ model: data.SM_SM}));
    }
}




function generateModelLine(model){
    if (model === null){
        return <div> Not yet loaded</div>
    }
    return (
        <div>
            <p> {model.name} </p>
            <p>
                Move: {model.stats.movement}, Size: {model.stats.size}
            </p>
        </div>
    )
}

export default ModelLine