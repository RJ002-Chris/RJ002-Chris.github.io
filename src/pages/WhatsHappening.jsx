export default function WhatsHappening() {
  return (
    <>

        {/* Header */}
        <header className="py-5">
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-6">
                <div className="text-center my-5">
                  <h1 className="fw-bolder mb-3">
                    A Study on Cafe Reviews in Roosevelt Neighborhood, Seattle
                  </h1>
                  <p className="lead fw-normal text-muted mb-4">
                    In this project, the goal is to systematically develop processes for data
                    creation, collection, and formation that captures complex context-rich human
                    spatial experiences. Data for this project will be collected using a web crawler
                    in Python. To understand the context of data for communicating them in visual
                    form, we will develop strategies to find creative ways of encoding and
                    visualizing spatial data and deliver the context behind them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Roosevelt Section */}
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/imgs/whatsHappeningInTheTown/rooseveltPreview.jpg"
                  alt="Roosevelt Neighborhood"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Roosevelt Neighborhood and Cafes</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Roosevelt is a neighborhood located in Northeast Seattle and is known for its
                  diverse and socially active community that serves as a transportation and
                  commercial hub. President Roosevelt grew very fond of this neighborhood and since
                  his death in 1919, the local community remembered his Seattle visits. After a
                  naming contest in 1927, the place was officially named "Roosevelt Neighborhood".
                  Being able to experience nature while enjoying a nice cup of coffee has never
                  been easier as the neighborhood boasts more than 15 cafes.
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
                  During our field scouting of the Roosevelt Neighborhood, we noticed several
                  coffee shops around the area. Since Seattle is known as the birthplace of
                  Starbucks and is the city where coffee has turned from a daily necessity to a
                  form of art, we decided to look at coffee shops in Roosevelt Neighborhood. In
                  this project we used a{' '}
                  <a
                    href="https://colab.research.google.com/drive/1p7iOEefWETyoUHPqRtYnXBRtkKuCsug_?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yelp web crawler
                  </a>{' '}
                  to collect reviews from local cafes.
                </p>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/imgs/whatsHappeningInTheTown/cafePreview.jpg"
                  alt="Cafe Preview"
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
                  src="/imgs/whatsHappeningInTheTown/radialDendrogram.png"
                  alt="Radial Dendrogram"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Findings and Conclusion</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Looking at the radial dendrogram, we can see that most of the comments were
                  positive, either complimenting the coffee or the café design, with a few negative
                  comments. The variance in comments could be explained by the wide range of coffee
                  available, such as espressos, cappuccinos, lattes, and americanos. Many different
                  factors go into producing the coffee and the resulting taste, from the bean the
                  café uses to the method of brewing. Each person also has their own personal
                  tastes.
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
                  src="/imgs/whatsHappeningInTheTown/portageBayCafePreview.jpg"
                  alt="Portage Bay Cafe"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Thoughts &amp; Reflection</h2>
                <p className="lead fw-normal text-muted mb-0">
                  I personally have only been to Roosevelt Neighborhood once and remember trying
                  one of the coffee shops there. It was a nice and quiet neighborhood to peacefully
                  enjoy some coffee. During the field scouting for this project, while taking photos
                  to create a sketch, I remembered my past experiences and decided to try a
                  different coffee shop. This was when I got the idea of café reviews, as I was
                  curious to see what people had to say about the coffee in this neighborhood.
                </p>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}
