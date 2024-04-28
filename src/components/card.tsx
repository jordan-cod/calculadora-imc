type CardProps = {
    item: {
        id: number;
        title: string;
        subtitle: string;
        icon: string;
        bgcolor: string;
        description: string;
    }

}


function Card(props: CardProps) {

    return (
        <>
            <div className='legend-header' style={{ backgroundColor: props.item.bgcolor }}>
                    <span className='legend-emoji-container'>
                        <img src={`/assets/${props.item.icon}`}></img>
                    </span>
                    <div className='legend-title'>
                        <h1>{props.item.title}</h1>
                        <p>{props.item.subtitle}</p>
                </div>
            </div>
        </>
    )
}

export default Card
