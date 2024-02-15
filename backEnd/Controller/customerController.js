const dao = require("../dao/customerDoa");

module.exports.postCustomer = (req, res) => {
  var requestData = req.body;
  dao.postCustomer(requestData, function (err, result) {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res
        .status(200)
        .send({ error: false, data: result, message: "Saved Successfully" });
    }
  });
};

module.exports.getCustomer = (req, res) => {
  dao.getCustomer(function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({ error: false, data: result, message: null });
    }
  });
};

module.exports.getCustomerById = (req, res) => {
  let id = req.params.id;
  dao.getCustomerById(id, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({ error: false, data: result, message: null });
    }
  });
};

module.exports.updateCustomer = (req, res) => {
  let id = req.params.id;
  let requestData = req.body;
  dao.updateCustomer(id, requestData, function (err, result) {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res
        .status(200)
        .send({ error: false, data: result, message: "Updated Successfully" });
    }
  });
};

module.exports.deleteCustomer = (req, res) => {
  let id = req.params.id;
  dao.deleteCustomer(id, function (err, result) {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res
        .status(200)
        .send({ error: false, data: result, message: "Deleted Successfully" });
    }
  });
};
