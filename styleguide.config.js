module.exports = {
    sections: [
        {
            name: 'Components',
            components: 'src/components/**/*.js'
        },
        {
            name: 'Screens',
            description:'This section contains all screens and their specific components.',
            sections: [
                {
                    name: 'Contacts',
                    components: 'src/screens/Contacts/**/*.js'
                },
                {
                    name: 'CreateContact',
                    components: 'src/screens/CreateContact/**/*.js'
                }
            ],
            sectionDepth: 1
        }
    ],
    ignore: ['**/container.js', '**/components/index.js'],
    pagePerSection: true,
    template: {
        favicon: 'public/favicon.ico'
    }
};