const filteredData = {
    data: [
      {
        bill_date: "2023-05-31",
        bill_no: "1133",
        date: "2023-05-26",
        doctor: "ANDERSON",
        eta: "2023-05-26 11:30:00",
        has_result: true,
        hospital_id: "890JKLO",
        is_eta_crossed: false,
        lab: "MediLab Diagnostics",
        order_id: 13947,
        orderline_id: 47049,
        order_ref: "A13682",
        patient_details: {
          age: 45,
          bill_date: "2023-05-31",
          bill_no: "1133",
          gender: false,
          patient_name: "SUSAN JOHNSON"
        },
        patient_name: "SUSAN JOHNSON",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124252,
            line_id: 47049
          }
        ],
        status: "Pending",
        test_name: "Cholesterol Test"
      },
      {
        bill_date: "2023-05-31",
        bill_no: "1133",
        date: "2023-05-26",
        doctor: "ANDERSON",
        eta: "2023-05-26 11:30:00",
        has_result: true,
        hospital_id: "890JKLO",
        is_eta_crossed: false,
        lab: "MediLab Diagnostics",
        order_id: 13947,
        orderline_id: 47049,
        order_ref: "A13682",
        patient_details: {
          age: 45,
          bill_date: "2023-05-31",
          bill_no: "1133",
          gender: false,
          patient_name: "SUSAN JOHNSON"
        },
        patient_name: "SUSAN JOHNSON",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124252,
            line_id: 47049
          }
        ],
        status: "Pending",
        test_name: "Cholesterol Test"
      },
      {
        bill_date: "2023-05-30",
        bill_no: "1124",
        date: "2023-05-25",
        doctor: "SMITH",
        eta: "2023-05-25 14:45:00",
        has_result: true,
        hospital_id: "789BCHI",
        is_eta_crossed: true,
        lab: "XYZ Diagnostics",
        order_id: 13938,
        orderline_id: 47040,
        order_ref: "A13673",
        patient_details: {
          age: 28,
          bill_date: "2023-05-30",
          bill_no: "1124",
          gender: true,
          patient_name: "MICHAEL BROWN"
        },
        patient_name: "MICHAEL BROWN",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124243,
            line_id: 47040
          }
        ],
        status: "Completed",
        test_name: "Blood Pressure Check"
      },
      {
        bill_date: "2023-05-30",
        bill_no: "1124",
        date: "2023-05-25",
        doctor: "SMITH",
        eta: "2023-05-25 14:45:00",
        has_result: true,
        hospital_id: "789BCHI",
        is_eta_crossed: true,
        lab: "XYZ Diagnostics",
        order_id: 13938,
        orderline_id: 47040,
        order_ref: "A13673",
        patient_details: {
          age: 28,
          bill_date: "2023-05-30",
          bill_no: "1124",
          gender: true,
          patient_name: "MICHAEL BROWN"
        },
        patient_name: "MICHAEL BROWN",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124243,
            line_id: 47040
          }
        ],
        status: "Completed",
        test_name: "Blood Pressure Check"
      },
      {
        bill_date: "2023-05-30",
        bill_no: "1124",
        date: "2023-05-25",
        doctor: "SMITH",
        eta: "2023-05-25 14:45:00",
        has_result: true,
        hospital_id: "789BCHI",
        is_eta_crossed: true,
        lab: "XYZ Diagnostics",
        order_id: 13938,
        orderline_id: 47040,
        order_ref: "A13673",
        patient_details: {
          age: 28,
          bill_date: "2023-05-30",
          bill_no: "1124",
          gender: true,
          patient_name: "MICHAEL BROWN"
        },
        patient_name: "MICHAEL BROWN",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124243,
            line_id: 47040
          }
        ],
        status: "Completed",
        test_name: "Blood Pressure Check"
      },
      {
        bill_date: "2023-05-30",
        bill_no: "1124",
        date: "2023-05-25",
        doctor: "SMITH",
        eta: "2023-05-25 14:45:00",
        has_result: true,
        hospital_id: "789BCHI",
        is_eta_crossed: true,
        lab: "XYZ Diagnostics",
        order_id: 13938,
        orderline_id: 47040,
        order_ref: "A13673",
        patient_details: {
          age: 28,
          bill_date: "2023-05-30",
          bill_no: "1124",
          gender: true,
          patient_name: "MICHAEL BROWN"
        },
        patient_name: "MICHAEL BROWN",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124243,
            line_id: 47040
          }
        ],
        status: "Completed",
        test_name: "Blood Pressure Check"
      },
      {
        bill_date: "2023-05-30",
        bill_no: "1124",
        date: "2023-05-25",
        doctor: "SMITH",
        eta: "2023-05-25 14:45:00",
        has_result: true,
        hospital_id: "789BCHI",
        is_eta_crossed: true,
        lab: "XYZ Diagnostics",
        order_id: 13938,
        orderline_id: 47040,
        order_ref: "A13673",
        patient_details: {
          age: 28,
          bill_date: "2023-05-30",
          bill_no: "1124",
          gender: true,
          patient_name: "MICHAEL BROWN"
        },
        patient_name: "MICHAEL BROWN",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124243,
            line_id: 47040
          }
        ],
        status: "Completed",
        test_name: "Blood Pressure Check"
      },
      {
        bill_date: "2023-05-30",
        bill_no: "1124",
        date: "2023-05-25",
        doctor: "SMITH",
        eta: "2023-05-25 14:45:00",
        has_result: true,
        hospital_id: "789BCHI",
        is_eta_crossed: true,
        lab: "XYZ Diagnostics",
        order_id: 13938,
        orderline_id: 47040,
        order_ref: "A13673",
        patient_details: {
          age: 28,
          bill_date: "2023-05-30",
          bill_no: "1124",
          gender: true,
          patient_name: "MICHAEL BROWN"
        },
        patient_name: "MICHAEL BROWN",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124243,
            line_id: 47040
          }
        ],
        status: "Completed",
        test_name: "Blood Pressure Check"
      },
      {
        bill_date: "2023-05-30",
        bill_no: "1124",
        date: "2023-05-25",
        doctor: "SMITH",
        eta: "2023-05-25 14:45:00",
        has_result: true,
        hospital_id: "789BCHI",
        is_eta_crossed: true,
        lab: "XYZ Diagnostics",
        order_id: 13938,
        orderline_id: 47040,
        order_ref: "A13673",
        patient_details: {
          age: 28,
          bill_date: "2023-05-30",
          bill_no: "1124",
          gender: true,
          patient_name: "MICHAEL BROWN"
        },
        patient_name: "MICHAEL BROWN",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124243,
            line_id: 47040
          }
        ],
        status: "Completed",
        test_name: "Blood Pressure Check"
      },
      // ... (more data entries)
  
      // Add 10 more data entries here...
  
      {
        bill_date: "2023-05-31",
        bill_no: "1133",
        date: "2023-05-26",
        doctor: "ANDERSON",
        eta: "2023-05-26 11:30:00",
        has_result: true,
        hospital_id: "890JKLO",
        is_eta_crossed: false,
        lab: "MediLab Diagnostics",
        order_id: 13947,
        orderline_id: 47049,
        order_ref: "A13682",
        patient_details: {
          age: 45,
          bill_date: "2023-05-31",
          bill_no: "1133",
          gender: false,
          patient_name: "SUSAN JOHNSON"
        },
        patient_name: "SUSAN JOHNSON",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124252,
            line_id: 47049
          }
        ],
        status: "Pending",
        test_name: "Cholesterol Test"
      },
      {
        bill_date: "2023-05-31",
        bill_no: "1133",
        date: "2023-05-26",
        doctor: "ANDERSON",
        eta: "2023-05-26 11:30:00",
        has_result: true,
        hospital_id: "890JKLO",
        is_eta_crossed: false,
        lab: "MediLab Diagnostics",
        order_id: 13947,
        orderline_id: 47049,
        order_ref: "A13682",
        patient_details: {
          age: 45,
          bill_date: "2023-05-31",
          bill_no: "1133",
          gender: false,
          patient_name: "SUSAN JOHNSON"
        },
        patient_name: "SUSAN JOHNSON",
        result: [
          {
            attachment: "https://www.example.com/sample.pdf",
            id: 124252,
            line_id: 47049
          }
        ],
        status: "Pending",
        test_name: "Cholesterol Test"
      },
    ],
    status: "Success"
  };
  
  export default filteredData;
  