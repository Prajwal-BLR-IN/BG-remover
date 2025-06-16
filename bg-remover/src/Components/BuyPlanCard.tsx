import { assets, plans } from "../assets/assets"

const BuyPlanCard = () => {
    return (
        <>
            {
                plans.map(elem => (
                    <div className="plan-card-box" key={elem.id}>
                        <img src={assets.logo_icon} alt="logo icon" className="plan-logo" />
                        <div className="plan-title">
                            <h2 className="plan-heading" >{elem.id}</h2>
                            <p className="plan-desc">{elem.desc}</p>
                        </div>
                        <div className="plan-price">
                            <p className="plan-cost">₹{elem.price}</p>
                            <p className="plan-credits">/{elem.credits} credits</p>
                        </div>
                        <button className="purchase">Purchase</button>
                    </div>
                ))
            }
        </>
    )
}

export default BuyPlanCard