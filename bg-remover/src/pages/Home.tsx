import { assets } from "../assets/assets"
import BgSlider from "../Components/BgSlider"
import Button from "../Components/Button"
import Guild from "../Components/Guild"
import StepsGuild from "../Components/StepsGuild"
import Testimonial from "../Components/Testimonial"

const Home = () => {
  return (
    <main className="container">

      <section className="hero-section section">
        <div className="hero-left">
          <h1 className="hero-heading">
            Remove the <br />
            <span className="hero-bg-text" >background</span> from <br />
            images for free.
          </h1>
          <p className="hero-paragraph paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <Button />
        </div>
        <div className="hero-right">
          <img src={assets.header_img} alt="hero-image" className="hero-image" />
        </div>
      </section>

      <section className="section steps-section " >
        <StepsGuild headingText={"Steps to remove background from image in seconds"} />
        <div className="guild-section">
          <Guild guildHeadingText="Upload image" guildHeadingIcon={assets.upload_icon} />
          <Guild guildHeadingText="Remove background" guildHeadingIcon={assets.remove_bg_icon} />
          <Guild guildHeadingText="Download image" guildHeadingIcon={assets.download_icon} />
        </div>
      </section>

      <section className="section">
        <StepsGuild headingText={"Remove Background With High Quality and Accuracy"} />
        <BgSlider />
      </section>

      <section className="section testi-section" >
        <StepsGuild headingText={"Customer Testimonials"} />
        <Testimonial />
      </section>

      <section className="section" >
        <StepsGuild headingText={"See the magic. Try now"} />
        <Button />
      </section>

    </main>
  )
}

export default Home 