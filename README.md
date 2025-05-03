# u-Image-Proxy

A simple image proxy service built with uWebSockets.js and TypeScript.

## Description

This project provides a lightweight proxy server designed to fetch and serve images from external URLs. It can be used to resize, optimize, or simply cache images.

## Features

*   Fetches images from remote URLs.
*   (Add other features here as you develop them, e.g., resizing, caching, format conversion)

## Prerequisites

*   [Node.js](https://nodejs.org/) (v20.x recommended - see `.github/workflows/ci.yml`)
*   [pnpm](https://pnpm.io/) (v8 recommended)

## Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd u-image-proxy
    ```
2.  Install dependencies using pnpm:
    ```bash
    pnpm install --frozen-lockfile
    ```

## Usage

1.  **(Optional) Build the project (if you have a build step):**
    ```bash
    # pnpm build
    ```
2.  Start the server:
    ```bash
    pnpm start # Assuming you have a 'start' script in package.json
    ```
    Or run the development server (if applicable):
    ```bash
    # pnpm dev
    ```

The server will typically start on `http://localhost:3000` (or whichever port you configure).

## Running Tests

This project uses Jest for testing.

*   **Run Unit Tests:**
    ```bash
    pnpm test
    ```
*   **Run Unit Tests with Coverage:**
    ```bash
    pnpm test --coverage
    ```
    Coverage reports are generated in the `./coverage` directory.

*   **Run End-to-End (E2E) Tests:**
    ```bash
    pnpm test:e2e
    ```
*   **Run E2E Tests with Coverage:**
    ```bash
    pnpm test:e2e:coverage
    ```
    Coverage reports are generated in the `./coverage/e2e` directory.

## CI/CD

This project uses GitHub Actions for Continuous Integration. The workflow runs on pull requests targeting the `main` and `develop` branches. It performs the following steps:

1.  Checks out the code.
2.  Sets up Node.js and pnpm.
3.  Installs dependencies.
4.  Runs unit tests with coverage.
5.  Runs E2E tests with coverage.

See the workflow file at <mcfile name="ci.yml" path="/Users/ductran/Desktop/personal/u-image-proxy/.github/workflows/ci.yml"></mcfile>.

## Contributing

(Add guidelines for contributing if you plan to accept contributions).

## License

(Specify your project's license, e.g., MIT).