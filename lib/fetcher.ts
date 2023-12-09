// Desc: fetcher function for SWR
// Data: 2021/09/16
export const fetcher = (url: string) => fetch(url).then((res) => res.json());
