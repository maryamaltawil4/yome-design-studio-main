# Gemini AI Setup Guide

## 🚀 How to Configure Gemini AI for Yome Design Studio

### Step 1: Get Your Gemini API Key

1. **Visit Google AI Studio**: Go to [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

2. **Sign In**: Use your Google account to sign in

3. **Create API Key**: 
   - Click "Create API Key"
   - Select "Create API key in new project" or choose an existing project
   - Copy the generated API key (it will look like: `AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

### Step 2: Configure Your Environment

1. **Open the `.env` file** in your project root directory

2. **Replace the placeholder** with your actual API key:
   ```
   VITE_GEMINI_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

3. **Save the file**

### Step 3: Restart Your Development Server

1. **Stop the current server** (Ctrl+C in terminal)

2. **Start the server again**:
   ```bash
   npm run dev
   ```

### Step 4: Verify Configuration

1. **Open the Design Studio** in your browser
2. **Go to the AI tab** in the left sidebar
3. **Check the status indicator**:
   - ✅ **Green dot**: "Gemini AI Connected" - You're all set!
   - ⚠️ **Yellow warning**: "Gemini AI Not Configured" - Check your API key

### 🎯 Testing Gemini AI

Once configured, try these prompts:
- "mountain sunset with purple sky"
- "abstract geometric pattern in neon colors"
- "minimalist cat silhouette"
- "vintage coffee shop logo"
- "space galaxy with bright stars"

### 🔧 Troubleshooting

**If you see "Gemini AI Not Configured":**
1. Check that your `.env` file is in the project root
2. Verify the API key is correct (no extra spaces)
3. Restart your development server
4. Make sure the variable name is exactly `VITE_GEMINI_API_KEY`

**If you get API errors:**
1. Verify your API key is valid
2. Check your Google AI Studio quota
3. Ensure you have internet connection

### 💡 Benefits of Gemini AI

- **Smarter Image Selection**: AI understands your descriptions better
- **Enhanced Prompts**: Automatically improves your prompts for better results
- **Product-Aware**: Considers the selected product when generating descriptions
- **Apparel-Optimized**: Focuses on designs perfect for printing

### 🔒 Security Note

Never commit your `.env` file to version control. The `.env` file is already in `.gitignore` to protect your API key.
