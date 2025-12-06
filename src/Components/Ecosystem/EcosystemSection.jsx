import Link from "next/link";

export default function JoinOurEcosystem() {
  const corporateItems = [
    { title: "GCC", desc: "Global Capability Center solutions" },
    { title: "Talent Acquisition", desc: "Hire top-quality talent efficiently" },
    { title: "Proof of Concepts (POC)", desc: "Validate ideas with rapid prototypes" },
    { title: "Managed Office Services", desc: "End-to-end workspace setup & support" }
  ];

  const universityItems = [
    { title: "Elective Subject Delivery", desc: "Experts conduct elective classes" },
    { title: "Placement Partners", desc: "Boost hiring rates" },
    { title: "Faculty Development", desc: "Train the trainers" },
    { title: "Careers & Internships", desc: "Guidance & opportunities for students" }
  ];

  const MiniCard = ({ item }) => (
    <div
      className="bg-white p-4 rounded-xl border border-[#d4d7df] shadow-sm 
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
                 h-full flex flex-col"
    >
      <h4 className="text-[15px] font-semibold text-[#0E1525]">{item.title}</h4>
      <p className="text-gray-600 text-sm mt-1 leading-relaxed flex-grow">{item.desc}</p>
    </div>
  );

  return (
    <section className="w-full py-14 px-6 bg-[#e7ebf3] flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-[#0ea5e9] tracking-tight animate-pop">
            Join Our Ecosystem
          </h1>
          <p className="text-gray-600 mt-2 text-lg max-w-xl mx-auto leading-relaxed">
            Bridging the gap between academics and industry with tailored programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CORPORATE SECTION */}
          <div className="rounded-2xl p-6 border border-[#d4d7df] shadow-md
                          bg-gradient-to-br from-[#e0f7ff] via-[#ffffff] to-[#f0faff]
                          hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-float">

            <h2 className="flex items-center text-2xl font-bold text-[#002d87] mb-5">
              For Corporates
            </h2>

            <div className="grid grid-cols-2 gap-6 items-stretch">
              {corporateItems.map((item) => (
                <MiniCard key={item.title} item={item} />
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <Link
                href="/Corporate"
                className="px-5 py-2 bg-[#0E1525] text-white rounded-md text-base font-semibold 
                           hover:bg-[#1b2336] transition-all duration-300"
              >
                Know More
              </Link>

              <Link
                href="/partner"
                className="px-5 py-2 border border-[#0E1525] text-[#0E1525] rounded-md text-base font-semibold 
                           hover:bg-[#0E1525] hover:text-white transition-transform duration-300 animate-pulse-btn"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          {/* UNIVERSITIES SECTION */}
          <div className="rounded-2xl p-6 border border-[#d4d7df] shadow-md
                          bg-gradient-to-br from-[#efffe5] via-[#ffffff] to-[#f3ffe9]
                          hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-float">

            <h2 className="flex items-center text-2xl font-bold text-[#002d87] mb-5">
              For Universities
            </h2>

            <div className="grid grid-cols-2 gap-6 items-stretch">
              {universityItems.map((item) => (
                <MiniCard key={item.title} item={item} />
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <Link
                href="/University"
                className="px-5 py-2 bg-[#0E1525] text-white rounded-md text-base font-semibold 
                           hover:bg-[#1b2336] transition-all duration-300"
              >
                Know More
              </Link>

              <Link
                href="/partner"
                className="px-5 py-2 border border-[#0E1525] text-[#0E1525] rounded-md text-base font-semibold 
                           hover:bg-[#0E1525] hover:text-white transition-transform duration-300 animate-pulse-btn"
              >
                Partner With Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}