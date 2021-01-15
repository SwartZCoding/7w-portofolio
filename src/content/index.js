export default {
  nav: {
    logo: '7W',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img:
      'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    text: ['Hi!', "It's me Random.", 'I am '],
    typical: [
      'web developer. 🖥',
      2000,
      'Youtuber. 📹',
      2000,
      'Mobile Developer',
      2000,
    ],
    btnText: 'Discover More',
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
