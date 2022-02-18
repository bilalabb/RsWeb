import Slide from 'react-reveal/Slide';

export default function AboutUs() {
    return (
        <div>
            <section className="About-page-section">
                <Slide top>
                    <div className="header-about">
                        <h1>About Us</h1>
                        <div className="bottom-border" />
                        <p>
                            RSTECH is the technology arm of Reactive Space.
                        </p>
                    </div>
                </Slide>
                <div className="overly" />
            </section>
            <section className="paragraph2-section">
        <div className="container">
          <div className="row">
            <div className="paragraph2">
              <Slide top>
                <p>
                  Since 2014, Reactive Space is a UAE-based blockchain development company that has provided high-technology solutions to businesses & Entrepreneurs. Reactive Space is specialized in Blockchain services, Data Science, Artificial Intelligence, Virtual Reality, Augmented Reality, and Business Analytics. After a successful brand building, we have launched our Technology based  IT company in Pakistan "Reactive Space Technology”.</p>
                <p>RS Technology is a Pakistan-based specialized value-added reseller. We aim to provide the best technology in Pakistan. We are ideally positioned to serve Pakistan’s technology market as a VAR of products and solutions. Our respected partners are Yealink, DrayTek, Yeastar, Milesight, 2N, Akuvox, XCALLY, Engenius.</p>
              </Slide>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
