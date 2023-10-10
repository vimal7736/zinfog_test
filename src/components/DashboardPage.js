import React, { useState, useEffect } from "react";
import LogoSvg from "../svg/LogoSvg";
import {
  AiFillFileText,
  AiOutlineDownload,
  AiOutlineLogout,
  AiOutlineSearch,
} from "react-icons/ai";
import dummyData from "../DummyData";
import { Link } from "react-router-dom";
import userImage from "../images/image.jpg";
import reportImage from "../images/reportIMage.jpg";

const tableRowStyle = {
  borderBottom: "1px solid #ccc",
};

const DashboardPage = () => {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    referredBy: "",
    patientName: "",
    hospitalId: "",
    status: "",
    billNo: "",
    searchText: "",
  });

  const [messageModalVisible, setMessageModalVisible] = useState(false);
  const [selectedOrderNo, setSelectedOrderNo] = useState(null);
  const [messageContent, setMessageContent] = useState("");

  const [reportPopupVisible, setReportPopupVisible] = useState(false);
  const [selectedPatientName, setSelectedPatientName] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const [filteredData, setFilteredData] = useState(dummyData.data);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    handleSearch();
  }, [filters, currentPage]);

  const handleClear = () => {
    setFilters({
      fromDate: "",
      toDate: "",
      referredBy: "",
      patientName: "",
      hospitalId: "",
      status: "",
      billNo: "",
      searchText: "",
    });
  };

  const handleOpenMessageModal = (orderNo) => {
    setSelectedOrderNo(orderNo);
    setMessageContent("");
    setMessageModalVisible(true);
  };

  const handleSendMessage = () => {
    console.log(
      "Sending message for order:",
      selectedOrderNo,
      "Message content:",
      messageContent
    );

    setMessageModalVisible(false);
  };


  
  const handleOpenReportPopup = (patientName) => {
    setSelectedPatientName(patientName);
    setReportPopupVisible(true);
  };

  const handleCloseReportPopup = () => {
    setReportPopupVisible(false);
  };

  const handleDownloadReport = (imageSrc) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "report_image.jpg";
    link.click();
  };

  const handleSearch = () => {
    const filteredData = dummyData.data.filter((item) => {
      return (
        item.doctor.toLowerCase().includes(filters.searchText.toLowerCase()) ||
        item.patient_name
          .toLowerCase()
          .includes(filters.searchText.toLowerCase()) ||
        item.test_name
          .toLowerCase()
          .includes(filters.searchText.toLowerCase()) ||
        item.hospital_id
          .toLowerCase()
          .includes(filters.searchText.toLowerCase())
      );
    });

    setFilteredData(filteredData);
  };

  const totalPageCount = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="dashboard-container">
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LogoSvg />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "80px",
          }}
        >
          <div>
            <h2>John Doe</h2>
          </div>

          <div>
            <img
              src={userImage}
              alt="img"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
          </div>
        </div>

        <div>
          <Link to="/login">
            <AiOutlineLogout style={{ height: "30px", width: "30px" }} />
          </Link>
        </div>
      </div>

      <div className="patient-report-header">
        <h2>Patient Reports</h2>
        <button style={{ marginLeft:"600px" }}   onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Apply Filter" : "Apply Filter"}
        </button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative", marginRight: "10px" }}>
            <input
              type="text"
              placeholder="Search by Doctor Name/ Patient Name / Test Name"
              style={{
                height:"20px",
                padding: "5px 30px",
                borderRadius: "5px",
                width: "500px",
              }}
              value={filters.searchText}
              onChange={(e) =>
                setFilters({ ...filters, searchText: e.target.value })
              }
            />
            <div
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={handleSearch}
            >
              <AiOutlineSearch />
            </div>
          </div>
        </div>
      </div>

      {showFilters && (
        <div>
          <label>
            From Date:
            <input
              type="date"
              value={filters.fromDate}
              onChange={(e) =>
                setFilters({ ...filters, fromDate: e.target.value })
              }
            />
          </label>
          <label>
            To Date:
            <input
              type="date"
              value={filters.toDate}
              onChange={(e) =>
                setFilters({ ...filters, toDate: e.target.value })
              }
            />
          </label>
          <label>
            Refer by:
            <select
              value={filters.referredBy}
              onChange={(e) =>
                setFilters({ ...filters, referredBy: e.target.value })
              }
            >
              <option value="">Select...</option>
            </select>
          </label>
          <label>
            Patient Name:
            <input
              type="text"
              value={filters.patientName}
              onChange={(e) =>
                setFilters({ ...filters, patientName: e.target.value })
              }
            />
          </label>
          <label>
            Hospital ID:
            <input
              type="text"
              value={filters.hospitalId}
              onChange={(e) =>
                setFilters({ ...filters, hospitalId: e.target.value })
              }
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            />
          </label>
          <label>
            Bill No:
            <input
              type="text"
              value={filters.billNo}
              onChange={(e) =>
                setFilters({ ...filters, billNo: e.target.value })
              }
            />
          </label>
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      )}

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableRowStyle}>Order No.</th>
            <th style={tableRowStyle}>Date</th>
            <th style={tableRowStyle}>Patient Name</th>
            <th style={tableRowStyle}>Hospital ID</th>
            <th style={tableRowStyle}>Test Name</th>
            <th style={tableRowStyle}>Doctor Name</th>
            <th style={tableRowStyle}>ETA</th>
            <th style={tableRowStyle}>Status</th>
            <th style={tableRowStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} style={tableRowStyle}>
              <td>{item.order_id}</td>
              <td>{item.date}</td>
              <td>
                <div className="patient-name" title="Hover to view details">
                  {item.patient_name}
                  <div className="notice-box">
                    <p>{item.patient_name}</p>
                    <p>Age: {item.patient_details.age} Y</p>
                    <p>
                      Gender: {item.patient_details.gender ? "Male" : "Female"}
                    </p>
                    <p>Bill No: {item.bill_no}</p>
                    <p>Bill Date: {item.bill_date}</p>
                  </div>
                </div>
              </td>
              <td>{item.hospital_id}</td>
              <td>{item.test_name}</td>
              <td>{item.doctor}</td>
              <td>{item.eta}</td>
              <td>{item.status}</td>
              <td>
                <div style={{display:"flex" , justifyContent:"space-between"   }} >
                <div style={{marginLeft:"10px"}}
                  onClick={() => handleOpenReportPopup(item.patient_name)}
                >
                  <AiOutlineDownload />
                </div>
                {reportPopupVisible && (
                  <div
                    className="report-popup"
                    style={{
                      position: "fixed",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      margin: "auto",
                      width: "1370px",
                      height: "740px",
                      backgroundColor: "white",
                      border: "1px solid black",
                      borderRadius: "5px",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      className="report-header"
                      style={{
                        padding: "20px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <h3>Report Preview for Patient: {selectedPatientName}</h3>
                    </div>
                    <div
                      className="report-image"
                      style={{
                        width: "1000px",
                        height: "500px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={reportImage}
                        alt="Report Image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      className="report-footer"
                      style={{ textAlign: "right", padding: "20px" }}
                    >
                      <button
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          marginRight: "10px",
                        }}
                        onClick={() => handleDownloadReport(reportImage)}
                      >
                        Download
                      </button>

                      <button onClick={handleCloseReportPopup}>Close</button>
                    </div>
                  </div>
                )}
                <div onClick={() => handleOpenMessageModal(item.order_id)}>
                  <AiFillFileText />
                </div>



                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPageCount}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
