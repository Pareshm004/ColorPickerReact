import React,{useState} from "react";

function ColorPicker() {
    const [color, setColor] = useState("black");
    return(<>
        <div className="picker">
            <h1><u>Color Picker</u></h1>
            <div className="color" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/> {/*function used to find the value of the color which has been picked, using onChange event */}
        </div>
    </>);
}

export default ColorPicker