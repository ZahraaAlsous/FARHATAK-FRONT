// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../assets/styles/service.css";

// // function Servic() {
// //   const navigate = useNavigate();

// //   const handleCardClick = () => {
// //     navigate("/dservice");
// //   };

// //   return (
// //     <div>
// //       <div className="header">
// //         <h1>Hall</h1>
// //       </div>

// //       <div className="cards-section">
// //         {[
// //           "https://images.unsplash.com/photo-1549187774-b4e9b0445b06",
// //           "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
// //           "https://images.unsplash.com/photo-1582719478171-2fb68c226d4e",
// //           "https://images.unsplash.com/photo-1582719478171-2fb68c226d4e",
// //         ].map((url, index) => (
// //           <div
// //             key={index}
// //             className="card"
// //             onClick={handleCardClick}
// //             style={{ cursor: "pointer" }}
// //           >
// //             <img src={url} alt={`Hall ${index + 1}`} />
// //             <div className="overlay">
// //               <span>oldHouse</span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Servic;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../assets/styles/service.css";

// function Servic() {
//   const navigate = useNavigate();
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchHalls = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:3000/api/service/category/hall"
//         );
//         setServices(res.data);
//       } catch (error) {
//         console.error("Error fetching hall data", error);
//       }
//     };

//     fetchHalls();
//   }, []);

//   const handleCardClick = (hall) => {
//     navigate("/dservice", { state: { hall } });
//   };

//   return (
//     <div>
//       <div className="header">
//         <h1>Hall</h1>
//       </div>

//       <div className="cards-section">
//         {services.map((hall, index) => (
//           <div
//             key={hall._id}
//             className="card"
//             onClick={() => handleCardClick(hall)}
//             style={{ cursor: "pointer" }}
//           >
//             <img
//               src={hall.images?.[0] || "https://via.placeholder.com/300x200"}
//               alt={hall.title}
//             />
//             <div className="overlay">
//               <span>{hall.title}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Servic;
// Servic.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/service.css";
import Navbar from "../Components/Navbar";

function Servic() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("hall");

  useEffect(() => {
    const storedCategory = localStorage.getItem("Category") || "hall";
    setCategory(storedCategory);

    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/service/category/${storedCategory}`
        );
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching services", error);
      }
    };

    fetchServices();
  }, []);

  const handleCardClick = (service) => {
    navigate("/dservice", { state: { hall: service } });
  };

  return (
    <>
    <Navbar/>

    <div>
      <div className="header">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      </div>

      <div className="cards-section">
        {services.map((service) => (
          <div
            key={service._id}
            className="card"
            onClick={() => handleCardClick(service)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={service.images?.[0] || "https://via.placeholder.com/300x200"}
              alt={service.title}
            />
            <div className="overlay">
              <span>{service.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
      </>);
}

export default Servic;
