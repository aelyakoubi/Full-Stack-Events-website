# Security Measures

This project employs robust security measures, including:

- **Sentry**: for real-time error and performance monitoring.
  _Location:_ `backend/src/index.js`

- **HTTPS**: for production environment to protect against man-in-the-middle attacks.
  _Location:_ `backend/src/index.js`

- **Helmet**: to secure HTTP headers, mitigating XSS, content sniffing, and clickjacking.
  _Location:_ `backend/src/index.js`

- **General Rate Limiting & DDoS Protection**: to prevent abusive requests.
  _Location:_ `backend/src/index.js`

- **Login Limiting & DDoS Protection**: to prevent abusive requests.
  _Location:_ `backend/src/index.js`

- **CORS**: configured per environment to safeguard against CSRF attacks.
  _Location:_ `backend/src/index.js`

- **Bcrypt & Salting**: secure password hashing with a salt automatically added by bcrypt to enhance password security.
  _Location:_ `backend/src/services/users/createUser.js` & `backend/src/services/auth/login.js`

- **JSON Web Tokens (JWT)**: for secure user authentication.
  _Location:_ `backend/src/services/auth/login.js`

- **AUTH_SECRET_KEY**: safe for production use, recommended length 512 bits (64 bytes / 128 hex characters).
  _Location:_ stored in `.env` file, used in `backend/src/services/auth/login.js` and `backend/src/middleware/auth.js`

- **Input Validation & Sanitization**: to prevent SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF) attacks.
  _Location:_ validation applied in route handlers & service logic

- **Log Rotation with DailyRotateFile**: for efficient log management, rotating and compressing logs to prevent excessive disk usage and ensure long-term retention without impacting performance.
  _Location:_ `backend/src/utils/log.js`
