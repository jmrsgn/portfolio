import React from "react";
import { About } from "../components";
import { DescriptionText, Divider, Title } from "../globalComponents";

export function AboutContainer() {
    return (
        <About>
            <About.Box>
                <Title>Who am I</Title>
                <Divider type="2" />

                <About.SubBox
                    flexDirection="row"
                    marginTop="3rem"
                    justifyContent="space-between"
                >

                    <About.InfoBox
                        width="50%"    
                    >
                        <DescriptionText>
                            My name is John Martin I. Marasigan, a simple person who likes to do Programming. I only enjoyed things out in my 4th year of College and suddenly fell in love with Android Development.
                        </DescriptionText>

                        <DescriptionText>
                            I am currently working as an <span>Associate Software Engineer</span> at Infor, and part of the MSCM team providing maintenance and support to mobile applications.
                        </DescriptionText>
                    </About.InfoBox>

                    <About.Avatar src="../images/jm.jpeg" />
                </About.SubBox>

                {/* <About.SubBox
                    flexDirection="column"
                >

                </About.SubBox> */}
            </About.Box>
        </About>
    )
}