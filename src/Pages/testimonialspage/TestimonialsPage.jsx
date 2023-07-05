import {
  HeroPages,
  Testimonials,
  Footer,
} from "../../components/index.js";



function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Témoignages" />
        <Testimonials />
        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;
