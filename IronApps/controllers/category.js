const data = require("../data/data.json");

/**
 * Passes through array of objects and finds unique categories
 * @function getCategories
 * @param {object} req - HTTP request
 * @param {object} res - HTTP response
 * @returns {array} - Array of unique categories
 */

module.exports.getCategories = (req, res) => {
    const categories = [];
    let uniqueCat;

    // Add categories from data to Array
    if (data) {
        for (let i of data) {
            const categ = i['category'];
            if (categ) {
                categories.push(categ);
            };
        };
    };

    if (categories) {
        // Converting to array unique categories from Set
        uniqueCat = Array.from(new Set(categories));
        return res.send(uniqueCat);
    }

    return res.send([]);
};