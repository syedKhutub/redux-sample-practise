import React , {useState} from  'react';
import { connect } from 'react-redux';
import { increment , decrement , add } from '../actions/action'

const Counter  = (props) => {

    const [inputValue,setInputValue] = useState('');

    

    // const increment = () => {
    //     setCounter(prevCounter => prevCounter + 1)
    // }

    // const decrement = () => {
    //     if(props.count === 0){
    //        return alert('Cant decrement after 0')
    //     }
    //     setCounter(prevCounter => prevCounter - 1)
    // }
    

    return (
        <div>
            Value: {props.count}
            <input type='text' onChange={e => setInputValue(e.target.value)}></input>
            <button onClick={() => props.onAdd(Number(inputValue) || 0)}>Add Value</button>
            <button onClick={props.onIncrement}>Increment Counter</button>
            <button onClick={props.onDecrement}>Decrement Counter</button>
        </div>
    )

}

const mapStateToProps = state => ({
    count: state.counter
    })

const mapDispatchToProps = dispatch => {
    return ({
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onAdd: (inputValue) => dispatch(add(inputValue)),
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)