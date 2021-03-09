const User = require('./User');
const Project = require('./Project');
const Comment = require('./comment');

Project.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Project.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: "CASCADE"
})

module.exports = { User, Project, Comment };