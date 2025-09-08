import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { HiMiniPlusSmall } from "react-icons/hi2";

// Recursive Department Item
const Department = ({ name, head, count, img, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
      <div
        className="struct-list"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          padding: "8px 0",
        }}
      >
        {/* Left section: Arrow + Avatar + Text */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Arrow */}
          {children && (isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />)}

          {/* Image placeholder */}
          <div
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              backgroundColor: "#ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {img ? (
              <img
                src={img}
                alt={name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span style={{ fontSize: "14px", color: "#fff" }}>
                {name[0]}
              </span>
            )}
          </div>

          {/* Name + Head */}
          <div>
            <h4 style={{ margin: 0, fontWeight: name === "Executive" ? 500 : 500 }}>
              {name}
            </h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>{head}</p>
          </div>
        </div>

        {/* Right section: Number + Plus button */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {count !== undefined && (
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#f0f0f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
              }}
            >
              {count}
            </div>
          )}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <HiMiniPlusSmall size={20} />
          </button>
        </div>
      </div>

      {/* Children */}
      {isOpen && children && (
        <div style={{ marginLeft: "20px" }}>
          {children.map((child, idx) => (
            <Department key={idx} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

function Structure() {
  // Org chart data
  const orgData = [
    {
      name: "Executive",
      head: "John Smith",
      count: 3,
      img: "", // optional image URL
      children: [
        {
          name: "Engineering",
          head: "Jane Doe",
          count: 6,
          children: [
            { name: "Frontend", head: "Mike Johnson", count: 2 },
            { name: "Backend", head: "Sarah Brown", count: 4 },
            { name: "DevOps", head: "Timothy Brown", count: 4 },
            { name: "QA", head: "Sarah Brown", count: 4 },
          ],
        },
        {
          name: "Sales",
          head: "Jane Doe",
          count: 6,
          children: [
            { name: "Enterprise Sales", head: "Mike Johnson", count: 2 },
            { name: "SMB Sales", head: "Sarah Brown", count: 4 },
            { name: "Sales Development", head: "Timothy Brown", count: 4 },
          
          ],
        },
        {
          name: "Marketing",
          head: "Jane Doe",
          count: 6,
          children: [
            { name: "Digital Marketing", head: "Mike Johnson", count: 2 },
            { name: "Content Marketing", head: "Sarah Brown", count: 4 },
            { name: "Digital Marketing", head: "Timothy Brown", count: 4 },
          
          ],
        },
        
      ],
    },
  ];

  return (
    <div>
      <div className="org-structure">
        <div className="org-one">
          <h3>Organization Structure</h3>
          <p>Visual representation of your company's organizational hierarchy</p>
          <br />

          {/* Render recursive org structure */}
          {orgData.map((dept, idx) => (
            <Department key={idx} {...dept} />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="orgone">
        <div className="org_one">
          <div className="mp1" style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>12</h2>
            <p>Total Departments</p>
          </div>
        </div>
        <div className="org_one">
          <div className="mp2" style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>4</h2>
            <p>Hierarchy Levels</p>
          </div>
        </div>
        <div className="org_one">
          <div className="mp" style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>24</h2>
            <p>Management Positions</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Structure;
