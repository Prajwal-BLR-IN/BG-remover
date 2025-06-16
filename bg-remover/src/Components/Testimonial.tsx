import { testimonialsData } from "../assets/assets"
import type { testimonialType } from "../assets/assets"

const Testimonial = () => {
    return (
        <div className="testimonial">
            {testimonialsData.map((elem: testimonialType) => (
                <div className="testimonialItem" key={elem.id}>
                    <p className="quotation">”</p>
                    <p className="testimonialText paragraph ">{elem.text}</p>
                    <div className="testimonialUser">
                        <img src={elem.image} alt={elem.author} className="testimonialImage" />
                        <div className="testimonialUserBox" >
                        <p className="block-box" >{elem.author}</p>
                        <p className="paragraph" >{elem.jobTitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Testimonial
