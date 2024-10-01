function Button (props) {
    return (
        //el return contiene el JSX que se ejecutara y se convertira a JS con Babel
        <button style={{backgroundColor: props.color, fontSize: props.fontSize, borderRadius: props.borderRadius}}onClick={props.callback}>

            {props.label}
        </button>
    )
}

export default Button