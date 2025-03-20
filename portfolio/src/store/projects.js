export const projects = [
    // projets SAE du BUT
    // TODO ajouter les 2 SAE de première année
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
        linkToVue: "", // TODO
        linkToGIT: "",// TODO
        objectives: {
            technical: [
                "Développer une application robuste et ergonomique avec une gestion optimisée des groupes, des fiches et des statistiques, tout en garantissant une expérience utilisateur intuitive et fluide sur web et mobile.",
            ]
        },
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
                workTitle: "Développement des fonctionnalités ",
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
    { // projet personnel
        id: 2,
        title: "Printer Manager",
        context: [
            "Printer Manager est une application qui simplifie la gestion des impressions 3D en centralisant le suivi des commandes et des ressources pour une administration fluide et efficace.",
            "Elle permet aux clients de commander des produits et aux administrateurs de gérer les produits, les commandes, les clients ainsi que les ressources nécessaires au bon fonctionnement de l’imprimante 3D.", // TODO voir si je garde
        ],
        illustration: "", // TODO
        linkToVue: "", // TODO
        linkToGIT: "",// TODO
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
                workPicture: "",
                workTitle: "Page de connexion/ création de compte",
            },
            {
                workPicture: "",
                workTitle: "Page gestion admin",
            },
            {
                workPicture: "",
                workTitle: "Page clients",
            },
        ]
    },
];
