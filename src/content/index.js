export default {
  nav: {
    logo: '7W',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img: process.env.PUBLIC_URL + '/assets/logo.png',
    text: ['Bienvenue sur le site', "de la 7WCréa."],
    mans: [
      {
        img: process.env.PUBLIC_URL + '/assets/owners/7fps.png',
        alt: '7fps',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/owners/whyyy.png',
        alt: 'whyyy',
      },
    ],
    discordText: 'Discord',
    fpsText: 'Découvre 7FPS',
    whyyText: 'Découvre Whyyy',
    skillsText: 'Nos compétences',
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/ps.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + 'assets/illustrator.png',
        alt: 'react',
      },
    ],
    desc: `Nous n'effectuons pas de dessin, malgré notre bonne volonté de vouloir créer de nos mains.. La suite adobe est notre domaine de prédilection principalement`,
  },
};
