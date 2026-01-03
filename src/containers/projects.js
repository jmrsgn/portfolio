import {
    Divider,
    NavigationIcon,
    SpaceHeightMedium,
} from "../globalComponents";

import { Projects } from '../components';

import ProjectsData from '../fixtures/projects.json';
import { AiFillGithub } from 'react-icons/ai';
import MotionWrap from '../wrapper/motion-wrap';

export function ProjectsContainer() {
    return (
        <Projects id="projects">
            <MotionWrap
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
            >
                <Projects.Box>
                    <Projects.TextTitle>Stuffs I’ve built</Projects.TextTitle>
                    <Divider />

                    <Projects.ContainerProjects>
                        {ProjectsData.map((item) => (
                            <Projects.ItemProject>
                                <div>
                                    <Projects.ContainerProjectTitleNav>
                                        <Projects.TextProjectTitle>{item.title}</Projects.TextProjectTitle>
                                        {item.github !== "" ?
                                            <NavigationIcon
                                                href={item.github} target={"_blank"}>
                                                <AiFillGithub
                                                    size={25}
                                                />
                                            </NavigationIcon> : <></>
                                        }
                                    </Projects.ContainerProjectTitleNav>

                                    <SpaceHeightMedium />
                                    <Projects.TextDescription>{item.description}</Projects.TextDescription>
                                    <Projects.ContainerTags>
                                        {item.tech.map((tag) => (
                                            <Projects.ItemTag>
                                                <Projects.TextTag>{tag.name}</Projects.TextTag>
                                            </Projects.ItemTag>
                                        ))}
                                    </Projects.ContainerTags>
                                </div>
                            </Projects.ItemProject>
                        ))}
                    </Projects.ContainerProjects>
                </Projects.Box>
            </MotionWrap>
        </Projects>
    );
}