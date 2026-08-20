import { site } from "@/lib/site";

export function AboutUs() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4">
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">About Us</h3>
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <img
          src="/banners/workshop.webp"
          alt="Skillora Hi-Tech City corporate workshops"
          className="w-full rounded-[1.5rem] object-cover aspect-[16/10] shadow-header"
        />
        <div className="about-us space-y-4 text-[15px] leading-7">
        <p>
          Skillora is a modern EdTech company offering flexible online IT training combined with hands-on workshops at our
          Hitech City corporate office in Hyderabad. Skillora trains professionals in AI, Machine Learning, Full Stack
          Development, Java, Python and DevOps with 100% placement assistance. Skillora has a digital presence on LinkedIn
          and {site.marketingUrl.replace("https://", "")}.
        </p>
        <p>
          Skillora delivers live interactive sessions with industry mentors — not pre-recorded-only classes. Learners work
          on real business problems, receive immediate feedback, and get recorded access for revision. Programs include
          industry certification, 1:1 mentorship, resume and interview preparation, and career support until you land a role.
        </p>
        <p>
          Skillora has trained {site.stats.students} professionals with a {site.stats.successRate} job success rate and a{" "}
          {site.stats.rating} learner rating. Training is led by practitioners such as Praveen Sir (Multi Cloud DevOps) and
          Jaya Krishna Sir (Java Full Stack with AI + DSA), with a dedicated career team for placements and corporate
          partnerships.
        </p>
        <p>
          Skillora operates from a professional corporate office at {site.address} — with corporate meeting rooms,
          industry-standard equipment, and Saturday workshops in small batches. An online option is available for learners
          who cannot attend in person.
        </p>
        <p>
          Skillora is currently leading job-oriented AI, DevSecOps and full-stack education, and partners with organizations
          for customized enterprise upskilling across technologies, roles and geographies.
        </p>
        </div>
      </div>
    </section>
  );
}
