
# 📅 Events Platform — Assignment Submission

A simple events management platform built with Next.js, TailwindCSS, and Prisma (SQLite), allowing users to:

- View and search events
- Create new events (via form)
- Filter by title or date range

---

## 🚀 Features

- Event list with search by title
- Filter by date range
- Event creation form (admin interface)
- Prisma + SQLite local database
- Styled with Tailwind CSS

---

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Database**: Prisma ORM with SQLite
- **Styling**: Tailwind CSS
- **Runtime**: Node.js

---

## ⚙️ Setup Instructions

### 1. Clone this repo
```bash
git clone https://github.com/yourname/events-platform.git
cd events-platform
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Prisma and seed DB
```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### 4. Run the app locally
```bash
npm run dev
```

Visit `http://localhost:3000`

---

## 🧪 Sample Data

The database is seeded with 8+ diverse events including:

- Yoga Class
- Cooking Workshop
- Photography Walk
- Painting Class
- Tech Meetup
- City Tour
- Writing Workshop
- Music Jam Session

---

## ✅ How to Use

- 🧭 View homepage for a list of events
- 🔍 Use the search bar to filter by title
- 📆 Filter by date range using date pickers
- ➕ Click `+ Create New Event` to add a new one

---

## 🧪 Sample Inputs for Creating an Event

You can use the following inputs to test the form at `/events/new`:

```
Title: Yoga at Sunset
Description: Outdoor yoga class at the park
Datetime: 2025-07-15T18:30
Location: Park A
Capacity: 25
Price Per Person: 10
```

---

## 🧪 Test Core Flows

### ✅ Event List
- Navigate to `/`
- See a list of events sorted by datetime (newest first)

### ✅ Search by Title
- Type part of an event title in the search box
- The list filters instantly

### ✅ Filter by Date Range
- Use the date range pickers to set from and to
- Events update accordingly

### ✅ Create New Event
- Navigate to `/events/new` or click the "+ Create New Event" link
- Fill out the form with valid data
- On success, redirected to homepage and see the new event

---

## 📁 Folder Structure

```
prisma/
  └── schema.prisma
  └── seed.js
app/
  ├── page.tsx
  └── events/
      ├── new/page.tsx     # Event creation form
      └── [id]/page.tsx    # Event detail view
  └── api/
      └── events/
          ├── route.ts     # GET and POST API routes
          └── [id]/route.ts# GET/PUT/DELETE API for a specific event
lib/
  └── prisma.ts            # Prisma client init
```
