function Cartwidget ({display, flexDirection, justifyContent, gap}) {
    return (
        <div style={{display: display, flexDirection: flexDirection, justifyContent: justifyContent, gap: gap}}>
            <span>Casas</span>
            <span>Departamentos</span>
            <span>Quintas</span>
            <span>Comerciales</span>
        </div>
    )
}

export default Cartwidget