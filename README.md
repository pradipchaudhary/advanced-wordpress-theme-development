# AccessEase - Web Accessibility Enhancement Application

AccessEase is a web accessibility overlay tool that allows users to customize their browsing experience based on their specific needs. The project offers features such as high-contrast mode, adjustable text sizes, text-to-speech, and simplified content, making the web more accessible to users with visual, cognitive, auditory, and motor impairments.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Backend Setup](#backend-setup-nodejs)
  - [Frontend Setup](#frontend-setup-react)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- **Custom Accessibility Profiles**: Users can create and customize profiles with preferences such as high-contrast mode, adjustable text sizes, and text-to-speech.
- **Dynamic ARIA Roles & Attributes**: React components manage ARIA roles and attributes to ensure web elements are accessible to screen readers.
- **Text-to-Speech Integration**: For users with visual impairments, the app can read out loud web content.
- **Simplified Content**: Convert complex web content into simplified versions for better understanding.
- **High-Contrast Mode**: Switch between standard and high-contrast themes for visually impaired users.
- **Text Size Adjustment**: Allow users to adjust text size to improve readability.

## Technologies Used

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Axios, React Router
- **Database**: MongoDB (for storing user profiles and preferences)
- **Additional Libraries**: ARIA attributes, Web Speech API (for text-to-speech functionality)

## Installation

To set up the project locally, follow the instructions below:

### Prerequisites

- Node.js installed (version 14.x or later)
- MongoDB installed and running
- npm (comes with Node.js)

### Backend Setup (Node.js)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/access-ease.git
   cd access-ease-backend
