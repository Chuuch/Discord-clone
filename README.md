# Full-Stack Discord Clone

## Overview

This project is a Full-Stack Discord clone built with modern web technologies, providing a seamless real-time communication experience. The application is developed using Next.js, TypeScript, React, Tailwind CSS, Shadcn, Socket.IO, Prisma, Clerk, MySQL, Zustand, UploadThing, and Livekit.

## Features

- **Real-Time Communication**: Utilizes Socket.IO and Livekit for instant messaging and audio/video calls, creating a dynamic and engaging user experience.

- **Authentication and Authorization**: Implements Clerk for secure user authentication and authorization, ensuring a robust and reliable user management system.

- **Database Integration**: Utilizes Prisma ORM for efficient database operations, with MySQL as the database backend, ensuring data consistency and reliability.

- **State Management**: Zustand is employed for client-side state management, enabling efficient and predictable state handling within the application.

- **Responsive Design**: Built with a mobile-first approach, the application is responsive and user-friendly across various devices.

- **File Uploads**: Integrates UploadThing for easy and secure file uploads, enhancing the collaborative aspects of the platform.

## Tech Stack

- **Frontend**:
  - Next.js
  - TypeScript
  - React
  - Tailwind CSS
  - Shadcn
  - Zustand

- **Backend**:
  - Socket.IO
  - Prisma
  - Clerk
  - MySQL
  - Livekit

- **File Uploads**:
  - UploadThing

## Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm
- MySQL database
- Clerk API keys
- Livekit API keys
- Other dependencies as specified in the project

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/discord-clone.git
   ```

2. Install dependencies:

   ```bash
   cd discord-clone
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the project root and add necessary environment variables:

   ```env
   CLERK_API_KEY=your_clerk_api_key
   LIVEKIT_API_KEY=your_livekit_api_key
   DATABASE_URL=mysql://username:password@localhost:3306/database_name
   # Add other required variables
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` in your browser to access the application.

## Contributing

Contributions are welcome! Please follow our [contribution guidelines](CONTRIBUTING.md) to contribute to the project.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Acknowledgments

- Special thanks to the contributors and open-source community for making this project possible.

---

Feel free to reach out if you have any questions or issues!
