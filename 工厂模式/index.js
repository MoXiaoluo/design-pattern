
/**
 * @constructor
 * @param {string} role 
 * @param {string} pages 
 */
function User(role, pages) {
  this.role = role;
  this.pages = pages;
}
/**
 * 
 * @param {string} role 
 * @returns {object}
 */
function factory(role) {
  switch (role) {
    case "superAdmin":
      return new User("superAdmin", [
        "Home",
        "user-manage",
        "right-manage",
        "news-manage",
      ]);
    case "admin":
      return new User("admin", ["Home", "user-manage", "news-manage"]);
    case "editor":
      return new User("editor", ["Home", "news-manage"]);
    default:
      throw new Error("invalid role provide");
  }
}

const superAdmin = factory("superAdmin");
const admin = factory("admin");
const editor = factory("editor");
console.log(editor);




