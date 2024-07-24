import React, { useState, useEffect } from 'react'
import { propertDeatails1, propertDeatails2, propertDeatails3, shakleshpura, shakleshpura1, shakleshpura2 } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faKitchenSet,
  faStar, faPhone,
  faTv,
  faSatelliteDish,
  faWifi,
  faPaw,
  faParking,
  faSmoking,
  faDumbbell,
  faChild,
  faSwimmingPool,
  faHotTub,
  faElevator,
  faFan,
  faWheelchair,
  faBath,
  faCircleDot,
  faWarning
} from '@fortawesome/free-solid-svg-icons';

import { Avatar, Badge, Button, TextInput, Datepicker } from "flowbite-react";
import { Tabs } from "flowbite-react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RequestBookForm from './RequestBookForm';
import { Spinner } from "flowbite-react";
const PropertyDetails = () => {

  const [property, setProperty] = useState();
  const { id } = useParams();
  useEffect(() => {
    // console.log(id);
    const fetchPropertie = async () => {
      try {
        await axios.get(`https://holidayjoyvecation.onrender.com/api/v1/property/${id}`).then(response => {
          setProperty(response.data);
        })
      } catch (e) {
        console.error('Error fetching properties', e);
      }
    };
    fetchPropertie();
  }, []);

  if (!property) return <div className='w-full h-[100vh] flex justify-center items-center'>
    <Spinner aria-label="Extra large spinner example" size="xl" />
  </div>

  // console.log(property);
  const { address,
    price,
    amenities,
    propertyName,
    exactLocationName,
    description,
    photos,
    houseRules,
    popularNearbyLocationName,
    nearbyAttractions
  } = property;

  const amenitiesIcons = {
    kitchen: { icon: faKitchenSet, label: 'Kitchen' },
    tv: { icon: faTv, label: 'TV' },
    satelliteTV: { icon: faSatelliteDish, label: 'Satellite TV' },
    wifi: { icon: faWifi, label: 'Wi-Fi' },
    petsAllowed: { icon: faPaw, label: 'Pets Allowed' },
    washingMachine: { icon: "", label: 'Washing Machine' },
    dryer: { icon: "", label: 'Dryer' },
    freeParking: { icon: faParking, label: 'Free Parking' },
    smokingAllowed: { icon: faSmoking, label: 'Smoking Allowed' },
    indoorFireplace: { icon: "", label: 'Indoor Fireplace' },
    gym: { icon: faDumbbell, label: 'Gym' },
    kidsPlayArea: { icon: faChild, label: 'Kids Play Area' },
    swimmingPool: { icon: faSwimmingPool, label: 'Swimming Pool' },
    hotTub: { icon: faHotTub, label: 'Hot Tub' },
    iron: { icon: "", label: 'Iron' },
    elevatorInBuilding: { icon: faElevator, label: 'Elevator in Building' },
    airConditioning: { icon: faFan, label: 'Air Conditioning' },
    heating: { icon: "", label: 'Heating' },
    wheelchairAccessible: { icon: faWheelchair, label: 'Wheelchair Accessible' },
    jacuzzi: { icon: faBath, label: 'Jacuzzi' }
  };
  const amenitiesArray = Object.keys(amenities).filter(key => amenities[key]);

  return (
    <div className='w-full flex justify-center items-center mt-24'>
      <div className='w-[80%]'>
        {/* <div>
          <Search />
        </div> */}
        <section className='flex w-full h-auto justify-center items-center'>
          <div className="flex w-full flex-wrap md:flex-nowrap">
            {/* Main image */}
            <div className="w-full md:w-7/10 lg:w-[75%] p-2 ">
              <img
                src={propertDeatails1}
                alt="Main"
                className="w-full h-auto object-cover rounded-xl overflow-hidden"
              />
            </div>
            <div className="w-full md:w-3/10 lg:w-[40%] flex flex-col ">
              <div className="w-full p-2 ">
                <img
                  src={propertDeatails2}
                  alt="Top"
                  className="w-full h-auto object-cover rounded-xl overflow-hidden bg-red-400"
                />
              </div>
              <div className="w-full h-auto p-2">
                <img
                  src={propertDeatails3}
                  alt="Bottom"
                  className="w-full h-auto object-cover rounded-xl overflow-hidden bg-red-400"
                />
              </div>
            </div>
          </div>
        </section>
        <section className='lg:m-2 flex flex-col md:flex-row justify-center items-center '>
          <article className='lg:m-2 p-2 w-full md:w-[60%] '>
            <div className='flex justify-between items-start'>
              <div>
                <h1 className='text-4xl font-medium'>{propertyName}</h1>
                <p>{address.city}, {address.landMark}, {address.pincode}</p>
              </div>
              <div>
                <div className='py-1 px-2 flex gap-2 items-center'>
                  <p>4.5</p>
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
            <section className='p-2 mt-4 mb-9'>
              <div>
                <h1 className='text-2xl py-4 font-medium'>Meet Your Host </h1>
              </div>
              <div className='flex flex-wrap gap-8'>
                <div className=' w-auto h-auto px-6 py-4 flex flex-col md:flex-row justify-center items-center border-[2px] gap-5 rounded-xl shadow-xl'>
                  <div>
                    <Avatar img="" size="lg" />
                  </div>
                  <div className='flex-col'>
                    <h1 className='border-b-2 py-2 text-2xl font-medium'>Vinay Kumar</h1>
                    <div className='flex items-center border-b-2 py-2 gap-3'>
                      <FontAwesomeIcon icon={faPhone} />
                      <p>+91 900845655988</p>
                    </div>
                    <div className='flex items-center border-b-2 py-2 gap-3'>
                      <FontAwesomeIcon icon={faPhone} />
                      <p>+91 900845655988</p>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h1 className='text-2xl font-medium my-4'>Discover our best</h1>
                  <TextInput id="email" placeholder="Enter your email" required type="email" className='my-2 w-60' />
                  <Button type="submit">Subscribe</Button>
                </div>
              </div>
            </section>
            <section className='py-10'>
              <div>
                <h1 className='text-2xl py-2 font-medium'>Know more about us</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod aliquid voluptas nulla.
                  Ex, magni quis minima officia eaque ab, iste nisi dignissimos maxime incidunt laboriosam veniam nemo
                  ducimus quo!</p>
              </div>
            </section>
            <section>
              <Tabs aria-label="Default tabs" variant="default">
                <Tabs.Item title="Amenities">
                  <div className='py-3 flex gap-3 lg:text-md flex-wrap '>
                    {/* map this */}

                    {amenitiesArray.map(item => (
                      <div key={item} className='flex items-center gap-2 py-2 px-6 rounded-full text-orange-600 border-2 border-gray-400'>
                        <FontAwesomeIcon icon={amenitiesIcons[item]?.icon || faCircleDot} />
                        <h1>{amenitiesIcons[item]?.label || item}</h1>
                      </div>
                    ))}
                    {/* <div className='flex items-center gap-2 py-2 px-6 rounded-full  border-2 border-black'>
                      <FontAwesomeIcon icon={faHome} />
                      <h1>Home</h1>
                    </div> */}
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Nearby Attraction">
                  <div className='text-black '>
                    {/* map this */}
                    {
                      nearbyAttractions.map(attraction => (
                        <div className='flex justify-around text-lg font-medium border-b-2 border-gray-200 mb-3'>
                          <h1>{attraction.name}</h1>
                          <h1>{attraction.distance}km</h1>
                          <h1>helloo</h1>
                        </div>
                      ))
                    }
                  </div>
                </Tabs.Item>
                <Tabs.Item title="House Rule">
                  <div className='flex gap-4 justify-center items-center'>
                    {/* map this add if else to success and failure */}
                    <FontAwesomeIcon icon={faWarning} className='text-red-600 text-2xl' />
                    <h1 className='text-xl text-red-600'>{houseRules}</h1>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Location">
                  <div className='w-full rounded-2xl overflow-hidden'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.874691417042!2d77.57023024052296!3d12.812962873321233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6a1b328480b5%3A0x52414d84b722526f!2sBannerughatta%2C%20Bengaluru%2C%20Karnataka%20560083!5e0!3m2!1sen!2sin!4v1720374261583!5m2!1sen!2sin" width="700" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </Tabs.Item>
              </Tabs>
            </section>
          </article>
          {/* right side form */}
          <div>
            <RequestBookForm price={price} propertyName={propertyName} location={exactLocationName} />
          </div>
        </section>
      </div >
    </div >
  )
}

export default PropertyDetails;
