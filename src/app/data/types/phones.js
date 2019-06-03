// @flow

export const phoneTypes = {
    Mobile: 'Mobile',
    Home: 'Home',
    Work: 'Work',
    Fax: 'Fax'
};

export type PhoneType = $Keys<typeof phoneTypes>;

export type Phone = {
    contactId: string,
    number: string,
    type: PhoneType
}

export type Phones = {
    [id: string]: Phone
}
