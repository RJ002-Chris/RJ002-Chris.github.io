import { Link } from 'react-router-dom';

// Figures come from the exercise notebooks. The threshold table is from the
// public Home Credit dataset. No client data, schema or field names appear here.

const thresholds = [
  ['0.1', '840', '1.4%', '0.7%'],
  ['0.2', '8,255', '13.4%', '1.5%'],
  ['0.3', '20,138', '32.7%', '2.3%'],
  ['0.4', '31,183', '50.7%', '2.9%'],
  ['0.5', '40,885', '66.5%', '3.8%'],
  ['0.6', '49,154', '79.9%', '4.9%'],
  ['0.7', '55,629', '90.4%', '6.0%'],
];

export default function CreditRisk() {
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center my-4">
              <span className="badge bg-primary mb-3">Modelling</span>
              <h1 className="fw-bolder text-white mb-3">
                Credit Risk Modelling, and Four Errors I Made
              </h1>
              <p className="lead text-white-50 mb-4">
                A timed default-prediction exercise on an anonymised lender
                sample. The model ran and scored an AUC. Going back through it
                afterwards, I found four methodological problems, one of which
                meant the model never saw most of its own input data.
              </p>
              <div className="d-flex gap-2 justify-content-center flex-wrap">
                {['Python', 'pandas', 'scikit-learn', 'Credit risk'].map((t) => (
                  <span key={t} className="badge bg-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-3 bg-light border-bottom">
        <div className="container px-4 px-lg-5">
          <div className="d-flex flex-wrap gap-4 justify-content-center text-muted small fw-semibold">
            <span>
              <i className="bi bi-calendar3 me-1"></i>2026
            </span>
            <span>
              <i className="bi bi-person me-1"></i>Sole analyst
            </span>
            <span>
              <i className="bi bi-stopwatch me-1"></i>Built under time pressure
            </span>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">The task</h2>
              <p className="text-muted">
                Two files. An application table of roughly 133,000 records and
                56 fields covering alternative scores, credit bureau history and
                device signals, and a separate repayment monitoring table with
                one row per instalment.
              </p>
              <p className="text-muted mb-0">
                No target column was provided. Defining default was part of the
                exercise. I pivoted the monitoring table to one row per
                borrower, took the maximum days past due across the first four
                instalments, and flagged anything above thirty days. That gives
                an early-default definition, which is the one a lender can act
                on quickly, at the cost of missing borrowers who fail later.
                46,315 borrowers had monitoring records, with a default rate of
                8.7 percent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">What I got wrong</h2>

              <div className="mb-4 pb-4 border-bottom">
                <div className="fw-semibold mb-2">
                  1. My missing value handler destroyed the data it was meant to
                  repair
                </div>
                <p className="text-muted mb-2">
                  Writing quickly, I handled nulls in numeric columns by
                  replacing the column with an indicator for whether a value was
                  present. That is not imputation. It throws away every real
                  value in the column.
                </p>
                <p className="text-muted mb-0">
                  Forty-seven of fifty-six columns contained at least one null,
                  so this hit almost the entire feature set. Roughly forty
                  bureau and score fields were reduced to presence flags. The
                  model never saw a credit limit, an interest rate or a
                  days-past-due count. It saw only which fields were populated,
                  and reached an AUC of 0.692 on that alone. There is something
                  real underneath that, since a sparse bureau record is itself a
                  thin-file signal, but it was an accident rather than a design
                  choice, and I only understood the number after I found the
                  bug.
                </p>
              </div>

              <div className="mb-4 pb-4 border-bottom">
                <div className="fw-semibold mb-2">
                  2. I trained on survivors and did not say so
                </div>
                <p className="text-muted mb-0">
                  Joining applications to monitoring records kept 46,315 of
                  roughly 133,000 rows and dropped 65 percent of the population.
                  Declined applicants never generate repayment records, so the
                  surviving sample is conditioned on having been approved. I did
                  drop the approval decision as a feature, but that does not
                  undo the conditioning, because the selection already happened
                  when the rows were dropped. The model estimates default among
                  people who were approved, while the actual use case is scoring
                  everyone who applies. This is the reject inference problem, and
                  it should have been stated as a limitation whether or not I
                  had time to correct it.
                </p>
              </div>

              <div className="mb-4 pb-4 border-bottom">
                <div className="fw-semibold mb-2">
                  3. I reported metrics at a threshold I never set
                </div>
                <p className="text-muted mb-0">
                  With balanced class weights and a default 0.5 cutoff, the
                  model flagged 37.8 percent of the test set as defaults against
                  a true rate of 8.7 percent. The precision of 0.15 I reported
                  is an artefact of that cutoff, not a property of the model. I
                  had noticed, because the notebook contains two cells that
                  exist only to compare those numbers and a commented-out
                  threshold line, but I ran out of time and reported the
                  unadjusted figures anyway.
                </p>
              </div>

              <div>
                <div className="fw-semibold mb-2">
                  4. I looked at the whole dataset before splitting it
                </div>
                <p className="text-muted mb-0">
                  Feature correlations against the target and categorical
                  encoding were both computed across all rows, including the
                  ones that later became the test set. Small next to the first
                  two, but it is the kind of thing that quietly inflates a
                  result and it is avoidable by doing the split first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">What the corrected version does</h2>
              <p className="text-muted mb-4">
                The same pipeline, run properly against public lending data,
                looks different in four specific ways.
              </p>
              <ul className="project-outcomes">
                <li>
                  Numeric nulls are filled with the column median, and
                  missingness is added as a separate flag where it looks
                  informative, so the signal in the gap is kept without losing
                  the values.
                </li>
                <li>
                  Sentinel values are checked for rather than assumed away. One
                  public dataset encodes unknown employment length as 365243
                  days, roughly a thousand years, which is invisible to a null
                  check and poisons any mean or median that touches it.
                </li>
                <li>
                  The split happens before any inspection of the target, so
                  nothing about the test set informs the features.
                </li>
                <li>
                  The output is a cutoff table rather than a single score, since
                  the number that matters to a lender is where you draw the
                  line, not the AUC.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">The output that actually matters</h2>
              <p className="text-muted mb-4">
                An AUC of 0.756 tells a credit committee nothing they can act
                on. This does. Each row is a possible score cutoff, how many
                applicants it approves, and what share of those approvals go
                bad. Moving the cutoff from 0.3 to 0.5 doubles approvals and
                nearly doubles the default rate among them. Which trade is
                correct depends on margin and appetite, not on statistics.
              </p>

              <img
                className="img-fluid rounded-3 shadow-sm mb-4"
                src="/imgs/creditRisk/thresholdTradeoff.png"
                alt="Line chart showing approval rate and default rate rising together as the score cutoff loosens"
              />

              <div className="table-responsive">
                <table className="table table-sm align-middle bg-white">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Cutoff</th>
                      <th scope="col" className="text-end">
                        Approved
                      </th>
                      <th scope="col" className="text-end">
                        Approval rate
                      </th>
                      <th scope="col" className="text-end">
                        Default rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {thresholds.map((r) => (
                      <tr key={r[0]}>
                        <td>{r[0]}</td>
                        <td className="text-end">{r[1]}</td>
                        <td className="text-end">{r[2]}</td>
                        <td className="text-end">{r[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted small mb-0">
                Public Home Credit sample, 61,503 held-out applications,
                gradient boosted model at AUC 0.756.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">What I took from it</h2>
              <p className="text-muted">
                The errors were not conceptual. I knew what median imputation
                was and I had already produced the cutoff table in earlier work.
                They happened because I was writing fast and a generic cleaning
                loop looked reasonable at the time it was typed. That is a
                working-practice failure, not a knowledge failure, and the fix
                is procedural: check what a cleaning step did to the data before
                moving on, and state the population a model was fitted on before
                reporting any number about it.
              </p>
              <p className="text-muted mb-0">
                The part worth keeping is that the review happened at all. An
                AUC of 0.692 is not obviously wrong. It is exactly the kind of
                mediocre-but-plausible result that gets accepted and shipped.
              </p>
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
