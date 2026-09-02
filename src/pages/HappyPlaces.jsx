export default function HappyPlaces() {
  return (
    <>

        {/* Header */}
        <header className="py-5">
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-6">
                <div className="text-center my-5">
                  <h1 className="fw-bolder mb-3">A Study on Happy Places, Seattle</h1>
                  <p className="lead fw-normal text-muted mb-4">
                    In this project, observe an emotion in connection to a space in Seattle.
                    People have the ability to understand and share the feelings of another.
                    Revisiting a place with a good memory often brings back a smile to oneself.
                    It also gives a smile to others. Those stories make things in the place
                    meaningful and make us attached to the place in a positive manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* What is a Happy Place */}
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/imgs/happyPlace/balloonaldo.jpg"
                  alt="Happy Place"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">What is a Happy Place?</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Throughout life, we have visited many places and done many things. Sometimes
                  those things that we do or the events that occur mean so much to us that just
                  thinking about that place often puts a smile on our face. That same place could
                  also give a smile to others as they may not share the same experience but share
                  the same place. Here in this project, we will be studying which places in Seattle
                  have been chosen as my peers' "Happy Place", and what made them choose so. This
                  project was inspired by "Imagining the Details: Happy Places and Creative
                  Geovisualization" by Jin-Kyu Jung and Ted Hiebert.
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
                  The data was compiled using the{' '}
                  <a
                    href="https://padlet.com/gunwhaoh/i33k3qtcvgp38mxa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Padlet map service
                  </a>{' '}
                  where students posted about their Happy Place and a description of why it is
                  their Happy Place. The data was then extracted as CSV for processing. The
                  infographic I decided to use is the tree map chart because I wanted it to
                  display the words used by the authors and how they described their Happy Place.
                </p>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/imgs/happyPlace/dataPreview.png"
                  alt="Data Preview"
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
                  src="/imgs/happyPlace/finalInfographic.png"
                  alt="Final Infographic"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Findings and Conclusion</h2>
                <p className="lead fw-normal text-muted mb-0">
                  It was not surprising that most of the Happy Places were within the University
                  District because we spend most of our time here within the school grounds, but
                  each description for their Happy Place was very different. Different people
                  enjoyed different sides of the University District, from studying in the Suzzallo
                  library to playing football at the IMA field. It was very interesting to read
                  each student's story and learn more about them during this assignment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="fw-bolder">Thoughts &amp; Reflection</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Since the only group portion of this assignment was creating the story, my role
                  for the rest of the project was to extract the data, process it and create the
                  infographic. This assignment was not that complicated as we were provided with
                  Google Colab notebooks containing steps on how to process the data and create
                  various infographics. Not only did I learn more about data processing and the
                  different infographics, but I also learned more about my peers and their Happy
                  Place stories.
                </p>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}
