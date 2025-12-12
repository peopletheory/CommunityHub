const HttpError = require("../models/http-error");
const mongoose = require("mongoose");

const Member = require("./../models/member");

const Client = require("./../models/client");

const createMember = async (req, res, next) => {
    const clientID = req.params.cid;

    const states = req.body.states;
    const fields = req.body.fields;

    //make sure client id is valid

    console.log(fields);

    if (!clientID) {
        const error = new HttpError("Client ID is invalid", 500);
        return next(error);
    }

    if (!states) {
        const error = new HttpError("States are invalid", 500);
        return next(error);
    }

    if (!fields) {
        const error = new HttpError("Fields are invalid", 500);
    }

    try {
        const client = await Client.findById(clientID);
    } catch (err) {
        const error = new HttpError("Client does not exist", 500);
        return next(error);
    }

    const field_keys = Object.keys(fields);

    let submission = {};

    for (var f = 0; f < field_keys.length; f++) {
        const key = field_keys[f];
        const field = fields[key];

        const inclusion = field["inclusion"];

        if (!inclusion) {
            continue;
        }

        const slug = field["slug"];
        const state = states[slug];

        const required = field["required"];

        if (required && state == "") {
            const error = new HttpError("Missing a required field", 500);
            return next(error);
        }

        const unique = field["unique"];
        if (unique) {
            console.log("jordan", slug, state);
            const uniqueMembers = await Member.find({ [slug]: state, firstName: states["firstName"], lastName: states["lastName"] });

            const len = uniqueMembers.length;

            if (len > 0) {
                const error = new HttpError("You entered a duplicate value for a unique key", 500);
                return next(error);
            }
        }

        const type = field["type"];

        if (type === "select") {
            const options = field["options"];
            const optionKeys = Object.keys(options);

            if (!optionKeys.includes(state)) {
                const error = new HttpError("Option is not valid", 500);
                return next(error);
            }
        }

        submission[slug] = state;
    }
    submission["client"] = clientID;

    let createdMember;
    try {
        createdMember = new Member(submission);
    } catch (err) {
        const error = new HttpError("Could not create member", 500);
        return next(error);
    }

    try {
        await createdMember.save();
    } catch (err) {
        const error = new HttpError("Could not create member", 500);
        return next(error);
    }

    console.log("submit", createdMember);

    res.json("create a member " + clientID);
};

const memberBatch = async (req, res, next) => {
    const firstNames = ["Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Charlotte", "William", "Sophia", "James", "Amelia", "Benjamin", "Isabella", "Lucas", "Mia", "Henry", "Evelyn", "Alexander", "Harper", "Michael", "Luna", "Ethan", "Camila", "Daniel", "Gianna", "Jacob", "Elizabeth", "Logan", "Eleanor", "Jackson", "Ella", "Levi", "Abigail", "Sebastian", "Sofia", "Mateo", "Avery", "Jack", "Scarlett", "Owen", "Emily", "Theodore", "Aria", "Aiden", "Penelope", "Samuel", "Chloe", "Joseph", "Layla"];

    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"];

    const nicknames = ["Ace", "Buddy", "Champ", "Sparky", "Red", "Sunny", "Bear", "Skipper", "Dash", "Rocket", "Shorty", "Lucky", "Shadow", "Scooter", "Buzz", "Smiley", "Boomer", "Chief", "Speedy", "Stretch", "Breeze", "Jinx", "Frost", "Blaze", "Tank", "Maverick", "Spike", "Ranger", "Flash", "Wolf", "Goose", "Moose", "Fox", "Hawk", "Gator", "Slim", "Peanut", "Cookie", "Patches", "Kit", "Ziggy", "Blue", "Storm", "Crusher", "Knuckles", "Tinker", "Whiz", "Chirp", "Rocky"];
    const famousAddresses = [
        "1600 Pennsylvania Ave NW, Washington, DC 20500, USA", // White House
        "350 5th Ave, New York, NY 10118, USA", // Empire State Building
        "Statue of Liberty, New York, NY 10004, USA", // Statue of Liberty
        "89 E 42nd St, New York, NY 10017, USA", // Grand Central Terminal
        "4059 Mt Lee Dr, Hollywood, CA 90068, USA", // Hollywood Sign
        "200 Santa Monica Pier, Santa Monica, CA 90401, USA", // Santa Monica Pier
        "700 Exposition Park Dr, Los Angeles, CA 90037, USA", // California Science Center
        "1 World Way, Los Angeles, CA 90045, USA", // LAX
        "2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan", // Senso-ji Temple
        "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan", // Tokyo Skytree
        "Piazza del Colosseo, 1, 00184 Rome RM, Italy", // Colosseum
        "Piazza San Pietro, 00120 Vatican City", // St. Peter’s Basilica
        "Piazza del Duomo, 20122 Milano MI, Italy", // Milan Cathedral
        "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France", // Eiffel Tower
        "Louvre Museum, Rue de Rivoli, 75001 Paris, France", // Louvre
        "Place Charles de Gaulle, 75008 Paris, France", // Arc de Triomphe
        "Buckingham Palace, London SW1A 1AA, UK", // Buckingham Palace
        "Westminster Abbey, 20 Deans Yd, London SW1P 3PA, UK", // Westminster Abbey
        "Tower Bridge, London SE1 2UP, UK", // Tower Bridge
        "Sydney Opera House, Bennelong Point, Sydney NSW 2000, Australia", // Sydney Opera House
        "Great Wall of China, Huairou District, Beijing, China", // Great Wall (Badaling)
        "Forbidden City, 4 Jingshan Front St, Beijing, China", // Forbidden City
        "Taj Mahal, Dharmapuri, Forest Colony, Tajganj, Agra 282001, India", // Taj Mahal
        "Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd, Dubai, UAE", // Burj Khalifa
        "The Palm Jumeirah, Dubai, UAE", // Palm Jumeirah
        "CN Tower, 290 Bremner Blvd, Toronto, ON M5V 3L9, Canada", // CN Tower
        "Niagara Falls, 6650 Niagara Pkwy, Niagara Falls, ON, Canada", // Niagara Falls
        "Christ the Redeemer, Parque Nacional da Tijuca, Rio de Janeiro, Brazil", // Cristo Redentor
        "Machu Picchu, Aguas Calientes, Peru", // Machu Picchu
        "Chichen Itza, Yucatán, Mexico", // Chichen Itza
        "La Sagrada Familia, Carrer de Mallorca, 401, 08013 Barcelona, Spain", // Sagrada Familia
        "Park Güell, 08024 Barcelona, Spain", // Park Güell
        "Brandenburg Gate, Pariser Platz, 10117 Berlin, Germany", // Brandenburg Gate
        "Neuschwanstein Castle, 87645 Schwangau, Germany", // Neuschwanstein Castle
        "Red Square, Moscow, Russia, 109012", // Red Square
        "Hermitage Museum, Palace Embankment, 2, St. Petersburg, Russia", // Hermitage
        "Table Mountain, Cape Town, South Africa", // Table Mountain
        "Robben Island, Cape Town, South Africa", // Robben Island
        "Petra, Wadi Musa, Jordan", // Petra
        "Giza Necropolis, Al Haram, Giza Governorate, Egypt", // Pyramids of Giza
        "Angkor Wat, Krong Siem Reap, Cambodia", // Angkor Wat
        "Marina Bay Sands, 10 Bayfront Ave, Singapore 018956", // Marina Bay Sands
        "Gardens by the Bay, 18 Marina Gardens Dr, Singapore 018953", // Gardens by the Bay
        "Little Mermaid Statue, Langelinie, 2100 Copenhagen, Denmark", // Little Mermaid
        "Rijksmuseum, Museumstraat 1, 1071 XX Amsterdam, Netherlands", // Rijksmuseum
        "Anne Frank House, Westermarkt 20, 1016 GV Amsterdam, Netherlands", // Anne Frank House
        "Acropolis of Athens, Athens 105 58, Greece", // Acropolis
        "Hagia Sophia, Sultan Ahmet, Ayasofya Meydanı, Istanbul, Türkiye", // Hagia Sophia
        "Grand Bazaar, Beyazıt, Istanbul, Türkiye", // Grand Bazaar
        "Banff National Park, Alberta, Canada", // Banff
    ];
    const secondaryAddressesMixed = ["Apt 101", "", "Suite 303", "Floor 1", "", "Room 24", "Unit 505", "", "Building B", "", "Apt 202", "Floor 2", "", "PO Box 1002", "", "Suite 404", "Room 12", "", "Unit 606", "Apartment 7B", "", "", "Building C", "Suite 9D", "", "Floor 3", "", "PO Box 1003", "Unit 11F", "", "Apartment 8C", "", "Suite 10E", "Floor 5", "", "", "PO Box 1001", "", "Room 36", "", "Unit 12G", "", "", "Building A", "", "", "", "", ""];
    const topCities = ["Tokyo", "Delhi", "Shanghai", "Dhaka", "Cairo", "São Paulo", "Mexico City", "Beijing", "Mumbai", "Osaka", "Chongqing", "Karachi", "Kinshasa", "Lagos", "Istanbul", "Buenos Aires", "Kolkata", "Manila", "Guangzhou", "Rio de Janeiro", "Lahore", "Bangalore", "Shenzhen", "Moscow", "Chennai", "Tianjin", "Jakarta", "Lima", "Bangkok", "Paris", "Hyderabad", "Nanjing", "Luanda", "Seoul", "Ho Chi Minh City", "Tehran", "Nagoya", "Xi'an", "Ahmedabad", "Chicago", "Kuala Lumpur", "Wuhan", "Suzhou", "Hangzhou", "Surat", "Dar es Salaam", "Bogota", "Los Angeles", "New York"];
    const stateAbbreviations = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    const fiveDigitNumbers = [48392, 10567, 79214, 63825, 25490, 91736, 12048, 56431, 73829, 48105, 29517, 83642, 40958, 67213, 15024, 98341, 72486, 56109, 83725, 41906, 30275, 61894, 74531, 28019, 95684, 47103, 52978, 63412, 80736, 19052, 36814, 79205, 41586, 23049, 98716, 50428, 67130, 84395, 21067, 73841, 42917, 35680, 59273, 10496, 86725, 31487, 67012, 58309, 27104, 94836];
    const randomWords = ["csl", "lt", "other", "got", "lt", "csl", "got", "other", "lt", "csl", "got", "other", "csl", "lt", "got", "other", "csl", "lt", "other", "got", "lt", "csl", "other", "got", "lt", "csl", "got", "other", "lt", "csl", "other", "got", "lt", "csl", "other", "got", "lt", "csl", "other", "got", "lt", "csl", "other", "got", "lt", "csl", "other", "got", "lt", "csl"];

    res.json("done");
};

exports.createMember = createMember;
