exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('books').insert([
        {
          summary:
            "Just because my dreams are not the same as yours doesn't mean that they are not valid",
          title: 'Little women',
          author: 'May Louisa Alcott',
        },
        {
          summary:
            'How could such a small group of second rate tyrants ravage 900 million people for so long?',
          title: 'Wild Swans',
          author: 'Jung Chang',
        },
      ]));
};
