import cv from "../assets/Profile.pdf"

export default function AboutMe() {
    return (
    <>
    <div className='aboutMe d-flex flex-md-row flex-column justify-content-around col-12 my-4'>
        <div className='d-flex col-md-4 col-12 align-items-start justify-content-center '>
            <h1>About Me</h1>
        </div>
        <div className='d-flex flex-column flex-wrap col-md-8 col-12 align-items-start container'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore natus qui pariatur dolores nihil dignissimos quos illo suscipit at id nesciunt, eos, nobis asperiores sapiente recusandae architecto, rerum eius iusto.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore natus qui pariatur dolores nihil dignissimos quos illo suscipit at id nesciunt, eos, nobis asperiores sapiente recusandae architecto, rerum eius iusto.</p>
        <a className="btn btn-outline-dark mt-3" href={cv} download><i className="fa fa-download"></i> Download Resume</a>
        </div>
    </div>
    </>
    )
}