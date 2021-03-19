import Header from 'components/Header/Header';
import './HomePage.scss'
function HomePage() {
    return (
        <div className="app-container">
            <div className="home-header">
                <Header />
            </div>
            <div className="container">
                <div className="feeds">
                    <div className="daily-post">
                    </div>
                    <div className="new-feed">

                    </div>
                </div>

                <div className="follows">
                </div>
            </div>


        </div>
    )
}

export default HomePage;