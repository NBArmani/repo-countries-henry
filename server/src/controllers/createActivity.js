const { Activity, Country } = require('../db');

exports.createActivity = async (req, res) => {
    try {
      const { name, season, difficulty, duration, countries} = req.body;
  
  
      const contries = await Country.findByPk(countries);
  
      if (!contries ) {
        return res.status(404).json({ error: "Countries not found." });
      }
  const newActivity = await Activity.create({
        name,
        season,
        difficulty,
        duration,
      });
      await newActivity.addCountry(contries);
  
      res.status(201).json(newActivity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


/*exports.createActivity = async (req, res) => {
  try {
    const { name, season, difficulty, duration, countries} = req.body;


    const contries = await Country.findByPk(countries);

    if (!contries ) {
      return res.status(404).json({ error: "Carrer or Company not found." });
    }
const newActivity = await Activity.create({
      name,
      season,
      difficulty,
      duration,
    });
    await newActivity.addCountry(contries);

    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};*/