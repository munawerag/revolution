import React from 'react'
import style from "./index.module.scss"
import Heading from '../../common/Heading'
import Image from 'next/image'

const data = {
    systems: [
        {
            text: "To fill the building with energy"
        },
        {
            text: "To harmonize the space for a happy life"
        },
        {
            text: "To reduce conflict"
        },
        {
            text: "To increase concentration and ability to solve mental tasks"
        },
        {
            text: "To clean the space from the dark manifestations of human nature"
        },
        {
            text: "To promote the development of mental and physical abilities, especially in children"
        }
    ],
    stone: [
        {
            color: "#68CEF6",
            title: "the north-west",
            category: "moon stone"
        },
        {
            color: "#72B37C",
            title: "the north",
            category: "Lapis lazuli"
        },
        {
            color: "#EDE9AB",
            title: "the north- east",
            category: "citrine"
        },
        {
            color: "#647CB5",
            title: "the west",
            category: "Black Tourmaline, Blue Saphire"
        },
        {
            color: "#C9835C",
            title: "The South",
            category: "Jasper, Coral, Topaz, Carnelian, Red G"
        },
        {
            color: "#E7927A",
            title: "The East",
            category: "Green Jade"
        },
        {
            color: "#F0CEDD",
            title: "The South-East",
            category: "Rose Quartz"
        },
        {
            color: "#947AB6",
            title: "The South-West",
            category: "Agate, Tiger's Eye"
        },
        {
            color: "#B70000",
            title: "The central part",
            category: "Salenite, Clear Quartz"
        }
    ]
}

const CrystalPyramid = () => {
    return (
        <section className={`${style.section}`}>
            <div className={style.wrapper}>
                <Heading title='crystal pyramid' title2='THE PYRAMID turns on the body’s own natural healing system' />
                <div className={style.descWrapper}>
                    <p className='fw-300 sm-font text-center'>Eywa is the first and only residential building with a built-in pyramid featuring 1,450 semi-precious stones and crystals, weighing a total of 14,000 kg. This unique architectural element is designed to enhance the health and increase the life expectancy of all those residing within. It helps boost focus, enhances cell regeneration and dispels conflict.</p>
                    <p className='fw-300 sm-font text-center'>THE PYRAMID turns on the body’s own natural healing system to reverse aging & activate dormant parts of our DNA. It extends life and expands consciousness.</p>
                </div>
                <div className={style.imgContainer}>
                    <div className={style.imgWrapper}>
                        <Image src={"/assets/images/home/pyramid-1.png"} className='img-hack' height={422} width={231} alt='pyramid' />
                    </div>
                    <div className={style.imgWrapper2}>
                        <Image src={"/assets/images/home/pyramid-2.png"} className='img-hack' height={422} width={428} alt='pyramid' />
                    </div>
                </div>
                <div className={style.stoneWrapper}>
                    <Image src={"/assets/images/home/stones.png"} height={123} width={800} alt='stones' />
                </div>
            </div>
            <div className={style.locationContainer}>
                <div className="container">
                    <h3 className={`text-center fw-300 ${style.heading}`}>{"The Location Of Stones"}</h3>
                    <div className={style.locationWrapper}>
                        {data?.stone?.map((item: any, index: number) =>
                            <div className={`${style.titleWrapper}`} key={index}>
                                <div className={`${style.tile} ${style[item?.color]}`} style={{ background: item?.color }}></div>
                                <div className={style.stoneTextWrapper}>
                                    <h6 className={`${style.title}`}>{item?.title}</h6>
                                    <p className={`sm-font2 ${style.category}`}>{item?.category}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={style.systemAllow}>
                <h3 className={`text-center fw-300 ${style.heading}`}>{"This System Allows"}</h3>
                <ul className={style.textWrapper}>
                    {data?.systems?.map((item: any, index: number) =>
                        <li className={style.item} key={index}>{item?.text}</li>
                    )}
                </ul>
            </div>
            <div className={style.fullImg}>
                <div className={style.imgWrapper}>
                <Image alt='pyramid' src={"/assets/images/home/pyramid-full.jpg"} fill />
                </div>
            </div>
        </section>
    )
}

export default CrystalPyramid