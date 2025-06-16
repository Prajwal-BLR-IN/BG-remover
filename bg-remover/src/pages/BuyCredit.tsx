import BuyPlanCard from "../Components/BuyPlanCard"
import StepsGuild from "../Components/StepsGuild"


const BuyCredit = () => {
  return (
    <main>
      <section className="container" >
        <div className="choose-plan-icons" >
          <p>Our Plans</p>
        </div>
        <StepsGuild headingText="Choose the plan that's right for you" />
        <BuyPlanCard />
      </section>
    </main>
  )
}

export default BuyCredit