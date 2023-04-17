import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";

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
      eventMouseEnter: function(nfo) {
        console.log(nfo);
        console.log(nfo.event.extendedProps);
      },
      eventContent: (arg) => {
        console.log("// Arg");
        console.log(arg);
        let arrayOfDomNodes = [this.buildEventDOM(arg)];
        return { domNodes: arrayOfDomNodes };
      },
      viewDidMount: (arg) => {
        console.log("// View Change");
        console.log(arg.view.type);
      },
    });
    calendar.render();
    calendar.addEvent({
      title: "March 9th Event",
      start: "2023-03-09 15:00",
      resourceId: "1",
      location: "University Library front lobby",
      interactive: true,
    });
    calendar.addEvent({
      title: "March 16 Event",
      start: "2023-03-16",
      resourceId: "2",
      location: "Memorial Union Art Gallery",
      interactive: true,
      url: "https://idfive.com",
    });
    calendar.addEvent({
      title: "April 12 Event",
      start: "2023-04-12 20:30",
      resourceId: "3",
      url: "https://idfive.com",
      location: "Parts Unknown",
      interactive: true,
    });
    calendar.addEvent({
      title: "Orioles Tickets! Orioles Tickets! Orioles Tickets!",
      resourceId: "4",
      start: "2023-04-19",
      location: "Oriole Park at Camden Yards",
      interactive: true,
    });
    calendar.addEvent({
      title: "Floating Holiday",
      start: "2023-04-21",
      resourceId: "5",
      description: "I'm off. What? There ain't no more to it!",
      location: "Unknown",
      interactive: true,
    });
  }

  private buildEventDOM(arg) {
    this.buildDate(arg.event.startStr);
    this.buildTime(arg.event.startStr);
    let contentArea = document.createElement("div");
    contentArea.classList.add("event-listing");
    contentArea.innerHTML +=
      "<div class='event-listing__image'><img src='http://placekitten.com/200/300' alt='placekitteh'/></div>";
    contentArea.innerHTML += "<div class='event-listing__content'></div>";
    let contentBlock = contentArea.querySelector(".event-listing__content");
    contentBlock.innerHTML += "<h4 class='event-listing__title'>" + arg.event.title + "</h4>";
    contentBlock.innerHTML +=
      "<time datetime ='" +
      arg.event.startStr +
      "' class='event-listing__date'><div class='event-listing__full-date'>" +
      this.buildDate(arg.event.startStr) +
      "</div><div class='event-listing__time'>" +
      this.buildTime(arg.event.startStr) +
      "</div></time>";
    if (arg.event.extendedProps.location) {
      contentBlock.innerHTML += "<div class='event-listing__location'>" + arg.event.extendedProps.location + "</div>";
    }
    if (arg.event.extendedProps.description) {
      contentBlock.innerHTML += "<div class=''>" + arg.event.extendedProps.description + "</div>";
    }
    return contentArea;
  }

  private buildDate(dte) {
    let formattedDate = formatDate(dte, {
      month: "long",
      year: "numeric",
      day: "numeric",
      hour12: true,
    });
    console.log("formatted Date:");
    console.log(formattedDate);
    return formattedDate;
  }

  private buildTime(dte) {
    let formattedTime = formatDate(dte, {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
    });
    console.log("formatted Time:");
    console.log(formattedTime);
    return formattedTime;
  }
}

export default function calendarInit() {
  const calendars = document.querySelectorAll(".calendar") as NodeListOf<HTMLElement>;
  for (let i = 0; i < calendars.length; i++) {
    new EventCalendar(calendars[i]);
  }
}
