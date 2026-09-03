# learn.skillora.co.in

Skillora learning site with courses, e-books, blogs, and WhatsApp enrollment.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Accounts

| Role | Email | Password |
| --- | --- | --- |
| Instructor (upload videos) | admin@skillora.co.in | Skillora@Admin |
| Demo student | student@skillora.co.in | Student@123 |

Buy Now / Enroll Now / Contact open WhatsApp to **+91 99662 82831** with the course or book name.

Video uploads from admin are stored in `data/uploads/` on a local server. Vercel has no durable disk, so catalog pages use in-memory seed data in production.
