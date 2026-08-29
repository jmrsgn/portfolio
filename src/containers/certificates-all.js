import React from 'react';
import { Experiences } from '../components';
import MotionWrap from '../wrapper/motion-wrap';
import { Divider, SpaceWidthLarge } from '../globalComponents';

import certificatesData from '../fixtures/certificates.json';

import { IoCaretBack } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

export function CertificatesAllContainer() {
    return (
        <Experiences id="experiences">
            <MotionWrap
                whileInView={{ y: [100, 0], opacity: [0, 1]}}
            >
                <Experiences.Box>
                    <Experiences.ContainerNavigation>
                        <Link to="/">
                            <Experiences.ItemNavigationIcon type='1'>
                                <IoCaretBack 
                                    size={25}
                                />
                            </Experiences.ItemNavigationIcon> 
                        </Link> 
                    </Experiences.ContainerNavigation>        

                    <SpaceWidthLarge />
                    <Experiences.TextTitle>All Certificates</Experiences.TextTitle>
                    <Divider type='2' />

                    <Experiences.ContainerInfo>
                        {certificatesData.map((item) => (
                            <Experiences.ContainerCertificate>
                                <Experiences.ContainerCertificateInfo>
                                    <div>
                                        <Experiences.TextCertificateTitle>{item.title}</Experiences.TextCertificateTitle>
                                        <Experiences.TextCertificateYear>{item.year}</Experiences.TextCertificateYear>
                                    </div>
                                    <>
                                        <BsArrowUpRight 
                                            size={20}
                                        />  
                                    </>
                                </Experiences.ContainerCertificateInfo>
                            </Experiences.ContainerCertificate>
                        ))}
                    </Experiences.ContainerInfo>
                </Experiences.Box>
            </MotionWrap>
        </Experiences>
    )
}