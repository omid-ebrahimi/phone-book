export type Person = {
    id: string,
    name: string,
    defaultPhone: string
}

export type People = {
    [id: string]: Person
}