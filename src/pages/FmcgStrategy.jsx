import { Link } from 'react-router-dom';

// Written from the submitted deck. The brand context is drawn from public
// sources cited in the deck itself. No slides are reproduced.

const features = [
  ['Sport Log', 'A parent logs a training session, extending the existing step-count feature to the three sports the brand already coaches.'],
  ['Pack QR scan', 'A code on pack records the product against the child, extending the existing purchase-points feature.'],
  ['Nutrition guidance', 'Serving guidance for this child at this week of activity, extending the existing balanced-eating feature.'],
  ['Sport rewards', 'Points redeem for equipment and club sessions, so the reward sends the child back to the activity the brand is built on.'],
];

export default function FmcgStrategy() {
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center my-4">
              <span className="badge bg-primary mb-3">Strategy</span>
              <h1 className="fw-bolder text-white mb-3">
                A Consumer Data Strategy That Builds Almost Nothing
              </h1>
              <p className="lead text-white-50 mb-4">
                A case study proposing first-party consumer data capture for an
                FMCG brand. The recommendation was to build a brand layer inside
                a messaging platform the company had already launched, rather
                than a new app, a new account or a new database.
              </p>
              <div className="d-flex gap-2 justify-content-center flex-wrap">
                {['Commercial strategy', 'Competitive analysis', 'Phased delivery', 'Consumer data'].map(
                  (t) => (
                    <span key={t} className="badge bg-secondary">
                      {t}
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
              <i className="bi bi-calendar3 me-1"></i>2026
            </span>
            <span>
              <i className="bi bi-person me-1"></i>Individual submission
            </span>
            <span>
              <i className="bi bi-people me-1"></i>One of six finalists
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
              <h2 className="fw-bold mb-3">The brief and the trap in it</h2>
              <p className="text-muted">
                The prompt asked for a data and technology strategy to improve
                business performance for a malt drink brand. The brand coaches
                youth sport nationwide and has reformulated to a lower sugar
                range, but sells almost entirely through third-party grocery and
                convenience retail. It therefore has no persistent record of who
                buys, how often, or whether the child it coaches is the child in
                the household that drinks the product.
              </p>
              <p className="text-muted mb-0">
                The obvious answer to a brief like this is a new app or a new
                loyalty programme. That is also the answer most likely to be
                declined, because it needs a build budget, a new consent
                relationship and a reason for anyone to install it. I went
                looking for the cheapest thing that could work instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">The recommendation</h2>
              <p className="text-muted">
                The parent company had recently launched a messaging-platform
                account carrying a points engine, reward redemption and an
                existing consent relationship with consumers. The platform, the
                rewards and the permission all existed. What did not exist was a
                brand inside it answering a specific question for a specific
                child.
              </p>
              <p className="text-muted mb-4">
                So the proposal was a brand layer inside that account. No new
                app, no new official account, no new consumer database. Four
                features, each one extending something already live rather than
                introducing a new mechanic:
              </p>
              <div className="row g-3">
                {features.map(([name, detail]) => (
                  <div className="col-md-6" key={name}>
                    <div className="h-100 p-3 bg-white rounded-3 border">
                      <div className="fw-semibold mb-1">{name}</div>
                      <div className="text-muted small">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Why it holds commercially</h2>
              <p className="text-muted">
                The competitive scan was the part that made the argument. Every
                published loyalty mechanic in the category rewards the purchase.
                None of the three competitors I reviewed had a publicly
                disclosed activity platform at all. The parent company&apos;s
                account already rewarded physical activity, and activity is the
                one signal a price promotion cannot buy.
              </p>
              <p className="text-muted mb-0">
                The commercial logic follows from that. The category competes on
                price, and trade promotions are currently measured against
                shipment estimates rather than identified households. A
                first-party household record moves the brand from discounting
                the shelf to targeting value against known behaviour, which
                defends margin instead of buying volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-3">Phases, and what stops them</h2>
              <p className="text-muted mb-4">
                Five phases, each with a goal that has to be met before the next
                one starts. The point of the gates is that they can fail. Each
                dependency is assigned to the function that owns it, and a
                dependency that does not clear stops its phase rather than being
                carried forward as a risk.
              </p>
              <img
                className="img-fluid rounded-3 shadow-sm mb-4"
                src="/imgs/fmcg/phaseGates.png"
                alt="Five phases from foundation to expansion, each with a gate condition that must pass before the next begins"
              />
              <p className="text-muted mb-0">
                Two dependencies sit in Phase 0, before anything is built.
                Whether the brand can build inside the parent account rather
                than standalone, which the entire plan assumes, and whether
                parental consent for a child record clears Thai PDPA and the
                company&apos;s own policy on marketing to children. If the
                consent question does not clear, the programme stops there
                rather than proceeding and handling it later.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Year one is a data year</h2>
              <p className="text-muted">
                The measurement section commits to no commercial target. There
                was no household-level data to set a baseline from, so setting a
                target would have meant inventing one. Baselines are established
                during the pilot and no commercial claim is made until the
                record exists.
              </p>
              <p className="text-muted mb-0">
                Four questions are measured instead. Are families using it, is
                buying behaviour changing among households we can now identify,
                is promotion return improving when measured on real households
                rather than shipment estimates, and is it safe. That last one
                tracks how reliably the nutrition feature refuses medical
                questions, how often a registered dietitian has to be involved,
                and how many parents withdraw consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">
                What I would change if I did it again
              </h2>
              <p className="text-muted">
                The returns are argued rather than sized. The deck claims trade
                promotion efficiency is the largest lever with the highest
                confidence, and then does not put a number against it. Every
                quantified figure in the submission is context, establishing
                that the platform is large and the sourcing programme is real,
                rather than sizing the opportunity being asked for.
              </p>
              <p className="text-muted mb-0">
                A rough public-data estimate would have been better than none.
                Category value, a plausible promotion spend against it, and what
                a few points of efficiency is worth, stated with its assumptions
                visible. Wrong to one significant figure and honest about why
                beats an assertion a panel cannot check. It is the same standard
                I applied to my other work and I did not apply it here.
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
