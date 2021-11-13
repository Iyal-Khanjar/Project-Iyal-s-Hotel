import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='banner-area'>
                <div className='content-area'>
                    <div className='contents'>
                        <span className='title'>Iyal's Hotel</span>
                        <a href="/Rooms"><input className='bookBtn' type="button" value='Book A Room' /></a>
                        <span className='text'>All Our Rooms Is At Discount</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;