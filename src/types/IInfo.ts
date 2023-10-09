export interface IInfo {
    title: string,
    subtitle: string,
    image: string,
    period: IPeriod,
    description: string
}

interface IPeriod {
    start: string,
    end: string
}
