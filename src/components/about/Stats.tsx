import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Core Technologies</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>Node.js</Chip>
            <Chip>React Native</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>MongoDB</Chip>
            <Chip>AWS</Chip>
            <Chip>Docker</Chip>
            <Chip>Git</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Specialized Solutions</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>AI Integration</Chip>
            <Chip>Automation</Chip>
            <Chip>API Development</Chip>
            <Chip>Mobile Apps</Chip>
            <Chip>E-commerce</Chip>
            <Chip>CMS</Chip>
            <Chip>SEO</Chip>
            <Chip>Analytics</Chip>
            <Chip>UI/UX Design</Chip>
            <Chip>Branding</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
