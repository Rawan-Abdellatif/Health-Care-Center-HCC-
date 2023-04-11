import { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmationBook from "./ConfirmationBook";
import { Link } from "react-router-dom";
const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [schedule, setSchedule] = useState(null);
  const [isWithinSchedule, setIsWithinSchedule] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { patientId } = useParams();
  const [isDateUnavailable, setIsDateUnavailable] = useState(false);

  // const { doctorId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/doctors")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        console.log("data.data", data.data);
        setDoctors(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedDoctorId) {
      fetch(`/api/doctors/${selectedDoctorId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("doctor data", data.data);
          setSchedule(data.data);
          setSelectedTime(data.data.day);
          // setUsername("");
          // setName("");
          // setPhone("");
          // setEmail("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedDoctorId]);

  useEffect(() => {
    if (schedule && selectedDate) {
      const inputDate = new Date(selectedDate);
      const startDate = new Date(schedule.schedule1["start-date"]).getTime();
      const endDate = new Date(schedule.schedule5["end-date"]).getTime();
      const selectedDay = inputDate.toLocaleDateString("en-US", {
        weekday: "long",
      });
      const availableDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ];
      setIsWithinSchedule(
        inputDate >= startDate &&
          inputDate <= endDate &&
          availableDays.includes(selectedDay)
      );
      if (!isWithinSchedule) {
        setIsDateUnavailable(true);
      } else {
        setIsDateUnavailable(false);
      }
    }
  }, [selectedDate, schedule]);

  const handleDoctorChange = (event) => {
    setSelectedDoctorId(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBook = (event) => {
    event.preventDefault();

    if (selectedTime && name && username && phone && email) {
      const body = {
        name,
        username,
        phone,
        email,
        patient_id: patientId,
        doctor_id: selectedDoctorId,
        date: selectedDate,
        hour: selectedTime,
        day: "Monday",
        reason_for_visit: "",
      };
      fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("response data", data);
          if (data) {
            // Save success message to local storage
            const successMessage =
              "your Appointment" +
              `Date: ${selectedDate}` +
              `Time: ${selectedTime}`;

            localStorage.setItem("successMessage", successMessage);
            // Redirect to confirmation page
            navigate(
              `/patients/${patientId}/appointment/confirmationBook/${data.data._id}`
            );
          }
        })
        .catch((error) => {
          console.error("Error booking appointment:", error);
          console.log("Error booking appointment. Please try again later.");
        });
    } else {
      console.log("Please fill all the required fields.");
    }
  };

  const handleConfirmationBook = () => {
    if (successMessage !== "") {
      return <ConfirmationBook message={successMessage} />;
    }
  };

  return (
    <>
      <Test>
        <Link to={`/login/patientsignin/${patientId}`}>
          <Button>Back to profile</Button>
        </Link>
      </Test>
      <Container onSubmit={handleBook}>
        <Text>BOOK APPOINTMENT</Text>
        <Main>
          <Label>
            Choose a doctor
            {doctors && doctors.length ? (
              <Select value={selectedDoctorId} onChange={handleDoctorChange}>
                <Option value="">Select a doctor...</Option>
                {doctors.map((doctor) => (
                  <Option key={doctor._id} value={doctor._id}>
                    {doctor.name}
                  </Option>
                ))}
              </Select>
            ) : (
              <p>Loading doctors...</p>
            )}
          </Label>
        </Main>
        <Main>
          {schedule && (
            <Label>
              Choose a date
              <DatePicker
                style={{
                  backgroundColor: "aliceblue",
                  height: "24px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  padding: "3px 10px",
                }}
                selected={selectedDate}
                onChange={handleDateChange}
                customInput={<CustomInput unavailable={isDateUnavailable} />}
                startDate={new Date(schedule.schedule1["start-date"])}
                endDate={new Date(schedule.schedule5["end-date"])}
                dateFormat="yyyy-MM-dd"
              />
            </Label>
          )}
        </Main>
        {isWithinSchedule && selectedDate && (
          <Label>
            Choose a time
            <Select
              value={selectedTime}
              onChange={(event) => setSelectedTime(event.target.value)}
            >
              <Option value="">Select a time...</Option>
              <Option value="10:00">10:00 AM</Option>

              <Option value="11:00">11:00 AM</Option>
              <Option value="12:00">12:00 PM</Option>
              <Option value="13:00">1:00 PM</Option>
              <Option value="14:00">2:00 PM</Option>
              <Option value="15:00">3:00 PM</Option>
              <Option value="16:00">4:00 PM</Option>
            </Select>
          </Label>
        )}
        {selectedTime && (
          <Div>
            <First>
              <Label>
                User Name
                <Input
                  type="text"
                  name="username"
                  onChange={handleUsernameChange}
                />
              </Label>
            </First>
            <Label>
              Name
              <Input type="text" name="name" onChange={handleNameChange} />
            </Label>

            <Label>
              Phone
              <Input type="text" name="phone" onChange={handlePhoneChange} />
            </Label>
            <Label>
              Email
              <Input type="email" name="email" onChange={handleEmailChange} />
            </Label>
            <Last>
              <Label>
                Reason for Visit
                <Textarea />
              </Label>
            </Last>
          </Div>
        )}{" "}
        <Button type="submit" onClick={handleConfirmationBook}>
          Book
        </Button>
      </Container>
    </>
  );
};
export default AppointmentForm;
const Test = styled.div`
  margin-top: 100px;
  margin-left: 1000px;
  width: 120px;
`;
const Container = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  width: 500px;
  text-align: center;
  margin-left: 300px;
  margin-bottom: 100px;
`;
const Text = styled.h3`
  font-weight: bold;
  font-size: 25px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
  font-size: 15px;
`;

const Input = styled.input`
  cursor: pointer;
  margin-left: 10px;
`;

const Select = styled.select`
  margin-left: 20px;
  width: 180px;
  cursor: pointer;
`;
const Option = styled.option`
  cursor: pointer;
`;
const Button = styled.button`
  border: 2px solid #007f4e;
  width: 150px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  color: #007f4e;
  &:hover {
    background-color: #007f4e;
    color: white;
  }
`;
const Textarea = styled.textarea`
  resize: none;
  width: 160px;
  height: 20px;
  padding-left: 5px;
`;
const Div = styled.div`
  margin-left: -30px;
`;
const First = styled.div`
  margin-left: -30px;
`;
const Last = styled.div`
  margin-left: -50px;
`;
const Label2 = styled.label`
  padding-right: 2px;
`;
const CustomInput = styled.input`
  background-color: ${(props) => (props.unavailable ? "red" : "white")};
`;
