
type stepGuildPropType = {
    headingText: string;
}

const StepsGuild = ({headingText}: stepGuildPropType) => {
  return (
    <h2 className="section-heading-text" >{headingText}</h2>
  )
}

export default StepsGuild