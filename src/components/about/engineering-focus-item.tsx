import { useInView } from "react-intersection-observer";

import type { EngineeringFocusArea as EngineeringFocusAreaData } from "../../fixtures/engineering-focus";
import MotionWrap from "../../wrapper/motion-wrap";
import { EngineeringFocusIllustration } from "./engineering-illustrations";
import { EngineeringFocusArea } from "./styles/about";

type EngineeringFocusItemProps = {
  area: EngineeringFocusAreaData;
  index: number;
  reduceMotion: boolean | null;
};

export function EngineeringFocusItem({ area, index, reduceMotion }: EngineeringFocusItemProps) {
  const { ref, inView } = useInView({
    rootMargin: "-42% 0px -42% 0px",
    threshold: 0,
  });

  return (
    <MotionWrap
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
    >
      <EngineeringFocusArea ref={ref} tabIndex={0} data-in-view={inView}>
        <EngineeringFocusIllustration id={area.id} />
        <span>{area.number}</span>
        <h3>{area.title}</h3>
        <p>{area.label}</p>
      </EngineeringFocusArea>
    </MotionWrap>
  );
}
