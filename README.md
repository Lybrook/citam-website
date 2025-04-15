# CITAM Kitale Website

This is the official website for **CITAM Kitale** (Christ is The Answer Ministries), a vibrant church dedicated to sharing the love of Christ and making disciples in Kitale and beyond. The website is built with [Next.js](https://nextjs.org) and provides information about church services, sermons, events, ministries, and community outreach.

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org) - Typed superset of JavaScript for improved developer experience
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework for styling
- [Vercel](https://vercel.com) - Platform for deployment and hosting
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) - Font optimization and loading

## Features

- **Homepage** with sections including:
  - Hero banner
  - Service times banner
  - Welcome message
  - Bible verse of the day
  - Latest sermons with speaker, date, and description
  - Upcoming events with date, time, and location
  - Ministries overview with descriptions and images
  - Testimonials from church members
  - Newsletter signup form

- **Sermons**: Browse recent sermons with details and links to full messages.

- **Events**: View upcoming church events and activities.

- **Ministries**: Learn about various ministries such as Youth Ministry, Children’s Ministry, and Community Outreach.

- **Responsive design** optimized for desktop and mobile devices.

## Data Structure

The website uses structured data for sermons, events, and ministries:

- **Sermons** have properties: `id`, `title`, `speaker`, `date`, `image`, `slug`, `description`, and `link`.
- **Events** have properties: `id`, `title`, `date`, `time`, `location`, `image`, and `slug`.
- **Ministries** have properties: `id`, `title`, `description`, `image`, and `anchor`.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

5. Start editing the site by modifying files in the `src/app` and `src/components` directories. The page auto-updates as you edit the files.

## Deployment

The easiest way to deploy the website is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the creators of Next.js.

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear messages.
4. Push your branch and open a pull request.

Please ensure your code follows the existing style and passes any tests.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [CITAM Kitale Website](https://citamkitale.org)

---

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load the Geist font family by Vercel.
