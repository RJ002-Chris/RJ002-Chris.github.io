import { Link } from 'react-router-dom';

// Every figure on this page comes from the collection workbook and the
// presented deck. Nothing is estimated or reconstructed.

const rows = [
  ['1', 'Chain Hotel', 'Long', 14, 14, 90.0, 88.9, '-1.1', 4],
  ['2', 'Chain Hotel', 'Long', 15, 15, 91.6, 90.4, '-1.2', 3],
  ['3', 'Guesthouse / B&B', 'Long', 3, 3, 50.4, 60.0, '+9.6', 5],
  ['4', 'Hostel', 'Long', 9, 6, 68.7, 55.8, '-12.9', 4],
  ['5', 'Independent Hotel', 'Long', 4, 4, 60.7, 35.3, '-25.4', 6],
  ['6', 'Independent Hotel', 'Short', 1, 2, 27.8, 32.4, '+4.6', 0],
  ['7', 'Independent Hotel', 'Long', 4, 3, 39.6, 38.9, '-0.7', 2],
  ['8', 'Serviced Apartment', 'Short', 8, 7, 66.4, 68.4, '+2.0', 0],
  ['9', 'Serviced Apartment', 'Short', 11, 10, 70.7, 81.8, '+11.1', 0],
  ['10', 'Hostel', 'Short', 3, 2, 44.7, 58.4, '+13.7', 0],
];

export default function ContentAudit() {
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center my-4">
              <span className="badge bg-primary mb-3">Data Audit</span>
              <h1 className="fw-bolder text-white mb-3">
                Cross-Platform Content Audit
              </h1>
              <p className="lead text-white-50 mb-4">
                A hand-collected comparison of ten Bangkok property listings
                across two travel platforms, built to answer whether one
                platform&apos;s content was weaker than the other&apos;s. The
                answer was no, and the more useful finding was somewhere else.
              </p>
              <div className="d-flex gap-2 justify-content-center flex-wrap">
                {['Excel', 'Study design', 'Manual collection', 'Scoring rubric'].map(
                  (tag) => (
                    <span key={tag} className="badge bg-secondary">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-3 bg-light border-bottom">
        <div className="container px-4 px-lg-5">
          <div className="d-flex flex-wrap gap-4 justify-content-center text-muted small fw-semibold">
            <span>
              <i className="bi bi-calendar3 me-1"></i>August 2026
            </span>
            <span>
              <i className="bi bi-person me-1"></i>Sole analyst, design to
              presentation
            </span>
            <span>
              <i className="bi bi-easel me-1"></i>Presented and defended live
            </span>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">The question</h2>
              <p className="text-muted">
                Two large travel platforms list many of the same Bangkok
                properties. Neither has a systematic, property-level view of
                where its own content is weaker than the other&apos;s. I set out
                to test that from the outside, using only what a logged-out
                visitor can see.
              </p>
              <p className="text-muted mb-0">
                Content matters commercially because it is what happens after
                the marketing spend. A listing that overstates what a property
                has still consumes traffic that has already been paid for, and
                the cost arrives later, at check-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">How I built the instrument</h2>

              <p className="text-muted">
                Both platforms were searched on identical fixed parameters:
                Bangkok, one night on a set date, two adults, THB, English,
                logged out. Holding the search constant means any difference
                that shows up is content rather than personalisation.
              </p>

              <p className="text-muted">
                Completeness is a proxy scored from three visible fields:
                gallery images, a fixed fifteen-item property-level amenity
                checklist, and the length of the short description block. Each
                component is capped and the three are averaged.
              </p>

              <p className="text-muted mb-4">
                The scoring rules were written before collection began, because
                the ambiguous cases are where a rubric silently becomes
                whatever the analyst wants that day. Count the facility, not the
                entry, so four parking lines score one. An amenity explicitly
                struck through scores zero, because that is data rather than a
                blank. A coffee shop is not a restaurant. Daily housekeeping is
                not a laundry service. Twenty-four-hour security is not a
                twenty-four-hour front desk. Proximity items are location, not
                facilities.
              </p>

              <div className="border-start border-4 border-primary ps-3 mb-4">
                <p className="mb-0 text-muted">
                  A defect is defined narrowly. It is a claim in a description
                  that neither platform&apos;s structured facilities list
                  supports. A claim that one platform&apos;s own data misses but
                  the other confirms is recorded separately as a structured-data
                  gap, not a defect, because those two things need to go to
                  different teams.
                </p>
              </div>

              <p className="text-muted mb-0">
                Defects were counted on both platforms. Searching only one side
                would have produced a finding that was an artefact of where I
                looked. No scraping was used, since systematic scraping of a
                competitor carries terms-of-use exposure I would not propose in
                a production system, and so did not want underneath the
                evidence either.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">
                Where the instrument had to be corrected
              </h2>
              <p className="text-muted mb-4">
                Two scoring components were rebuilt mid-collection because the
                first version of each could not have produced a finding either
                way.
              </p>

              <div className="mb-4">
                <div className="fw-semibold mb-1">
                  The image threshold was wrong
                </div>
                <p className="text-muted mb-0">
                  Full coverage was originally set at twenty images. Every
                  property in the sample exceeded it, so the component scored
                  the same for everyone and measured nothing. The threshold was
                  raised to seventy-five so the component could discriminate.
                </p>
              </div>

              <div>
                <div className="fw-semibold mb-1">
                  A component was scored out entirely
                </div>
                <p className="text-muted mb-0">
                  Room types with images sat at one hundred percent on every
                  property on both platforms across the first five collected. A
                  component that is constant carries no information, so it was
                  removed from the score. The underlying room-type counts are
                  still recorded in the workbook, just not scored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">The hypothesis did not survive</h2>
              <p className="text-muted">
                Mean completeness came out at 61.1 against 61.0. Each platform
                was richer on five of the ten properties. There was no content
                richness gap in this sample, which is the opposite of what I set
                out expecting to find.
              </p>
              <p className="text-muted mb-4">
                The comparison was still worth having, because it showed where
                the two platforms did diverge. On six properties the largest
                difference was the written description and on four it was
                images. Structured amenity data was never the largest difference
                on any of the ten. The divergence lives in the free text, which
                is the layer nobody is checking.
              </p>
              <img
                className="img-fluid rounded-3 shadow-sm"
                src="/imgs/contentAudit/gapComponent.png"
                alt="Bar chart showing description was the largest gap on six properties, images on four, amenities on none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">The finding that replaced it</h2>
              <p className="text-muted">
                Reading the descriptions rather than comparing the amenity
                lists, two distinct description templates were visible. A long
                one running eleven to sixteen fixed sections and 1,500 to 2,500
                promotional words, and a short one of two or three plain
                sections and 100 to 250 words.
              </p>
              <p className="text-muted mb-4">
                The difference that matters is not length. It is whether the
                template will write a section it cannot ground. The short
                template hedges when it does not know which rooms have what. The
                long template fills the section either way.
              </p>

              <img
                className="img-fluid rounded-3 shadow-sm mb-4"
                src="/imgs/contentAudit/defectsByTemplate.png"
                alt="Bar chart showing 24 unsupported claims on long-template listings and none on short-template listings"
              />

              <p className="text-muted">
                Six of six long-template listings carried at least one claim no
                source supported, twenty-four claims in total, split into
                eighteen outright fabrications and six mischaracterisations.
                Zero of four short-template listings carried any.
              </p>

              <h3 className="h5 fw-bold mt-4 mb-3">
                Testing the obvious objection
              </h3>
              <p className="text-muted mb-3">
                The first counter-explanation is that the long template simply
                writes more when there is more data to write from. The sample
                says otherwise. One property with eleven real facilities
                received the short template and recorded zero defects. Another
                with three facilities received the long template and recorded
                five. If data volume drove template selection, those two would
                be the other way round.
              </p>
              <p className="text-muted mb-0">
                The second counter-explanation is that the clean listings are
                just small properties with nothing to embellish. Two hostels in
                the sample settle it. The one on the long template, with nine
                facilities, carried four defects. The one on the short template,
                with three facilities, carried none.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-3">The collected data</h2>
              <p className="text-muted mb-4">
                All ten properties. Amenities are scored out of fifteen.
                Completeness is the three-component proxy. Gap is the competitor
                score minus the first platform&apos;s score.
              </p>
              <div className="table-responsive">
                <table className="table table-sm align-middle bg-white">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Property type</th>
                      <th scope="col">Template</th>
                      <th scope="col" className="text-end">
                        Amen. A
                      </th>
                      <th scope="col" className="text-end">
                        Amen. B
                      </th>
                      <th scope="col" className="text-end">
                        Compl. A
                      </th>
                      <th scope="col" className="text-end">
                        Compl. B
                      </th>
                      <th scope="col" className="text-end">
                        Gap
                      </th>
                      <th scope="col" className="text-end">
                        Defects
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r[0]}>
                        <td>{r[0]}</td>
                        <td>{r[1]}</td>
                        <td>
                          <span
                            className={`badge ${
                              r[2] === 'Long' ? 'bg-primary' : 'bg-secondary'
                            }`}
                          >
                            {r[2]}
                          </span>
                        </td>
                        <td className="text-end">{r[3]}</td>
                        <td className="text-end">{r[4]}</td>
                        <td className="text-end">{r[5].toFixed(1)}</td>
                        <td className="text-end">{r[6].toFixed(1)}</td>
                        <td className="text-end">{r[7]}</td>
                        <td className="text-end fw-bold">{r[8]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Two worked examples</h2>

              <div className="mb-4">
                <div className="fw-semibold mb-1">
                  A hostel described as a sports destination
                </div>
                <p className="text-muted mb-0">
                  The generated description promised a swimming pool, a tennis
                  court, on-site basketball and hiking trails with hidden
                  waterfalls. The platform&apos;s own recreation section for that
                  property listed, in full, garden, hiking, outdoor recreational
                  features, ticket services and tours. No pool. No tennis court.
                  No basketball court.
                </p>
              </div>

              <div>
                <div className="fw-semibold mb-1">
                  One pool, three descriptions, same document
                </div>
                <p className="text-muted mb-0">
                  A chain hotel&apos;s description called the same pool indoor in
                  one section, rooftop in another and outdoor in a third. The
                  competitor&apos;s structured data independently confirmed an
                  indoor pool. That is a contradiction rather than a
                  missing-data problem, and no amount of incomplete structured
                  data explains a document disagreeing with itself. It is also
                  why the argument does not need all twenty-four claims. It
                  needs the six that are self-contradictory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">What I would build</h2>
              <p className="text-muted mb-4">
                Four steps, only two of which need a model. A model reads the
                description and extracts every facility it mentions with its
                qualifier, because keyword search cannot separate an indoor pool
                from a rooftop pool when both contain the word pool. Rule-based
                matching then checks each claim against the platform&apos;s own
                facilities data and returns supported, not supported, or
                contradicted. Only the failures are looked up on the competitor,
                which is roughly a tenth of the volume and the smallest legal
                exposure. Whatever survives is ranked by traffic, severity and
                ease of fix.
              </p>
              <p className="text-muted mb-4">
                The competitor column earns its place. On five properties,
                checking against internal data alone would have flagged a claim
                that was in fact true and merely undocumented. Without the
                second column those are indistinguishable from invented claims,
                and they would be routed to the wrong team.
              </p>
              <p className="text-muted mb-0">
                The output is a weekly list sized to what one team can clear,
                not a report. A list of ten thousand problems nobody has time to
                fix is worse than no list at all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">What this does not show</h2>
              <ul className="project-outcomes">
                <li>
                  Ten properties, one city, one competitor, one collection date,
                  five property types. This is exploratory and does not
                  generalise.
                </li>
                <li>
                  I can see which template a listing has. I cannot see what
                  selects it. Two property types appeared on both templates in
                  this sample.
                </li>
                <li>
                  Everything is measured against the published record, not the
                  internal one. Run against a full internal catalogue, the false
                  positive rate should fall.
                </li>
                <li>
                  Conversion cannot be observed from outside, so no conversion
                  effect is claimed. It is proposed as a controlled test with
                  stop conditions on accuracy complaints, partner complaints and
                  cancellation rates.
                </li>
                <li>
                  Completeness is a proxy assembled from three visible fields.
                  It is not any platform&apos;s internal content standard, and
                  the thresholds are judgement calls.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container px-4 px-lg-5 text-center">
          <Link to="/portfolio" className="btn btn-outline-secondary">
            Back to portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
