import {
  Wrench,
  Building2,
  Trophy,
  Users,
  CircleUser,
  Lightbulb,
  Cog,
  Bitcoin,
  Medal,
  Gavel,
  Briefcase,
  Zap,
} from "lucide-react";

import heroArena from "@/assets/images/hero-arena.png";
import discRoboRace from "@/assets/images/disc-robo-race.jpg";
import discLineFollower from "@/assets/images/disc-line-follower.jpg";
import discRcRacing from "@/assets/images/disc-rc-racing.jpg";
import discFpvDrone from "@/assets/images/disc-fpv-drone.jpg";
import discRoboHockey from "@/assets/images/disc-robo-hockey.jpg";
import sponsorNitDelhi from "@/assets/images/sponsor-nit-delhi.png";
import sponsorIndianBit from "@/assets/images/sponsor-indian-bit.png";
import sponsorNitSilchar from "@/assets/images/sponsor-nit-silchar.png";
import sponsorDelhivery from "@/assets/images/sponsor-delhivery.png";
import sponsorIitBombay from "@/assets/images/sponsor-iit-bombay.png";
import sponsorGeneralRobotics from "@/assets/images/sponsor-general-robotics.png";

export const journeySteps = [
  { icon: Wrench, lines: ["Build Your", "Team"] },
  { icon: Building2, lines: ["Compete Across", "India"] },
  { icon: Trophy, lines: ["Earn National", "Ranking & Value"] },
  { icon: Users, lines: ["Join The", "League"] },
];

export const aboutItems = [
  {
    n: "1.",
    title: "Structured Events",
    desc: '"From one-off events to a year-round competitive season."',
  },
  {
    n: "2.",
    title: "Digital Identity",
    desc: '"Your professional robotics legacy, tracked and verified."',
  },
  {
    n: "3.",
    title: "National Ranking",
    desc: '"Benchmark your skills against the best engineers in India."',
  },
  {
    n: "4.",
    title: "Career Pathway",
    desc: '"Turning arena victories into real-world industry opportunities."',
  },
];

export const categories = [
  { icon: CircleUser, title: "Mini Makers", desc: "Where Creativity Meets Logic." },
  { icon: Lightbulb, title: "Junior Innovators", desc: "Engineering & Strategy Fundamentals." },
  { icon: Cog, title: "Young Engineers", desc: "Advanced Wireless & Autonomous Control." },
  { icon: Bitcoin, title: "Robo Minds", desc: "Elite Professional Sports & Robotics." },
];

export const disciplines = [
  { img: discRoboRace, name: "Robo Race" },
  { img: discLineFollower, name: "Line Follower" },
  { img: discRcRacing, name: "RC Racing" },
  { img: discFpvDrone, name: "FPV Drone Racing & Aeromodelling" },
  { img: discRoboHockey, name: "Robo Hockey" },
  { img: heroArena, name: "Robo War" },
];

export const registerItems = [
  {
    icon: Medal,
    title: "National Recognition",
    desc: '"Benchmark your skills on India\'s official robotics leaderboard."',
  },
  {
    icon: Gavel,
    title: "Fair Judging",
    desc: '"Compete with confidence under standardized, expert-led evaluation."',
  },
  {
    icon: Briefcase,
    title: "Career Ops",
    desc: '"Bridge the gap between arena victories and top-tier tech placements."',
  },
  {
    icon: Zap,
    title: "High - Energy Eco",
    desc: '"Join a nationwide community of elite innovators and robotics athletes."',
  },
];

export const sponsors = [
  { img: sponsorNitDelhi, name: "NIT Delhi" },
  { img: sponsorIndianBit, name: "Indian BIT" },
  { img: sponsorNitSilchar, name: "NIT Silchar" },
  { img: sponsorDelhivery, name: "Robo Company" },
  { img: sponsorIitBombay, name: "IIT Bombay" },
  { img: sponsorGeneralRobotics, name: "Robo Company" },
];
