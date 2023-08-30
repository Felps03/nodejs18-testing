const generateId = (users) => {
  if (!Array.isArray(users) || !users.length) {
    return 1;
  }

  const ids = users.map((u) => parseInt(u.id)).filter((id) => !isNaN(id));

  if (!ids.length) {
    return 1;
  }

  return Math.max(...ids) + 1;
};

module.exports = generateId;
