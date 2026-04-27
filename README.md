# COPA Learning Platform (Beginner-Friendly + Professional)

## 1) Full Folder Structure

```txt
copa-platform/
  ├── index.html
  ├── courses.html
  ├── lesson.html
  ├── quiz.html
  ├── assignment.html
  ├── login.html
  ├── dashboard.html
  ├── css/
  │   └── style.css
  ├── js/
  │   ├── main.js
  │   ├── courses.js
  │   ├── lesson.js
  │   ├── quiz.js
  │   ├── assignment.js
  │   ├── auth.js
  │   └── dashboard.js
  ├── data/
  │   ├── roadmap.json
  │   └── topics.json
  └── backend/
      ├── server.js
      └── package.json
```

## 2) Features Implemented

- ✅ Home page with intro, benefits, CTA, and pricing cards.
- ✅ 30-day roadmap page.
- ✅ Dynamic lesson page (topic selector + detailed content).
- ✅ Interactive quiz page (5 MCQ per topic + instant score).
- ✅ Assignment page (topic task + submission UI).
- ✅ Login/Register UI using localStorage.
- ✅ Student dashboard with progress tracking.
- ✅ Mobile responsive, clean blue/white UI.

## 3) Course Content Coverage

### Topics Covered (with explanation + key points + example + 5 MCQ + assignment):
1. Types of Safety  
2. Computer Fundamentals  
3. Input/Output Devices  
4. Operating System  
5. Internet & Networking  
6. Gmail Introduction  
7. MS Word  
8. MS Excel  
9. MS PowerPoint  
10. Google Forms  
11. Spreadsheet Concepts  
12. C Language  
13. Python  
14. Java  
15. DBMS  
16. SQL  
17. HTML  
18. CSS  
19. JavaScript

> All topic content is available in `copa-platform/data/topics.json` (Hindi + English mix).

## 4) Interactive Quiz System

- Select any topic on `quiz.html`.
- Each topic loads 5 MCQs.
- On submit:
  - Score shown instantly.
  - Topic completion + score stored in localStorage.

## 5) Assignment Workflow

- Open `assignment.html`.
- Select topic.
- Assignment prompt loads from JSON data.
- Student writes submission and clicks submit.
- Submission saved in localStorage with timestamp.

## 6) Basic Authentication UI

- `login.html` includes both Register + Login.
- Uses localStorage (`users`, `currentUser`) for beginner demo.
- On successful login, redirects to dashboard.

## 7) Dashboard Progress Tracking

- Shows:
  - Logged-in user
  - Topics completed
  - Average quiz score
  - Total assignments submitted
  - Progress bar (%)

## 8) Monetization System

### Free vs Paid Model
- **Free (₹0):** Day 1–7 content + limited quizzes.
- **Starter (₹49):** Full theory + quiz.
- **Pro (₹99):** Theory + quiz + assignments + notes.
- **Job Ready (₹199):** All access + certificate + project review.

### Certificate System Idea
- Criteria:
  1. At least 80% topic completion
  2. Average quiz score 60%+
  3. Final project submission
- Generate downloadable certificate (future upgrade: PDF auto-generation).

### Strategy to Get First 100 Users
1. Run WhatsApp batch campaign in ITI groups (daily tips + free day access).
2. Offer 3 free live demo classes (Zoom/Meet).
3. Use referral offer: Invite 2 friends and unlock Pro for 7 days.
4. Share student mini projects on Instagram/Reels.
5. Partner with 2 local ITI trainers for pilot batch.

## 9) Bonus Section

### Mini Project Idea
**Student Result Manager**
- Create HTML form for name/marks
- Use JavaScript to calculate total + percentage
- Store entries in localStorage
- Show table with pass/fail status

### Final Project Idea (Website Build)
**“My ITI Portfolio Website”**
- Multi-page personal website
- Home, About, Skills, Projects, Contact
- Responsive design with CSS
- JavaScript form validation + dynamic project list

### Certificate Text Format (Sample)

```txt
Certificate of Completion

This is to certify that [Student Name]
has successfully completed the
“COPA Learning Platform – 30 Day Skill Program”
covering Computer Fundamentals, Office Tools,
Programming Basics, and Web Development.

Completion Date: [DD/MM/YYYY]
Grade: [A/B/C]
Instructor: [Name]
Platform: COPA Learning Platform
```

## 10) Step-by-Step Setup Guide

### Option A: Direct Static Run
1. Download/open project folder.
2. Open `copa-platform/index.html` in browser.
3. Navigate all pages from menu.

### Option B: Run with Basic Node Backend (recommended)
1. Open terminal in project root.
2. Run:
   ```bash
   cd copa-platform/backend
   npm install
   npm start
   ```
3. Open: `http://localhost:3000`

## 11) Notes for Beginners

- Data is in JSON so content update is very easy.
- UI is plain HTML/CSS/JS (no complex framework).
- You can add future features: admin panel, real login DB, online payments, PDF certificate.
