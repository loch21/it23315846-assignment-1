# Swift Translator Automation Tests (IT23315846 - Assignment 1)

## Overview
This project contains automated test cases for the **Swift Translator** web application, which translates English phonetic Sinhala text into Sinhala script. The tests validate various linguistic scenarios and translation accuracy using **Playwright**, a modern end-to-end testing framework.

## Project Details
- **Student ID:** IT23315846
- **Assignment:** Assignment 1
- **Repository:** [it23315846-assignment-1](https://github.com/loch21/it23315846-assignment-1)
- **Application Under Test:** [Swift Translator](https://www.swifttranslator.com/)

## Technologies Used
- **Playwright Test Framework** - For automated browser testing (v1.58.1)
- **JavaScript/ES6** - Test script implementation
- **Node.js** - Runtime environment

## Project Structure
```
.
├── package.json                 # Project dependencies and configuration
├── README.md                    # Project documentation (this file)
├── tests/
│   └── swifttranslator.spec.js # Test cases for Swift Translator
└── test-results/               # Test execution results and reports
```

## Test Coverage
The test suite includes comprehensive test cases covering:

### Functional Tests
- **Greetings & Polite Phrases** - Daily conversation translations
- **Tense Variations** - Present, past, and future tense sentences
- **Complex Sentences** - Compound sentences with connectors
- **Conditional Statements** - If/otherwise conditional constructions
- **Error Handling** - Empty input and special character handling
- **Edge Cases** - Boundary conditions and unusual inputs

### Test Examples
- Converting daily greeting phrases (e.g., "aayuboovan! Oyaata kohomadha?")
- Polite requests and questions
- Simple present tense statements
- Past tense narratives
- Future intention expressions
- Compound sentences with connectors

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/loch21/it23315846-assignment-1.git
   ```

2. Navigate to the project directory:
   ```bash
   cd IT23315846
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests with Playwright (Recommended)
```bash
npx playwright test
```

### Run Tests in UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Run Specific Test File
```bash
npx playwright test tests/swifttranslator.spec.js
```

### Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
```

## Test Results
Test execution results and reports are stored in the `test-results/` directory. These include detailed logs of:
- Test pass/fail status
- Execution duration
- Error messages and stack traces
- Browser screenshots/videos (if configured)

## Key Features Tested
✓ Phonetic to Sinhala script conversion  
✓ Grammar correctness across different tenses  
✓ Handling of compound sentences  
✓ Special character processing  
✓ Input validation and error handling  
✓ UI responsiveness and element interaction  

## Configuration
The test suite uses default Playwright configurations. To modify settings:
- Edit `playwright.config.js` (create if needed)
- Adjust timeouts, browser types, and retry policies
- Configure test reporters and output directories

## Notes
- Tests use a 15-second timeout for element expectations
- Tests target the production instance of Swift Translator
- All tests run in parallel by default in Playwright

## Author
**Student ID:** IT23315846
