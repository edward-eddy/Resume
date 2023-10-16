import Button from 'react-bootstrap/Button';


export default function footer() {
    return (
        <>
            <div className="footer px-5 py-3 d-flex flex-sm-row flex-column  justify-content-sm-between align-items-center bg-dark text-light">
                <div className="d-flex flex-column col-sm-4">
                    <h6 className="text-uppercase">Get in touch</h6>
                    <div className="ms-3 d-flex flex-column">
                        <a
                            href="mailto:edwardsameh99@gmail.com"
                            className="portoLink text-light fw-lighter fst-italic"
                        >
                            <i className="fa-solid fa-envelope me-2"></i>
                            <small>edwardsameh99@gmail.com</small>
                        </a>
                        <a
                            href="tel:123-456-7890"
                            className="portoLink text-light fw-lighter fst-italic "
                        >
                            <i className="fa-solid fa-address-book me-2"></i>
                            <small>123-456-7890</small>
                        </a>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center col-md-2 col-6 my-xs-2 my-auto">
                <Button variant="outline-light">Contact Me</Button>{' '}
                </div>
                <div className="d-flex flex-column justify-content-around align-items-end col-sm-4">
                    <div className="d-flex gap-3">
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div>
                        <small>Copyright © 2023.</small>
                    </div>
                </div>
            </div>
        </>
    );
}
