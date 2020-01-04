const data = require("../data/data.json");

/**
 * Filters array of objects and return 3 random apps
 * @function getFavApps
 * @param {object} req - HTTP request
 * @param {object} res - HTTP response
 * @returns {array} - Array of apps
 */

module.exports.getFavApps = (req, res) => {
    const categ = req.body.categories,
        rating = req.body.rating,
        birth = req.body.birth;

    if (!categ || !rating || !birth) {
        res.statusCode = 500;
        return res.send("Insufficient data")
    }

    const apps = getApps(categ, rating, birth);
    console.log(apps)
    if (apps) {
        return res.send(apps);
    }

    return res.send([]);
};


const getApps = (categories, rating, birth) => {
    const age = getAge(birth);
    const filteredAge = filterByAge(age);

    if (!filteredAge) {
        return null;
    }
    const filteredRating = filterByRating(filteredAge, rating);

    if (!filteredRating) {
        return null;
    }
    const filteredCateg = filterByCategory(filteredRating, categories);

    if (!filteredCateg) {
        return null;
    }

    if (filteredCateg.length > 3) {
        return randomPick(filteredCateg);
    }

    return filteredCateg;
}


const getAge = birth => {
    const age = Date.now() - new Date(birth).getTime();
    const ageDate = new Date(age);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


const filterByAge = age => {
    const result = [];
    if (data && age) {
        for (let i of data) {
            if (i.min_age <= age) {
                result.push(i);
            };
        };
    };
    return result;
}


const filterByRating = (newData, rating) => {
    const result = [];
    if (newData && rating) {
        for (let i of newData) {
            if (i.rating >= rating) {
                result.push(i);
            };
        };
    };
    return result;
}


const filterByCategory = (newData, categories) => {
    let result = [];
    if (newData && categories) {
        result = newData.filter(x => categories.includes(x.category));
    };

    return result;
}

const randomPick = arr => {
    const result = []
    for (let i = 0; i < 3; i++) {
        let randVal
        let randomIndex = Math.floor(Math.random() * arr.length);
        if (result.indexOf(arr[randomIndex]) !== -1) {
            i--;
        } else {
            result.push(randVal);
        }
    }
    return result;
}
