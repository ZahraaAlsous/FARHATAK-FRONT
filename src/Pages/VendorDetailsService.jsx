// import React, { useState } from "react";
// import "../assets/styles/service.css";

// function VendorDetailsService() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [images, setImages] = useState([
//     {
//       url: "https://images.unsplash.com/photo-1549187774-b4e9b0445b06",
//       label: "Interior",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1582719478171-2fb68c226d4e",
//       label: "Lights",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
//       label: "Seating",
//     },
//   ]);

//   const handleDeleteImage = (index) => {
//     const updated = [...images];
//     updated.splice(index, 1);
//     setImages(updated);
//   };

//   return (
//     <div className="bg-[#f6f1eb] text-[#a1866f] font-sans relative">
//       {/* صورة الغلاف */}
//       <div className="header">
//         <h1> Luxury Wedding Hall</h1>
//       </div>

//       {/* مستطيل بمعلومات */}
//       <div className="px-10 py-16 flex flex-col items-start gap-8 relative">
//         {/* المستطيل الأول */}
//         <div className="bg-[#ded4c6] rounded-xl shadow-lg px-6 py-5 max-w-xl mt-10 ml-20 z-10 relative">
//           <p className="text-lg mb-4">
//             <span>name: </span>
//             <br />
//             <span>description: </span>
//             <br />
//             <span>price: </span>
//             <br />
//             <span>Location: </span>
//             <br />
//           </p>
//           <button
//             className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-6 py-2 rounded-md text-base float-right"
//             onClick={() => setShowPopup(true)}
//           >
//             edit
//           </button>
//         </div>

//         {/* مستطيل ديكور فقط */}
//         <div className="absolute bg-[#ded4c6] rounded-xl shadow-lg px-6 py-5 w-[576px] h-[140px] -mt-5 ml-10 z-0"></div>
//       </div>

//       {/* أزرار إضافة صور وفيديو */}
//       {/* <div className="px-10 ml-20 mt-[-30px] mb-8 flex gap-4">
//         <button className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-4 py-2 rounded-md">
//           add image
//         </button>
//         <button className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-4 py-2 rounded-md">
//           add video
//         </button>
//       </div> */}
//       {/* أزرار إضافة صور وفيديو */}
//       <div className="px-10 mt-[-30px] mb-8 flex justify-center gap-4">
//         <button className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-4 py-2 rounded-md">
//           add image
//         </button>
//         <button className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-4 py-2 rounded-md">
//           add video
//         </button>
//       </div>

//       {/* الصور */}
//       <div className="bg-[#e8ded2] px-10 py-10 flex flex-wrap justify-center gap-6">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative w-[250px] h-[250px] rounded-xl overflow-hidden shadow-md group"
//           >
//             <img
//               src={image.url}
//               alt={`Hall ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//             {/* زر الحذف يظهر عند hover */}
//             <button
//               onClick={() => handleDeleteImage(index)}
//               className="absolute top-2 right-2 bg-[#a1866f] text-white rounded-full w-7 h-7 text-sm hidden group-hover:flex items-center justify-center"
//               title="delete"
//             >
//               &times;
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* نافذة منبثقة (تعديل المعلومات) */}
//       {showPopup && (
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-[#a1866f] relative">
//             <h2 className="text-xl mb-4 font-bold">edit</h2>
//             <span>
//               Name:
//               <input className="border rounded px-2 py-1 ml-2" />
//             </span>
//             <br />
//             <span>
//               Price:
//               <input className="border rounded px-2 py-1 ml-2" />
//             </span>
//             <br />
//             <span>
//               Discription:
//               <input className="border rounded px-2 py-1 ml-2" />
//             </span>
//             <br />
//             <span>
//               Location:
//               <input className="border rounded px-2 py-1 ml-2" />
//             </span>
//             <br />
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-2 right-4 text-gray-600 text-xl font-bold hover:text-red-600"
//             >
//               &times;
//             </button>
//             <button className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-6 py-2 rounded-md text-base float-right mt-4">
//               Save
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default VendorDetailsService;
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../assets/styles/service.css";
// import axios from "axios";
// import Navbar from "../Components/Navbar";

// function VDetailsService() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [eventDate, setEventDate] = useState("");
//   const [notes, setNotes] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");

//   const location = useLocation();
//   const service = location.state?.service;

//   if (!service) {
//     return <div className="p-10 text-center">No service data available.</div>;
//   }

//   const handleBooking = async () => {
//     if (!eventDate) {
//       setResponseMessage("Please select a date.");
//       return;
//     }

//     const selectedDate = new Date(eventDate);
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     tomorrow.setHours(0, 0, 0, 0);

//     if (selectedDate < tomorrow) {
//       setResponseMessage("❌ You can only book starting from tomorrow.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setResponseMessage("Unauthorized: Not logged in.");
//         return;
//       }

//       const response = await axios.post(
//         `http://localhost:3000/api/checkDateAvailability/${service._id}`,
//         {
//           eventDate,
//           notes,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = response.data;

//       if (data.available === false) {
//         setResponseMessage("❌ Sorry, this date is already booked.");
//       } else if (data.available === true) {
//         setResponseMessage("✅ Booking successful!");
//         setTimeout(() => {
//           setShowPopup(false);
//           setResponseMessage("");
//           setEventDate("");
//           setNotes("");
//         }, 2000);
//       } else if (data.message === "Unauthorized: No token provided") {
//         setResponseMessage("⚠️ Unauthorized: Not logged in.");
//       } else {
//         setResponseMessage("❗ Unexpected error occurred.");
//       }
//     } catch (error) {
//       console.error(error);
//       if (error.response?.status === 401) {
//         setResponseMessage("⚠️ Unauthorized: Invalid token.");
//       } else {
//         setResponseMessage("❗ Server error occurred.");
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-[#f6f1eb] text-[#a1866f] font-sans relative">
//         {/* Header */}
//         <div className="header">
//           <h1>{service.title}</h1>
//         </div>

//         {/* Service Details */}
//         <div className="px-10 py-16 flex flex-col items-start gap-8 relative">
//           <div className="bg-[#ded4c6] rounded-xl shadow-lg px-6 py-5 max-w-xl mt-10 ml-20 z-10 relative">
//             <p className="text-lg mb-4 leading-8">
//               <strong>Name:</strong> {service.title}
//               <br />
//               <strong>Description:</strong> {service.description}
//               <br />
//               <strong>Price:</strong> {service.price} EGP
//               <br />
//               <strong>Location:</strong> {service.location}
//               <br />
//             </p>

//             {/* الأزرار الجديدة */}
//             <div className="flex gap-3 mt-4 justify-end">
//               <button
//                 className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-6 py-2 rounded-md text-base"
//                 onClick={() => alert("Edit functionality coming soon...")}
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//           <div className="w-full flex justify-center mt-6 mb-8">
//             <div className="flex gap-4">
//               <button className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-4 py-2 rounded-md">
//                 add image
//               </button>
//               <button className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-4 py-2 rounded-md">
//                 add video
//               </button>
//             </div>
//           </div>

//           <div className="absolute bg-[#ded4c6] rounded-xl shadow-lg px-6 py-5 w-[576px] h-[140px] -mt-5 ml-10 z-0"></div>
//         </div>

//         {/* Images */}
//         <div className="bg-[#e8ded2] px-10 py-10 flex flex-wrap justify-center gap-6 relative">
//           {service.images?.length > 0 ? (
//             service.images.map((url, index) => (
//               <div
//                 key={index}
//                 className="relative w-[250px] h-[250px] rounded-xl overflow-hidden shadow-md"
//               >
//                 {/* زر الحذف */}
//                 <button
//                   onClick={() => alert(`Delete image ${index + 1}`)}
//                   className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center z-10"
//                 >
//                   &times;
//                 </button>

//                 {/* الصورة */}
//                 <img
//                   src={url}
//                   alt={`Hall image ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))
//           ) : (
//             <div>No images available.</div>
//           )}
//         </div>

//         {/* Booking Popup */}
//         {showPopup && (
//           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-40">
//             <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-[#a1866f] relative">
//               <h2 className="text-xl mb-4 font-bold">Book Now</h2>

//               <div className="mb-4">
//                 <label className="block mb-1">Date:</label>
//                 <input
//                   type="date"
//                   className="border rounded px-3 py-1 w-full"
//                   value={eventDate}
//                   onChange={(e) => setEventDate(e.target.value)}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block mb-1">Note:</label>
//                 <input
//                   type="text"
//                   className="border rounded px-3 py-1 w-full"
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                 />
//               </div>

//               {responseMessage && (
//                 <p className="text-sm mt-3 text-red-600">{responseMessage}</p>
//               )}

//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="absolute top-2 right-4 text-gray-600 text-xl font-bold hover:text-red-600"
//               >
//                 &times;
//               </button>

//               <button
//                 onClick={handleBooking}
//                 className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-6 py-2 rounded-md text-base float-right"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default VDetailsService;
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/service.css";
import axios from "axios";
import Navbar from "../Components/Navbar";

function VDetailsService() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [responseMessage, setResponseMessage] = useState("");
  const location = useLocation();

  // ❗️ اجعل service حالة مستقلة بدلًا من استخدام location.state مباشرة
  const [service, setService] = useState(location.state?.service);

  useEffect(() => {
    if (!service) {
      setResponseMessage("❌ No service data available.");
    }
  }, [service]);

  if (!service) {
    return <div className="p-10 text-center">{responseMessage}</div>;
  }

  const handleEditClick = () => {
    setFormData({
      title: service.title,
      category: service.category,
      description: service.description,
      price: service.price,
      images: service.images || [],
      videos: service.videos || [],
      availableDates: service.availableDates || [],
      location: service.location,
    });
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `http://localhost:3000/api/updateService/${service._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ حدّث بيانات الخدمة في الواجهة
      setService((prev) => ({
        ...prev,
        ...formData,
      }));

      setResponseMessage("✅ Service updated successfully!");
      setEditMode(false);
    } catch (error) {
      console.error(error);
      setResponseMessage("❌ Failed to update service.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#f6f1eb] text-[#a1866f] font-sans relative">
        <div className="header">
          <h1>{service.title}</h1>
        </div>

        <div className="px-10 py-16 flex flex-col items-start gap-8 relative">
          <div className="bg-[#ded4c6] rounded-xl shadow-lg px-6 py-5 max-w-xl mt-10 ml-20 z-10 relative">
            {editMode ? (
              <div className="flex flex-col gap-3">
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="border px-3 py-1 rounded"
                  placeholder="Title"
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="border px-3 py-2 rounded"
                  placeholder="Description"
                />
                <input
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="border px-3 py-1 rounded"
                  placeholder="Price"
                />
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="border px-3 py-1 rounded"
                  placeholder="Location"
                />
                <div className="flex gap-3 mt-4 justify-end">
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded"
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-lg mb-4 leading-8">
                <strong>Name:</strong> {service.title}
                <br />
                <strong>Description:</strong> {service.description}
                <br />
                <strong>Price:</strong> {service.price} EGP
                <br />
                <strong>Location:</strong> {service.location}
              </p>
            )}

            {!editMode && (
              <div className="flex gap-3 mt-4 justify-end">
                <button
                  className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-6 py-2 rounded-md text-base"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex justify-center mt-6 mb-8">
          <div className="flex gap-4">
            <button className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-4 py-2 rounded-md">
              add image
            </button>
            <button className="bg-[#a1866f] hover:bg-[#8c715c] text-white px-4 py-2 rounded-md">
              add video
            </button>
          </div>
        </div>

        <div className="bg-[#e8ded2] px-10 py-10 flex flex-wrap justify-center gap-6 relative">
          {service.images?.length > 0 ? (
            service.images.map((url, index) => (
              <div
                key={index}
                className="relative w-[250px] h-[250px] rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={url}
                  alt={`Hall image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <div>No images available.</div>
          )}
        </div>

        {responseMessage && (
          <div className="text-center text-red-600 text-lg mt-4">
            {responseMessage}
          </div>
        )}
      </div>
    </>
  );
}

export default VDetailsService;
