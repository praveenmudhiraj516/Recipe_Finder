# 🍳 Recipe Finder App

A React.js web application that allows users to search for recipes by ingredient or dish name using **TheMealDB API**. It features JWT-based login authentication, protected routes, persistent search history, and a full meal details page with ingredients and step-by-step instructions.

---

## 🔗 Live Demo

> _Add your deployed link here (Netlify / Vercel / GitHub Pages)_

---

## 📸 Screenshots

| Login Page | Home Page | Meal Details |
|------------|-----------|--------------|
| _Add screenshot_ | _Add screenshot_ | _Add screenshot_ |

---

## ✨ Features

- 🔐 **JWT Authentication** — Login with username & password, token stored as a cookie
- 🛡️ **Protected Routes** — Home and Meal Details pages are accessible only after login
- 🔍 **Recipe Search** — Search by dish name or ingredient using TheMealDB API
- ⚡ **Quick Category Buttons** — One-click search for Chicken, Pasta, Beef, Salad, Soup, Chocolate
- 💾 **Persistent Search** — Last search and results saved to localStorage (survives page refresh)
- 📋 **Meal Details Page** — Full ingredients list, step-by-step instructions, and YouTube tutorial link
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🔄 **Loading Spinner** — Shown while API data is being fetched

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | UI component library |
| React Router DOM | Client-side routing & navigation |
| TheMealDB API | Free recipe data API |
| js-cookie | Read/write JWT token in browser cookies |
| react-spinners | Animated loading indicators |
| react-icons | Icon library (arrows, clock, people) |
| localStorage | Persist search state across sessions |
| CSS3 | Responsive styling with Flexbox & Grid |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Home/
│   │   ├── index.js        # Main search page
│   │   └── index.css
│   ├── LoginForm/
│   │   ├── index.js        # Login page with JWT auth
│   │   └── index.css
│   ├── MealCard/
│   │   ├── index.js        # Single recipe card component
│   │   └── index.css
│   ├── MealDetailsCard/
│   │   ├── index.js        # Full recipe details page
│   │   └── index.css
│   ├── ProtectedRoute/
│   │   └── index.js        # Auth guard for private routes
│   └── NotFound/
│       ├── index.js        # 404 page
│       └── index.css
└── App.js                  # Route definitions
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/recipe-finder-app.git
```

2. **Navigate into the project folder**

```bash
cd recipe-finder-app
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Login Credentials

This app uses the **CCBP login API** for authentication. Use the following credentials to log in:

```
Username: rahul
Password: rahul@2021
```

> The JWT token is saved as a cookie for 30 days. You will stay logged in until you click Logout.

---

## 🌐 API Reference

### Login API
```
POST https://apis.ccbp.in/login
Body: { "username": "rahul", "password": "rahul@2021" }
```

### Search Recipes
```
GET https://www.themealdb.com/api/json/v1/1/search.php?s={searchTerm}
```

### Get Meal by ID
```
GET https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}
```

---

## 🗺️ App Routes

| Route | Component | Access |
|-------|-----------|--------|
| `/login` | LoginForm | Public |
| `/` | Home | Protected (login required) |
| `/meal/:mealId` | MealDetailsCard | Protected (login required) |
| `*` | NotFound | Public (404 fallback) |

---

## 🧠 Key Implementation Details

### Authentication Flow
- User logs in → API returns JWT token → saved in cookie (30 days)
- Every protected page is wrapped in `<ProtectedRoute>` which checks for the cookie
- On logout → cookie removed, localStorage cleared → redirected to `/login`

### Search Flow
- Two separate states: `inputValue` (live typing) and `searchText` (confirmed search)
- API fetch is triggered only when `searchText` changes — not on every keystroke
- Results saved to `localStorage` so they persist on page refresh

### Ingredients Parsing
- TheMealDB API stores ingredients as `strIngredient1` to `strIngredient20`
- A `for` loop reads each property using bracket notation and skips empty ones

### Instructions Formatting
- Raw instructions arrive as one large text block
- Split by `'.'` so each sentence renders as its own styled paragraph

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x",
  "js-cookie": "^3.x",
  "react-spinners": "^0.x",
  "react-icons": "^4.x"
}
```

---

## 🚀 Deployment

### Deploy to Netlify

```bash
npm run build
```
Then drag and drop the `build/` folder into [Netlify Drop](https://app.netlify.com/drop).

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

---

## 🙋 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ using React.js and TheMealDB API
