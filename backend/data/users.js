import bcryptjs from "bcryptjs";

const users = [
  {
    name: "admin User",
    email: "admin@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isadmin: true,
  },
  {
    name: "Not admin User",
    email: "zeyd@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isadmin: false,
  },
  {
    name: "Not admin User2",
    email: "adnaan@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isadmin: false,
  },
];

export default users;
