export const projects = [
    {
        id: 1,
        title: "SAE 2ème année Muscu Maths",
        context: [
            "Muscu Maths est un support pédagogique numérique conçu pour améliorer les réflexes mathématiques des étudiants grâce à des exercices interactifs et un suivi personnalisé de leur progression.",
            "Intégrée au BUT Informatique, le cours de “musculation mathématique” permet aux étudiants de 1ère année d’identifier leurs lacunes et de les corriger via des fiches thématiques et des sessions d’entraînement régulières.",
            "L’application se présente sous la forme d’un site web et d’une version mobile optimisée, offrant aux étudiants un espace personnel où ils peuvent enregistrer leurs scores et consulter leurs statistiques.",
            "De leur côté, les enseignants disposent d’un tableau de bord leur permettant d’analyser les performances des étudiants de manière anonymisée, d’adapter les fiches d’exercices et d’optimiser leur pédagogie."
        ],
        illustration: "", // TODO
        objectives: {
            technical: [
                "Développer une application robuste et ergonomique avec une gestion optimisée des groupes, des fiches et des statistiques, tout en garantissant une expérience utilisateur intuitive et fluide sur web et mobile.",
            ]
        },
        technologies: [ // TODO
            {
                techTitle: "bb",
                techDescription: "bb",
            },
        ],
        workDone: [
            {
                workPicture: "", // TODO (Illustration : Maquettes UI)
                workTitle: "Création de l’interface utilisateur",
                workDescription: [
                    "Conception des pages web et mobile pour une navigation fluide.",
                    "Développement de l’espace étudiant et de l’espace enseignant.",
                ],
            },
            {
                workPicture: "", // TODO (Illustration : Diagramme des cas d’utilisation)
                workTitle: "Développement des fonctionnalités",
                workDescription: [
                    "Implémentation du système de connexion et d’inscription sécurisé.",
                    "Gestion des fiches et des groupes",
                    "Ajout des fonctionnalités de suivi des scores et statistiques.",
                    "Génération de rapports sur l’évolution des étudiants.",
                ],
            },
            {
                workPicture: "", // TODO
                workTitle: "Optimisation et amélioration continue",
                workDescription: [
                    "Ajustement des fonctionnalités en fonction des retours du client (professeur de mathématique).",
                    "Tests et corrections pour assurer la stabilité et l’ergonomie.",
                ],
            },
            {
                workPicture: "", // TODO
                workTitle: "Gestion de projet",
                workDescription: [
                    "Collaboration en équipe de 5 personnes avec un suivi rigoureux, des rapports d’analyse et une soutenance de fin de projet.",
                    "Utilisation de Git pour la gestion de version et de MSProject pour la planification.",
                ],
            },
        ],
        result: [
            "Le projet Muscu Maths a été déployé avec succès et est désormais opérationnel. Il sera intégré de manière durable dans le cours de “musculation mathématique”.", // TODO voir si les "" ne gène pas 
            "Acquisition de compétences techniques en développement web, gestion de bases de données et analyse de données (pédagogiques)."
        ]
    },
    {
        id: 2,
        title: "SAE2.01 1ère année Développement d'une application / DouShouQi",
        context: [
            "Doushou Qi est un jeu tactique et de stratégie abstrait pour deux joueurs dans lequel vous devez soit amener un de vos animaux dans le camp adverse soit éliminer tous les animaux de l'adversaire pour pouvoir remporter la partie.",
            "L’application fonctionne exclusivement sous Android",
            "Ce projet a été réalisé en équipe de 3 principalement à l'IUT sous la supervision des professeurs M.Coupas, M.Chevaldonne et M. Chargueraud."
        ],
        illustration: "/portfolio/images/DOUSHOUQI_illustration.png", // Changement du chemin
        objectives: {
            technical: [
                "Réaliser une application fonctionnelle en C# qui contient un jeu de plateau nommé DouShouQi et comprenant les rubriques : règles, crédits, paramètres."
            ]
        },
        technologies: [
            {
                techTitle: "C#",
                techDescription: "Langage principal utilisé pour le développement de l'application.",
            },
            {
                techTitle: ".NET MAUI",
                techDescription: "Framework utilisé pour le développement multiplateforme.",
            },
            {
                techTitle: "XAML",
                techDescription: "Langage de définition d'interface utilisateur utilisé avec .NET MAUI.",
            }
        ],
        workDone: [
            {
                workPicture: "/portfolio/images/DOUSHOUQI_home.png",
                workTitle: "Page d'accueil et menu",
                workDescription: [
                    "Conception de l'interface utilisateur et des menus.",
                    "Développement de la navigation et des transitions entre les pages.",
                ],
            },
            {
                workPicture: "/portfolio/images/DOUSHOUQI_game_start.png",
                workTitle: "Plateau de jeu - début de partie",
                workDescription: [
                    "Création du plateau de jeu interactif avec les pièces.",
                    "Implémentation des règles du jeu et de la logique des déplacements.",
                ],
            },
            {
                workPicture: "/portfolio/images/DOUSHOUQI_game_in_progress.png",
                workTitle: "Plateau de jeu - partie en cours",
                workDescription: [
                    "Gestion des interactions en temps réel entre les pièces et le plateau.",
                    "Mise en place des conditions de victoire et des états de jeu.",
                ],
            },
            {
                workPicture: "/portfolio/images/DOUSHOUQI_storyBoard.png",
                workTitle: "Storyboard",
                workDescription: [
                    "Création des scénarios de navigation et des interactions utilisateur.",
                    "Illustre le flux utilisateur depuis le menu principal jusqu'à la fin d'une partie, avec la sélection des joueurs, l'affichage du plateau et la gestion des tours.",
                ],
            },
        ],
        result: [
            "Application fonctionnelle avec un gameplay fluide et une interface intuitive.",
            "Développement de compétences en C#, .NET MAUI et gestion de projet en équipe."
        ]
        // https://opencast.dsi.uca.fr/paella/ui/watch.html?id=f0c0b809-d9dc-4f99-8022-67e86efe2463
        // lien video
    },

    { // projet personnel
        id: 3,
        title: "Projet personnel Printer Manager",
        context: [
            "Printer Manager est une application qui simplifie la gestion des impressions 3D en centralisant le suivi des commandes et des ressources pour une administration fluide et efficace.",
            "Elle permet aux clients de commander des produits et aux administrateurs de gérer les produits, les commandes, les clients ainsi que les ressources nécessaires au bon fonctionnement de l’imprimante 3D.", // TODO voir si je garde
        ],
        illustration: "/portfolio/images/PM_illustration.png",
        objectives: {
            technical: [
                "Réaliser une application multiplateforme fonctionnelle, intuitive avec des fonctionnalités de gestion de ressources.",
                "Offrir une gestion sécurisée des données avec un système d’authentification."
            ],
            personal: [
                "Améliorer l’optimisation des performances et la structuration d’un projet en continue.",
                "Suivre un cycle de développement structuré  (analyse, conception, développement, test) pour obtenir un projet scalable et maintenable."
            ]
        },
        technologies: [
            {
                techTitle: "Flutter",
                techDescription: "Framework mobile",
            },
            {
                techTitle: "Supabase",
                techDescription: "Backend pour l'authentification et la gestion des données",
            },
            {
                techTitle: "PostgreSQL",
                techDescription: "Base de données relationnelle",
            },
            {
                techTitle: "Row Level Security (RLS)",
                techDescription: "Sécurisation des données par rôle",
            }
        ],
        workDone: [
            {
                workPicture: "/portfolio/images/PM_supabase.png",
                workTitle: "Gestion de la base de donnée avec Supabase",
            },
            {
                workPicture: "/portfolio/images/PM_page_filament.png",
                workTitle: "Page administrateur : gestion des filaments administrateur",
            },
            {
                workPicture: "/portfolio/images/PM_gestion.png",
                workTitle: "Gestion de projet : Page Notion organisation",
            },
        ]
    },
];
