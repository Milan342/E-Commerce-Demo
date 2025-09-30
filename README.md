# 🏡 Wanderlust - Modern E-commerce Platform

A beautifully designed, full-stack e-commerce platform for property rentals and travel experiences. Built with modern web technologies and featuring a responsive, user-friendly interface.

## 🌐 Live Demo

**[Visit Wanderlust](https://milan-delta-project.onrender.com/listings)**

---

## ✨ Key Features

### 🎨 **Modern UI/UX Design**

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth hover effects, transitions, and micro-interactions
- **Professional Styling**: Modern CSS with custom properties and consistent theming
- **Mobile-First Approach**: Horizontal scrollable filters and optimized mobile layouts

### 🏠 **Property Management**

- **Browse Listings**: Explore properties with beautiful card layouts
- **Detailed Views**: Comprehensive property information with image galleries
- **Category Filtering**: Interactive filter system with trending, rooms, mountains, etc.
- **Search Functionality**: Smart search with real-time filtering

### 👤 **User Authentication & Management**

- **Secure Authentication**: Sign up, login, and logout functionality
- **User Profiles**: Personalized user dashboards
- **Property Ownership**: Users can list and manage their own properties
- **Authorization Controls**: Protected routes and user-specific actions

### ⭐ **Review & Rating System**

- **5-Star Rating**: Interactive star rating system using Starability
- **User Reviews**: Comment and rate experiences
- **Review Management**: Edit and delete review capabilities
- **Visual Rating Display**: Beautiful star representations

### 📱 **Enhanced Mobile Experience**

- **Horizontal Filter Scrolling**: No more vertical space issues on mobile
- **Responsive Cards**: Properly sized content on all screen sizes
- **Touch-Friendly**: Optimized for mobile interactions
- **Smart Navigation**: Auto-hiding navbar on scroll

---

## 🛠️ Technology Stack

### **Backend**

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **Express-Session** - Session management

### **Frontend**

- **EJS** - Embedded JavaScript templating
- **Bootstrap 5** - CSS framework for responsive design
- **Custom CSS** - Modern styling with CSS custom properties
- **Vanilla JavaScript** - Interactive client-side functionality
- **Font Awesome** - Icon library
- **Google Fonts (Inter)** - Modern typography

### **Cloud Services**

- **Cloudinary** - Image upload and management
- **MongoDB Atlas** - Database hosting
- **Render** - Application deployment

### **Development Tools**

- **Git** - Version control
- **npm** - Package management
- **Environment Variables** - Configuration management

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account for image uploads

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/Milan342/Project.git
   cd E-commerce_Website_demo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret_key
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. **Initialize Database**

   ```bash
   node init/index.js
   ```

5. **Start the Application**

   ```bash
   node app.js
   ```

6. **Access the Application**
   Open your browser and navigate to `http://localhost:8080/listings`

---

## 📁 Project Structure

```
├── app.js                    # Main application file
├── middleware.js             # Custom middleware functions
├── cloudConfig.js           # Cloudinary configuration
├── schema.js                # Joi validation schemas
├── controllers/             # Route controllers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/                  # Database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/                  # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/                   # EJS templates
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
├── public/                  # Static assets
│   ├── css/
│   ├── js/
│   └── favicon.ico
├── init/                    # Database initialization
│   ├── data.js
│   └── index.js
└── utils/                   # Utility functions
    ├── ExpressError.js
    └── wrapAsync.js
```

---

## 🎯 Core Functionality

### **Property Listings**

- Browse all available properties
- View detailed property information
- Interactive image galleries
- Location and pricing details
- Owner information display

### **User Management**

- User registration and authentication
- Profile management
- Property ownership tracking
- Session management

### **Review System**

- Leave reviews for properties
- Rate experiences (1-5 stars)
- View all property reviews
- Manage personal reviews

### **Responsive Design**

- Mobile-optimized interface
- Tablet-friendly layouts
- Desktop-enhanced experience
- Cross-browser compatibility

---

## 🔧 API Endpoints

### **Listings**

- `GET /listings` - View all listings
- `GET /listings/new` - Show create listing form
- `POST /listings` - Create new listing
- `GET /listings/:id` - Show specific listing
- `GET /listings/:id/edit` - Show edit form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### **Reviews**

- `POST /listings/:id/reviews` - Add review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### **Authentication**

- `GET /signup` - Show signup form
- `POST /signup` - Register new user
- `GET /login` - Show login form
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

---

## 🎨 Design Features

### **Visual Enhancements**

- ✅ Modern color scheme with CSS custom properties
- ✅ Smooth animations and transitions
- ✅ Interactive hover effects
- ✅ Professional typography with Google Fonts
- ✅ Consistent spacing and layout

### **User Experience**

- ✅ Intuitive navigation
- ✅ Loading animations
- ✅ Error handling and validation
- ✅ Success/error notifications
- ✅ Responsive image handling

### **Mobile Optimizations**

- ✅ Horizontal scrollable filters
- ✅ Touch-friendly interfaces
- ✅ Optimized image sizes
- ✅ Responsive text and spacing
- ✅ Mobile-first navigation

---

## 🔒 Security Features

- **Input Validation**: Joi schema validation
- **Authentication**: Passport.js with sessions
- **Authorization**: Route-level access control
- **XSS Protection**: Input sanitization
- **CSRF Protection**: Built-in Express protections
- **Environment Variables**: Secure configuration management

---

## 🌟 Recent Enhancements

### **Version 2.0 Features**

- ✅ Complete UI/UX redesign with modern aesthetics
- ✅ Enhanced mobile responsiveness
- ✅ Interactive filter system with horizontal scrolling
- ✅ Improved property detail pages
- ✅ Professional navigation and footer
- ✅ Advanced CSS animations and transitions
- ✅ Optimized performance and loading times

---

## 🚀 Deployment

### **Render Deployment**

1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy automatically on git push

### **Environment Variables for Production**

```env
NODE_ENV=production
ATLASDB_URL=your_production_mongodb_url
SECRET=your_strong_production_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Bootstrap Team** for the responsive framework
- **MongoDB Team** for the excellent database solution
- **Cloudinary** for image management services
- **Font Awesome** for beautiful icons
- **Google Fonts** for typography
- **Open Source Community** for continuous inspiration

---

## 📞 Contact

**Milan Bastola**

- GitHub: [@Milan342](https://github.com/Milan342)
- Project Link: [https://github.com/Milan342/Project](https://github.com/Milan342/Project)
- Live Demo: [https://milan-delta-project.onrender.com/listings](https://milan-delta-project.onrender.com/listings)

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Milan342/Project)
![GitHub stars](https://img.shields.io/github/stars/Milan342/Project?style=social)
![GitHub forks](https://img.shields.io/github/forks/Milan342/Project?style=social)

---

**⭐ Star this repository if you found it helpful!**
