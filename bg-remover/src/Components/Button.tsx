import { assets } from "../assets/assets"

const Button = () => {
    return (
            <form>
                <label htmlFor="file-upload" className="primary-btn" > <img src={assets.upload_btn_icon} alt="upl btn" />  Upload your image</label>
                <input type="file" name="file-upload" id="file-upload" hidden />
            </form>
    )
}

export default Button