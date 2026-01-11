# SafeDep Package Viewer

This is a Next.js 16 application that displays insights about open source packages using the SafeDep API. It provides a detailed view of package metadata, vulnerabilities, version history, and license information.

## Features

- **Package Insights**: Comprehensive metadata including analysis date, source URL, and SHA256 checksums.
- **Metrics Dashboard**: Quick view of key metrics like vulnerability count, OpenSSF Scorecard rating, and license type.
- **Vulnerability Analysis**: Detailed table of known vulnerabilities with risk levels (Critical, High, Medium, Low).
- **Version History**: Complete list of package versions with release dates.
- **License Information**: Detailed license data with reference links.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Mock Data Support**: Automatic fallback to mock data when API credentials are not provided.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Data Fetching**: Next.js Server Actions

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd safedeep-viewer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (Optional):
   Create a `.env.local` file in the root directory and add your SafeDep API credentials. If skipped, the app will use mock data.
   ```env
   SAFEDEP_TENANT_ID=your-tenant-id
   SAFEDEP_API_KEY=your-api-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000/p/npm/next/15.5.4](http://localhost:3000/p/npm/next/15.5.4) with your browser to see the result.

## Project Structure

- `src/app/p/[ecosystem]/[name]/[version]`: Dynamic route for package details page.
- `src/components`: Reusable UI components.
  - `metrics-cards.tsx`: Dashboard metrics.
  - `package-header.tsx`: Package metadata header.
  - `tabs`: Tab content components (Overview, Vulnerabilities, Versions, License).
- `src/lib/api`: API client and type definitions.
- `src/lib/actions`: Server Actions for data fetching.

## Usage

Navigate to the URL following this pattern:
`http://localhost:3000/p/{ecosystem}/{package-name}/{version}`

Example:
- [http://localhost:3000/p/npm/next/15.5.4](http://localhost:3000/p/npm/next/15.5.4)
- [http://localhost:3000/p/pypi/requests/2.31.0](http://localhost:3000/p/pypi/requests/2.31.0)

## License

This project is open source and available under the [MIT License](LICENSE).
