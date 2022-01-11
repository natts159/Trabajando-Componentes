import React from 'react'
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table';
import TopBar from './TopBar';

function ContentWrapper() {
    return (
        <div>
            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <TopBar />

                    <ContentRowTop />

                   
                </div>

                <Table/>

                <Footer />

            </div>

        </div>
    )
}

export default ContentWrapper
