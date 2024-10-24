import React from 'react';
import { Carousel } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome, faTv, faStar, faIndianRupeeSign, faWifi, faPaw, faParking, faSwimmingPool,
    faHotTub
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import whatsapp from '../../assets/whatsapp-icon.svg';
import { propertDeatails1, propertDeatails2, propertDeatails3 } from '../../assets';
const PackagePack = ({ property }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/property/${property._id}`);
    };

    return (
        <div className='flex flex-col md:flex-row gap-6 w-full border-2 p-4 shadow-lg rounded-lg'>
            <section className='w-full h-60 md:w-1/2 md:h-auto'>
                <Carousel indicators={false}>
                    <img src={propertDeatails1} alt="img1" className='w-full h-full object-cover' />
                    <img src={propertDeatails2} alt="img2" className='w-full h-full object-cover' />
                    <img src={propertDeatails3} alt="img2" className='w-full h-full object-cover' />
                    {/* {property.photos.map((photo, index) => (
                             <img key={index} src={photo.url} alt={`Property photo ${index + 1}`} className='w-full h-full object-cover' />
                         ))} */}
                </Carousel>
            </section>
            <section className='flex flex-col md:flex-row gap-2 justify-between w-full   '>
                <div className='cursor-pointer' onClick={handleClick}>
                    <h1 className='text-2xl md:text-4xl font-medium'>{property.propertyName}</h1>
                    <p className='pl-2'>{property.exactLocationName}</p>
                    <div className='py-3 flex gap-3 text-red-400 lg:text-xl'>
                        {property.amenities.kitchen && <FontAwesomeIcon icon={faHome} />}
                        {property.amenities.tv && <FontAwesomeIcon icon={faTv} />}
                        {property.amenities.wifi && <FontAwesomeIcon icon={faWifi} />}
                        {property.amenities.petsAllowed && <FontAwesomeIcon icon={faPaw} />}
                        {property.amenities.freeParking && <FontAwesomeIcon icon={faParking} />}
                        {property.amenities.hotTub && <FontAwesomeIcon icon={faHotTub} />}
                        {property.amenities.swimmingPool && <FontAwesomeIcon icon={faSwimmingPool} />}
                        {/* Add other amenity icons here */}
                    </div>
                    <div className='flex gap-1 items-center text-sm'>
                        <h1 className='text-lg font-medium'>Also explore - </h1>
                        <p className='text-lg'>{property.popularNearbyLocationName}</p>
                    </div>
                    <div className='flex my-2 gap-2 items-center text-sm'>
                        <h1 className='text-lg font-medium'>Contact - </h1>
                        <button className='p-2 rounded-3xl text-lg'>
                            {property.contactNumber || '123456789'}
                        </button>
                        <img src={whatsapp} alt="whatsappIcon" width={30} />
                    </div>
                    <div className='w-full'>
                        <div className='bg-blue-400 py-2 rounded-xl flex justify-center items-center font-medium'>
                            <button onClick={handleClick}>Book Now</button>
                        </div>
                    </div>
                </div>

                <div className='cursor-pointer' onClick={handleClick}>
                    <div className='flex items-center justify-start md:justify-center gap-1'>
                        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                        <p className='text-md px-2 bg-blue-400 rounded-lg font-bold'>4.6</p>
                        <span>(26 Ratings)</span>
                    </div>
                    <div className='mt-4 flex  justify-start items-start md:flex-row md:justify-end md:items-end gap-2'>
                        <span className='line-through flex items-center'>
                            <FontAwesomeIcon icon={faIndianRupeeSign} />
                            <p>3000</p>
                        </span>
                        <h1 className='text-2xl font-bold'>{property.price.perHead}</h1>
                    </div>
                    <div className='flex justify-start md:justify-end'>(per Guest)</div>
                </div>
            </section>
        </div>
    );
};

export default PackagePack;
