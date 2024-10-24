//Running node seed.mjs in terminal to seed database instead of creating route since this is a one-time effort.
import connectDB from "../db/conn.mjs";
import dotenv from 'dotenv';
import Talent from "../models/talentSchema.mjs";
import Client from "../models/clientSchema.mjs";
import Testimonial from "../models/testimonialSchema.mjs";

dotenv.config({ path: '../.env' })

//Sample talent data
const talents = [
    {
        "name": 'john_doe',
        "email": 'john@example.com',
        "completedProjects": [{
            "title": 'A message to James',
            "description": 'An audio message to James from his grandfather.',
            "category": 'Personal Message'}]
    },
    {
        "name": "jerry_doe",
        "email": "jerry@example.com",
        "completedProjects": [{
            "title": "French-English Translation",
            "description": "A translation project between French and English.",
            "category": "Translations"
        }]
    },
    {
        "name": "jane_smith",
        "email": "jane.smith@example.com",
        "completedProjects": [{
            "title": "Short Story Narration",
            "description": "An audiobook of a short story narrated by the author.",
            "category": "Audio Book"
        }]
    },
    {
        "name": "alex_jones",
        "email": "alex.jones@example.com",
        "completedProjects": [{
            "title": "French-English Translation",
            "description": "A translation project between French and English.",
            "category": "Translations"
        }]
    },
    {
        "name": "emma_watson",
        "email": "emma.watson@example.com",
        "completedProjects": [{
            "title": "Mystery Audiobook",
            "description": "An audiobook version of a mystery novel.",
            "category": "Audio Book"
        }]
    },
    {
        "name": "liam_johnson",
        "email": "liam.johnson@example.com",
        "completedProjects": [{
            "title": "French-English Translation",
            "description": "A translation project between French and English.",
            "category": "Translations"
        }]
    },
    {
        "name": "olivia_brown",
        "email": "olivia.brown@example.com",
        "completedProjects": [{
            "title": "The Great Adventure",
            "description": "An audiobook of 'The Great Adventure' by an anonymous author.",
            "category": "Audio Book"
        }]
    },
    {
        "name": "noah_white",
        "email": "noah.white@example.com",
        "completedProjects": [{
            "title": "Advice to Michael",
            "description": "A personal message to Michael giving life advice.",
            "category": "Personal Message"
        }]
    },
    {
        "name": "isabella_clark",
        "email": "isabella.clark@example.com",
        "completedProjects": [{
            "title": "French-English Translation",
            "description": "A translation project between French and English.",
            "category": "Translations"
        }]
    },
    {
        "name": "mason_davis",
        "email": "mason.davis@example.com",
        "completedProjects": [{
            "title": "French-English Translation",
            "description": "A translation project between French and English.",
            "category": "Translations"
        }]
    }
];

async function seedDatabase() {
    try {
        // Clean up the existing data
        await Talent.deleteMany({});
        // await Client.deleteMany({});
        // await Testimonial.deleteMany({});

        // Insert new data
        const createdTalents = await Talent.insertMany(talents);
        console.log('Talents seeded:', createdTalents);

        // const createdClients = await Client.insertMany(clients);
        // console.log('Clients seeded:', createdClients);

        // const createdTestimonials = await Testimonial.insertMany(testimonials);
        // console.log('Testimonials seeded:', createdTestimonials);

        console.log('Seeding completed!');
        process.exit();  // Exit once the seeding is done
    } catch (err) {
        console.error('Error seeding database:', err.message);
        process.exit(1);  // Exit with failure
    }
}

const main = async () => {
    await connectDB();    // Connects to the database
    await seedDatabase(); // Seeds the database after connection is established
};
main()