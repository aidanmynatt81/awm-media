# AWM Media website — setup guide

Everything you change lives in **`config.js`**. Open it in TextEdit (or any text editor), change the words between the quotes, and save.

What's in the folder:

| File | What it is |
|---|---|
| `index.html` | The main site: portfolio, pricing/pay buttons, schedule, contact |
| `gallery.html` | Client Gallery page where clients type their code |
| `tools/new-client.html` | **Your** tool for adding a client's gallery (not linked anywhere on the site) |
| `config.js` | All your settings |
| `portfolio/` | Drop your portfolio photos here |

---

## 1. Put it online for free (Netlify)

You get a free address like **awm-media.netlify.app** — no domain to buy.

1. Go to **app.netlify.com/drop** and sign up (free).
2. Drag the whole `photo-site` folder onto the page. In a few seconds it's live.
3. Go to **Site configuration → Change site name** and type `awm-media`.
4. **To update later:** open your site in Netlify → **Deploys** tab → drag the folder onto it again.

(If you ever buy a domain like awmmedia.com, Netlify can connect it later — nothing else changes.)

## 2. Add your portfolio

1. Export your best photos as JPGs about 2000px wide (keeps the site fast).
2. Put them in the `portfolio` folder.
3. In `config.js`, under `photos`, list each file name and a caption.
4. For videos, upload to YouTube or Vimeo and paste the link under `videos`.

## 3. Take payments (Stripe)

1. Sign up at **stripe.com** and connect your bank account. (Free; Stripe keeps about 2.9% + 30¢ per payment.)
2. In Stripe go to **Payment Links → + New**. Make one for each package (e.g. "Portrait Session — $150", "Booking Deposit — $100").
3. Copy each link and paste it into `pay: ""` for that service in `config.js`.
4. Optional: make a link with **"Let customers choose what to pay"** turned on, and paste it into `payAnyAmount` — handy for invoices and balances.

Stripe emails you a receipt every time someone pays. Cards, Apple Pay and Google Pay all work.

## 4. Show your schedule (Google Calendar)

1. In Google Calendar on a computer, click **+** next to "Other calendars" → **Create new calendar** → name it "AWM Media Schedule".
2. Open that calendar's **Settings → Access permissions** → check **Make available to public**.
   Tip: pick **"See only free/busy"** if you'd rather show "Busy" than event names.
3. Scroll to **Integrate calendar** and copy the **Calendar ID** (looks like `abc123@group.calendar.google.com`).
4. Paste it into `googleCalendarId` in `config.js`.

From then on, just add events to that calendar from your phone — the site updates by itself.

## 5. Deliver photos & videos to clients

1. In Google Drive, make a folder for the client and upload their files.
2. **Share → General access → "Anyone with the link" (Viewer) → Copy link.**
3. Open `tools/new-client.html` (on your live site: `awm-media.netlify.app/tools/new-client.html`).
4. Enter the client's name, the Drive link, and an access code you make up (like `smith2026`). Click **Make it**.
5. Copy the line it gives you and paste it inside `galleries: [ ]` in `config.js`. Save and re-upload.
6. Send the client the one-click link it shows, or the gallery page plus their code.

**Why the extra step?** Anyone can view a website's files, so the Drive links are scrambled with the client's code. Without the code, nobody can find a client's photos — not even by reading the site's files.

To remove a gallery later, delete its two lines from `config.js` (and/or turn off sharing on the Drive folder).

## 6. Contact info

Fill in `email`, `phone`, and `instagram` in `config.js`. The contact form opens the visitor's email app with a message already written to you.
