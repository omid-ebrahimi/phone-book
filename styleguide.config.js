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
                    name: 'components',
                    components: 'src/screens/components/**/*.js'
                },
                {
                    name: 'Contacts',
                    components: 'src/screens/Contacts/**/*.js'
                },
                {
                    name: 'CreateContact',
                    components: 'src/screens/CreateContact/**/*.js'
                },
                {
                    name: 'UpdateContact',
                    components: 'src/screens/UpdateContact/**/*.js'
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