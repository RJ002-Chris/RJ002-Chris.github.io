export default function WelcomeToSeattle() {
  return (
    <>

        {/* Header */}
        <header className="py-5">
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-6">
                <div className="text-center my-5">
                  <h1 className="fw-bolder mb-3">
                    Exploring Popular Destinations through Alaska Airlines
                  </h1>
                  <p className="lead fw-normal text-muted mb-4">
                    In this project, the aim is to systematically develop processes for data
                    creation, collection, and formation that captures complex context-rich human
                    spatial experiences, learn to create Sankey diagrams in Python and understand
                    the context of data for communicating them in visual form. Through this study
                    we will find creative ways of encoding and visualizing spatial data to deliver
                    the context behind them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Why Alaska Airlines */}
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/imgs/welcomeToSeattle/alaskaAirlines.jpg"
                  alt="Alaska Airlines"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Why Alaska Airlines?</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Alaska Airlines was founded in 1932 in Anchorage, AK, but after 2 decades of
                  operations, they decided to move their headquarters to Paine Field, an airport
                  north of Seattle. So, despite its name, Alaska Airlines have been operating in
                  Seattle for the past 7 decades, now flying to more than 120 destinations in five
                  countries. Alaska Airlines and their robust number of flights has allowed for more
                  direct flight routes to and from Seattle. With the increasing popularity, the city
                  of Seattle has also seen an increase in tourism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="fw-bolder">Data Collection &amp; Method</h2>
                <p className="lead fw-normal text-muted mb-0">
                  The data was collected from{' '}
                  <a href="https://openflights.org/#">Open Flights</a>, a website that displays
                  route maps for almost every airplane and airport in the world. After filtering to
                  Seattle–Tacoma International Airport and only Alaska Airlines flights, we were
                  able to download the dataset from the website. We then collaborated through a
                  shared Google Colab notebook to process and visualize the data.
                </p>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/imgs/welcomeToSeattle/dataProcessPreview.png"
                  alt="Data Process Preview"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Findings */}
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/imgs/welcomeToSeattle/infographicPreview.png"
                  alt="Final Infographic"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Findings and Conclusion</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Our process of analyzing and producing the visualization has allowed us to explore
                  more about what destinations are most popular from Seattle, which might be
                  supported by Alaska Airlines having more planes available to fly to that
                  destination. Although having moved their headquarters from Anchorage to Seattle,
                  they still maintain a strong connection with lots of flights available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-first order-lg-last">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/imgs/welcomeToSeattle/seaTacAirport.jpg"
                  alt="Sea-Tac Airport"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Thoughts &amp; Reflection</h2>
                <p className="lead fw-normal text-muted mb-0">
                  The process of finding information definitely shaped our topic, as we took quite a
                  bit of time to find enough information to be able to use for our visualization.
                  Working with real-world flight data gave us valuable insight into how spatial data
                  can tell compelling stories when visualized effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}
