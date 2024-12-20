import React, { useState } from 'react';
import { Star, Globe2, Clock } from 'lucide-react';
import type { Doctor } from '../types';
import DoctorProfile from './DoctorProfile';

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={doctor.imageUrl}
              alt={doctor.name}
            />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{doctor.rating}</span>
              </div>
            </div>
            <p className="mt-1 text-gray-600">{doctor.specialty}</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Globe2 className="w-4 h-4 mr-1" />
              <span>{doctor.languages.join(', ')}</span>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>Next available: {doctor.availability[0]}</span>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowProfile(true)}
              >
                View Profile
              </button>
              <button className="btn btn-primary">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>

      {showProfile && (
        <DoctorProfile 
          doctor={doctor} 
          onClose={() => setShowProfile(false)} 
        />
      )}
    </>
  );
}