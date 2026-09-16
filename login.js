// login.js
// Hàm kiểm tra đăng nhập đơn giản
function checkLogin(username, password) {
  if (username === "admin" && password === "123") {
    return true;
  }
  return false;
}

// Hỗ trợ dùng trong Node.js (Jest) lẫn trong trình duyệt
if (typeof module !== "undefined" && module.exports) {
  module.exports = checkLogin;
}
