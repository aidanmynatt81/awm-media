// ============================================================
//  AWM MEDIA — SITE SETTINGS
//  This is the ONLY file you need to edit to update the site.
//  Change the text between the quotes, save, and upload.
// ============================================================

window.SITE = {
  name: "AWM Media",
  tagline: "Photo & video that tells your story.",
  location: "Based in your city — available to travel",
  email: "you@example.com",
  phone: "",                       // optional, e.g. "(555) 123-4567"
  instagram: "",                   // optional, e.g. "awmmedia"

  // ---------- PORTFOLIO ----------
  // Put photos in the "portfolio" folder, then list them here.
  photos: [
    { file: "portfolio/photo1.jpg", caption: "Wedding" },
    { file: "portfolio/photo2.jpg", caption: "Portrait" },
    { file: "portfolio/photo3.jpg", caption: "Event" },
    { file: "portfolio/photo4.jpg", caption: "Senior session" },
    { file: "portfolio/photo5.jpg", caption: "Concert" },
    { file: "portfolio/photo6.jpg", caption: "Family" },
  ],
  // Videos: paste the YouTube or Vimeo link.
  videos: [
    // { url: "https://www.youtube.com/watch?v=XXXXXXXXXXX", title: "Wedding highlight" },
  ],

  // ---------- SERVICES & PAYMENTS ----------
  // In Stripe, make a "Payment Link" for each item and paste it as "pay".
  // Leave "pay" empty and the button will say "Ask about booking" instead.
  services: [
    { name: "Portrait Session", price: "$150", details: "1 hour · 1 location · 30+ edited photos", pay: "" },
    { name: "Event Coverage",   price: "$300", details: "Up to 3 hours · edited photos · online delivery", pay: "" },
    { name: "Wedding Package",  price: "From $1,200", details: "Photo + video · highlight film · full gallery", pay: "" },
    { name: "Booking Deposit",  price: "$100", details: "Holds your date. Goes toward your total.", pay: "" },
  ],
  // Optional "pay any amount" link (Stripe lets customers type the amount).
  payAnyAmount: "",

  // ---------- SCHEDULE ----------
  // Your public Google Calendar's ID (see SETUP.md). Leave empty to hide the calendar.
  googleCalendarId: "",
  timeZone: "America/New_York",

  // ---------- CLIENT GALLERIES ----------
  // Don't type these by hand — use tools/new-client.html to make each line.
  // Each one is locked with the client's code, so nobody can read the links.
  galleries: [
  ],
};
