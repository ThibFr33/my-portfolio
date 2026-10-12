import avatarImage from '../assets/images/profile.jpg'
import taskItVideo from '../assets/videos/task-it.mp4'
import kraytVideo from '../assets/videos/krayt-cosplay.mp4'
import marsaiVideo from '../assets/videos/marsai-rework.mp4'

export const PROFILE = {
  name: 'Thibault Charron',
  role: 'Développeur web full-stack',
  location: 'France',
  avatar: avatarImage,
  avatarAlt: 'Photo de profil de Thibault Charron',
  headline:
    "Je conçois des outils web rapides, accessibles et efficaces, de l'élaboration de la logique au rendu visuel.",
  pitch:
    "Je privilégie la création d'interfaces claires et intuitives, avec des composants robustes et réutilisables. Mon approche consiste à faire des choix techniques simples, cohérents et durables afin de construire des applications faciles à maintenir et à faire évoluer dans le temps.",
  email: 'thibs.cha@gmail.com',
  links: {
    github: 'https://www.github.com/ThibFr33/',
    linkedin: 'https://www.linkedin.com/in/thibault-charron/',
  },
}

export const SKILLS = [
  {
    title: 'Front-end',
    items: ['React', 'JavaScript', 'Responsive', 'UI/UX', 'Accessibilité'],
  },
  {
    title: 'Back-end',
    items: ['Node.js', 'Express', 'PHP', 'Symfony', 'Ruby on Rails'],
  },
  {
    title: 'Données',
    items: ['MySQL', 'PostgreSQL', 'phpMyAdmin', 'API REST'],
  },
  {
    title: 'Qualité',
    items: ['Tests', 'Performance web', 'Maintenabilité'],
  },
]

export const PROJECTS = [
  {
    title: 'ColocManager',
    genre: 'Gestion de colocation',
    role: 'Outil de gestion',
    function: "Gestion des colocations, des dépenses et de leur répartition",
    description:
      "J'ai participé à la conception et au développement d'une application de gestion de colocation avec Symfony. Elle permet de gérer les dépenses communes et de répartir les parts entre colocataires. J'ai travaillé sur la modélisation de la base de données, la logique de répartition des dépenses et la connexion du front à l'API, avec un environnement Docker.",
    tags: ['PHP', 'Symfony', 'Doctrine', 'MySQL', 'Docker', 'React'],
    video: null,
    links: {
      demo: '',
      github: 'https://github.com/Victor-Voyer/ColocManager',
    },
  },
  {
    title: 'MarsAI',
    genre: 'Festival vidéo',
    role: 'Full-stack',
    function: "Soumissions, modération, jury et espace d'administration",
    description:
      "J'ai participé au développement d'une plateforme pour gérer les vidéos envoyées au festival MarsAI: dépôt des oeuvres, suivi des statuts, modération, tags, récompenses et espace jury. Le projet demandait surtout de garder des parcours simples malgré plusieurs profils d'utilisateurs.",
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    video: marsaiVideo,
    links: {
      demo: '',
      github: '',
    },
  },
  {
    title: 'Krayt Cosplay',
    genre: 'Site associatif',
    role: 'Rails & intégration',
    function: 'Profils membres, galeries photo et back-office',
    mediaFit: 'contain',
    description:
      "Un site pour présenter l'association, ses membres et leurs costumes, avec une partie admin pour garder le contenu à jour. J'ai travaillé sur l'intégration, la gestion des images et les pages de présentation afin que l'équipe puisse publier sans toucher au code.",
    tags: ['Ruby on Rails', 'Active Storage', 'Cloudinary', 'Responsive'],
    video: kraytVideo,
    links: {
      demo: 'https://www.krayt-cosplay.com',
      github: '',
    },
  },
  {
    title: 'Task-It',
    genre: 'Projet de formation',
    role: 'Développement en équipe',
    function: 'Listes de tâches mobiles avec ajout rapide par OCR',
    mediaSize: 'compact',
    description:
      "Projet final réalisé en équipe pendant Le Wagon. L'idée était de créer une app mobile pour noter rapidement des tâches, scanner du texte via OCR et transformer ces infos en rappels utilisables au quotidien.",
    tags: ['To-do list', 'Ruby on Rails', 'Responsive'],
    video: taskItVideo,
    links: {
      demo: '',
      github: '',
    },
  },
]
