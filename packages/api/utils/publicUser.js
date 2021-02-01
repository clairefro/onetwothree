const publicUser = ({ username, _id }) => ({ username, id: _id });

module.exports = {
	publicUser,
};
