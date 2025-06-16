import { assets } from "../assets/assets"


const Result = () => {
  return (
    <main>
      <section className="result-section" >
        <div className="result-image-box">
        <div className="result-leftImage">
          <h2 className="result-heading" >Original</h2>
          <img src={assets.image_w_bg} alt="with bg" className="result-image" />
        </div>
        <div className="result-rightImage">
          <h2 className="result-heading">Background Removed</h2>
          {/* <img src={assets.image_wo_bg} alt="with bg" className="result-image" /> */}
          <div className="loader">
          <img src={assets.bg_layer} alt="with bg" className="result-image" />
            <div className="spinner-loader">

            </div>
          </div>
        </div>
        </div>
        <div className="download-button">
          <button className="try-another-btn" >Try another image</button>
          <button className="primary-btn" >Download image</button>
        </div>
      </section>
    </main>

  )
}

export default Result