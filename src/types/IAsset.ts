export interface IAsset {
    name: string,
    title: string,
    subtitle: string,
    image: string,
    period: IPeriod,
}

interface IPeriod {
    start: string,
    end: string
}
