import React from 'react';
import VolunteerList from './components/VolunteerList.jsx';

const Volunteer = () => {
  const VOLUNTEER = [
    {
      id: 'v1',
      name: 'Help the Enchanted Forest Elaine Gordon Park',
      description:
        'The goal for each volunteer is to empower individuals to create long lasting improvements for the community of North Miami while connecting with others who share that drive. Our natural areas stewardship volunteers help with invasive species control, pollinator garden maintenance, outreach, community distributions and more! We fit opportunities to your availability and interests. No special skills required. Wear solid boots or sneakers, long pants, work gloves and a long-sleeved shirt and bring water, a snack and facial covering. Tools and training will be provided. Children under the age of 14 must be accompanied by an adult.',
      imageUrl:
        'https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/Enchanted_Forest_Elaine_Gordon-Park_1440x900_12.17.20_48C7450E-5056-A36A-0B58E92C7FC1CFA3-48c7441d5056a36_48c74584-5056-a36a-0b7310868e3ffa89.jpg',
      dateTime: 'Sunday, July 10, 2022 - 12:00 PM',
      address:
        'Enchanted Forest Elaine Gordon Park, 1725 NE 135 St, North Miami, FL 33181'
        ,
      location: {
        lat: 25.8879442,
        lng: -80.1608464
      },
      organizer: 'North Miami City Government',
      register:
        'https://www.volunteercleanup.org/32111/help_the_enchanted_forest_elaine_gordon_park'
    },
    {
      id: 'v2',
      name: 'Sunny Isles Beach Cleanup',
      description:
        `This week's cleanup will be happening on July 10th, from 5:00- 6:30 PM. Please RSVP on this website, on my Instagram, @sunny_isles_beach_cleanup, or contact me, Arina Zhirkova at 305-699-8333.  We meet at the lifeguard tower which is right next to the pier. Also, just a reminder that if you are driving, don’t park at the shop's parking as your car may be towed away. 

        Here is the photo of the  parking instructions:
        
        Please remember: DO NOT park at the Marshals parking lot as your car may get towed away. `,
      imageUrl:
        'https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/Pelican_Harbor_Marina_1440x9000-71b0c28a5056a36_71b0c405-5056-a36a-0b7cebff165e5910.jpg',
      dateTime: 'Tuesday, July 19, 2022 | 10:30 AM - 1:00 PM',
      address: 'Pelican Harbor Marina, 1275 NE 79th St, Miami, FL 33138',
      location: {
        lat: 25.8470815,
        lng: -80.1692606
      },
      organizer: 'Watersports Association',
      register:
        'https://www.volunteercleanup.org/watersportsassociation/monthly_island_cleanup_watersports_association'
    }
  ];

  return (
    <div className="main">
      <VolunteerList items={VOLUNTEER} />;
    </div>
  );
};

export default Volunteer;
