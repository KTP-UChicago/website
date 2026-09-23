import { CLASSES } from '../constants';
import { MAJORS_COUNT_PLACEHOLDER } from '../content/siteConfig';

export type SiteStat = {
  value: string;
  label: string;
};

export async function fetchActiveMemberCount(): Promise<number> {
  try {
    const response = await fetch('assets/memberList.csv');
    if (!response.ok) return 0;
    const csv = await response.text();
    const rows = csv.split('\n').slice(1).filter((row) => row.trim().length > 0);
    return rows.length;
  } catch {
    return 0;
  }
}

export function getAlumniNameCount(): number {
  return CLASSES.reduce((total, pledgeClass) => total + pledgeClass.members.length, 0);
}

export function getPledgeClassCount(): number {
  return CLASSES.length;
}

export async function buildSiteStats(): Promise<SiteStat[]> {
  const activeMembers = await fetchActiveMemberCount();
  const alumniNames = getAlumniNameCount();
  const pledgeClasses = getPledgeClassCount();

  return [
    { value: String(activeMembers), label: 'Active members' },
    { value: String(pledgeClasses), label: 'Pledge classes' },
    { value: String(alumniNames), label: 'Alumni in network' },
    { value: String(MAJORS_COUNT_PLACEHOLDER), label: 'Majors represented' },
  ];
}
