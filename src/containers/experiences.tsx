import { Experiences } from "../components";

import experiencesData from "../fixtures/experiences.json";
import certificatesData from "../fixtures/certificates.json";

import MotionWrap from "../wrapper/motion-wrap";

import { BsArrowUpRight, BsPatchCheck, BsX } from "react-icons/bs";

import { useState } from "react";

import { FaCertificate } from "react-icons/fa";

type Experience = {
  id: number;
  date: string;
  position: string;
  company: string;
  current: boolean;
  learnings: string[];
  link: string;
};

type Certificate = {
  id: number;
  title: string;
  issued_by: string;
  date: string;
  badge: string;
  badge_link: string;
  certificate: string;
};

const experiences: Experience[] = experiencesData as Experience[];

const certificates: Certificate[] = certificatesData as Certificate[];

export function ExperiencesContainer() {
  const [modal, setModal] = useState<{
    type: "badge" | "certificate";
    certificate: Certificate;
  } | null>(null);

  return (
    <Experiences id="experiences">
      <MotionWrap
        whileInView={{ y: [60, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Experiences.Box>
          {/* Header */}

          <Experiences.TextEyebrow>{"// EXPERIENCE"}</Experiences.TextEyebrow>

          <Experiences.TextTitle>Experiences</Experiences.TextTitle>

          <Experiences.Divider />

          <Experiences.TextIntro>
            My professional journey as a software engineer, building software
            and learning along the way.
          </Experiences.TextIntro>

          {/* Main Content */}

          <Experiences.ContainerInfo>
            {/* Experience Timeline */}

            <Experiences.ContainerTimeline>
              {experiences.map((experience) => (
                <Experiences.ExperienceItem key={experience.id}>
                  <Experiences.TimelineDate>
                    {experience.date}
                  </Experiences.TimelineDate>

                  <Experiences.TimelineMarker>
                    <Experiences.TimelineDot />
                  </Experiences.TimelineMarker>

                  <Experiences.ExperienceContent>
                    <Experiences.TextPosition>
                      {experience.position}
                      <Experiences.TextCompany>
                        {" "}
                        @ {experience.company}
                      </Experiences.TextCompany>
                    </Experiences.TextPosition>

                    {experience.current && (
                      <Experiences.CurrentBadge>
                        <Experiences.CurrentDot />
                        Current
                      </Experiences.CurrentBadge>
                    )}

                    <Experiences.ContainerExperienceText>
                      {experience.learnings.map((learning, index) => (
                        <Experiences.TextDescription key={index}>
                          {learning}
                        </Experiences.TextDescription>
                      ))}
                    </Experiences.ContainerExperienceText>
                  </Experiences.ExperienceContent>
                </Experiences.ExperienceItem>
              ))}
            </Experiences.ContainerTimeline>

            {/* Certificates */}

            <Experiences.BoxCertificates>
              <Experiences.TextSubTitle>
                Certificates & Badges
              </Experiences.TextSubTitle>

              <Experiences.CertificateDivider />

              <Experiences.ContainerCertificates>
                {certificates.map((certificate) => (
                  <Experiences.ContainerCertificate key={certificate.id}>
                    {certificate.badge ? (
                      <Experiences.BadgeButton
                        type="button"
                        onClick={() =>
                          setModal({
                            type: "badge",
                            certificate,
                          })
                        }
                        aria-label={`View badge for ${certificate.title}`}
                      >
                        <Experiences.ItemBadge
                          src={certificate.badge}
                          alt={`${certificate.title} badge`}
                        />
                      </Experiences.BadgeButton>
                    ) : (
                      <Experiences.GenericCertificateIcon aria-hidden="true">
                        <FaCertificate />
                      </Experiences.GenericCertificateIcon>
                    )}

                    <Experiences.ContainerCertificateInfo>
                      <Experiences.CertificateTextContainer>
                        <Experiences.TextCertificateTitle>
                          {certificate.title}
                        </Experiences.TextCertificateTitle>

                        <Experiences.TextCertificateIssuer>
                          {certificate.issued_by}
                        </Experiences.TextCertificateIssuer>

                        <Experiences.TextCertificateDate>
                          {certificate.date}
                        </Experiences.TextCertificateDate>
                      </Experiences.CertificateTextContainer>

                      <Experiences.ContainerCertificateActions>
                        {certificate.badge && (
                          <>
                            {certificate.badge_link ? (
                              <Experiences.CertificateAction
                                type="button"
                                onClick={() => {
                                  window.open(
                                    certificate.badge_link,
                                    "_blank",
                                    "noopener,noreferrer",
                                  );
                                }}
                                aria-label={`Verify ${certificate.title} badge`}
                              >
                                <BsPatchCheck />
                                Verify
                              </Experiences.CertificateAction>
                            ) : (
                              <Experiences.CertificateAction
                                type="button"
                                onClick={() =>
                                  setModal({
                                    type: "badge",
                                    certificate,
                                  })
                                }
                                aria-label={`View ${certificate.title} badge`}
                              >
                                <BsPatchCheck />
                                Badge
                              </Experiences.CertificateAction>
                            )}
                          </>
                        )}

                        {certificate.certificate && (
                          <Experiences.CertificateAction
                            type="button"
                            onClick={() =>
                              setModal({
                                type: "certificate",
                                certificate,
                              })
                            }
                            aria-label={`View ${certificate.title} certificate`}
                          >
                            <BsArrowUpRight />
                            Certificate
                          </Experiences.CertificateAction>
                        )}
                      </Experiences.ContainerCertificateActions>
                    </Experiences.ContainerCertificateInfo>
                  </Experiences.ContainerCertificate>
                ))}
              </Experiences.ContainerCertificates>
            </Experiences.BoxCertificates>
          </Experiences.ContainerInfo>

          {modal && (
            <Experiences.CertificateModalOverlay
              role="dialog"
              aria-modal="true"
              aria-label={
                modal.type === "badge"
                  ? `${modal.certificate.title} badge`
                  : `${modal.certificate.title} certificate`
              }
              onClick={() => setModal(null)}
            >
              <Experiences.CertificateModal
                onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                  event.stopPropagation()
                }
              >
                <Experiences.CertificateModalHeader>
                  <Experiences.TextModalTitle>
                    {modal.certificate.title}
                  </Experiences.TextModalTitle>

                  <Experiences.CertificateModalClose
                    type="button"
                    onClick={() => setModal(null)}
                    aria-label="Close"
                  >
                    <BsX />
                  </Experiences.CertificateModalClose>
                </Experiences.CertificateModalHeader>

                <Experiences.CertificateModalImage
                  src={
                    modal.type === "badge"
                      ? modal.certificate.badge
                      : modal.certificate.certificate
                  }
                  alt={
                    modal.type === "badge"
                      ? `${modal.certificate.title} badge`
                      : `${modal.certificate.title} certificate`
                  }
                />
              </Experiences.CertificateModal>
            </Experiences.CertificateModalOverlay>
          )}
        </Experiences.Box>
      </MotionWrap>
    </Experiences>
  );
}
