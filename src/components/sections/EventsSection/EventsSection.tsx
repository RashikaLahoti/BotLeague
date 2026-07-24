import React from "react";

const orb = "font-orbitron";
const rob = "font-roboto";

interface CompetitionCardProps {
  title: string;
  subtitle: string;
  status?: string;
}

interface UpcomingEvent {
  title: string;
  date: string;
  location: string;
  category: string;
}

interface PastResult {
  title: string;
  subtitle: string;
}

/* =========================================================
   BRACKET SLOT
========================================================= */

function BracketSlot() {
  return <div className="h-[34px] w-[102px] rounded-[5px] bg-[#4A4A4A]" />;
}

/* =========================================================
   BRACKET DIAGRAM
========================================================= */

function BracketDiagram() {
  return (
    <div className="relative h-[245px] w-[365px]">
      {/* =================================================
          CONNECTING LINES
      ================================================== */}

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 365 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ---------------------------------------------
            ROUND 1 → ROUND 2
        ---------------------------------------------- */}

        {/* Top pair */}
        <path
          d="M102 30 H116 V60 H131"
          stroke="#FF4C4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M102 90 H116 V60"
          stroke="#FF4C4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom pair */}
        <path
          d="M102 150 H116 V180 H131"
          stroke="#FF4C4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M102 210 H116 V180"
          stroke="#FF4C4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ---------------------------------------------
            ROUND 2 → FINAL
        ---------------------------------------------- */}

        {/* Top Round 2 slot → Final */}
        <path
          d="M233 60 H247 V120 H262"
          stroke="#FF4C4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom Round 2 slot → Final */}
        <path
          d="M233 180 H247 V120"
          stroke="#FF4C4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* =================================================
          ROUND 1 — 4 SLOTS
      ================================================== */}

      <div className="absolute left-0 top-[13px]">
        <BracketSlot />
      </div>

      <div className="absolute left-0 top-[73px]">
        <BracketSlot />
      </div>

      <div className="absolute left-0 top-[133px]">
        <BracketSlot />
      </div>

      <div className="absolute left-0 top-[193px]">
        <BracketSlot />
      </div>

      {/* =================================================
          ROUND 2 — 2 SLOTS
      ================================================== */}

      <div className="absolute left-[131px] top-[43px]">
        <BracketSlot />
      </div>

      <div className="absolute left-[131px] top-[163px]">
        <BracketSlot />
      </div>

      {/* =================================================
          FINAL — 1 SLOT
      ================================================== */}

      <div className="absolute left-[262px] top-[103px]">
        <BracketSlot />
      </div>
    </div>
  );
}

/* =========================================================
   LIVE COMPETITION CARD
========================================================= */

function CompetitionCard({ title, subtitle, status }: CompetitionCardProps) {
  return (
    <div className="h-[403px] w-full rounded-[8px] border border-[#444444] bg-[#1A1919] px-[17px] pt-[22px]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className={`${rob} text-[25px] font-medium leading-[30px] text-white`}>{title}</h3>

          <p className={`${rob} text-[20px] leading-[24px] text-[#777777]`}>{subtitle}</p>
        </div>

        {status && (
          <span
            className={`${rob} rounded-[5px] bg-[#FF4C4C] px-[10px] py-[3px] text-[14px] font-medium text-white`}
          >
            {status}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="mt-[11px] h-[2px] w-full bg-[#383838]" />

      {/* Bracket */}
      <div className="mt-[20px] flex justify-center">
        <BracketDiagram />
      </div>
    </div>
  );
}

/* =========================================================
   UPCOMING CARD
========================================================= */

function UpcomingCard({ title, date, location, category }: UpcomingEvent) {
  return (
    <div className="h-[194px] rounded-[8px] border border-[#444444] bg-[#1A1919] px-[19px] pt-[24px]">
      <h4 className={`${rob} text-[25px] font-medium leading-[30px] text-white`}>{title}</h4>

      <div className="mt-[9px] grid grid-cols-3">
        <div>
          <p className={`${rob} text-[16px] font-medium text-white`}>Date</p>

          <p className={`${rob} text-[16px] text-white`}>{date}</p>
        </div>

        <div>
          <p className={`${rob} text-[16px] font-medium text-white`}>Location</p>

          <p className={`${rob} text-[16px] text-white`}>{location}</p>
        </div>

        <div>
          <p className={`${rob} text-[16px] font-medium text-white`}>Category</p>

          <p className={`${rob} text-[16px] text-white`}>{category}</p>
        </div>
      </div>

      <button
        type="button"
        className={`${rob} mt-[36px] h-[40px] w-full rounded-[5px] bg-[#FF4C4C] text-[22px] font-medium uppercase text-white transition hover:bg-[#ff5a5a]`}
      >
        Register
      </button>
    </div>
  );
}

/* =========================================================
   RESULT CARD
========================================================= */

function ResultCard({ results }: { results: PastResult[] }) {
  return (
    <div className="h-[403px] rounded-[8px] border border-[#444444] bg-[#1A1919] px-[22px]">
      {results.map((result, index) => (
        <div
          key={index}
          className={`py-[25px] ${index < results.length - 1 ? "border-b border-[#777777]" : ""}`}
        >
          <h4 className={`${rob} text-[25px] font-medium leading-[30px] text-white`}>
            {result.title}
          </h4>

          <p className={`${rob} mt-[2px] text-[20px] leading-[24px] text-[#777777]`}>
            {result.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   DATA
========================================================= */

const upcomingEvents: UpcomingEvent[] = [
  {
    title: "Event in Mumbai",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
  {
    title: "Event in Delhi",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
];

const pastResults: PastResult[] = [
  {
    title: "Bengaluru Regionals",
    subtitle: "Lorem Ipsum",
  },
  {
    title: "Bengaluru Regionals",
    subtitle: "Lorem Ipsum",
  },
  {
    title: "Bengaluru Regionals",
    subtitle: "Lorem Ipsum",
  },
];

/* =========================================================
   EVENTS SECTION
========================================================= */

export function EventsSection() {
  return (
    <section
      className="w-full bg-[#1A1919]"
      style={{
        backgroundImage: `
          radial-gradient(
            500px 400px at 5% 100%,
            rgba(83, 48, 48, 0.7),
            transparent 70%
          ),
          radial-gradient(
            500px 400px at 95% 15%,
            rgba(83, 48, 48, 0.6),
            transparent 70%
          )
        `,
      }}
    >
      {/* Centered Content Container */}
      <div className="mx-auto w-full max-w-[1440px] px-[62px] pb-[80px] pt-[69px]">
        {/* Main Heading */}
        <h2
          className={`${orb} text-[50px] font-bold uppercase leading-[60px] tracking-[-1px] text-white`}
        >
          Competitions &amp; Events
        </h2>

        {/* Columns */}
        <div className="mt-[38px] grid grid-cols-[402px_346px_344px] justify-center gap-[17px]">
          {/* =========================
              LIVE NOW
          ========================== */}

          <div>
            <h3
              className={`${orb} mb-[23px] text-[25px] font-medium uppercase leading-[30px] text-[#FF4C4C]`}
            >
              Live Now
            </h3>

            <CompetitionCard title="Bengaluru Regionals" subtitle="Lorem Ipsum" status="Ongoing" />
          </div>

          {/* =========================
              UPCOMING
          ========================== */}

          <div>
            <h3
              className={`${orb} mb-[23px] text-[25px] font-medium uppercase leading-[30px] text-white`}
            >
              Upcoming
            </h3>

            <div className="space-y-[16px]">
              {upcomingEvents.map((event) => (
                <UpcomingCard key={event.title} {...event} />
              ))}
            </div>
          </div>

          {/* =========================
              PAST RESULTS
          ========================== */}

          <div>
            <h3
              className={`${orb} mb-[23px] text-[25px] font-medium uppercase leading-[30px] text-white`}
            >
              Past Results
            </h3>

            <ResultCard results={pastResults} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
