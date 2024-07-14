import React, { useState, useEffect } from 'react'
import { shakleshpura, shakleshpura1, shakleshpura2 } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBed, faBath, faPeopleGroup, faPersonSwimming, faParking, faTv, faPaw, faWifi, faStar, faIndianRupeeSign, faPhone, faKitchenSet } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Badge, Button, TextInput, Datepicker } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Search from "../HomeStays/Search";
import Recommend from '../Recommend';
const PropertyDetails = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    checkIn: "",
    checkOut: "",
    adultsCount: "",
    kidsCount: "",
    message: "",
  });
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
  if (!property) {
    return <div>Loading...</div>;
  }
  // console.log(property);
  const { address,
    price,
    amenities,
    propertyName,
    description,
    photos,
    houseRules,
    popularNearbyLocationName
  } = property;
  // Define a mapping of amenities to corresponding icons and labels
  const amenitiesIcons = {
    kitchen: { icon: faKitchenSet, label: 'Kitchen' },
    tv: { icon: faTv, label: 'TV' },
    wifi: { icon: faWifi, label: 'WiFi' },
    freeParking: { icon: faParking, label: 'Free Parking' },
    swimmingPool: { icon: faPersonSwimming, label: 'Swimming Pool' },
    // Add other amenities as needed
  };

  const amenitiesArray = Object.keys(amenities).filter(key => amenities[key]);

  const perGuestAmount = 2499;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Per Guest Amount: ₹${perGuestAmount}\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phoneCode} ${formData.phone}\n` +
      `Check-In: ${formData.checkIn}\n` +
      `Check-Out: ${formData.checkOut}\n` +
      `Adults Count: ${formData.adultsCount}\n` +
      `Kids Count: ${formData.kidsCount}\n` +
      `Message: ${formData.message}`
    );
  };
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[80%]'>
        <div>
          <Search />
        </div>
        <section className='flex w-full h-auto justify-center items-center'>
          <div className="flex w-full flex-wrap md:flex-nowrap">
            {/* Main image */}
            <div className="w-full md:w-7/10 lg:w-[95%] p-2 ">
              <img
                src="https://via.placeholder.com/700x400"
                alt="Main"
                className="w-full h-auto object-cover rounded-xl overflow-hidden"
              />
            </div>
            <div className="w-full md:w-3/10 lg:w-[40%] flex flex-col ">
              <div className="w-full p-2 ">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Top"
                  className="w-full h-auto object-cover rounded-xl overflow-hidden bg-red-400"
                />
              </div>
              <div className="w-full p-2">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Bottom"
                  className="w-full h-auto object-cover rounded-xl overflow-hidden bg-red-400"
                />
              </div>
            </div>
          </div>
        </section>
        <section className='lg:m-2 flex justify-center items-center '>
          <article className='lg:m-2 p-2 w-[60%] '>
            <div className='flex justify-between items-start'>
              <div>
                <h1 className='text-4xl'>{propertyName}</h1>
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
                <h1 className='text-2xl py-4'>Meet Your Host </h1>
              </div>
              <div className='flex flex-wrap gap-8'>
                <div className=' w-96 h-52 flex justify-center items-center border-[2px] gap-5 rounded-xl shadow-xl'>
                  <div>
                    <Avatar img="" size="xl" />
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
            <section>
              <Tabs aria-label="Default tabs" variant="default">
                <Tabs.Item active title="Rooms">
                  {/* add rooms here */}
                </Tabs.Item>
                <Tabs.Item title="Amenities">
                  <div className='py-3 flex gap-3 lg:text-md flex-wrap '>
                    {/* map this */}

                    {amenitiesArray.map(item => (
                      <div key={item} className='flex items-center gap-2 py-2 px-6 rounded-full border-2 border-black'>
                        <FontAwesomeIcon icon={amenitiesIcons[item]?.icon || faTv} />
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
                  {/* map this */}
                  <div className='flex justify-around text-lg font-medium border-b-2 border-gray-200 mb-3'>
                    <h1>{popularNearbyLocationName}</h1>
                    <h1>10km</h1>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="House Rule">
                  <div className='flex gap-4'>
                    {/* map this add if else to success and failure */}
                    <Badge color="success" className='text-xl'>Free Parking</Badge>
                    <Badge color="failure" className='text-xl'>{houseRules}</Badge>
                    <Badge color="failure" className='text-xl'>no outside food</Badge>
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
          {/* left side form */}
          {/* <div className=''> */}
          <div className="max-w-lg mx-auto p-4 lg:w-2/5 rounded-lg shadow-lg bg-white">
            <div className="mb-4">

              <div className="text-lg font-bold mt-2">The Greenstay Homestay</div>
              <div className="text-green-600 text-xl">
                Per Guest ₹{price.perHead} <span className="line-through text-gray-500">₹2,999</span>{" "}
                <span className="text-green-500">save 17%</span>
              </div>
              <div className="text-gray-500">Price includes 3 meals + Hi-Tea</div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full name *"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <div className="flex space-x-2">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  <option value="+91">+91</option>
                  {/* Add other country codes as needed */}
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="checkIn"
                  placeholder="Check-In"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <input
                  type="text"
                  name="checkOut"
                  placeholder="Check-Out"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="number"
                  name="adultsCount"
                  placeholder="Adults Count"
                  value={formData.adultsCount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <input
                  type="number"
                  name="kidsCount"
                  placeholder="Kids Count (5-12Yrs)"
                  value={formData.kidsCount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                Request to Book
              </button>
            </form>
          </div>
          {/* </div> */}

        </section>
        <Recommend />
      </div >
    </div >
  )
}

export default PropertyDetails;
