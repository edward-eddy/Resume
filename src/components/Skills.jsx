import ProgressBar from "./skillMeter"

export default function Skills() {
    return (
    <>
    <div className="d-flex flex-wrap align-items-center justify-content-center">
        <div className='skills d-flex flex-column justify-content-around align-items-center col-12 text-light py-5'>
            <div className='d-flex col-12 justify-content-center'>
                <h1>Skills</h1>
            </div>
            <div className='d-flex flex-column flex-wrap col-9 text-md-center container'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et eligendi sed laboriosam id ullam cupiditate, perspiciatis esse obcaecati pariatur voluptatem dolorum quisquam fugiat soluta mollitia consequuntur? Placeat, cupiditate mollitia?</p>
                <div className="col-md-6 col-12"></div>
            </div>
            <div className="d-flex flex-md-row flex-column col-10 text-center p-lg-5 py-md-5 fs-6 fw-medium">
                <div className="d-flex flex-column align-items-center col-md-6 col-12 p-5">
                    <p>My Focus</p>
                    <div className="col-10">
                        <hr className="ms-md-5 mt-0"></hr>
                    </div>
                    <div className="text-start px-5 mx-lg-4 mx-5">
                        <p>Backend Development</p>
                        <p>Full Stack Development</p>
                        <p>Web Development</p>
                        <p>Responsive Web Applications</p>
                    </div>
                </div>
                <div className="d-flex flex-column col-md-6 px-3">
                    <ProgressBar tag="HTML5" percent="80"/>
                    <ProgressBar tag="CSS3" percent="70"/>
                    <ProgressBar tag="Bootstrap" percent="80"/>
                    <ProgressBar tag="Tailwind" percent="40"/>
                    <ProgressBar tag="Node Js" percent="60"/>
                    <ProgressBar tag="MongoDB" percent="50"/>
                    <ProgressBar tag="Angular" percent="60"/>
                    <ProgressBar tag="React JS" percent="70"/>
                </div>
                </div>
        </div>
    </div>
    </>
    )
}