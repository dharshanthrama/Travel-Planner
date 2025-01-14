import { useState } from 'react';
import './Itinerary.css';

const itineraries = [
  {
    destination: 'Paris, France',
    image: 'https://c4.wallpaperflare.com/wallpaper/1014/843/831/4k-eiffel-tower-france-8k-wallpaper-preview.jpg',
    details: [
      {
        day: 1,
        description: 'Arrival in Paris',
        activities: [
          { type: 'Flight', detail: 'Air France AF123, departing from New York (JFK) at 8:00 PM (EST) and arriving at Paris (CDG) at 7:35 AM (CET)' },
          { type: 'Hotel', detail: 'Check-in at the Hotel Le Walt (4-star) in the 1st arrondissement, located near the Louvre Museum' },
          { type: 'Address', detail: '12 Rue de la Paix, 75002 Paris, France' },
          { type: 'Room Type', detail: 'Deluxe room with a view of the city, Cost: €250 per night (approximately $280 USD)' },
          { type: 'Breakfast', detail: 'Buffet breakfast at the hotel (€20 per person, approximately $22 USD)' },
          { type: 'Morning', detail: 'Visit the Louvre Museum (€18 per person, approximately $20 USD, Audio guide: €5 per person, approximately $5.50 USD)' },
          { type: 'Lunch', detail: 'Traditional French bistro, Le Comptoir du Relais (average price €25 per person, approximately $28 USD)' },
          { type: 'Afternoon', detail: 'Explore Montmartre and visit the Sacré-Cœur Basilica (free admission)' },
          { type: 'Dinner', detail: 'Michelin-starred restaurant, Le Grand Vefour (average price €100 per person, approximately $112 USD)' },
        ],
      },
      {
        day: 2,
        description: 'Exploring Paris',
        activities: [
          { type: 'Breakfast', detail: 'Buffet breakfast at the hotel (€20 per person, approximately $22 USD)' },
          { type: 'Morning', detail: 'Visit the Eiffel Tower (€17 per person, approximately $19 USD, Elevator to the top: €29 per person, approximately $32 USD)' },
          { type: 'Lunch', detail: 'Picnic lunch in the Champ de Mars park (average price €15 per person, approximately $17 USD)' },
          { type: 'Afternoon', detail: 'Visit the Musée d\'Orsay (€12 per person, approximately $14 USD, Audio guide: €5 per person, approximately $5.50 USD)' },
          { type: 'Dinner', detail: 'Traditional French restaurant, Le Petit Châtelet (average price €40 per person, approximately $45 USD)' },
        ],
      },
      {
        day: 3,
        description: 'Historic Paris',
        activities: [
          { type: 'Breakfast', detail: 'Buffet breakfast at the hotel (€20 per person, approximately $22 USD)' },
          { type: 'Morning', detail: 'Visit the Notre-Dame Cathedral (free admission) and Sainte-Chapelle (€15 per person, approximately $17 USD)' },
          { type: 'Lunch', detail: 'Traditional French bistro, Le Pied de Cochon (average price €30 per person, approximately $33 USD)' },
          { type: 'Afternoon', detail: 'Explore Le Marais and visit the Picasso Museum (€14 per person, approximately $16 USD, Audio guide: €5 per person, approximately $5.50 USD)' },
          { type: 'Dinner', detail: 'Michelin-starred restaurant, Le Bristol (average price €120 per person, approximately $137 USD)' },
        ],
      },
      {
        day: 4,
        description: 'Final Day in Paris',
        activities: [
          { type: 'Breakfast', detail: 'Buffet breakfast at the hotel (€20 per person, approximately $22 USD)' },
          { type: 'Morning', detail: 'Visit the Palace of Versailles (€20 per person, approximately $22 USD, Audio guide: €5 per person, approximately $5.50 USD)' },
          { type: 'Lunch', detail: 'Traditional French restaurant, La Petite Venise (average price €40 per person, approximately $45 USD)' },
          { type: 'Afternoon', detail: 'Explore the Champs-Élysées and visit the Arc de Triomphe (€12 per person, approximately $14 USD)' },
          { type: 'Dinner', detail: 'Farewell dinner at Michelin-starred restaurant, Le Grand Colbert (average price €100 per person, approximately $112 USD)' },
        ],
      },
    ],
    cost: {
      flights: '€800 per person (approximately $900 USD)',
      hotel: '€1,250 per person (approximately $1,400 USD)',
      meals: '€500 per person (approximately $560 USD)',
      activities: '€200 per person (approximately $220 USD)',
      total: '€2,750',
    },
  },
  {
    destination: 'Rome, Italy',
    image: 'https://c4.wallpaperflare.com/wallpaper/265/778/338/colosseum-amphitheatre-ancient-colosseum-amphitheatre-wallpaper-preview.jpg',
    details: [
      {
        day: 1,
        description: 'Arrival in Rome',
        activities: [
          { type: 'Flight', detail: 'Alitalia AZ123, departing from New York (JFK) at 8:00 PM (EST) and arriving at Rome (FCO) at 10:35 AM (CET)' },
          { type: 'Hotel', detail: 'Check-in at the Hotel Eden Rome (5-star) in the city center, located near the Spanish Steps' },
          { type: 'Address', detail: 'Via Ludovisi, 49, 00187 Roma, Italy' },
          { type: 'Room Type', detail: ' Deluxe room with a view of the city ,€350 per night (approximately $390 USD)' },
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel, including pastries, eggs, and coffee (€30 per person, approximately $33 USD)' },
          { type: 'Morning', detail: '- Visit the Colosseum (open from 8:30 AM to 7:15 PM),Ticket price: €12 per person (approximately $14 USD),Audio guide: €7 per person (approximately $8 USD)' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Italian trattoria, La Rosetta (average price €30 per person, approximately $33 USD)' },
          { type: 'Afternoon', detail: '-  Explore the Roman Forum and the Palatine Hill (open from 8:30 AM to 7:15 PM)Ticket price: €12 per person (approximately $14 USD)Audio guide: €7 per person (approximately $8 USD)' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, La Pergola (average price €120 per person, approximately $137 USD)' },
        ],
      },
      {
        day: 2,
        description: 'Exploring Rome',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel (€30 per person, approximately $33 USD)' },
          { type: 'Morning', detail: '- Visit the Vatican City, including the Sistine Chapel and St. Peters Basilica (open from 9:00 AM to 6:00PM)Ticket price: €20 per person (approximately $22 USD)Audio guide: €10 per person (approximately $11 USD)' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Italian restaurant, Il Pagliaccio (average price €40 per person, approximately $45 USD)' },
          { type: 'Afternoon', detail: '- Explore the Villa Borghese and the Galleria Borghese (open from 9:00 AM to 7:00 PM)Ticket price: €15 per person (approximately $17 USD)Audio guide: €10 per person (approximately $11 USD)' },
          { type: 'Dinner', detail: 'Enjoy a meal at a traditional Italian trattoria, La Gensola (average price €30 per person, approximately $33 USD)' },
        ],
      },
      {
        day: 3,
        description: 'Historic Rome',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel (€30 per person, approximately $33 USD)' },
          { type: 'Morning', detail: '- Visit the Pantheon and the Piazza Navona (open from 9:00 AM to 7:00 PM)Ticket price: free admission' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Italian restaurant, Il Margutta (average price €40 per person, approximately $45 USD)' },
          { type: 'Afternoon', detail: '- Explore the Castel SantAngelo and the Piazza del Popolo (open from 9:00 AM to 7:00 PM)Ticket price: €14 per person (approximately $16 USD)Audio guide: €10 per person (approximately $11 USD)' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, La Terrazza (average price €150 per person, approximately $167 USD)' },
        ],
      },
      {
        day: 4,
        description: 'Final Day in Rome',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel (€30 per person, approximately $33 USD)' },
          { type: 'Morning', detail: '- Visit the Catacombs of Rome and the Appian Way (open from 9:00 AM to 12:00 PM)Ticket price: €10 per person (approximately $11 USD)Audio guide: €7 per person (approximately $8 USD)' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Italian trattoria, La Campana (average price €30 per person, approximately $33 USD)' },
          { type: 'Afternoon', detail: '- Explore the Trastevere neighborhood and the Santa Maria in Trastevere church (open from 9:00 AM to 7:00 PM)Ticket price: free admission' },
          { type: 'Dinner', detail: 'Enjoy a farewell dinner at a Michelin-starred restaurant, Il Pagliaccio (average price €120 per person, approximately $137 USD)' },
        ],
      },
    ],
    cost: {
      flights: '€800 per person (approximately $900 USD)',
      hotel: '€1,400 per person (approximately $1,570 USD)',
      meals: '€600 per person (approximately $670 USD)',
      activities: '€200 per person (approximately $220 USD)',
      total: '€3,000',
    },
  },
  {
    destination: 'Tokyo, Japan',
    image: 'https://c4.wallpaperflare.com/wallpaper/732/158/515/building-japan-wallpaper-preview.jpg',
    details: [
      {
        day: 1,
        description: 'Arrival in Tokyo',
        activities: [
          { type: 'Flight', detail: 'Japan Airlines JL123, departing from New York (JFK) at 10:00 AM (EST) and arriving at Tokyo (NRT) at 11:35 AM (JST) the next day' },
          { type: 'Hotel', detail: 'Check-in at the Park Hyatt Tokyo (5-star) in the Shinjuku district' },
          { type: 'Address', detail: '3-7-1-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo, JapanA' },
          { type: 'Room Type', detail: ' Deluxe room with a view of the city, Cost: ¥60,000 per night (approximately $550 USD)' },
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel, including Japanese and Western dishes (¥2,500 per person, approximately $23 USD)' },
          { type: 'Morning', detail: '-  Visit the Tokyo Skytree (open from 8:00 AM to 10:00 PM) for panoramic views of the city, Ticket price: ¥2,060 per person (approximately $19 USD)' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Japanese restaurant, Sushi Saito (average price ¥5,000 per person, approximately $45 USD)' },
          { type: 'Afternoon', detail: '-  Explore the Asakusa district, including the Senso-ji Temple (open from 6:00 AM to 5:00 PM)' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Narisawa (average price ¥20,000 per person, approximately $180 USD)' },
        ],
      },
      {
        day: 2,
        description: 'Exploring Tokyo',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (¥2,500 per person, approximately $23 USD)' },
          { type: 'Morning', detail: '- Visit the Meiji Shrine (open from 5:00 AM to 6:30 PM) and the Yoyogi Park' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Japanese restaurant, Tonkatsu Maisen Aoyama Honten (average price ¥2,000 per person, approximately $18 USD)' },
          { type: 'Afternoon', detail: '- Explore the Shibuya district, including the Shibuya Crossing and the Hachiko statu' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, L,Effervescence (average price ¥15,000 per person, approximately $137 USD)' },
        ],
      },
      {
        day: 3,
        description: 'Historic Tokyo',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel (¥2,500 per person, approximately $23 USD)' },
          { type: 'Morning', detail: '-  Visit the Tsukiji Outer Market (open from 5:00 AM to 2:00 PM) for a sushi-making experience' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Japanese restaurant, Sushi Dai (average price ¥5,000 per person, approximately $45 USD)' },
          { type: 'Afternoon', detail: '- Explore the Harajuku district, including the Takeshita-dori shopping street, Ticket price: free admission' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Nihonryori Ryugin (average price ¥20,000 per person, approximately $180 USD)' },
        ],
      },
      {
        day: 4,
        description: 'Final Day in Tokyo',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (¥2,500 per person, approximately $23 USD)' },
          { type: 'Morning', detail: '- Visit the Ghibli Museum (open from 10:00 AM to 6:00 PM) dedicated to the works of Studio Ghibli' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Japanese restaurant, Ichiran Shibuya (average price ¥1,000 per person, approximately $9 USD)' },
          { type: 'Afternoon', detail: '- Enjoy a meal at a traditional Japanese restaurant, Ichiran Shibuya (average price ¥1,000 per person, approximately $9 USD)' },
          { type: 'Dinner', detail: 'Enjoy a farewell dinner at a Michelin-starred restaurant, Narisawa (average price ¥20,000 per person, approximately $180 USD)' },
        ],
      },
    ],
    cost: {
      flights: '¥200,000 per person (approximately $1,800 USD)',
      hotel: '¥240,000 per person (approximately $2,200 USD)',
      meals: '¥120,000 per person (approximately $1,100 USD)',
      activities: '¥50,000 per person (approximately $450 USD)',
      total: '¥610,000 ',
    },
  },
  {
    destination: 'Barcelona, Spain',
    image: 'https://thumbs.dreamstime.com/b/sagrada-familia-barcelona-spain-cathedral-83163693.jpg',
    details: [
      {
        day: 1,
        description: 'Arrival in Barcelona',
        activities: [
          { type: 'Flight', detail: 'Iberia IB123, departing from New York (JFK) at 8:00 PM (EST) and arriving at Barcelona (BCN) at 8:35 AM (CET)' },
          { type: 'Hotel', detail: 'Check-in at the Hotel Casa Fuster (5-star) in the Eixample district' },
          { type: 'Address', detail: 'Passeig de Gracia, 132, 08008 Barcelona, Spain' },
          { type: 'Room Type', detail: ' - Deluxe room with a view of the city, Cost: €250 per night (approximately $280 USD)' },
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel, including pastries, eggs, and coffee (€20 per person, approximately $22 USD)' },
          { type: 'Morning', detail: '- - Visit the Sagrada Familia (open from 9:00 AM to 7:00 PM) and explore the surrounding neighborhood, Ticket price: €26 per person (approximately $29 USD)' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Catalan restaurant, Can Culleretes (average price €30 per person, approximately $33 USD)' },
          { type: 'Afternoon', detail: 'Explore the Park Güell (open from 9:30 AM to 7:30 PM) and enjoy the stunning views of the cityTicket price: €10 per person (approximately $11 USD)' },
          { type: 'Dinner', detail: ' Enjoy a meal at a Michelin-starred restaurant, Tickets Bar (average price €100 per person, approximately $112 USD)' },
        ],
      },
      {
        day: 2,
        description: 'Exploring Barcelona',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (€20 per person, approximately $22 USD)' },
          { type: 'Morning', detail: '- Visit the Picasso Museum (open from 9:00 AM to 7:00 PM) and explore the surrounding El Born neighborhood, Ticket price: €12.80 per person (approximately $14 USD)' },
          { type: 'Lunch', detail: ' Enjoy a meal at a traditional Catalan restaurant, El Quim de la Boqueria (average price €25 per person, approximately $28 USD)' },
          { type: 'Afternoon', detail: '- Explore the La Rambla and the Boqueria Market (open from 8:00 AM to 8:30 PM), Ticket price: free admission' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, El Celler de Can Roca (average price €150 per person, approximately $167 USD)' },
        ],
      },
      {
        day: 3,
        description: 'Historic Barcelona',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel (€20 per person, approximately $22 USD)' },
          { type: 'Morning', detail: '-  Visit the Barceloneta beach and take a stroll along the seafront promenade, Ticket price: free admission' },
          { type: 'Lunch', detail: ' Enjoy a meal at a traditional seafood restaurant, Can Majó (average price €30 per person, approximately $33 USD)' },
          { type: 'Afternoon', detail: '- Explore the Montserrat mountains and visit the monastery (open from 9:00 AM to 6:00 PM), Ticket price: €20 per person (approximately $22 USD)' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Alkimia (average price €100 per person, approximately $112 USD)' },
        ],
      },
      {
        day: 4,
        description: 'Final Day in Barcelona',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel (€20 per person, approximately $22 USD)' },
          { type: 'Morning', detail: '- Visit the Camp Nou stadium (open from 10:00 AM to 6:30 PM) and take a guided tour, Ticket price: €26 per person (approximately $29 USD)' },
          { type: 'Lunch', detail: ' Enjoy a meal at a traditional Catalan restaurant, La Pubilla (average price €25 per person, approximately $28 USD)' },
          { type: 'Afternoon', detail: '- Explore the Passeig de Gracia and visit the Casa Batlló (open from 9:00 AM to 9:00 PM), Ticket price: €25 per person (approximately $28 USD)' },
          { type: 'Dinner', detail: 'Enjoy a farewell dinner at a Michelin-starred restaurant, Cinc Sentits (average price €120 per person, approximately $137 USD)' },
        ],
      },
    ],
    cost: {
      flights: '€800 per person (approximately $900 USD)',
      hotel: '€1,000 per person (approximately $1,120 USD)',
      meals: '€600 per person (approximately $672 USD)',
      activities: '€200 per person (approximately $224 USD)',
      total: '€2,600',
    },
  },
  {
    destination: 'Sydney, Australia',
    image: 'https://images5.alphacoders.com/555/thumb-1920-555090.jpg',
    details: [
      {
        day: 1,
        description: 'Arrival in Sydney',
        activities: [
          { type: 'Flight', detail: ' Qantas QF123, departing from Los Angeles (LAX) at 10:00 PM (PST) and arriving at Sydney (SYD) at 6:00 AM (AEST) the next day' },
          { type: 'Hotel', detail: 'Check-in at the Shangri-La Hotel Sydney (5-star) in the city center ' },
          { type: 'Address', detail: '176 Cumberland Street, Sydney NSW 2000, Australia ' },
          { type: 'Room Type', detail: 'Deluxe room with a view of the harbor ' },
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel, including pastries, eggs, and coffee (AU$30 per person, approximately $21 USD) ' },
          { type: 'Morning', detail: 'Visit the Sydney Opera House (open from 9:00 AM to 5:00 PM) and take a guided tour ' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Australian restaurant, The Australian Heritage Hotel (average price AU$30 per person, approximately $21 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Sydney Harbour Bridge (open from 9:00 AM to 5:00 PM) and take a climb' },
          { type: 'Dinner', detail: ' Enjoy a meal at a Michelin-starred restaurant, Quay (average price AU$150 per person, approximately $105 USD)' },
        ],
      },
      {
        day: 2,
        description: 'Exploring Sydney ',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel (AU$30 per person, approximately $21 USD) ' },
          { type: 'Morning', detail: ' Visit the Taronga Zoo (open from 9:30 AM to 5:00 PM) and see the native Australian animals' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Australian restaurant, The Zoos own restaurant (average price AU$25 per person, approximately $18 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Manly Beach (open from 9:00 AM to 5:00 PM) and take a stroll along the beachfront promenade ' },
          { type: 'Dinner', detail: ' Enjoy a meal at a Michelin-starred restaurant, Sepia (average price AU$120 per person, approximately $84 USD)' },
        ],
      },
      {
        day: 3,
        description: 'Historic Sydney ',
        activities: [
          { type: 'Breakfast', detail: '  Enjoy a buffet breakfast at the hotel (AU$30 per person, approximately $21 USD) ' },
          { type: 'Morning', detail: '  Visit the Blue Mountains (open from 9:00 AM to 5:00 PM) and take a scenic hike' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Australian restaurant, The Fairmont Resort & Spa (average price AU$30 per person, approximately $21 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Bondi Beach (open from 9:00 AM to 5:00 PM) and take a stroll along the beachfront promenade' },
          { type: 'Dinner', detail: ' Enjoy a meal at a Michelin-starred restaurant, Longrain (average price AU$100 per person, approximately $70 USD)' },
        ],
      },
      {
        day: 4,
        description: 'Final Day in Sydney',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (AU$30 per person, approximately $21 USD)' },
          { type: 'Morning', detail: 'Visit the Sydney Tower Eye (open from 9:00 AM to 10:00 PM) and take in the panoramic views of the city ' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Australian restaurant, The Sydney Towers own restaurant (average price AU$25 per person, approximately $18 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Darling Harbour (open from 9:00 AM to 5:00 PM) and take a stroll along the waterfront' },
          { type: 'Dinner', detail: ' Enjoy a farewell dinner at a Michelin-starred restaurant, Guillaume (average price AU$150 per person, approximately $105 USD) ' },
        ],
      },
    ],
    cost: {
      flights: 'AU$1,200 per person (approximately $830 USD) ',
      hotel: 'AU$1,800 per person (approximately $1,240 USD) ',
      meals: 'AU$800 per person (approximately $550 USD)  ',
      activities: 'AU$400 per person (approximately $280 USD) ',
      total: 'AU$3,400 ',
    },
  },
  {
    destination: 'New York City, USA',
    image: 'https://4kwallpapers.com/images/wallpapers/empire-state-building-new-york-city-skyline-manhattan-usa-3840x2160-7277.jpg',
    details: [
      {
        day: 1,
        description: 'Arrival in New York City',
        activities: [
          { type: 'Flight', detail: 'American Airlines AA123, departing from Los Angeles (LAX) at 8:00 AM (PST) and arriving at John F. Kennedy International Airport (JFK) at 3:35 PM (EST) ' },
          { type: 'Hotel', detail: 'Check-in at the Plaza Hotel (5-star) in Midtown Manhattan ' },
          { type: 'Address', detail: '768 5th Avenue, New York, NY 10019, USA ' },
          { type: 'Room Type', detail: ' Deluxe room with a view of Central Park' },
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel, including pastries, eggs, and coffee ($25 per person, approximately $25 USD) ' },
          { type: 'Morning', detail: 'Visit the iconic Statue of Liberty and Ellis Island (open from 9:30 AM to 4:30 PM) ' },
          { type: 'Lunch', detail: 'Enjoy a meal at a classic New York diner, Ellens Stardust Diner (average price $20 per person, approximately $20 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Metropolitan Museum of Art (open from 10:00 AM to 5:30 PM) ' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Le Bernardin (average price $150 per person, approximately $150 USD) ' },
        ],
      },
      {
        day: 2,
        description: 'Exploring New York City ',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel ($25 per person, approximately $25 USD) ' },
          { type: 'Morning', detail: 'Visit the iconic Central Park (open from 6:00 AM to 1:00 AM) ' },
          { type: 'Lunch', detail: 'Enjoy a meal at a classic New York deli, Katzs Delicatessen (average price $20 per person, approximately $20 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Museum of Modern Art (MoMA) (open from 10:30 AM to 5:30 PM)' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Per Se (average price $150 per person, approximately $150 USD) ' },
        ],
      },
      {
        day: 3,
        description: 'Historic  New York City',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel ($25 per person, approximately $25 USD) ' },
          { type: 'Morning', detail: 'Visit the iconic Brooklyn Bridge (open from 6:00 AM to 1:00 AM) ' },
          { type: 'Lunch', detail: ' Enjoy a meal at a classic New York pizzeria, Lombardis Pizza (average price $20 per person, approximately $20 USD)' },
          { type: 'Afternoon', detail: 'Explore the 9/11 Memorial & Museum (open from 9:00 AM to 5:00 PM) ' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Eleven Madison Park (average price $150 per person, approximately $150 USD) ' },
        ],
      },
      {
        day: 4,
        description: 'Final Day in New York City',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel ($25 per person, approximately $25 USD)' },
          { type: 'Morning', detail: ' Visit the iconic Times Square (open from 6:00 AM to 1:00 AM)' },
          { type: 'Lunch', detail: 'Enjoy a meal at a classic New York diner, Sarabeths (average price $20 per person, approximately $20 USD) ' },
          { type: 'Afternoon', detail: '  Explore the Guggenheim Museum (open from 10:00 AM to 5:30 PM)' },
          { type: 'Dinner', detail: 'Enjoy a farewell dinner at a Michelin-starred restaurant, Le Cirque (average price $150 per person, approximately $150 USD) ' },
        ],
      },
    ],
    cost: {
      flights: '$400 per person (approximately $400 USD ',
      hotel: '$1,800 per person (approximately $1,800 USD) ',
      meals: '$800 per person (approximately $800 USD) ',
      activities: '$200 per person (approximately $200 USD) ',
      total: '$3,200 ',
    },
  },
  {
    destination: 'Dubai, UAE',
    image: 'https://i.pinimg.com/originals/71/12/22/711222d2a5c1748e382c9e3deec7738b.jpg',
    details: [
      {
        day: 1,
        description: 'Arrival in Dubai ',
        activities: [
          { type: 'Flight', detail: 'Emirates EK123, departing from New York (JFK) at 10:00 AM (EST) and arriving at Dubai International Airport (DXB) at 8:00 AM (GST) the next day ' },
          { type: 'Hotel', detail: ' Check-in at the Burj Al Arab (5-star) in Dubai' },
          { type: 'Address', detail: 'Jumeirah Beach Road, Dubai, UAE ' },
          { type: 'Room Type', detail: 'Deluxe room with a view of the Arabian Gulf ' },
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel, including Arabic and international dishes (AED 150 per person, approximately $40 USD)' },
          { type: 'Morning', detail: ' Visit the iconic Burj Khalifa (open from 8:00 AM to 10:00 PM) and take a high-speed elevator to the observation deck on the 124th floor ' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Arabic restaurant, Al Dhiyafa Road (average price AED 100 per person, approximately $27 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Dubai Mall (open from 10:00 AM to 10:00 PM) and visit the Dubai Fountain Show' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Gordon Ramsays Bread Street Kitchen & Bar (average price AED 250 per person, approximately $68 USD) ' },
        ],
      },
      {
        day: 2,
        description: 'Exploring Dubai',
        activities: [
          { type: 'Breakfast', detail: ' Breakfast: Enjoy a buffet breakfast at the hotel (AED 150 per person, approximately $40 USD) ' },
          { type: 'Morning', detail: 'Visit the Jumeirah Mosque (open from 9:00 AM to 12:00 PM) and take a guided tour ' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Arabic restaurant, Al Fanar Restaurant (average price AED 100 per person, approximately $27 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Dubai Miracle Garden (open from 9:00 AM to 9:00 PM) and see the stunning floral displays' },
          { type: 'Dinner', detail: ' Enjoy a meal at a Michelin-starred restaurant, Pierchic (average price AED 300 per person, approximately $82 USD)' },
        ],
      },
      {
        day: 3,
        description: 'Historic Dubai',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel (AED 150 per person, approximately $40 USD) ' },
          { type: 'Morning', detail: ' Visit the Palm Jumeirah (open from 9:00 AM to 6:00 PM) and take a monorail ride to the top of the palm' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Arabic restaurant, The Beach House (average price AED 150 per person, approximately $40 USD) ' },
          { type: 'Afternoon', detail: 'Explore the Dubai Museum (open from 8:30 AM to 8:30 PM) and learn about the history and culture of Dubai ' },
          { type: 'Dinner', detail: ' Enjoy a meal at a Michelin-starred restaurant, Armani/Prive (average price AED 250 per person, approximately $68 USD)' },
        ],
      },
      {
        day: 4,
        description: 'Final Day in Dubai',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (AED 150 per person, approximately $40 USD)' },
          { type: 'Morning', detail: 'Visit the Global Village (open from 4:00 PM to 12:00 AM) and explore the cultural and entertainment park ' },
          { type: 'Lunch', detail: ' Enjoy a meal at a traditional Arabic restaurant, Al Hallab Restaurant (average price AED 100 per person, approximately $27 USD)' },
          { type: 'Afternoon', detail: ' Explore the Dubai Marina (open from 10:00 AM to 10:00 PM) and take a stroll along the waterfront ' },
          { type: 'Dinner', detail: 'Enjoy a farewell dinner at a Michelin-starred restaurant, At.mosphere (average price AED 300 per person, approximately $82 USD) ' },
        ],
      },
    ],
    cost: {
      flights: 'AED 2,500 per person (approximately $680 USD) ',
      hotel: ' AED 10,000 per person (approximately $2,720 USD)',
      meals: 'AED 2,000 per person (approximately $540 USD) ',
      activities: 'AED 500 per person (approximately $136 USD) ',
      total: 'AED 15000 ',
    },
  },
  {
    destination: 'Cape Town, South Africa',
    image: 'https://cdn.24.co.za/files/Cms/General/d/228/5f027f00384b4d73944a975bac5ef949.jpg',
    details: [
      {
        day: 1,
        description: 'Arrival in Cape Town',
        activities: [
          { type: 'Flight', detail: '  South African Airways SA123, departing from New York (JFK) at 10:00 PM (EST) and arriving at Cape Town International Airport (CPT) at 8:00 AM (SAST) the next day' },
          { type: 'Hotel', detail: ' Check-in at the Belmond Mount Nelson Hotel (5-star) in Cape Town' },
          { type: 'Address', detail: ' Check-in at the Belmond Mount Nelson Hotel (5-star) in Cape Town' },
          { type: 'Room Type', detail: ' 76 Orange Street, Gardens, Cape Town, 8001, South Africa' },
          { type: 'Breakfast', detail: ' Deluxe room with a view of Table Mountain ' },
          { type: 'Morning', detail: 'Enjoy a buffet breakfast at the hotel, including pastries, eggs, and coffee (ZAR 200 per person, approximately $14 USD) ' },
          { type: 'Lunch', detail: 'Visit the iconic Table Mountain (open from 8:00 AM to 5:00 PM) and take a cable car ride to the top ' },
          { type: 'Afternoon', detail: ' Enjoy a meal at a traditional South African restaurant, The Test Kitchen (average price ZAR 300 per person, approximately $21 USD)' },
          { type: 'Dinner', detail: 'Explore the Cape of Good Hope (open from 7:00 AM to 5:00 PM) and visit the Cape Point Nature Reserve ' },
        ],
      },
      {
        day: 2,
        description: 'Exploring Cape Town',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (ZAR 200 per person, approximately $14 USD)' },
          { type: 'Morning', detail: 'Visit the Boulders Beach (open from 7:00 AM to 5:00 PM) and see the African penguins ' },
          { type: 'Lunch', detail: ' Enjoy a meal at a traditional South African restaurant, The Fishermans Restaurant (average price ZAR 250 per person, approximately $18 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Robben Island (open from 9:00 AM to 3:00 PM) and visit the Nelson Mandela Museum' },
          { type: 'Dinner', detail: ' njoy a meal at a Michelin-starred restaurant, The Shortmarket Club (average price ZAR 450 per person, approximately $32 USD)' },
        ],
      },
      {
        day: 3,
        description: 'Historic Cape Town ',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (ZAR 200 per person, approximately $14 USD)' },
          { type: 'Morning', detail: '  Visit the Stellenbosch wine region (open from 9:00 AM to 5:00 PM) and go on a wine tasting tour' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional South African restaurant, The Jordan Restaurant (average price ZAR 350 per person, approximately $25 USD) ' },
          { type: 'Afternoon', detail: '  Explore the Cape Town Harbour (open from 9:00 AM to 5:00 PM) and take a stroll along the waterfront' },
          { type: 'Dinner', detail: ' Enjoy a meal at a Michelin-starred restaurant, The Sakhumzi Restaurant (average price ZAR 400 per person, approximately $28 USD)' },
        ],
      },
      {
        day: 4,
        description: 'Final Day in Cape Town',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (ZAR 200 per person, approximately $14 USD)' },
          { type: 'Morning', detail: 'Visit the Kirstenbosch National Botanical Garden (open from 8:00 AM to 7:00 PM) and explore the beautiful gardens ' },
          { type: 'Lunch', detail: ' Enjoy a meal at a traditional South African restaurant, The Kirstenbosch Tea Room (average price ZAR 200 per person, approximately $14 USD)' },
          { type: 'Afternoon', detail: 'Explore the Bo-Kaap neighborhood (open from 9:00 AM to 5:00 PM) and see the colorful houses ' },
          { type: 'Dinner', detail: ' Enjoy a farewell dinner at a Michelin-starred restaurant, The Roundhouse (average price ZAR 500 per person, approximately $35 USD)' },
        ],
      },
    ],
    cost: {
      flights: ' ZAR 20,000 per person (approximately $1,400 USD)',
      hotel: ' ZAR 22,000 per person (approximately $1,550 USD)  ',
      meals: 'ZAR 8,000 per person (approximately $560 USD) ',
      activities: 'ZAR 2,500 per ',
      total: 'ZAR 50,000 ',
    },
  },
  {
    destination: 'Bangkok, Thailand',
    image: 'https://c4.wallpaperflare.com/wallpaper/906/334/429/bangkok-pattaya-tour-packages-wallpaper-preview.jpg',
    details: [
      {
        day: 1,
        description: 'Arrival in  Bangkok ',
        activities: [
          { type: 'Flight', detail: 'Thai Airways TG123, departing from New York (JFK) at 10:00 PM (EST) and arriving at Suvarnabhumi Airport (BKK) at 10:35 AM (ICT) the next day ' },
          { type: 'Hotel', detail: ' Check-in at the Siam Hotel (5-star) in Bangkok' },
          { type: 'Address', detail: '3/2 Thanon Khao, Vadhana, Bangkok 10110, Thailand ' },
          { type: 'Room Type', detail: ' Deluxe room with a view of the city' },
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel, including Thai and international dishes (THB 500 per person, approximately $15 USD) ' },
          { type: 'Morning', detail: 'Visit the Grand Palace (open from 8:30 AM to 3:30 PM) and explore the palace grounds ' },
          { type: 'Lunch', detail: ' Enjoy a meal at a traditional Thai restaurant, Som Tam Jay So (average price THB 200 per person, approximately $6 USD)' },
          { type: 'Afternoon', detail: 'Explore the Wat Phra Kaew (open from 8:30 AM to 3:30 PM) and see the Emerald Buddha ' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Gaggan (average price THB 2,500 per person, approximately $80 USD) ' },
        ],
      },
      {
        day: 2,
        description: 'Exploring  Bangkok ',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (THB 500 per person, approximately $15 USD)' },
          { type: 'Morning', detail: 'Visit the Wat Arun (open from 8:30 AM to 5:30 PM) and explore the temple grounds ' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Thai restaurant, Jay Fai (average price THB 200 per person, approximately $6 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Chatuchak Weekend Market (open from 9:00 AM to 6:00 PM) and shop for souvenirs' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Bo.Lan (average price THB 2,000 per person, approximately $60 USD) ' },
        ],
      },
      {
        day: 3,
        description: 'Historic Bangkok ',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (THB 500 per person, approximately $15 USD)' },
          { type: 'Morning', detail: ' Visit the Jim Thompson House (open from 9:00 AM to 6:00 PM) and learn about traditional Thai architecture ' },
          { type: 'Lunch', detail: ' Enjoy a meal at a traditional Thai restaurant, Som Tam Nua (average price THB 200 per person, approximately $6 USD)' },
          { type: 'Afternoon', detail: 'Explore the Bangkok Canal (open from 9:00 AM to 5:00 PM) and take a boat ride ' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Sra Bua by Kiin Kiin (average price THB 2,500 per person, approximately $80 USD) ' },
        ],
      },
      {
        day: 4,
        description: 'Final Day in Bangkok',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (THB 500 per person, approximately $15 USD)' },
          { type: 'Morning', detail: 'Visit the Wat Traimit (open from 8:30 AM to 5:00 PM) and see the Golden Buddha ' },
          { type: 'Lunch', detail: ' Enjoy a meal at a traditional Thai restaurant, Jay Fai (average price THB 200 per person, approximately $6 USD) ' },
          { type: 'Afternoon', detail: '  Explore the MBK Center (open from 10:00 AM to 10:00 PM) and shop for souvenirs' },
          { type: 'Dinner', detail: ' Enjoy a farewell dinner at a Michelin-starred restaurant, Suananda (average price THB 2,000 per person, approximately $60 USD)' },
        ],
      },
    ],
    cost: {
      flights: ' THB 40,000 per person (approximately $1,200 USD) ',
      hotel: ' THB 22,000 per person (approximately $670 USD) ',
      meals: ' THB 10,000 per person (approximately $300 USD)',
      activities: ' THB 2,500 per person (approximately $75 USD) ',
      total: ' THB 74,500 per person ',
    },
  },
  {
    destination: 'Rio de Janeiro, Brazil',
    image: 'https://wallpapercave.com/wp/cmdkr6o.jpg',
    details: [
      {
        day: 1,
        description: 'Arrival in  Rio de Janeiro',
        activities: [
          { type: 'Flight', detail: 'LATAM LA123, departing from New York (JFK) at 10:00 PM (EST) and arriving at Rio de Janeiro-Galeão International Airport (GIG) at 10:35 AM (BRT) the next day ' },
          { type: 'Hotel', detail: 'Check-in at the Belmond Copacabana Palace (5-star) in Rio de Janeiro ' },
          { type: 'Address', detail: ' Avenida Atlântica, 1702, Copacabana, Rio de Janeiro, 22021-001, Brazil- Room type: Deluxe room with a view of Copacabana Beach' },
          { type: 'Room Type', detail: ' Deluxe room with a view of Copacabana Beach' },
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel, including Brazilian and international dishes (BRL 50 per person, approximately $12 USD)' },
          { type: 'Morning', detail: 'Visit the iconic Christ the Redeemer statue (open from 8:30 AM to 7:00 PM) and take a tram ride to the top ' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Brazilian restaurant, Confeitaria Colombo (average price BRL 50 per person, approximately $12 USD) ' },
          { type: 'Afternoon', detail: 'Explore the Sugarloaf Mountain (open from 8:00 AM to 7:00 PM) and take a cable car ride to the top ' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Olympe (average price BRL 200 per person, approximately $50 USD) ' },
        ],
      },
      {
        day: 2,
        description: 'Exploring Rio de Janeiro',
        activities: [
          { type: 'Breakfast', detail: ' Enjoy a buffet breakfast at the hotel (BRL 50 per person, approximately $12 USD)' },
          { type: 'Morning', detail: 'Visit the iconic Copacabana Beach (open from 6:00 AM to 10:00 PM) and take a stroll along the beachfront promenade ' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Brazilian restaurant, Casa de Feijoada (average price BRL 50 per person, approximately $12 USD) ' },
          { type: 'Afternoon', detail: ' Explore the Tijuca Forest (open from 8:00 AM to 5:00 PM) and take a hike to the top of the forest' },
          { type: 'Dinner', detail: '  Enjoy a meal at a Michelin-starred restaurant, Le Relais Plaza (average price BRL 250 per person, approximately $62 USD)' },
        ],
      },
      {
        day: 3,
        description: 'Historic  Rio de Janeiro ',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel (BRL 50 per person, approximately $12 USD) ' },
          { type: 'Morning', detail: ' Visit the iconic Ipanema Beach (open from 6:00 AM to 10:00 PM) and take a stroll along the beachfront promenade' },
          { type: 'Lunch', detail: ' Enjoy a meal at a traditional Brazilian restaurant, Bar Urca (average price BRL 50 per person, approximately $12 USD)' },
          { type: 'Afternoon', detail: 'Explore the Santa Teresa neighborhood (open from 10:00 AM to 6:00 PM) and visit the Museu Chácara do Céu ' },
          { type: 'Dinner', detail: 'Enjoy a meal at a Michelin-starred restaurant, Gero (average price BRL 200 per person, approximately $50 USD) ' },
        ],
      },
      {
        day: 4,
        description: 'Final Day in Rio de Janeiro',
        activities: [
          { type: 'Breakfast', detail: 'Enjoy a buffet breakfast at the hotel (BRL 50 per person, approximately $12 USD) ' },
          { type: 'Morning', detail: 'Visit the iconic Maracanã Stadium (open from 9:00 AM to 5:00 PM) and take a guided tour ' },
          { type: 'Lunch', detail: 'Enjoy a meal at a traditional Brazilian restaurant, Casa da Porco (average price BRL 50 per person, approximately $12 USD) ' },
          { type: 'Afternoon', detail: 'Explore the Lapa neighborhood (open from 10:00 AM to 6:00 PM) and visit the Escadaria Selarón, Ticket price: free admission ' },
          { type: 'Dinner', detail: 'Enjoy a farewell dinner at a Michelin-starred restaurant, O Paparico (average price BRL 250 per person, approximately $62 USD) ' },
        ],
      },
    ],
    cost: {
      flights: 'BRL 2,500 per person (approximately $625 USD ',
      hotel: 'BRL 4,800 per person (approximately $1,200 USD)  ',
      meals: 'BRL 1,500 ',
      activities: ' ',
      total: 'BRL 8,800 ',
    },
  },
  // Add more itineraries here
];

const ItineraryPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="itinerary-container">
      <h1 className="fw-bold">Travel Itineraries</h1>
      <div className="cards-container">
        {itineraries.map((itinerary, index) => (
          <div
            className={`card ${expandedCard === index ? 'expanded' : ''}`}
            key={index}
            onClick={() => toggleCard(index)}
          >
            <img src={itinerary.image} alt={itinerary.destination} className="card-image" />
            <h2 className="card-title">{itinerary.destination}</h2>
            {expandedCard === index && (
              <div className="card-details">
                {itinerary.details.map((dayPlan, i) => (
                  <div key={i} className="day-details">
                    <h3>Day {dayPlan.day}</h3>
                    <ul>
                      {dayPlan.activities.map((activity, j) => (
                        <li key={j}>
                          <strong>{activity.type}:</strong> {activity.detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="cost-details">
                  <h3>Costs:</h3>
                  <ul>
                    <li><strong>Flights:</strong> {itinerary.cost.flights}</li>
                    <li><strong>Hotel:</strong> {itinerary.cost.hotel}</li>
                    <li><strong>Meals:</strong> {itinerary.cost.meals}</li>
                    <li><strong>Activities:</strong> {itinerary.cost.activities}</li>
                    <li><strong>Total:</strong> {itinerary.cost.total}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryPage;