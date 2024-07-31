import React from "react";

export class Counter extends React.Component {
    render() {
        return (
            <div style={ { marginTop: "20px", marginLeft: "20px" }  }>
                <h1>0</h1>
                
                <div>
                    <button>Diminuir</button>
                    <button>Aumentar</button>
                </div>
            </div>
        )
    }
}