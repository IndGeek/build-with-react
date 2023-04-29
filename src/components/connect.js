import React from "react";
import Xarrow from 'react-xarrows';


const boxStyle = {border: "grey solid 1px", color: "white", fontFamily: 'poppins', borderRadius: "4px", padding: "5px", backgroundColor: "salmon"};

function SimpleExample() {
    return (
        <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
            <div id="elem1" style={{ ...boxStyle, backgroundColor: '#FF5733' }}>Beginner</div>
            <div id="elem2" style={{ ...boxStyle, position: 'absolute', top: '10%' }}>IndGeek</div>
            <div id="elem3" style={boxStyle}>Advanced</div>
            <div id="elem4" style={{ ...boxStyle, position: 'absolute', top: '20%' }}>Connect boxes</div>
            <Xarrow strokeWidth={3} headSize={4} color="grey" dashness={true}
                start="elem1"
                end="elem2"
            />
            <Xarrow strokeWidth={3} headSize={3} color="grey" dashness={true}
                start="elem2"
                end="elem3"
            />
            <Xarrow strokeWidth={3} headSize={3} color="grey" dashness={true}
                start="elem2"
                end="elem4"
            />
        </div>
    );
}

export default SimpleExample;