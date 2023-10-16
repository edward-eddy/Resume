import PortfolioItem from "./portfolioItem"


export default function AboutMe() {
    return (
    <>
    <div className='portfolio d-flex flex-column justify-content-around col-12 pt-2'>
        <div className='d-flex col-md-3 col-12 ms-5 mb-3'>
            <h1>Portfolio</h1>
        </div>
        <div className='d-flex flex-md-row flex-column flex-wrap w-100 align-items-center justify-content-center container'>
            <PortfolioItem title="First Project" color="gray" link="#"/>
            <PortfolioItem title="Second Project" color="lightgray" link="#"/>
            <PortfolioItem title="Third Project" color="gray" link="#"/>
            <PortfolioItem title="Fourth Project" color="lightgray" link="#"/>
            <PortfolioItem title="Fifth Project" color="gray" link="#"/>
            <PortfolioItem title="Sixth Project" color="lightgray" link="#"/>
        </div>
    </div>
    </>
    )
}