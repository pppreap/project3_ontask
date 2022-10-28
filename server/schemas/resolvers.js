const { AuthenticationError } = require("apollo-server-express");
const { User, Project } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await UserInputError.findOne({
          _id: context.user._id,
        });
        return userData;
      }
      throw new AuthenticationError("Log in to see your projects");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid email or password");
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Invalid email or password");
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addProject: async (parent, { projectInput }) => {
      const project = await Project.create({ projectInput });
      return project;
    },
    updateProject: async (parent, { projectId, projectInput }) => {
      const projectUpdate = await Project.findByIdAndUpdate(
        { projectId, projectInput },
        { new: true }
      );
      return projectUpdate;
    },
    removeProject: async (parent, { projectId }) => {
      const projectDelete = await Project.findByIdAndDelete({ projectId });
      return projectDelete;
    },
  },
};

module.exports = resolvers;
