import { Experiences } from "../components";

import experiencesData from "../fixtures/experiences.json";
import certificatesData from "../fixtures/certificates.json";

import MotionWrap from "../wrapper/motion-wrap";

import { BsArrowUpRight } from "react-icons/bs";

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
  id?: number;
  title: string;
  year: string | number;
  badge: string;
  href: string;
};

const experiences: Experience[] = experiencesData as Experience[];

const certificates: Certificate[] = certificatesData as Certificate[];

export function ExperiencesContainer() {
  return (
    <Experiences id="experiences">
      <MotionWrap
        whileInView={{ y: [60, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Experiences.Box>
          {/* Header */}

          <Experiences.TextEyebrow>// EXPERIENCE</Experiences.TextEyebrow>

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
                {certificates.map(
                  (certificate, index) =>
                    index < 3 && (
                      <Experiences.ContainerCertificate
                        key={
                          certificate.id ??
                          `${certificate.title}-${certificate.year}`
                        }
                      >
                        <Experiences.ItemBadge
                          src={certificate.badge}
                          alt={certificate.title}
                        />

                        <Experiences.ContainerCertificateInfo>
                          <div>
                            <Experiences.TextCertificateTitle>
                              {certificate.title}
                            </Experiences.TextCertificateTitle>

                            <Experiences.TextCertificateYear>
                              {certificate.year}
                            </Experiences.TextCertificateYear>
                          </div>

                          {certificate.href !== "" && (
                            <Experiences.CertificateLink
                              href={certificate.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`View ${certificate.title}`}
                            >
                              <BsArrowUpRight />
                            </Experiences.CertificateLink>
                          )}
                        </Experiences.ContainerCertificateInfo>
                      </Experiences.ContainerCertificate>
                    ),
                )}
              </Experiences.ContainerCertificates>
            </Experiences.BoxCertificates>
          </Experiences.ContainerInfo>
        </Experiences.Box>
      </MotionWrap>
    </Experiences>
  );
}
