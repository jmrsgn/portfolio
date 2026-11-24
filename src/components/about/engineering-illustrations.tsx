import styled, { keyframes } from "styled-components";

import * as COLORS from "../../constants/styles/colors";
import { FONTS } from "../../fonts/fonts";
import type { EngineeringFocusId } from "../../fixtures/engineering-focus";

const ACCENT_BLUE = "#4A96FF";

const travel = keyframes`
  0% { opacity: 0; transform: translateX(0); }
  18% { opacity: 1; }
  82% { opacity: 1; }
  100% { opacity: 0; transform: translateX(56px); }
`;

const activate = keyframes`
  0%, 100% { stroke: ${COLORS.TEXT_TERTIARY}; }
  40%, 65% { stroke: ${ACCENT_BLUE}; }
`;

const Diagram = styled.svg`
  display: block;
  width: 100%;
  height: 140px;
  overflow: visible;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;

  .guide {
    stroke: ${COLORS.TEXT_DISABLED};
    stroke-width: 1;
    opacity: 0.4;
  }

  .wire {
    stroke: ${COLORS.TEXT_TERTIARY};
    stroke-width: 1.25;
  }

  .outline {
    stroke: ${COLORS.TEXT_SECONDARY};
    stroke-width: 1.5;
  }

  .detail {
    stroke: ${COLORS.TEXT_TERTIARY};
    stroke-width: 1.15;
  }

  .surface {
    fill: ${COLORS.BACKGROUND};
  }

  .label {
    fill: ${COLORS.TEXT_TERTIARY};
    stroke: none;
    font: 8px ${FONTS.sfMonoRegular};
    letter-spacing: 0.1em;
    text-anchor: middle;
  }

  .animated-wire {
    stroke: ${ACCENT_BLUE};
    stroke-width: 1.5;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    opacity: 0;
    transition: stroke-dashoffset 0.8s ease, opacity 0.2s ease;
  }

  .signal,
  .data-packet {
    fill: ${ACCENT_BLUE};
    stroke: none;
    opacity: 0;
  }

  .block {
    transition: translate 0.5s ease;
  }

  .code-line {
    fill: ${COLORS.TEXT_TERTIARY};
    stroke: none;
    opacity: 0.55;
    transition: opacity 0.3s ease;
  }

  .validation-mark {
    stroke: ${ACCENT_BLUE};
    stroke-width: 1.75;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    transition: stroke-dashoffset 0.4s ease;
  }

  .workflow-node {
    stroke: ${COLORS.TEXT_TERTIARY};
    stroke-width: 1.5;
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    article:is(:hover, :focus-visible) &.system-design .animated-wire {
      opacity: 1;
      stroke-dashoffset: 0;
    }

    article:is(:hover, :focus-visible) &.distributed-systems .signal,
    article:is(:hover, :focus-visible) &.database-systems .data-packet {
      animation: ${travel} 1.7s linear infinite;
    }

    article:is(:hover, :focus-visible) &.distributed-systems .signal-two {
      animation-delay: 0.55s;
    }

    article:is(:hover, :focus-visible) &.infrastructure .block-one { translate: 3px -3px; }
    article:is(:hover, :focus-visible) &.infrastructure .block-two { translate: 0 -5px; }
    article:is(:hover, :focus-visible) &.infrastructure .block-three { translate: -3px -3px; }

    article:is(:hover, :focus-visible) &.software-engineering .code-line { opacity: 1; }
    article:is(:hover, :focus-visible) &.software-engineering .code-two { transition-delay: 0.08s; }
    article:is(:hover, :focus-visible) &.software-engineering .code-three { transition-delay: 0.16s; }
    article:is(:hover, :focus-visible) &.software-engineering .validation-mark { stroke-dashoffset: 0; transition-delay: 0.2s; }

    article:is(:hover, :focus-visible) &.automation-ai .workflow-node {
      animation: ${activate} 2.4s ease-in-out infinite;
    }

    article:is(:hover, :focus-visible) &.automation-ai .node-two { animation-delay: 0.45s; }
    article:is(:hover, :focus-visible) &.automation-ai .node-three { animation-delay: 0.9s; }
  }

  @media (max-width: 767px) and (prefers-reduced-motion: no-preference) {
    article[data-in-view="true"] &.system-design .animated-wire {
      opacity: 1;
      stroke-dashoffset: 0;
    }

    article[data-in-view="true"] &.distributed-systems .signal,
    article[data-in-view="true"] &.database-systems .data-packet {
      animation: ${travel} 1.7s linear infinite;
    }

    article[data-in-view="true"] &.distributed-systems .signal-two { animation-delay: 0.55s; }

    article[data-in-view="true"] &.infrastructure .block-one { translate: 3px -3px; }
    article[data-in-view="true"] &.infrastructure .block-two { translate: 0 -5px; }
    article[data-in-view="true"] &.infrastructure .block-three { translate: -3px -3px; }

    article[data-in-view="true"] &.software-engineering .code-line { opacity: 1; }
    article[data-in-view="true"] &.software-engineering .code-two { transition-delay: 0.08s; }
    article[data-in-view="true"] &.software-engineering .code-three { transition-delay: 0.16s; }
    article[data-in-view="true"] &.software-engineering .validation-mark { stroke-dashoffset: 0; transition-delay: 0.2s; }

    article[data-in-view="true"] &.automation-ai .workflow-node {
      animation: ${activate} 2.4s ease-in-out infinite;
    }

    article[data-in-view="true"] &.automation-ai .node-two { animation-delay: 0.45s; }
    article[data-in-view="true"] &.automation-ai .node-three { animation-delay: 0.9s; }
  }

  @media (prefers-reduced-motion: reduce) {
    .animated-wire,
    .block,
    .code-line,
    .validation-mark {
      transition: none;
    }

    .validation-mark {
      stroke: ${COLORS.TEXT_SECONDARY};
      stroke-dashoffset: 0;
    }
  }
`;

const diagramProps = {
  viewBox: "0 0 320 150",
  "aria-hidden": true,
  focusable: "false",
} as const;

export function SystemDesignIllustration() {
  return (
    <Diagram {...diagramProps} className="system-design">
      <path className="guide" d="M12 18H308M12 132H308" />
      <path className="wire" d="M90 75H126M194 65H216V45H238M194 85H216V113H238" />
      <path className="animated-wire" pathLength="1" d="M90 75H126M194 65H216V45H238M194 85H216V113H238" />
      <rect className="surface outline" x="22" y="59" width="68" height="32" rx="2" />
      <rect className="surface outline" x="126" y="50" width="68" height="50" rx="2" />
      <rect className="surface outline" x="238" y="29" width="60" height="32" rx="2" />
      <rect className="surface outline" x="238" y="97" width="60" height="32" rx="2" />
      <path className="detail" d="M136 60H184M136 68H170M136 82H184M136 90H160" />
      <text className="label" x="56" y="79">CLIENT</text>
      <text className="label" x="160" y="79">CORE</text>
      <text className="label" x="268" y="49">DATA</text>
      <text className="label" x="268" y="117">EVENTS</text>
    </Diagram>
  );
}

export function DistributedSystemsIllustration() {
  return (
    <Diagram {...diagramProps} className="distributed-systems">
      <path className="guide" d="M16 22H304M16 132H304" />
      <path className="wire" d="M72 61H132M188 61H248M160 89V106" />
      <circle className="signal" cx="76" cy="61" r="3" />
      <circle className="signal signal-two" cx="192" cy="61" r="3" />
      <circle className="surface outline" cx="48" cy="61" r="24" />
      <circle className="surface outline" cx="160" cy="61" r="28" />
      <circle className="surface outline" cx="272" cy="61" r="24" />
      <circle className="surface outline" cx="160" cy="125" r="19" />
      <circle className="detail" cx="48" cy="61" r="15" />
      <circle className="detail" cx="160" cy="61" r="18" />
      <circle className="detail" cx="272" cy="61" r="15" />
      <text className="label" x="48" y="64">S1</text>
      <text className="label" x="160" y="64">S2</text>
      <text className="label" x="272" y="64">S3</text>
      <text className="label" x="160" y="128">S4</text>
    </Diagram>
  );
}

export function DatabaseSystemsIllustration() {
  return (
    <Diagram {...diagramProps} className="database-systems">
      <path className="guide" d="M14 22H306M14 131H306" />
      <ellipse className="surface outline" cx="70" cy="43" rx="36" ry="10" />
      <path className="outline" d="M34 43V106C34 112 50 117 70 117S106 112 106 106V43" />
      <path className="detail" d="M34 65C34 71 50 76 70 76S106 71 106 65M34 87C34 93 50 98 70 98S106 93 106 87" />
      <path className="wire" d="M107 75H177" />
      <circle className="data-packet" cx="114" cy="75" r="3" />
      <rect className="surface outline" x="177" y="29" width="112" height="94" rx="2" />
      <path className="detail" d="M177 53H289M177 76H289M177 99H289M211 29V123" />
      <path className="detail" d="M188 42H200M221 42H271M188 65H200M221 65H263M188 88H200M221 88H278M188 111H200M221 111H254" />
    </Diagram>
  );
}

function ContainerBlock({ x, y, className }: { x: number; y: number; className: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={`block ${className}`}>
        <path className="surface outline" d="M0 18L35 0L70 18L35 36Z" />
        <path className="surface outline" d="M0 18V58L35 76V36M70 18V58L35 76" />
        <path className="detail" d="M11 31V52M21 36V57M49 37V57M59 31V52" />
      </g>
    </g>
  );
}

export function InfrastructureIllustration() {
  return (
    <Diagram {...diagramProps} className="infrastructure">
      <path className="guide" d="M14 136H306M160 12V136" />
      <path className="wire" d="M90 129H230M160 94V129" />
      <ContainerBlock x={18} y={50} className="block-one" />
      <ContainerBlock x={125} y={18} className="block-two" />
      <ContainerBlock x={232} y={50} className="block-three" />
    </Diagram>
  );
}

export function SoftwareEngineeringIllustration() {
  return (
    <Diagram {...diagramProps} className="software-engineering">
      <path className="guide" d="M14 137H306" />
      <rect className="surface outline" x="24" y="18" width="272" height="114" rx="3" />
      <path className="detail" d="M24 43H296M54 43V132" />
      <circle className="detail" cx="37" cy="31" r="2" />
      <circle className="detail" cx="45" cy="31" r="2" />
      <path className="detail" d="M35 61H43M35 80H43M35 99H43" />
      <rect className="code-line" x="68" y="59" width="112" height="3" rx="1.5" />
      <rect className="code-line code-two" x="83" y="78" width="84" height="3" rx="1.5" />
      <rect className="code-line code-three" x="83" y="97" width="103" height="3" rx="1.5" />
      <rect className="code-line" x="68" y="116" width="63" height="3" rx="1.5" />
      <circle className="outline" cx="254" cy="85" r="17" />
      <path className="validation-mark" pathLength="1" d="M246 85L252 91L263 78" />
    </Diagram>
  );
}

export function AutomationAiIllustration() {
  return (
    <Diagram {...diagramProps} className="automation-ai">
      <path className="guide" d="M14 20H306M14 133H306" />
      <path className="wire" d="M83 42H104V61H124M83 108H104V89H124M196 75H239" />
      <rect className="surface workflow-node node-one" x="27" y="27" width="56" height="30" rx="2" />
      <rect className="surface workflow-node node-two" x="27" y="93" width="56" height="30" rx="2" />
      <rect className="surface workflow-node node-three" x="239" y="60" width="56" height="30" rx="2" />
      <rect className="surface outline" x="124" y="47" width="72" height="56" rx="3" />
      <path className="detail" d="M140 64L149 75L140 86M180 64L171 75L180 86M155 88L165 62" />
      <text className="label" x="55" y="46">INPUT</text>
      <text className="label" x="55" y="112">TOOLS</text>
      <text className="label" x="267" y="79">OUTPUT</text>
    </Diagram>
  );
}

const illustrations: Record<EngineeringFocusId, () => React.ReactElement> = {
  "system-design": SystemDesignIllustration,
  "distributed-systems": DistributedSystemsIllustration,
  "database-systems": DatabaseSystemsIllustration,
  infrastructure: InfrastructureIllustration,
  "software-engineering": SoftwareEngineeringIllustration,
  "automation-ai": AutomationAiIllustration,
};

export function EngineeringFocusIllustration({ id }: { id: EngineeringFocusId }) {
  const Illustration = illustrations[id];
  return <Illustration />;
}
