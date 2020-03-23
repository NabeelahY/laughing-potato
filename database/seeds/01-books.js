exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books_test')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('books_test').insert([
        {
          id: '1',
          summary:
            "Just because my dreams are not the same as yours doesn't mean that they are not valid",
          title: 'Little women',
          author: 'May Louisa Alcott'
        },
        {
          id: '2',
          summary:
            'How could such a small group of second rate tyrants ravage 900 million people for so long?',
          title: 'Wild Swans',
          author: 'Jung Chang'
        }
      ]);
    });
};
