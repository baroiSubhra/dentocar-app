import ButtonGroup from "@/components/ContactButtonGroup/ContactButtonGroup";
export default function About() {
  return (
    <section className="center" id="about">
      <div className="home">
        <div className="home-left center">
          {/* <img src="../../assets/images/csp-home.png" alt="" /> */}
        </div>
        <div className="home-right">
          <h1 className="mb-4">Discover Our Passion for Dental Excellence</h1>
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
      </div>
    </section>
  );
}
