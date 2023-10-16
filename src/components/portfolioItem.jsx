
export default function portfolioItem(props){
    return (
        <>
        <div className="col-md-3 col-10 m-4 py-xs-5 py-md-auto px-xs-0" style={{backgroundColor:`${props.color}`, textAlign:"center", textWrap:"nowrap", padding: "9% 5%", opacity:".9"}}>
            <a href={props.link} className="portoLink pb-3">
                {props.title}
            <div className="col-12">
                <hr className="mb-0"/>
            </div>
            </a>
        </div>
        </>
    )
}