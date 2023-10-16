import Button from 'react-bootstrap/Button';

export default function Intro() {
    return (
    <>
    <div className="intro col-12 d-flex flex-column align-content-end justify-content-center flex-wrap">
        <div className="d-flex flex-column col-md-5 col-12 text-light align-items-center ">
            <h1>Edward Sameh</h1>
            <p className='fs-4'>Software Engineer</p>
            <p>MEAN & MERN Stack Developer</p>
            <Button variant="outline-light" className='mt-5'>Contact Me</Button>{' '}
        </div>
    </div>
    </>
    )
}