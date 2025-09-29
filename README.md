# 🍽️ Feasto - Modern Food Delivery App

A full-stack food delivery application with a beautiful UI, real-time cart functionality, and comprehensive admin panel. Built with modern technologies for optimal performance and user experience.

![Feasto Logo](https://img.shields.io/badge/Feasto-Food%20Delivery-orange?style=for-the-badge)

## ✨ Features

### 🎯 User Features
- **User Authentication** - Secure login/registration with JWT
- **Food Browsing** - Browse menu by categories (Salad, Rolls, Deserts, etc.)
- **Real-time Cart** - Add/remove items with live cart updates
- **Order Management** - Place orders and track order history
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Modern UI** - Beautiful gradient design with smooth animations

### 👨‍💼 Admin Features
- **Admin Dashboard** - Complete restaurant management system
- **Food Management** - Add, edit, and delete food items
- **Order Tracking** - View and manage customer orders
- **Image Upload** - Upload food images with preview
- **Real-time Updates** - Live order notifications

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with gradients and animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling

### Admin Panel
- **React 18** - Admin interface
- **Vite** - Build tool
- **Axios** - API communication

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/feasto-food-delivery.git
cd feasto-food-delivery
```

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../backend
npm install
```

4. **Install Admin Dependencies**
```bash
cd ../admin
npm install
```

### Configuration

1. **Backend Environment Setup**
```bash
cd backend
# Create .env file
touch .env
```

Add to `.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
SALT=10
```

2. **Database Setup**
- Create MongoDB database named `test`
- Collections will be created automatically:
  - `users` - User accounts
  - `foods` - Food items
  - `orders` - Order records

### Running the Application

1. **Start Backend Server**
```bash
cd backend
npm start
```
Server runs on: `http://localhost:5000`

2. **Start Frontend**
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

3. **Start Admin Panel**
```bash
cd admin
npm run dev
```
Admin runs on: `http://localhost:5174`

## 📱 Usage

### For Users
1. **Register/Login** - Create account or sign in
2. **Browse Menu** - Explore food categories
3. **Add to Cart** - Click "+" to add items
4. **Place Order** - Proceed to checkout
5. **Track Orders** - View order history in profile

### For Admins
1. **Admin Login** - Use admin credentials
2. **Add Food Items** - Upload images and details
3. **Manage Orders** - View and update order status
4. **Monitor Sales** - Track restaurant performance

## 🗂️ Project Structure

```
feasto-food-delivery/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context
│   │   └── assets/         # Images and videos
│   └── package.json
├── backend/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── server.js          # Main server file
├── admin/                  # Admin panel
│   ├── src/
│   │   ├── components/    # Admin components
│   │   └── pages/         # Admin pages
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/user/login` - User login
- `POST /api/user/register` - User registration

### Food Management
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `POST /api/food/upload` - Upload food image

### Cart & Orders
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get cart items
- `POST /api/order/place` - Place new order
- `GET /api/order/list` - Get user orders

## 🎨 Customization

### Changing Brand Colors
Update CSS variables in `frontend/src/index.css`:
```css
:root {
  --primary-color: #FF6B35;
  --secondary-color: #FFB86B;
  --accent-color: #tomato;
}
```

### Adding New Food Categories
1. Update `frontend/src/components/ExploreMenu/ExploreMenu.jsx`
2. Add category to food items in database
3. Update category filtering logic

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Render/Heroku)
```bash
cd backend
# Add build script to package.json
npm start
```

### Database
- Use MongoDB Atlas for cloud database
- Update connection string in production

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tanay** - Full Stack Developer
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: tanayy07@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the flexible database
- All open-source contributors

---

⭐ **Star this repository if you found it helpful!**