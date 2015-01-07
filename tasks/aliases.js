module.exports = {
    "default": ["build"],
    "build": ["jshint", "style"],
    "style": ["copy:normalize", "sass"]
};
