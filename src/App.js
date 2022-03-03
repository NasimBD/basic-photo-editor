import './App.css';
import {useState} from 'react';
import Option from './components/Option';
import Flower from './flower.jpg';
import RangeSlider from './components/RangeSlider';

const OPTIONS = [
  {
    id: 1,
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    unit: '%',
    range: {
      min: 0,
      max: 200
    }
  },
  {
    id: 2,
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    unit: '%',
    range: {
      min: 0,
      max: 200
    }
  },
  {
    id: 3,
    name: 'Saturate',
    property: 'saturate',
    value: 100,
    unit: '%',
    range: {
      min: 0,
      max: 200
    }
  },
  {
    id: 4,
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    unit: '%',
    range: {
      min: 0,
      max: 100
    }
  },
  {
    id: 5,
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    unit: '%',
    range: {
      min: 0,
      max: 100
    }
  },
  {
    id: 6,
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    unit: 'deg',
    range: {
      min: 0,
      max: 360
    }
  },
  {
    id: 7,
    name: 'Blur',
    property: 'blur',
    value: 0,
    unit: 'px',
    range: {
      min: 0,
      max: 20
    }
  }
];

function App() {
  const [options, setOptions] = useState(OPTIONS);
  const [activeOptionId, setActiveOptionId] = useState(1);
  const activeOption = options.find(item => item.id === activeOptionId);


  const getStyle = () => {
    const filters = options.map(option => `${option.property}(${option.value}${option.unit})`);
    const filtersObj = {filter: filters.join(' ')};
    // console.log('filtersObj = ', filtersObj);
    return filtersObj;
  }  

  const onChangeHandler = ({target}) => {
   setOptions((prevOptions) =>  prevOptions.map(option => {
    if(option.id === activeOptionId){
      return {...option, value: target.value};
    } else return option;
  })
  )
  }

  return (
    <div className="container">
        <div id="option-bar">
          {
            OPTIONS.map(option =>
             <Option
             key={option.id}
             active={activeOptionId === option.id}
             name={option.name}
             onClickHandler={() => setActiveOptionId(option.id)}
             />
             )
          }
        </div>

        <div id="main">
          
          <div id="range-slider">
            <RangeSlider
            min={activeOption.range.min}
            max={activeOption.range.max}
            rangeValue={activeOption.value}
            onChangeHandler={onChangeHandler}
            unit={activeOption.unit}
            /> 
          </div>
          
          <h3>Result for a back-ground image:</h3>
          <div id="photo-wrapper"  style={getStyle()}/>
    
          <h3>Result for an image element &lt;img&gt;:</h3>
          <img src={Flower} style={getStyle()} alt=""/>

        </div>

       
    </div>
  );
}

export default App;
