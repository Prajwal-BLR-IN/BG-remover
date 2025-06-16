type guildHeadingTextPropType = {
    guildHeadingText: string;
    guildHeadingIcon: string;
}

const Guild = ({ guildHeadingText, guildHeadingIcon }: guildHeadingTextPropType) => {
    return (
        <div className="guild-container" >
            <div>
                <img src={guildHeadingIcon} alt="icon" className="guild-icon" />
            </div>
            <div>
                <h3 className="guild-heading" >{guildHeadingText}</h3>
                <p className="paragraph" >This is a demo text, will replace it later. This is a demo..</p>
            </div>
        </div>

    )
}

export default Guild