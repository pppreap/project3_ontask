const { xx, xx } = require('../models');

const resolvers = {
  Query: {
    xx: async () => {
      return xx.find({});
    },
    xx: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return xxx.find(params);
    },
  },
  Mutation: {
    createxx: async (parent, args) => {
      const xx = await xx.create(args);
      return xx;
    },
    createxx: async (parent, { _id, xxNum }) => {
      const vxx = await xx.findOneAndUpdate(
        { _id },
        { $inc: { [`xx${xxNum}_votes`]: 1 } },
        { new: true }
      );
      return xx;
    },
  },
};

module.exports = resolvers;
