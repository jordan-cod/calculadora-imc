type ResultProps = {
    result: {
        id: number;
        title: string;
        subtitle: string;
        icon: string;
        bgcolor: string;
        description: string;
        youImc?: number
    }

}

function Result(props: ResultProps) {

    return (
        <>
            <div className='card' style={{ backgroundColor: props.result.bgcolor }}>
                <div className='card-header'>
                    <span className='card-emoji-container'>
                        <img src={`/assets/${props.result.icon}`}></img>
                    </span>
                    <div className='card-title'>
                        <h1>{props.result.title}</h1>
                        <p>{props.result.subtitle}</p>
                    </div>
                    <div className="card-result">
                        <span>Seu IMC</span>
                     {props.result.youImc}
                    </div>
                </div>
                <p className='card-description'>{props.result.description}</p>
            </div>
        </>
    )
}

export default Result

