const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function main() {

  await prisma.event.deleteMany()

  await prisma.event.createMany({
    data: [
      {
        title: "Yoga Class",
        description: "Relax and stretch in a peaceful environment.",
        datetime: new Date("2025-07-10T10:00:00"),
        location: "Studio A",
        capacity: 20,
        price_per_person: 15
      },
      {
        title: "Cooking Workshop",
        description: "Master the art of Italian pasta making.",
        datetime: new Date("2025-07-12T17:00:00"),
        location: "Kitchen Lab",
        capacity: 12,
        price_per_person: 30
      },
      {
        title: "Photography Tour",
        description: "Capture stunning cityscapes on this guided walk.",
        datetime: new Date("2025-07-15T08:30:00"),
        location: "Downtown",
        capacity: 15,
        price_per_person: 20
      },
      {
        title: "Watercolor Painting",
        description: "Explore watercolor basics with a local artist.",
        datetime: new Date("2025-07-18T14:00:00"),
        location: "Art Room",
        capacity: 10,
        price_per_person: 25
      },
      {
        title: "Salsa Dance Night",
        description: "Learn to dance salsa with live music.",
        datetime: new Date("2025-07-20T19:00:00"),
        location: "Event Hall B",
        capacity: 30,
        price_per_person: 18
      },
      {
        title: "Coding Bootcamp",
        description: "Intro to web development with HTML, CSS, JS.",
        datetime: new Date("2025-07-22T09:00:00"),
        location: "Tech Hub",
        capacity: 25,
        price_per_person: 50
      },
      {
        title: "Coffee Tasting",
        description: "Discover flavors from around the world.",
        datetime: new Date("2025-07-24T11:00:00"),
        location: "Brew Lounge",
        capacity: 18,
        price_per_person: 12
      },
      {
        title: "Mindfulness Workshop",
        description: "Practice guided meditation and breathing techniques.",
        datetime: new Date("2025-07-26T16:00:00"),
        location: "Wellness Room",
        capacity: 20,
        price_per_person: 10
      }
    ]
  })

  console.log("✅ Seeded 8 events successfully.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())


