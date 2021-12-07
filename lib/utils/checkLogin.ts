const checkLogin = (currentUser: any) => {
  const user = JSON.parse(currentUser);

  return (
    !!user && user.constructor === Object && Object.keys(user).length !== 0
  );
};

export default checkLogin;
