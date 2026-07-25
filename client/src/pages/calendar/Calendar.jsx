import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";
import {
    format,
    parse,
    startOfWeek,
    getDay
} from "date-fns";

import { enUS } from "date-fns/locale";

import toast from "react-hot-toast";

import { getCalendarApplications } from "../../api/calendarApi";

const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

function CalendarPage() {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        let ignore = false;

        async function fetchApplications() {

            try {

                const response = await getCalendarApplications();

                if (ignore) return;

                const calendarEvents = response.data.map((application) => ({

                    id: application._id,

                    title: `${application.company} (${application.status})`,

                    start: new Date(application.dateApplied),

                    end: new Date(application.dateApplied),

                    allDay: true,

                    company: application.company,

                    position: application.position,

                    status: application.status,

                }));

                setEvents(calendarEvents);

            } catch {

                if (!ignore) {

                    toast.error("Failed to load applications");

                }

            }

        }

        fetchApplications();

        return () => {

            ignore = true;

        };

    }, []);



    const eventStyleGetter = (event) => {

    let backgroundColor;

    switch (event.status) {

        case "Interview":
            backgroundColor = "#f59e0b";
            break;

        case "Offer":
            backgroundColor = "#10b981";
            break;

        case "Rejected":
            backgroundColor = "#ef4444";
            break;

        default:
            backgroundColor = "#3b82f6";
    }

    return {

        style: {

            backgroundColor,

            color: "#fff",

            border: "none",

            borderRadius: "8px",

            padding: "3px",

        },

    };

};


    return (

        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">

                Calendar

            </h1>

            <div
                className="bg-white rounded-xl shadow-lg p-4"
                style={{ height: "700px" }}
            >

                <Calendar

                    localizer={localizer}

                    events={events}

                    startAccessor="start"

                    endAccessor="end"

                    popup

                    selectable

                    eventPropGetter={eventStyleGetter}

                    onSelectEvent={(event) => {

                        toast.success(

                            `${event.company}
${event.position}
${event.status}`

                        );

                    }}

                />

            </div>

        </div>

    );

}

export default CalendarPage;