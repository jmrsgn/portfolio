import { About } from "../components";

import {
    Divider,
    FilterText,
    SpaceHeightExtraLarge,
    SpaceHeightLarge,
    SpaceHeightMedium,
    SpaceHeightSmall,
    SpaceWidthLarge,
    SpaceWidthSmall,
} from "../globalComponents";

import WhatIDoData from '../fixtures/what-i-do.json';

import { IoIosArrowDroprightCircle } from "react-icons/io";
import MotionWrap from "../wrapper/motion-wrap";

export function AboutContainer() {
    return (
        <About id="about">
            <MotionWrap
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
            >
                <About.Box>
                    <About.TextTitle>Who am I</About.TextTitle>
                    <Divider />

                    <About.BoxProfileInfo>
                        <About.ContainerAboutMeText>
                            <About.TextDescription>
                                My name is John Martin I. Marasigan, and I have a deep passion for programming.
                                My love for coding truly sparked during my fourth year of college when I discovered Android Development,
                                and I've been hooked ever since. Currently, I work as a
                                <FilterText> Software Engineer</FilterText> at <FilterText>Infor</FilterText> where I'm part of the MSCM team,
                                providing maintenance and support for mobile applications.
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                In my free time, I work out regularly, spending time alone. I also have great taste in
                                music, love reading books, play guitar.
                            </About.TextDescription>

                            {/* <About.TextLink type="2" to="/about/more">
                                Know me more
                            </About.TextLink> */}
                        </About.ContainerAboutMeText>
                    </About.BoxProfileInfo>

                    <SpaceHeightExtraLarge />

                    <About.ContainerTech>
                        {WhatIDoData.map((item) => (
                            <>
                                <About.ContainerTechInfo>
                                    <About.TextTitleOther>{item.title}</About.TextTitleOther>
                                    <SpaceHeightMedium />
                                    <About.TextDescription>{item.description}</About.TextDescription>
                                    <SpaceHeightSmall />
                                    <About.ContainerTechUsed>
                                        {item.tech.map((tech) => (
                                            <About.ContainerTechUsedText>
                                                <IoIosArrowDroprightCircle />
                                                <About.TextTechUsed>{tech}</About.TextTechUsed>
                                            </About.ContainerTechUsedText>
                                        ))}
                                    </About.ContainerTechUsed>
                                </About.ContainerTechInfo>
                                <SpaceWidthSmall />
                            </>
                        ))}
                    </About.ContainerTech>
                </About.Box>
            </MotionWrap>
        </About>
    );
}