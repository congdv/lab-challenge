const Labs = require("../models/labs");
const xlxsParser = require("xlsx");
const path = require("path");
const jwt = require("jsonwebtoken");

const readLabsFromFile = () => {
    const filePath = path.resolve(__dirname, "../assets/labs-data.xlsx");
    const workbook = xlxsParser.readFile(filePath);
    const sheetList = workbook.SheetNames;
    const labs = xlxsParser.utils.sheet_to_json(workbook.Sheets[sheetList[0]]);
    return labs;
};

const getAllLabs = async (req, res, next) => {
    try {
        //Check authentication
        const decodedToken = jwt.verify(req.token, process.env.SECRET);
        if (!req.token || !decodedToken.id) {
            return res.status(401).json({ error: "token missing or invalid" });
        }
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: "token missing or invalid" });
    }

    //Check database have labs data
    let labs = await Labs.find({});
    if (labs.length == 0) {
        //Read data from excel file
        const data = readLabsFromFile();
        try {
            let parserLabs = [];
            data.map(lab => {
                parserLabs = parserLabs.concat({
                    organization: lab.Organization ? lab.Organization : null,
                    title: lab.Title,
                    description: lab.Description ? lab.Description : null,
                    category: lab["Category "],
                    privacy: lab["Privacy "],
                    imageName: lab.ImageName ? lab.ImageName : "",
                    latitude: lab.Latitude,
                    longitude: Number(lab.Longitude),
                    address: lab.Address,
                    city: lab.City,
                    country: lab.Country,
                    status: lab["Status (0 / 1)"] == 1,
                });
            });

            //save data to database
            labs = await Labs.create(parserLabs);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    res.status(200).send(labs);
};

module.exports = { getAllLabs };
