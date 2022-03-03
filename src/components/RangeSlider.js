const RangeSlider = ({min, max, rangeValue, onChangeHandler, unit}) => {
    return ( 
        <div>
            <input type="range" min={min} max={max} value={rangeValue} onChange={onChangeHandler}/>
            <div id="value-unit">
                <input type="number" min={min} max={max} value={rangeValue} onChange={onChangeHandler}/><span>{unit}</span>
            </div>
        </div>
     );
}
 
export default RangeSlider;