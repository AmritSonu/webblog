const authUser = async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "You are authorized to access me",
    });
  } catch (err) {
    res.json({
      status: "Internal Error",
      message: err.message,
    });
  }
};
export { authUser };
