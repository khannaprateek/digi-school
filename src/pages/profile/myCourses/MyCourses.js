import React from "react";
import Admin from "../../admin/Admin";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import "./mycourse.css";

const MyCourses = () => {
  return (
    <div className="calender">
      <Admin />
      <FullCalendar
        height="500px"
        plugins={[dayGridPlugin, timeGridPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
      />
    </div>
  );
};

export default MyCourses;
