import ButtonGroup from "@/components/ContactButtonGroup/ContactButtonGroup";
import DoctorCard from "@/components/Cards/DoctorCard";
import BlogCard from "@/components/Cards/BlogCard";
import TestimonialCard from "@/components/Cards/TestimonialCard";
export default function Hero() {
  return (
    <main>
      <div className="home mt-16" id="home">
        <div className="home-left">
          <h1 className="mb-4">
            <span className="color-primary">Dentocare Dental Clinic </span>
            Smile Brighter with us
          </h1>
          <h4 className="mb-4 color-secondary">
            We are dedicated to providing top-notch dental services and
            personalized care to enhance your oral health and create beautiful
            smiles. With our team of experienced dentists and state-of-the-art
            technology, we strive to make your dental experience comfortable and
            stress-free.
          </h4>
          <div className="pt-4 cta">
            <ButtonGroup />
          </div>
        </div>
        <div className="home-right center">
          {/* <img className="img-wdth" src="../../assets/images/home.png" alt="" /> */}
          <DoctorCard />
        </div>
      </div>
    </main>
  );
}
