export interface IInfo {
    title: string,
    subtitle: string,
    image: string,
    period: IPeriod,
}

interface IPeriod {
    start: string,
    end: string
}
