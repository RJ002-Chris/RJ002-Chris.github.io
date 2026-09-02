export default function GrayAnatomy() {
  return (
    <>

        {/* Header */}
        <header className="py-5">
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xxl-6">
                <div className="text-center my-5">
                  <h1 className="fw-bolder mb-3">A Gray Anatomy of Seattle in 2024</h1>
                  <p className="lead fw-normal text-muted mb-4">
                    In this project, the goal is to systematically develop processes for data
                    creation, collection, and formation that captures complex context-rich human
                    spatial experiences. The data will be manually collected and visualized using a
                    bar chart in Python. To understand the context of data for communicating them
                    in visual form, we will develop strategies to find creative ways of encoding
                    and visualizing spatial data and deliver the context behind them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Seattle Landscape */}
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/imgs/grayAnatomy/seattleGraySky.jpg"
                  alt="Seattle Gray Sky"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">The Seattle Landscape</h2>
                <p className="lead fw-normal text-muted mb-0">
                  The sky is usually an endless canvas filled with various colors that change
                  throughout the year such as the cloudless blue skies in summer or the eerie
                  greys during cold winter, but that is not the case here in Seattle as we seem
                  to get a gloomy grey forecast all year round. In this project we visualize the
                  color change of the fountain area at the University of Washington. The area has
                  the fountain as its centerpiece and on a nice day, Mount Rainier can be seen in
                  the background.
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
                  Over the period of 3 days, the four of us took a set of photos at different
                  periods of time from morning until evening. We then compiled the folders in our
                  Google Drive where we processed them through a{' '}
                  <a
                    href="https://colab.research.google.com/drive/1OsGunjEARIahLbE47lr_3ysGNK541QGO?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colab notebook
                  </a>
                  . I created a for-loop from the given notebook to make the process easier and
                  saved the processed images to a shared folder.
                </p>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/imgs/grayAnatomy/processedImagePreview.png"
                  alt="Processed Image Preview"
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
                  src="/imgs/grayAnatomy/finalInfographicPreview.png"
                  alt="Final Infographic"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Findings and Conclusion</h2>
                <p className="lead fw-normal text-muted mb-0">
                  As expected, most of the colors seen were mostly grey, with some dark toned
                  colors. The bars arranged by date and time make it easier to observe the change
                  in colors throughout the day. Comparing the color schemes, there isn't much
                  difference other than the one day we had good weather and a sunny sky. It seems
                  that the color appearing most is grey with some shades of brown. While we were
                  lucky to have good weather on that one day, this confirms that Seattle mostly
                  sees a grey sky throughout the whole day.
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
                  src="/imgs/grayAnatomy/closingPicture.jpg"
                  alt="Closing Picture"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Thoughts &amp; Reflection</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Before we started taking photos, I had already expected grey colors to be the
                  most prominent on the infographic, but luckily we had some good sunny days that
                  gave us beautiful blue skies, so our infographic wasn't entirely monotone.
                  Creating the for-loops to process the images made it way easier and more
                  efficient. I believe this project went very smoothly and that's all thanks to the
                  great communication we had among the team.
                </p>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}
