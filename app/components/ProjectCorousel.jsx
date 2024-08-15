import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './CorouselArrowButtons'
import { DotButton, useDotButton } from './CorouselDotButtons'
import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/react'

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max)

const ProjectCorousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)
    const tweenNodes = useRef([])

    const { theme } = useTheme()

    //   const { selectedIndex, scrollSnaps, onDotButtonClick } =
    //     useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const setTweenNodes = useCallback((emblaApi) => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__slide__number')
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenScale = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                const scale = numberWithinRange(tweenValue, 0, 1).toString()
                const tweenNode = tweenNodes.current[slideIndex]
                tweenNode.style.transform = `scale(${scale})`
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenScale(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenScale)
            .on('scroll', tweenScale)
            .on('slideFocus', tweenScale)
    }, [emblaApi, tweenScale])

    const projectData = [
        { url: 'https://intraven.in/', text: 'Description: Engineered a invoice management system with React + DRF, featuring role-based access and functionalities like invoice generation, dashboards, and data import/export in CSV format. • Key Features: Enhanced data management for school vendors with a dynamic UI, secure access control, and features for efficient invoice processing and financial analysis' },
        { url: 'https://engvblearning.com/', text: 'Description: Developed and deployed a responsive brochure website for an enterprise using ReactJS, ensuring an engaging user experience. Integrated SMTP JS for efficient email communication directly from the frontend, enhancing user engagement and interaction. • Key Features: Created a responsive brochure website leveraging React JS, providing an interactive user experience. Implemented SMTP JS for seamless email communication, facilitating efficient user interaction.' },
        { url: 'https://github.com/Dhruv1238/GoEth', text: 'Description: Developed a decentralized cab booking system using blockchain and integrated MetaMask for secure payments. Key Features: Tokenized ride requests as NFTs, allowing cab drivers to bid on them. Implemented a matching algorithm to select the best bid based on rider preferences. Integrated MetaMask for secure payments. Developed smart contracts to manage ride decorum and bidding processes. Provided flexibility for users to choose ride preferences and for drivers to build ratings and set fares.' },
        { url: "https://devpost.com/software/mind-maestro", text: "Description: Created Mind Maestro, a digital companion using React JS, Django, DRF and Google’s GEMINI AI. Designed to assist individuals with ADHD by providing personalized task recommendations through Sarthi AI, gamification with rewards, and an immersive environment with virtual rooms and ambient sounds. ● Key Features: ○ Sarthi Chatbot: Provides personalized plans to users to execute their tasks (Gemini Wrapper). ○ Gamification and Rewards: Includes a reward system to foster a sense of accomplishment. ○ Virtual Room and Ambient Sounds: Provides an immersive environment for focused collaboration" },
        { url: "https://github.com/Dhruv1238/Sahyog-Decentralized-Health-Associate", text: "Description: Developed SAHYOG, a healthcare ecosystem using Firebase, React.js, Hardhat, Polygon, and Arcana. It addresses gaps in India's healthcare by integrating decentralized identity with blockchain security. Key Features: SAHYOG Card: Decentralized health identity on Polygon. Spaces: Conversational AI for health assessments, professional consultations, and easy decentralized transactions via email-created wallets. Blockchain Security: Uses smart contracts on Polygon to protect user data from breaches and unauthorized access." },
    ];

    return (
        <div className="embla mt-20">
            <div className="embla__viewport " ref={emblaRef}>
                <div className="embla__container">
                    {projectData.map((project, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number lg:relative group flex flex-col">
                                <img
                                    src={`/project${index + 1}.png`}
                                    alt="Projects"
                                    className={`rounded-xl border-solid border-1 border-black object-contain`}
                                />
                                <div className="rounded-xl hidden lg:absolute inset-0 bg-slate-900 bg-opacity-50 lg:flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className={`text-white font-light text-center text-xl m-4`}>{project.text}</p>
                                    <Button
                                        variant="bordered"
                                        size='lg'
                                        className={`rounded-none w-20 text-base text-white  border-white cursor-none`}
                                        onClick={() => window.open(project.url, "_blank")}
                                    >
                                        View Project
                                    </Button>
                                </div>
                                <div className='flex flex-col items-center gap-3 mt-5 lg:hidden'>
                                    <p className={`${theme === "light" ? "text-black" : "text-white"} font-light text-center text-sm m-0`}>{project.text}</p>
                                    <Button
                                        variant="bordered"
                                        size='sm'
                                        className={`rounded-none w-20 text-xs ${theme === "light" ? "border-black" : "border-white"
                                            } cursor-none`}
                                        onClick={() => window.open(project.url, "_blank")}
                                    >
                                        View Project
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
            </div>
        </div>
    )
}

export default ProjectCorousel
