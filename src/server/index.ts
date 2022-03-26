import siteJson from "./site.json";
import projectJson from "./project.json";
import memberJson from "./member.json";

export interface Site {
    title: string;
    description: string;
    keywords: string[];
}
export interface Project {
    title: string;
    description: string;
    url: string;
    image: string;
}

export interface Member {
    name: string;
    tag: string;
    site: string;
    avatar: string;
    cardBgColor: string;
    nameColor: string;
    cardShadow: string;
}

export const site = siteJson as Site;
export const projects = projectJson as Project[];
export const members = memberJson as Member[];
