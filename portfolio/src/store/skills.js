export const skills = [
    {
        id: 1,
        globalTitle: "Programmation",
        globalDefinition: "Conception et création de programme informatique avec des processus de vérification et de correction d'erreurs.",
        globalSkillsList: [
            {
                skillTitle: "Qualité de développement",
                skillIcon: "fas fa-code-branch", // Icône pour la gestion de code,
                skillsList: [
                    { skillLevelTitle: "Étude de complexité", skillLevelValue: 70 },
                    { skillLevelTitle: "Optimisation d'un programme", skillLevelValue: 75 },
                    { skillLevelTitle: "Structuration et modularité du code", skillLevelValue: 80 },
                    { skillLevelTitle: "Utilisation de tests unitaires et fonctionnels", skillLevelValue: 65 },
                ]
            },
            {
                skillTitle: "Développement algorithmique",
                skillIcon: "fas fa-laptop-code",
                skillsList: [
                    { skillLevelTitle: "Python", skillLevelValue: 80 },
                    { skillLevelTitle: "C", skillLevelValue: 75 },
                    { skillLevelTitle: "C++", skillLevelValue: 70 },
                ]
            },
            {
                skillTitle: "Développement d’application et IHM",
                skillIcon: "fas fa-mobile-alt",
                skillsList: [
                    { skillLevelTitle: "C#", skillLevelValue: 70 },
                    { skillLevelTitle: ".NET MAUI", skillLevelValue: 60 },
                    { skillLevelTitle: "XAML", skillLevelValue: 60 },
                    { skillLevelTitle: "Java", skillLevelValue: 75 },
                    { skillLevelTitle: "Kotlin", skillLevelValue: 70 },
                    { skillLevelTitle: "Android", skillLevelValue: 65 },
                ]
            },
            {
                skillTitle: "Développement de site web",
                skillIcon: "fas fa-globe",
                skillsList: [
                    { skillLevelTitle: "HTML, CSS", skillLevelValue: 70 },
                    { skillLevelTitle: "PHP", skillLevelValue: 40 },
                    { skillLevelTitle: "JavaScript", skillLevelValue: 50 },
                ]
            },
            {
                skillTitle: "Développement cross plateforme",
                skillDefinition: "Développement d'applications pouvant fonctionner sur plusieurs systèmes d'exploitation.",
                skillIcon: "fas fa-layer-group",
                skillsList: [
                    {
                        skillLevelTitle: "Dart",
                        skillLevelDefinition: ["Framework : Flutter"],
                        skillLevelValue: 80
                    },
                    {
                        skillLevelTitle: "TypeScript",
                        skillLevelDefinition: ["Framework : React Native"],
                        skillLevelValue: 50
                    },
                ]
            },

        ]
    },
    {
        id: 2,
        globalTitle: "Administration",
        globalDefinition: "Étude de notions permettant d'administrer un réseau et de comprendre les structures du matériel et des composants informatiques.",
        globalSkillsList: [
            {
                skillTitle: "Système d'exploitation",
                skillDefinition: "Notions permettant de gérer les utilisateurs, les permissions, les processus, les services, et les systèmes de fichiers.",
                skillIcon: "fas fa-server",
                skillsList: [
                    {
                        skillLevelTitle: "Bash",
                        skillLevelValue: 50
                    },
                    {
                        skillLevelTitle: "Automatisation des tâches administratives (scripts Shell)",
                        skillLevelValue: 50
                    },
                ]
            },
            {
                skillTitle: "Analyse des services réseaux",
                skillIcon: "fas fa-network-wired",
                skillsList: [
                    {
                        skillLevelTitle: "Surveillance et analyse du trafic réseau",
                        skillLevelValue: 60
                    },
                    {
                        skillLevelTitle: "Configuration de serveurs",
                        skillLevelValue: 60
                    },
                ]
            },
            {
                skillTitle: "Architecture des ordinateurs",
                skillIcon: "fas fa-microchip",
                skillsList: [
                    {
                        skillLevelTitle: "Compréhension des composants matériels",
                        skillLevelValue: 50
                    },
                    {
                        skillLevelTitle: "Gestion de la mémoire et des performances",
                        skillLevelValue: 60
                    },
                ]
            },
        ]
    },
    {
        id: 3,
        globalTitle: "Gestion de projet",
        globalDefinition: "Organisation et planification de projet, gestion des ressources et des risques, et suivi de l'avancement.",
        globalSkillsList: [
            {
                skillTitle: "Gestion de version et de qualité de développement",
                skillIcon: "fas fa-tasks",
                skillsList: [
                    { skillLevelTitle: "GIT", skillLevelValue: 85 },
                    { skillLevelTitle: "Drone CI", skillLevelValue: 65 },
                    { skillLevelTitle: "SonarQube", skillLevelValue: 70 },
                    { skillLevelTitle: "Docker", skillLevelValue: 70 },
                    { skillLevelTitle: "CI/CD", skillLevelValue: 60 },
                ]
            },
            {
                skillTitle: "Organisation de projet",
                skillIcon: "fas fa-project-diagram",
                skillsList: [
                    { skillLevelTitle: "MSProject", skillLevelValue: 60 },
                    { skillLevelTitle: "Notion", skillLevelValue: 95 },
                    { skillLevelTitle: "Excel / Google Sheets", skillLevelValue: 75 },
                    { skillLevelTitle: "Méthode Agile (Scrum, Kanban)", skillLevelValue: 85 },
                ]
            },
        ]
    },
    {
        id: 4,
        globalTitle: "Gestion des bases de données",
        globalDefinition: "Conception, mise en place, maintenance et optimisation des bases de données.",
        globalSkillsList: [
            {
                skillTitle: "Conception de base de données",
                skillIcon: "fas fa-database",
                skillsList: [
                    { skillLevelTitle: "MCD et MLD", skillLevelValue: 85 },
                    { skillLevelTitle: "Modélisation UML", skillLevelValue: 80 },
                    { skillLevelTitle: "Normalisation des bases de données", skillLevelValue: 75 },
                ]
            },
            {
                skillTitle: "Optimisation des performances des bases de données",
                skillIcon: "fas fa-tachometer-alt",
                skillsList: [
                    { skillLevelTitle: "Indexation et optimisation des requêtes", skillLevelValue: 80 },
                    { skillLevelTitle: "Partitionnement des tables", skillLevelValue: 70 },
                ]
            },
            {
                skillTitle: "Sécurisation des bases de données",
                skillIcon: "fas fa-lock",
                skillsList: [
                    { skillLevelTitle: "Gestion des droits et permissions", skillLevelValue: 80 },
                    { skillLevelTitle: "Protection contre l'injection SQL", skillLevelValue: 85 },
                ]
            },
            {
                skillTitle: "Traitement des bases de données",
                skillIcon: "fas fa-table",
                skillsList: [
                    { skillLevelTitle: "MySQL", skillLevelValue: 85 },
                    { skillLevelTitle: "PostgreSQL", skillLevelValue: 80 },
                    { skillLevelTitle: "MongoDB", skillLevelValue: 70 },
                ]
            },
        ]
    }

]