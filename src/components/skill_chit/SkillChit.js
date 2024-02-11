import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import * as React from 'react';
import './SkillChit.css';

function SkillChit({ label, logoSrc, logoText }) {
  return (
    <Chip
      avatar={<Avatar src={logoSrc ?? ''}>{logoText}</Avatar>}
      sx={{
        backgroundColor: 'rgba(200, 200, 200, 0.33)',
      }}
      label={label}
    />
  );
}

export default function SkillChitGroup({ skills }) {
  return (
    <Box>
      {skills.map(skill =>
        <SkillChit
          key={skill.key}
          label={skill.label}
          logoSrc={skill.logoSrc}
          logoText={skill.logoText}
        />
      )}
    </Box>
  );
}

export const SkillOptions = {
  CSharp: {
    key: 0,
    label: "C#",
    logoSrc: "icons/Logo_C_sharp.svg",
  },
  Java: {
    key: 1,
    label: "Java",
    logoSrc: "icons/java-logo.png",
  },
  JavaScript: {
    key: 2,
    label: "JavaScript",
    logoSrc: "icons/javascript-logo.png",
  },
  Python: {
    key: 3,
    label: "Python",
    logoSrc: "icons/python-logo-only.svg",
  },
  React: {
    key: 4,
    label: "React",
    logoSrc: "icons/React-icon.svg.png",
  },
  Angular: {
    key: 5,
    label: "Angular",
    logoSrc: "icons/angular.svg",
  },
  Node: {
    key: 6,
    label: "NodeJS",
    logoSrc: "icons/Node.js_logo.svg",
  },
  Azure: {
    key: 7,
    label: "Azure",
    logoSrc: "icons/azure.svg",
  },
  AWS: {
    key: 8,
    label: "AWS",
    logoSrc: "icons/Amazon_Web_Services_Logo.svg",
  },
  SQL: {
    key: 9,
    label: "SQL",
    logoSrc: "icons/Database.svg",
  },
  HTML: {
    key: 10,
    label: "HTML",
    logoSrc: "icons/HTML5_logo_and_wordmark.svg",
  },
  CSS: {
    key: 11,
    label: "CSS",
    logoSrc: "icons/CSS3_logo_and_wordmark.svg",
  },
  AspNet: {
    key: 12,
    label: "ASP.NET",
    logoSrc: "icons/dotnet-logo.svg",
  },
  Leadership: {
    key: 13,
    label: "Leadership",
  },
  Unity: {
    key: 14,
    label: "Unity",
    logoSrc: "icons/unity3d-icon.svg",
  },
  TypeScript: {
    key: 15,
    label: "TypeScript",
    logoSrc: "icons/Typescript_logo_2020.svg",
  },
  Security: {
    key: 16,
    label: "Security",
    logoSrc: "icons/lock_icon.svg",
  },
  PublicSpeaking: {
    key: 17,
    label: "Public speaking",
    // logoSrc: "",
    logoText: "🗣",
  },
  VisualBasic: {
    key: 18,
    label: "Visual Basic",
    logoSrc: "icons/vb.net_logo.svg",
  },
  WebApis: {
    key: 19,
    label: "Web APIs",
    logoText: "🔌",
  },
  Php: {
    key: 20,
    label: "PHP",
    logoSrc: "icons/php-logo.svg",
  },
  Vue: {
    key: 21,
    label: "Vue.js",
    logoSrc: "icons/vuejs_logo.svg",
  }
};