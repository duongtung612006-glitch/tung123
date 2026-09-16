// login.test.js
const checkLogin = require("./login");

describe("checkLogin", () => {
  test("trả về true khi đúng tài khoản và mật khẩu", () => {
    expect(checkLogin("admin", "123")).toBe(true);
  });

  test("trả về false khi sai mật khẩu", () => {
    expect(checkLogin("admin", "wrongpass")).toBe(false);
  });

  test("trả về false khi sai tên đăng nhập", () => {
    expect(checkLogin("user", "123")).toBe(false);
  });

  test("trả về false khi cả hai đều sai", () => {
    expect(checkLogin("foo", "bar")).toBe(false);
  });
});
