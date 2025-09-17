const data = require("../models/DataBase");

const getAllUser = (_, res) => {
  try {
    const userData = data;
    if (!userData) {
      return res.status(204).json("No Data Available");
    }

    return res.status(200).json(userData);

  } catch (err) {
    console.error("Error while Fetch a Data : ", err);
    return res.status(500).json("Error While Fetch");
  }
};

const getUserById = (req, res) => {
  try {

    const userId = parseInt(req.params.id);
    if (!userId) {
      return res.status(400).json("please User Id");
    }

    const userData = data.find((user) => user.id === userId);
    if (!userData) {
      return res.status(404).json("InValid User Id ");
    }

    return res.status(200).json(userData);
    
  } catch (err) {
    console.error("error while getUserById : ", err);
    return res.status(500).json("Error Occur At getUserById");
  }
};

module.exports = { getAllUser, getUserById };
