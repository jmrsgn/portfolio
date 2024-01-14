import React from "react";
import { motion } from 'framer-motion';

import CertBadges from "../components/certbadges";
import { Title, Divider } from "../globalComponents";

import certificatesData from '../fixtures/certificates.json';
import badgesData from '../fixtures/badges.json';

export function CertBadgesContainer() {
    return (
        <CertBadges id="certificates-&-badges">
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
            >
                <CertBadges.Box>
                    <Title>Certificates & Badges</Title>
                    <Divider type="1" />

                    <CertBadges.CertificatesContainer>
                        {certificatesData.map(( item ) => (
                            <CertBadges.Certificate key={item.id}>
                                <CertBadges.CertificateImage src={item.src} />
                                <CertBadges.CertificateTitle>{item.title}</CertBadges.CertificateTitle>
                                <CertBadges.CertificateDate>{item.date}</CertBadges.CertificateDate>
                            </CertBadges.Certificate>
                        ))}
                    </CertBadges.CertificatesContainer>
                        
                    <CertBadges.BadgesContainer>
                        {badgesData.map(( item ) => (
                            <motion.div
                                whileInView={{ scale: [0, 1 ]}}
                                transition={{ duration: 0.5, delay: `0.${(item.id - 1) + 2}`}}
                                key={item.id}
                            >
                                <CertBadges.Badge src={item.src} />
                            </motion.div>
                        ))}
                    </CertBadges.BadgesContainer>
                </CertBadges.Box>
            </motion.div>
        </CertBadges>
    )
}