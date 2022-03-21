import siteJson from "./site.json";
import projectJson from "./project.json";

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

export const site = siteJson as Site;
export const projects = projectJson as Project[];
