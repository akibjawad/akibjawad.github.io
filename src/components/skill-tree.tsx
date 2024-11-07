// components/SkillTree.tsx
"use client";
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import skillData from '@/data/skillmap';
import { Badge } from './ui/badge';
import { ChevronRightIcon } from 'lucide-react';

type SkillLeaf = string[];
type SkillBranch = { [key: string]: SkillLeaf | SkillBranch };
type SkillData = { [key: string]: SkillBranch };



interface SkillNodeProps {
  label: string;
  skills: SkillLeaf | SkillBranch;
}

const SkillNode: React.FC<SkillNodeProps> = ({ label, skills }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div style={{ marginLeft: '20px', marginTop: '5px' }}>
      <div onClick={toggleExpand} className="inline-flex items-center justify-center font-semibold leading-none text-xl sm:text-xl">

        <Badge variant="default" className="align-middle text-xl" key={label}> 
            {label} 
        </Badge>
        
        <ChevronRightIcon
        className={cn(
            "size-4 translate-x-0 transform opacity-100 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
            expanded ? "rotate-90" : "rotate-0"
        )}
        />
        {/* {Array.isArray(skills) ? '' : expanded ? '-' : '+'} */}
      </div>
      {expanded && (
        <div>
          {Array.isArray(skills)
            ? skills.map((skill, index) => (
                <div key={index} style={{ marginLeft: '20px', marginTop:'1px', color: '#666' }}>
                  --  <Badge variant="secondary" className="align-middle text-base" key={skill}> 
                        {skill} 
                    </Badge>
                  {/* - <Badge key={skill}> {skill} </Badge> */}
                </div>
              ))
            : Object.entries(skills).map(([subLabel, subSkills]) => (
                <SkillNode key={subLabel} label={subLabel} skills={subSkills} />
              ))}
        </div>
      )}
    </div>
  );
};

const SkillTree: React.FC = () => (
    <div className="flex flex-col md:flex-row mx-auto">
    {Object.entries(skillData).map(([domain, skills]) => (
        // <div className=''
        // <Badge key={domain}>{domain}</Badge>

        <SkillNode key={domain} label={domain} skills={skills} />
    ))}
    </div>
);

export default SkillTree;
