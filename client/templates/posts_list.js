var postsData = [
  {
    title: 'Introducing Telescope',
  },
  {
    title: 'Meteor',
  },
  {
    title: 'The Meteor Book',
  }
];
Template.postsList.helpers({
  posts: postsData
});