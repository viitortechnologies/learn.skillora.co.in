# learn.skillora.co.in

Skillora LMS modeled on the ClassX course marketplace layout, using Skillora branding and course information from [skillora.co.in](https://www.skillora.co.in/).

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

Sign in as admin and open **Upload** to replace lesson placeholders with your recordings. Checkout shows a payment-gateway placeholder until that phase.

## Notes

Uploaded videos are stored in `data/uploads/` (gitignored). Course catalog lives in `data/db.json` after first run.
