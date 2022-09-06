export const getToken = () => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  return token;
};
export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};
