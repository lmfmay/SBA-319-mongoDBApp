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

//Sample client data
const clients = [
    {
        "name": "charlotte_king",
        "email": "charlotte.king@example.com",
        "requestedProjects": [{
            "title": "A message to James",
            "description": "An audio message to James from his grandfather.",
            "category": "Personal Message"
        }]
    },
    {
        "name": "ethan_moore",
        "email": "ethan.moore@example.com",
        "requestedProjects": [{
            "title": "The Great Adventure Audiobook",
            "description": "An audiobook version of 'The Great Adventure' by an anonymous author.",
            "category": "Audio Book"
        }]
    },
    {
        "name": "mia_taylor",
        "email": "mia.taylor@example.com",
        "requestedProjects": [{
            "title": "Spanish-English Translation",
            "description": "A translation of a popular children's story between Spanish and English.",
            "category": "Translations"
        }]
    },
    {
        "name": "lucas_anderson",
        "email": "lucas.anderson@example.com",
        "requestedProjects": [{
            "title": "A Note to Sarah",
            "description": "An audio message for Sarah from her long-time friend.",
            "category": "Personal Message"
        }]
    },
    {
        "name": "amelia_martin",
        "email": "amelia.martin@example.com",
        "requestedProjects": [{
            "title": "Mystery Novel Audiobook",
            "description": "An audiobook version of a mystery novel.",
            "category": "Audio Book"
        }]
    },
    {
        "name": "logan_thomas",
        "email": "logan.thomas@example.com",
        "requestedProjects": [{
            "title": "French-English Translation",
            "description": "A translation project between French and English.",
            "category": "Translations"
        }]
    },
    {
        "name": "ava_jackson",
        "email": "ava.jackson@example.com",
        "requestedProjects": [{
            "title": "Life Advice to Michael",
            "description": "A personal message giving life advice to Michael.",
            "category": "Personal Message"
        }]
    },
    {
        "name": "benjamin_white",
        "email": "benjamin.white@example.com",
        "requestedProjects": [{
            "title": "Short Story Audiobook",
            "description": "An audiobook of a short story narrated by the author.",
            "category": "Audio Book"
        }]
    },
    {
        "name": "harper_clark",
        "email": "harper.clark@example.com",
        "requestedProjects": [{
            "title": "Cultural Phrase Translation",
            "description": "A project to translate cultural phrases between Japanese and English.",
            "category": "Translations"
        }]
    },
    {
        "name": "elijah_lee",
        "email": "elijah.lee@example.com",
        "requestedProjects": [{
            "title": "A Letter to Emma",
            "description": "A personal message from Emma's parents.",
            "category": "Personal Message"
        }]
    }
]

//sample testimonial data
const testimonials = [
    {
        "name": "charlotte_king",
        "testimonial": "John did a great job in this project and I really enjoyed working with him."
    },
    {
        "name": "ethan_moore",
        "testimonial": "Jane was professional and delivered the project on time with high quality."
    },
    {
        "name": "mia_taylor",
        "testimonial": "Alex was a pleasure to work with. His attention to detail was outstanding."
    },
    {
        "name": "lucas_anderson",
        "testimonial": "Emma's communication throughout the project made the process smooth and efficient."
    },
    {
        "name": "amelia_martin",
        "testimonial": "Liam went above and beyond to meet all the project requirements. Highly recommended."
    },
    {
        "name": "logan_thomas",
        "testimonial": "Olivia demonstrated a deep understanding of the project and delivered exceptional results."
    },
    {
        "name": "ava_jackson",
        "testimonial": "Noah was collaborative and his expertise really shone through in the final product."
    },
    {
        "name": "benjamin_white",
        "testimonial": "Isabella's ability to adapt to changes in the project was impressive. A great team player."
    },
    {
        "name": "harper_clark",
        "testimonial": "Mason delivered the project ahead of schedule and exceeded expectations."
    },
    {
        "name": "elijah_lee",
        "testimonial": "Sophia's creativity and problem-solving skills were crucial to the success of the project."
    }
]

async function seedDatabase() {
    try {
        // Clean up the existing data
        await Talent.deleteMany({});
        await Client.deleteMany({});
        await Testimonial.deleteMany({});

        // Insert new data
        const createdTalents = await Talent.insertMany(talents);
        console.log('Talents seeded:', createdTalents);

        const createdClients = await Client.insertMany(clients);
        console.log('Clients seeded:', createdClients);

        const createdTestimonials = await Testimonial.insertMany(testimonials);
        console.log('Testimonials seeded:', createdTestimonials);

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