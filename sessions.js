module.exports = day => {
  const sessions = {
    monday: ["abc"],
    tuesday: ["def"],
    wednesday: ["ghi"]
  };
  return sessions[day][0];
};
