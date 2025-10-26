# Yome Design Studio

A powerful design studio for creating custom apparel designs with AI-powered image generation.

## Features

- 🎨 **Design Studio**: Create designs directly on products (T-shirts, Bags, Cups, Hoodies)
- 🔄 **360° Product Views**: See your designs from all angles with auto-rotation
- 📚 **Template Library**: Pre-made templates for Text, Graphics, Logos, and Patterns
- 🖼️ **Image Categories**: Organized images for Nature, Abstract, Urban, Space, Animals, Food
- 🎯 **Sticker Collection**: Extensive collection of emoji, symbol, and shape stickers
- 🤖 **AI Generation**: Google Gemini AI integration for intelligent image generation
- 🛒 **Checkout System**: Complete e-commerce integration for purchasing designs
- 💾 **Save/Export**: Save designs locally and export as high-quality PNG files

## AI Features

- **Gemini AI Integration**: Uses Google's advanced AI for smart image generation
- **Enhanced Prompts**: AI automatically improves your descriptions for better results
- **Product-Aware**: Considers the selected product when generating descriptions
- **Apparel-Optimized**: Focuses on designs perfect for printing on apparel

## Project info

**URL**: https://lovable.dev/projects/58a109d7-a5ec-4a68-9c66-f1efc2b80aba

## Quick Start

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm i

# Step 4: Start the development server
npm run dev
```

### Gemini AI Setup (Optional but Recommended)

For enhanced AI image generation, configure Google Gemini AI:

1. **Get API Key**: Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. **Configure Environment**: Add your API key to the `.env` file:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
3. **Restart Server**: Restart your development server

📖 **Detailed Setup Guide**: See [GEMINI_SETUP.md](./GEMINI_SETUP.md) for complete instructions.

## How can I edit this code?

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/58a109d7-a5ec-4a68-9c66-f1efc2b80aba) and start prompting.

**Use your preferred IDE**

Clone this repo and work locally. Pushed changes will be reflected in Lovable.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/58a109d7-a5ec-4a68-9c66-f1efc2b80aba) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
