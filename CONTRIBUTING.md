# Contributing to My Personal Webpage

Thank you for considering contributing to my personal webpage! Contributions are welcome, and there are a few guidelines to ensure the process runs smoothly.

## Getting Started

1. **Fork the repository**: If you plan to make contributions, start by forking this repository to your GitHub account.
2. **Clone the repository**: Clone the forked repo to your local machine.
   ```bash
   git clone https://github.com/raywil1/personal-webpage.git

3. Install dependencies: Navigate to the project directory and install the necessary dependencies.

```bash
cd personal-webpage
npm install
```

4. Run the project: To test locally, make sure both the front-end and back-end run on their designated ports.

# For front-end
```
npm run start:frontend
```
# For back-end
```
npm run start:backend
```
Making Contributions
Issues
If you find a bug or want to suggest an improvement, feel free to open an issue. Please follow the issue template and provide as much detail as possible.

Pull Requests
When making a pull request, follow these steps:

Create a new branch: Always work on a new branch for your changes.
```
git checkout -b feature/your-feature-name
```

Make your changes: Ensure your changes adhere to the coding standards used throughout the project (e.g., code formatting and linting rules).

Test your changes: Run existing tests and add new ones where applicable to ensure your feature/bugfix works as expected.

Commit your changes: Write meaningful commit messages following conventional commits.
```
git commit -m "feat: add new feature description"
```
Push to your fork: Push the changes to your forked repository.
```
git push origin feature/your-feature-name
```

Create a Pull Request: Navigate to the original repository and create a pull request from your branch. Provide a clear description of what changes you have made and link any related issues.

Code Standards
Code style: This project uses ESLint and Prettier for code formatting and linting. Please run linting before submitting your pull request.
```
npm run lint
```
Feature Requests
If you'd like to suggest a new feature, feel free to open an issue with a detailed description of the feature and how you envision it working. Pull requests for new features are also welcome.

Deployment
This project uses GitHub Pages (or an alternative deployment method) to deploy the website. If you are contributing changes that affect deployment, make sure to test the deployment pipeline and mention this in your pull request.

Code of Conduct
Please be respectful to others and follow the Contributor Covenant Code of Conduct.


