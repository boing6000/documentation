module.exports = {
    title: 'Laravel Enso',
    description: 'Full featured Single Page Application boilerplate',
    ga: 'UA-102265111-1',
    plugins: ['@vuepress/pwa'],
    head: [
        ['link', { rel: 'icon', href: `/enso.svg` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
        repo: 'laravel-enso/documentation',
        docsDir: "docs",
        lastUpdated: true,
        editLinks: true,
        editLinkText: 'Edit this page on Github',
        serviceWorker: {
            updatePopup: true,
            updatePopup: {
               message: "New content is available.",
               buttonText: "Refresh"
            }
        },
        nav: [
            { text: "Guide", link: "/guide/" },
            { text: "V2", link: "/packages/" },
            { text: "Front End", link: "/frontEnd/" },
            { text: "Back End", link: "/backEnd/" },
        ],
        sidebar: {
            '/guide/': [{
                title: 'Guide',
                collapsable: false,
                children: [
                    '',
                    'getting-started',
                    'usage',
                    'under-the-hood',
                    'thanks',
                    'license'
                ]
            }],
            '/packages/': [{
                title: 'V2 Packages',
                collapsable: false,
                children: [
                    'action-logger',
                    'activity-log',
                    'addresses-manager',
                    'avatar-manager',
                    'charts',
                    'cnp-validator',
                    'comments-manager',
                    'companies',
                    'core',
                    'data-export',
                    'data-import',
                    'discussions',
                    'documents-manager',
                    'file-manager',
                    'form-builder',
                    'helpers',
                    'history-tracker',
                    'how-to-videos',
                    'image-transformer',
                    'impersonate',
                    'localisation',
                    'log-manager',
                    'menu-manager',
                    'multitenancy',
                    'notifications',
                    'people',
                    'permission-manager',
                    'rememberable',
                    'role-manager',
                    'searchable',
                    'select',
                    'structure-manager',
                    'teams',
                    'test-helper',
                    'track-who',
                    'tutorial-manager',
                    'versioning',
                    'vue-components',
                    'vue-datatable'
                ]
            }],
            '/frontEnd/': [{
                title: 'Front End',
                collapsable: true,
                children: [
                    'accessories',
                    'bulma',
                    'card',
                    'charts',
                    'confirmation',
                    'datepicker',
                    'directives',
                    'divider',
                    'dropdown',
                    'dropdown-indicator',
                    'filters',
                    'forms',
                    'loader',
                    'mixins',
                    'modal',
                    'money',
                    'progress-bar',
                    `select`,
                    'switch',
                    'tables',
                    'tabs',
                    'themes',
                    'toastr',
                    'transitions',
                    'typeahead',
                    'ui',
                    'uploader',
                ]
            }],
            '/backEnd/': [{
                title: 'Back End',
                collapsable: true,
                children: [
                    'action-logger',
                ]
            }],
        }
    }
};
