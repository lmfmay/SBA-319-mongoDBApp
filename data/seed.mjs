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
        name: 'john_doe',
        email: 'john@example.com',
        completedProjects: [{
            title: 'A message to James',
            description: 'An audio message to James from his grandfather.',
            category: 'Personal Message'}]
    },
    {
        name: 'jane_smith',
        email: 'jane@example.com'
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