# Device & Location Verification System

## Overview
This system sends an email verification when users login from a new device or location, requiring confirmation before allowing access.

## How It Works

### 1. Login Flow
- User enters domain → name → OTP
- System checks if device is trusted (based on user-agent + IP hash)

### 2. Trusted Device
- If device is recognized → Login succeeds immediately
- Device last used timestamp is updated

### 3. New Device
- If device is new → Verification email sent
- Email contains:
  - Device information (browser/OS)
  - IP address
  - Timestamp
  - Verification link (expires in 15 minutes)

### 4. Email Verification
- User clicks link in email
- Redirected to `/verify-login?token=xxx`
- Device is marked as trusted
- User is logged in automatically

## Files Modified

### Frontend
- `src/Login/Login.js` - Updated to handle verification response
- `src/Login/VerifyLogin.js` - New page for email verification
- `src/Pages/Utils/authService.js` - Added verifyDevice method
- `src/App.js` - Added /verify-login route

### Backend (Already Implemented)
- `routes/endpoints/Login.js` - Device verification logic
- `models/LoginVerification.js` - Stores pending verifications
- `models/TrustedDevice.js` - Stores trusted devices

## Configuration

### Backend (.env)
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your-jwt-secret-key
```

### Email Setup
1. Enable 2FA on your Gmail account
2. Generate an App Password
3. Update EMAIL_USER and EMAIL_PASS in .env

## Testing

1. Login from your current browser → Should work normally
2. Login from a different browser/device → Should receive verification email
3. Click verification link → Should login automatically
4. Login again from that device → Should work without verification

## Security Features
- Device fingerprinting (user-agent + IP hash)
- Verification links expire in 15 minutes
- Trusted devices tracked per user
- Email notifications for new device logins
