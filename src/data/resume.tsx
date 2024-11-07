import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akib Jawad Nafis",
  initials: "AJN",
  url: "https://dillion.io",
  location: "Syracuse, NY",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A versatile software engineer, researcher, and passionate debugger with a hint of depth and details.",
  summary:
    "I am passionate about developing software systems that is usable to large number of users and developers. My work spans across the tech stack, from user applications to OS kernels, focusing on understanding the layers beneath APIs to create modular, efficient code. Recently, I completed Masters in Computer Science from Syracuse University in New York. During my master, I researched security of smart home systems and networking subsystem of Linux kernel. My research has been published in security conferences such as IEEE CNS and IEEE SecDev. Before Syracuse University, I worked as mobile application developer (iOS and Android) at Samsung Research.",
  avatarUrl: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/portrait.jpg",
  bibfile: "/ref.bib",
  skills: [], //take skills from skillmap.tsx
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "a.j.nafis@gmail.com",
    tel: "#",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akibjawad",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akib-jawad/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Syracuse University",
      href: "https://atomic.finance",
      badges: ["Network Security", "Distributed Systems"],
      location: "Syracuse, NY, USA",
      title: "Graduate Research Assistant",
      logoUrl: "/su.jpeg",
      start: "Aug 2021",
      end: "May 2024",
      description:
        `My primary contribution can be summarized by the phrase \"researching security of networked systems\".
        A candidate networked system for my research was IoT systems, more specifically smart home/manufacturing systems.
        I developed a framework, dubbed VetIoT, to automatically test efficacy of security solutions proposed for IoT systems.
        Furthermore, I conducted security analysis of networking subsystem of Linux kernel.
        I created a framework to emulate software defined networking (SDN) using containers.
        I replicated various attacks on layer-2 (Mac), layer-3 (IP), and layer-4 (TCP) protocols.
        Implemented data leak attacks aginst VPN client applications (Nord, Keepsolid etc.) and built-in vpn configurators on iOS, Android, Mac, and Windows.
        As a fun project, I also developed kernel modules to create my own firewall based on linux netfilter hooks.`,
    },
    {
      company: "Syracuse University",
      badges: ["Operating Systems"],
      href: "https://shopify.com",
      location: "Syracuse, NY, USA",
      title: "Graduate Teaching Assistant",
      logoUrl: "/su.jpeg",
      start: "Aug 2022",
      end: "May 2024",
      description:
        `I tutored fundamental concepts of operating systems (OS) such process handling, system call, multi-processing to both undergraduate and graduate students.
        To teach these concepts in a hands-on manner, I utilized an educational operating system called NachOS.
        I also built scripts to automatically validate (grade) students implementation of OS concepts in NachOS.  
        `,
    },
    {
      company: "Samsung R&D Institute Bangladesh",
      href: "https://research.samsung.com/srbd",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Software Engineer",
      logoUrl: "/sr.jpeg",
      start: "May 2019",
      end: "Aug 2021",
      description:
        `
        My primary contribution was developing a software update mechanism for smartwatches using internet from the companion smartphone application.
        For this feature, I developed a custom Bluetooth Low Energy (BLE) transport protocol to transfer the watch software, from the smartphone to watch, over BLE.
        I implmeneted this feature on both iOS and Android version of Samsung Heartwise project.
        Moreover, I developed custom file-logging libraries, on both iOS and Android, to aid developers and testers in tracking software issues.
        Apart from mobile application development, I developed remote procedure call (rpc) mechanism on tizen (an embedded linux) OS. 
        `,
    },
    
  ],
  education: [
    {
      school: "Syracuse University",
      href: "https://ecs.syracuse.edu",
      degree: "Masters in Computer Science (MSCS)",
      logoUrl: "/su.jpeg",
      start: "2021",
      end: "2024",
    },
    {
      school: "Bangladesh University of Engineering and Technology (BUET)",
      href: "https://cse.buet.ac.bd",
      degree: "Bachelor of Science in Computer Science and Engineering (BSc in CSE)",
      logoUrl: "/buet.jpeg",
      start: "2015",
      end: "2019",
    }
  ],
  projects: [
    {
      title: "VetIoT",
      href: "https://github.com/syne-lab/vetiot",
      dates: "Aug 2021 - Oct 2023",
      active: true,
      description:
        `A framework to automatically test efficacy of security solutions proposed for IoT systems.
        With this framework researchers or developers of IoT security solutions can automatically generate test-cases and
        evaluate efficacy of their solutions and compare them with existing similar solutions intuitively.
        A regular user of IoT system can use VetIoT to pin-point security issues in the system and develop security policies for that. 
        `,
      technologies: [
        "Python3",
        "Antlr G4",
        "Shell Script",
        "Docker",
        "Vagrant"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/syne-lab/vetiot",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Paper",
          href: "https://arxiv.org/pdf/2308.12417",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Poster",
          href: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/vetiot/poster/vetiot-poster-ecs-research-day-2023.pdf",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Slide Deck",
          href: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/vetiot/slides/VetIoT-cns2023-final.pptx",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/vetiot/vetiot.png",
    },
    {
      title: "Software Defined Networking (SDN) Emulator",
      href: "https://seedsecuritylabs.org/emulator/",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        `SEED Emulator is a python framework that emulates operations of a real world internet. I am developing a module of the emulator which emulates
        oeprations of the SDN. In my implementation, I am using faucet (formarly known as RYU) as SDN controller and OpenVSwitch as virtual sdn enabled switch. 
        `,
      technologies: [
        "SDN Controller",
        "BGP",
        "OpenVSwitch",
        "Python",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/seed-labs/seed-emulator/tree/master/experiments/sdn/initial-exp",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Slide Deck",
          href: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/sdn/sdn.pptx",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/sdn/sdn.png",
    },
    {
      title: "Full Stack Project Management Website",
      href: "https://llm.report",
      dates: "Jul 2024 - Jul 2024",
      active: false,
      description:
        `Developed a Full-stack (front-end: React, Backend: Django) website with complete authentication and deployed it in AWS with apropriate scalability.
        `,
      technologies: [
        "React.js",
        "Django",
        "PostgreSQL",
        "Nginx",
        "AWS EC2",
        "AWS S3",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akibjawad/django-react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/react-django/dep-arch.png",
    },
    {
      title: "Testing VPNs against leaking tunnel attack",
      href: "https://github.com/akibjawad/vpn-leak-test/tree/main",
      dates: "April 2024 - May 2024",
      active: false,
      description:
        `VPN client applications or built-in VPN configurators of popular OSs can leak data outside of VPN tunnel.
        In this project, I created a malicious wifi network. If a user connects to this malicious wifi access point,
        I can force user's traffic to follow a path outside of the VPN tunnel.
        In a more perilious scenario, this attack can be formed remotely by pairing with a dns hijacking
        `,
      technologies: [
        "VPN",
        "Bypassing Tunnels",
        "create_ap script",
        "nginx",
        "AWS",
        "DNS Hijacking",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akibjawad/vpn-leak-test/tree/main",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Slide Deck",
          href: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/vpn-attacks/slides/vpn-test.pptx",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Project Report",
          href: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/vpn-attacks/report/vpn-test-report.pdf",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/vpn-attacks/vpn-attack.png",
    },
    {
      title: "Predicting arrival status of flights arriving at SYR airport 3 days earlier than actual arrival",
      href: "https://github.com/akibjawad/predict-flight-landing",
      dates: "April 2024 - May 2024",
      active: false,
      description:
        `Built a tree based machine learning model to predict arrival status of flights arriving at SYR (Hancock Internation) airport from
        JFK (New York, NY), MCO (Orlando,FL), and ORD (Chicago, IL). To increase accuracy, we incorporated both historical weather data
        and flight arrival data from transtats. During prediction, we dynamically injected weather forcasting data to query.
        `,
      technologies: [
        "XGBoost",
        "Hybrid Modeling",
        "Regularization",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akibjawad/predict-flight-landing",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Project Report",
          href: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/treeML/flight_arrival_prediction.pdf",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/treeML/flight-result.png",
    },

    {
      title: "Discovering remote code execution (RCE) bugs in Wifi/Bluetooth combo firmware",
      href: "https://github.com/akibjawad/frankenstein-report",
      dates: "Sep 2021 - Dec 2021",
      active: false,
      description:
        `Broadcom Wifi/Bluetooth combo chip is used in many smartphones and laptops including iPhones, Samsung phones, and Macbooks.
        In this project, I emulated the firmware of the combo chip using qemu and fuzzed the firmware with randomly generated bluetooth packets.
        During fuzzing I found 2 CVEs: one crashing the firmware and another creating heap corruption error.
        `,
      technologies: [
        "QEMU",
        "Wireless Firmware Fuzzing",
        "Linux Bluetooth Stack",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akibjawad/predict-flight-landing",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Project Report",
          href: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/firmware-fuzzing/main.pdf",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Slide Deck",
          href: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/firmware-fuzzing/Project-Proposal-Frankenstein.pptx",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "https://s3.us-west-2.amazonaws.com/portfolio.ajawad/firmware-fuzzing/firm-fuzz.png",
    },
  ],
  hackathons: [],
  Awards: [
    {
      "title":"SRBD Icon of the Month",
      "time": "JUN 2020"
    },
    {
      "title": "Runner-Up: Research Presentation",
      "institute": "Syracuse University",
      "event": "ECS Research Day",
      "time":"APR 2023",
      "image":""
    },
    {
      "tilte": "NSF Student Travel Grant",
      "event": "IEEE Conference on Communication and Security",
      "time": "OCT 2023"
    },
    {
      "title": "Solved over 200 leetcode problems"
    }
  ],

} as const;
