Project - At-It Landing Page 

React+Vite Project
npm install
npm run dev 

Backend 
- See requirements.txt for pip installs 
- backend is hosted on render , database on supabase , stmp on sendgrid 
- site is hosted on netlify , analytics on google analytics 
- env variables are on render , create a .env for local backend testing 
- api/send/email saves signup and sends a welcome email 
- rate limited to 5/min 100/hour per ip 
- blocks duplicate emails form the same email address