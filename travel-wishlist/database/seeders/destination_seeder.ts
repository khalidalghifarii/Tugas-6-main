import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Destination from '#models/destination' // adjust path if needed

export default class DestinationSeeder extends BaseSeeder {
  async run() {
    await Destination.createMany([
      {
        name: 'Paris',
        country: 'France',
        description: 'The city of lights and romance.',
        best_time_to_visit: 'April to June, October to early November',
        estimated_budget: 2000,
      },
      {
        name: 'Kyoto',
        country: 'Japan',
        description: 'Historic temples and cherry blossoms.',
        best_time_to_visit: 'March to May, October to November',
        estimated_budget: 1500,
      },
      {
        name: 'Cape Town',
        country: 'South Africa',
        description: 'Mountains, beaches, and vineyards.',
        best_time_to_visit: 'March to May, September to November',
        estimated_budget: 1200,
      },
      {
        name: 'Reykjavík',
        country: 'Iceland',
        description: 'Northern lights and geothermal spas.',
        best_time_to_visit: 'February to March, September to October',
        estimated_budget: 2500,
      },
      {
        name: 'Cusco',
        country: 'Peru',
        description: 'Gateway to Machu Picchu and Inca culture.',
        best_time_to_visit: 'May to September',
        estimated_budget: 1400,
      },
    ])
  }
}
