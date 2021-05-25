"use strict";

const User = require("../../models/User");

const outPut = {
    home: (req, res) => {
        res.render("home/index");  
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

// const users = {
//     id: ["tlatn262", "sim", "심"],
//     psword: ["123", "1234", "123456"],
// };

const process = {
    login: (req, res) => {
     const user = new User(req.body);
     const response = user.login();
    //  return res.json(response);
     console.log(response);
    //     const id = req.body.id,
    //       psword = req.body.psword;
    
    // const users = UserStorage.getUsers("id", "psword");

    // const response = {}; 
    // if (users.id.includes(id)) {
    //     const idx = users.id.indexOf(id);
    //     if (users.psword[idx] === psword) {
    //         response.success = true;
    //         return res.json(response);
    //     }
    // }

    // response.success = false;
    // response.msg = "로그인에 실패하셨습니다.";
    // return res.json(response);
  },
};


module.exports = {
    outPut,
    process,
};