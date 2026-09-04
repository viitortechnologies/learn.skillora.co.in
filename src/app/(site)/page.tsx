import { BrowseCards } from "@/components/BrowseCards";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { HeroSlider } from "@/components/HeroSlider";
import { Testimonials } from "@/components/Testimonials";
import { AboutUs } from "@/components/AboutUs";
import { ContactForm } from "@/components/ContactForm";
import { readDb } from "@/lib/db";

export default async function HomePage() {
  const db = await readDb();
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto flex flex-col min-h-screen antialiased">
        <div className="pb-8 pt-3 sm:pt-8 flex flex-col gap-6 md:gap-8 lg:gap-12 min-w-0">
          <HeroSlider />
          <BrowseCards />
          <FeaturedCourses courses={db.courses} />
          <Testimonials items={db.testimonials} />
          <AboutUs />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
