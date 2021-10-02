import React, { useEffect, useState } from 'react'

const Banner = () => {

    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setPlayMarquee(true);
    }, []);

    return (
        <div className="banner">
            <BannerRowTop title={"brand"} />
            <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
            <BannerRowBottom title={"studio"} />
        </div>
    )
}

const AnimatedLetters = ({title}) => (
    <span className="row-title">
        {[...title].map((letter) => (
            <span className="row-letter">{letter}</span>
        ))}
    </span>
);

const BannerRowTop = ({title}) => {
    return (
        <div className={"banner-row"}>
            <div className="row-col">
                <AnimatedLetters title={title} />
            </div>
            <div className="row-col">
                <div className="row-message">
                    We specialised in setting up the foundation of your brand and setting up for success.
                </div>
            </div>
        </div>
    );
}

const BannerRowCenter = ({title, playMarquee}) => {
    return (
        <div className={`banner-row marquee ${playMarquee && "animate"}`}>
            <div className="marquee__inner">
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
            </div>
        </div>
    );
}

const BannerRowBottom = ({title}) => {
    return (
        <div className={"banner-row center"}>
            <div className="scroll">
                <span>scroll</span>
                <span>down</span>
            </div>
            <AnimatedLetters  title={title}/>
        </div>
    );
}

export default Banner;