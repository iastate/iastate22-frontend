import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

export class EventCalendar {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    if (!!element) {
      this.element = element;
      this.init();
    }
  }

  private init() {
    let calendar = new Calendar(this.element, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "dayGridMonth",
      eventTimeFormat: {
        hour: "numeric",
        minute: "2-digit",
        meridiem: "short",
      }, // uppercase H for 24-hour clock
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,listWeek",
      },
    });
    calendar.render();
    calendar.addEvent({ title: "March 9th Event", start: "2023-03-09 15:00" });
    calendar.addEvent({ title: "March 16 Event", start: "2023-03-16", url: "https://idfive.com" });
    calendar.addEvent({ title: "April 12 Event", start: "2023-04-12 20:30", url: "https://idfive.com" });
    calendar.addEvent({ title: "Orioles Tickets! Orioles Tickets! Orioles Tickets!", start: "2023-04-19" });
    calendar.addEvent({ title: "Floating Holiday", start: "2023-04-21" });
  }
}

export default function calendarInit() {
  const calendars = document.querySelectorAll(".calendar") as NodeListOf<HTMLElement>;
  for (let i = 0; i < calendars.length; i++) {
    new EventCalendar(calendars[i]);
  }
}
