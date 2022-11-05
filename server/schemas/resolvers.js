const { AuthenticationError } = require("apollo-server-express");
const { User, Project } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const myData = await User.findOne({ _id: context.user._id })
        return myData;
      }
      throw new AuthenticationError("Log in");
    },
    allProjects: async (parent, args, context) => {
      if (context.user) {
        const projectData = await Project.find({});
        return projectData;
      }
      throw new AuthenticationError("You need to be logged in");
    },
    oneProject: async (parent, { _id }, context) => {
      if (context.user) {
        const projectData = await Project.findOne({ _id });
        return projectData;
      }
      throw new AuthenticationError("You need to be logged in");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addProject: async (parent, { title, description }, context) => {
      if (context.user) {
        const project = await Project.create({ title, description })
        return project;
      }
      throw new AuthenticationError(
        "You need to be logged in to add a project"
      );
    },
    updateProject: async (parent, { projectId, projectInput }) => {
      const projectUpdate = await Project.findByIdAndUpdate(
        { projectId, projectInput },
        { new: true }
      );
      return projectUpdate;
    },
    removeProject: async (parent, { projectId }, context) => {
      if (context.user) {
        const projectDelete = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: projectId } },
          { new: true }
        );
        return projectDelete;
      }
      throw new AuthenticationError(
        "You need to be logged in to remove a project"
      );
    },
  },
};

module.exports = resolvers;
