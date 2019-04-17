export type Contact = {
    id: string,
    name: string,
    defaultPhone: string
}

export type Contacts = {
    [id: string]: Contact
}