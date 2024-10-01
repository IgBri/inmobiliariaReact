import Cartwidget from "./Cartwidget"

function Navbar ({display, flexDirection, justifyContent, padding}) {
    return (
        <div style={{display: display, flexDirection: flexDirection, justifyContent: justifyContent, padding: padding}}>
            <div>
                <h1>Paletta <br />Inmobiliaria</h1>
            </div>
            <Cartwidget 
            display = "flex"
            flexDirection = "row"
            justifyContent = "space-around"
            gap = "10px"
            />
        </div>
    )
}

export default Navbar