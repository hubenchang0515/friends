import "./Background.css"

export default function Background() {
    const layers = 5;
    return (
        <div className="background">
            {
                Array(layers).fill(0).map((_, layer) => {
                    return Array(32 * (layers - layer)).fill(0).map((_, index) => {
                        return <span key={index} style={{ width:`${32/(layers - layer)}px`, height:`${32/(layers - layer)}px`, animationDuration:`${(5 + Math.random() * 5) * (layers - layer)}s`}}/>
                    })
                })
            }
        </div>
    )
}