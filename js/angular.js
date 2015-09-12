angular.module('swissPlant', ['pascalprecht.translate'])
    .config(function ($translateProvider) {
        $translateProvider.translations('de_DE', {
            meta_title_name: "SwissPlant GmbH",
            meta_title_slogan: "Ihr Spezialist für Gemüsejungpflanzen",
            meta_description: "Die Swissplant GmbH ist Ihr Ansprechpartner für professionellen Gemüseanbau im Berner Seeland. Bei uns bekommen Sie Warmhauspflanzen in verschiedenen Varianten.",
            meta_keywords: "Gemüse, Gemuese, Jungpflanzen, Setzlinge, Salat, Schweiz, Seeland, SwissPlant",
            nav_about: "Über uns",
            nav_portfolio: "Sortiment",
            nav_partners: "Partner",
            nav_contact: "Kontakt",
            nav_start: "Start",
            about_heading: "Wer wir sind",
            about_copy: "Lo-fi Intelligentsia roof party mixtape you probably haven't heard of them kitsch. PBR hashtag flexitarian, retro you probably haven't heard of them street art trust fund fingerstache sriracha cray stumptown.",
            portfolio_heading: "Was wir Ihnen bieten",
            portfolio_copy: "Forage trust fund whatever Bushwick Truffaut roof party. Locavore four loko farm-to-table cray, raw denim High Life blog. Gastropub art party Banksy synth, chillwave High Life chia.",
            partners_heading: "Mit wem wir arbeiten",
            partners_copy: "Swag pork belly hella cred. Cornhole retro stumptown, semiotics Neutra pour-over McSweeney's. Hoodie Helvetica gastropub gluten-free. Seitan salvia Odd Future bitters, Banksy narwhal gastropub photo booth.",
            contact_heading: "Wie Sie uns erreichen",
            contact_copy: "Schlitz locavore irony tousled cornhole, keytar Austin seitan. Dreamcatcher Kickstarter butcher, four loko put a bird on it retro sriracha single-origin coffee selvage meh 3 wolf moon. Disrupt street art hella Marfa.",
            common_button_more: "Mehr erfahren",
            common_logo_alt: "Logo der SwissPlant GmbH",
            footer_address: "Spitzallmendweg 11, CH-3225 Müntschemier",
            footer_mailbox: "Postfach 11 (SwissPlant GmbH) / Postfach 5 (Agriplant AG)",
            footer_mo_fr: "Montag bis Freitag",
            footer_to: "bis"
        });

        $translateProvider.translations('en_US', {
            meta_title_name: "SwissPlant Ltd",
            meta_title_slogan: "Your specialist for vegetable seedings",
            meta_description: "SwissPlant is your go-to specialist for the professional cultivation of vegetables in the Bernese Seeland. We offer warm house plants in many variations.",
            meta_keywords: "Gemüse, Gemuese, Jungpflanzen, Setzlinge, Salat, Schweiz, Seeland, SwissPlant",
            nav_about: "About us",
            nav_portfolio: "Portfolio",
            nav_partners: "Partners",
            nav_contact: "Contact",
            nav_start: "Start",
            about_heading: "Who we are",
            about_copy: "Lo-fi Intelligentsia roof party mixtape you probably haven't heard of them kitsch. PBR hashtag flexitarian, retro you probably haven't heard of them street art trust fund fingerstache sriracha cray stumptown.",
            portfolio_heading: "What we offer",
            portfolio_copy: "Forage trust fund whatever Bushwick Truffaut roof party. Locavore four loko farm-to-table cray, raw denim High Life blog. Gastropub art party Banksy synth, chillwave High Life chia.",
            partners_heading: "Who we work with",
            partners_copy: "Swag pork belly hella cred. Cornhole retro stumptown, semiotics Neutra pour-over McSweeney's. Hoodie Helvetica gastropub gluten-free. Seitan salvia Odd Future bitters, Banksy narwhal gastropub photo booth.",
            contact_heading: "How to contact us",
            contact_copy: "Schlitz locavore irony tousled cornhole, keytar Austin seitan. Dreamcatcher Kickstarter butcher, four loko put a bird on it retro sriracha single-origin coffee selvage meh 3 wolf moon. Disrupt street art hella Marfa.",
            common_button_more: "Find out more",
            common_logo_alt: "Logo of SwissPlant Ltd.",
            footer_address: "Spitzallmendweg 11, CH-3225 Müntschemier",
            footer_mailbox: "Mailbox 11 (SwissPlant GmbH) / Mailbox 5 (Agriplant AG)",
            footer_mo_fr: "Monday to Friday",
            footer_to: "to"
        });

        $translateProvider.translations('fr_FR', {
            meta_title: "SwissPlant Ltd. &mdash; Your specialist for vegetable seedings",
            meta_description: "SwissPlant is your go-to specialist for the professional cultivation of vegetables in the Bernese Seeland. We offer warm house plants in many variations.",
            meta_keywords: "Gemüse, Gemuese, Jungpflanzen, Setzlinge, Salat, Schweiz, Seeland, SwissPlant",
            nav_about: "About us",
            nav_portfolio: "Portfolio",
            nav_partners: "Partners",
            nav_contact: "Contact",
            nav_start: "Start",
            about_heading: "Who we are",
            about_copy: "Lo-fi Intelligentsia roof party mixtape you probably haven't heard of them kitsch. PBR hashtag flexitarian, retro you probably haven't heard of them street art trust fund fingerstache sriracha cray stumptown.",
            portfolio_heading: "What we offer",
            portfolio_copy: "Forage trust fund whatever Bushwick Truffaut roof party. Locavore four loko farm-to-table cray, raw denim High Life blog. Gastropub art party Banksy synth, chillwave High Life chia.",
            partners_heading: "Who we work with",
            partners_copy: "Swag pork belly hella cred. Cornhole retro stumptown, semiotics Neutra pour-over McSweeney's. Hoodie Helvetica gastropub gluten-free. Seitan salvia Odd Future bitters, Banksy narwhal gastropub photo booth.",
            contact_heading: "How to contact us",
            contact_copy: "Schlitz locavore irony tousled cornhole, keytar Austin seitan. Dreamcatcher Kickstarter butcher, four loko put a bird on it retro sriracha single-origin coffee selvage meh 3 wolf moon. Disrupt street art hella Marfa.",
            common_button_more: "Find out more",
            common_logo_alt: "Logo of SwissPlant Ltd.",
            footer_address: "Spitzallmendweg 11, CH-3225 Müntschemier",
            footer_mailbox: "Mailbox 11 (SwissPlant GmbH) / Mailbox 5 (Agriplant AG)",
            footer_mo_fr: "Monday to Friday",
            footer_to: "to"
        });

        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.preferredLanguage('de_DE');
    })
    .controller('langCtrl', function ($scope, $translate) {
        $scope.changeLang = function (langKey) {
            $translate.use(langKey).then(function (langKey) {
                console.log('The language has been changed to ' + langKey);
            }, function (langKey) {
                console.log('Something went wrong while changig the language to ' + langKey);
            });
        }
    });
