
export interface MemberInfo {
    name: string,
    pledgeClass: string,
    major: string,
    hometown: string,
    hobbiesAndInterests: string,
    comments: string[],
    pictures: string[],
    year: number
    contactInfo: ContactInfo,
    pastClasses: string[]
}

export interface ContactInfo {
    email: string,
    phone: string | undefined,
    linkedIn: string | undefined,
    instagram: string | undefined,
    facebook: string | undefined
}