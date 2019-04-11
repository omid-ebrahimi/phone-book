// @flow

export const phoneTypes = {
    Mobile: 'Mobile',
    Home: 'Home',
    Work: 'Work',
    Fax: 'Fax'
};

export type PhoneType = $Keys<typeof phoneTypes>;
